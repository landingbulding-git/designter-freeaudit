import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

console.log('Initializing Notion Client with API Key:', import.meta.env.NOTION_API_KEY ? 'Present' : 'Missing');

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
});

if (!notion) {
  throw new Error('Failed to initialize Notion Client');
}

// Ensure databases property exists (debugging step)
if (!notion.databases) {
  console.error('Notion Client instance missing "databases" property:', notion);
  // Attempting to re-import or handle CJS/ESM interop if needed, but usually vite.ssr.noExternal fixes this.
}

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPublishedBlogPosts() {
  const databaseId = import.meta.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID environment variable is missing.');
  }

  try {
    const response = await notion.databases.query({
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
    // Return empty array or re-throw depending on desired behavior.
    // Re-throwing so build fails visibly but with more context.
    throw error;
  }
}
