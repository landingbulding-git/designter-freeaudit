import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

console.log('Initializing Notion Client with API Key:', import.meta.env.NOTION_API_KEY ? 'Present' : 'Missing');

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
});

if (!notion) {
  throw new Error('Failed to initialize Notion Client');
}

// Debugging checks
console.log('Notion request method type:', typeof notion.request);
if (notion.databases) {
    console.log('Notion databases keys:', Object.keys(notion.databases));
    console.log('Notion databases query type:', typeof notion.databases.query);
}
if (notion.blocks) {
    console.log('Notion blocks keys:', Object.keys(notion.blocks));
}

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPublishedBlogPosts() {
  const rawDatabaseId = import.meta.env.NOTION_DATABASE_ID;
  
  if (!rawDatabaseId) {
    throw new Error('NOTION_DATABASE_ID environment variable is missing.');
  }

  const databaseId = rawDatabaseId.replace(/["'\s\-]/g, '');
  console.log('Cleaned Database ID:', databaseId);

  try {
    console.log('Fetching published blog posts via fetch...');
    
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        sorts: [
          {
            property: "PublishedDate",
            direction: "descending",
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error('Notion API Error: ' + err);
    }

    const data = await response.json();
    console.log(`Fetched ${data.results.length} posts.`);

    return Promise.all(
      data.results.map(async (page: any) => {
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = n2m.toMarkdownString(mdblocks);

        return {
          id: page.id,
          slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
          title: page.properties.Title?.title?.[0]?.plain_text || page.properties.Name?.title?.[0]?.plain_text || 'Untitled',
          description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
          publishedDate: page.properties.PublishedDate?.date?.start ? new Date(page.properties.PublishedDate.date.start) : new Date(),
          status: 'Published',
          coverImage: page.cover?.external?.url || page.cover?.file?.url,
          content: mdString.parent,
        };
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    throw error;
  }
}
