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

n2m.setCustomTransformer('callout', async (block: any) => {
  const { callout } = block as any;
  const icon = callout.icon?.emoji || '💡';
  
  // Parse the rich text to keep basic formatting or fallback to plain text
  const textContent = callout.rich_text?.map((t: any) => t.plain_text).join('') || '';
  
  // Return custom HTML styled with Tailwind
  return `<div class="bg-orange-50 border-l-4 border-brand-accent p-4 rounded-r-lg shadow-sm flex items-start gap-3 my-6 not-prose">
    <span class="text-xl leading-none mt-1">${icon}</span>
    <div class="text-brand-900 font-medium leading-relaxed">${textContent}</div>
  </div>`;
});

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
          coverImage: 
            page.cover?.external?.url || 
            page.cover?.file?.url || 
            page.properties.CoverImage?.files?.[0]?.file?.url ||
            page.properties.CoverImage?.files?.[0]?.external?.url ||
            page.properties['Cover Image']?.files?.[0]?.file?.url ||
            page.properties['Cover Image']?.files?.[0]?.external?.url,
          content: mdString?.parent || (typeof mdString === 'string' ? mdString : '') || '',
        };
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    throw error;
  }
}
