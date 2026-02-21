import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPublishedBlogPosts() {
  const databaseId = import.meta.env.NOTION_DATABASE_ID;
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
}
