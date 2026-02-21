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
    console.log('Fetching published blog posts...');
    // Fallback to raw request if notion.databases.query is missing
    let response;
    
    if (typeof notion.databases?.query === 'function') {
        response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Status",
                status: {
                    equals: "Published",
                },
            },
            sorts: [
                {
                    property: "PublishedDate",
                    direction: "descending",
                },
            ],
        });
    } else {
        console.warn('notion.databases.query is missing, using notion.request fallback');
        response = await notion.request({
            path: `databases/${databaseId}/query`,
            method: "post",
            body: {
                filter: {
                    property: "Status",
                    status: {
                        equals: "Published",
                    },
                },
                sorts: [
                    {
                        property: "PublishedDate",
                        direction: "descending",
                    },
                ],
            },
        }) as any;
    }

    console.log(`Fetched ${response.results.length} posts.`);

    return Promise.all(
      response.results.map(async (page: any) => {
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = n2m.toMarkdownString(mdblocks);

        return {
          id: page.id,
          slug: page.properties.Slug.rich_text[0]?.plain_text,
          title: page.properties.Name.title[0]?.plain_text,
          description: page.properties.Description.rich_text[0]?.plain_text,
          publishedDate: new Date(page.properties.PublishedDate.date?.start),
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
