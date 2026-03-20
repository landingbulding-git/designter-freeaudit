import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from 'fs';
import path from 'path';
import axios from 'axios';

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

// Helper function to download Notion images
async function downloadNotionImage(url: string | null | undefined, filenamePrefix: string): Promise<string | null> {
  if (!url) return null;

  // If it's an external image (e.g. Unsplash) or not AWS S3/Notion, return as is
  if (!url.includes('amazonaws.com') && !url.includes('notion-static.com') && !url.includes('notion.so')) {
    return url;
  }

  try {
    const pubDir = path.join(process.cwd(), 'public', 'images', 'notion');
    if (!fs.existsSync(pubDir)) {
      fs.mkdirSync(pubDir, { recursive: true });
    }

    const cleanUrl = url.split('?')[0];
    let ext = cleanUrl.split('.').pop() || 'jpg';
    if (ext.length > 4 || !/^[a-zA-Z0-9]+$/.test(ext)) {
        ext = 'jpg'; // Fallback if no valid extension found
    }
    // Clean extension
    const cleanExt = ext.replace(/[^a-zA-Z0-9]/g, '').substring(0, 4);
    
    // Hash the URL or use prefix for unique filename
    const urlHash = Buffer.from(cleanUrl).toString('base64').replace(/[^a-zA-Z0-9]/g, '').substring(0, 10);
    const fileName = `${filenamePrefix}_${urlHash}.${cleanExt}`;
    const filePath = path.join(pubDir, fileName);

    // Download only if it doesn't exist (to speed up subsequent builds)
    if (!fs.existsSync(filePath)) {
      console.log(`Downloading Notion image to ${filePath}`);
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }

    return `/images/notion/${fileName}`;
  } catch (error) {
    console.error('Failed to download Notion image:', error);
    return url; // fallback to original
  }
}

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
        
        const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || '';

        const rawCoverImage = page.cover?.external?.url || 
            page.cover?.file?.url || 
            page.properties.CoverImage?.files?.[0]?.file?.url ||
            page.properties.CoverImage?.files?.[0]?.external?.url ||
            page.properties['Cover Image']?.files?.[0]?.file?.url ||
            page.properties['Cover Image']?.files?.[0]?.external?.url;

        const rawPreviewImage = page.properties.previewimage?.files?.[0]?.file?.url ||
            page.properties.previewimage?.files?.[0]?.external?.url ||
            page.properties.previewimage?.url ||
            page.properties.previewimage?.rich_text?.[0]?.plain_text ||
            page.properties.PreviewImage?.files?.[0]?.file?.url ||
            page.properties.PreviewImage?.files?.[0]?.external?.url ||
            page.properties.PreviewImage?.url ||
            page.properties.PreviewImage?.rich_text?.[0]?.plain_text ||
            page.properties['Preview Image']?.files?.[0]?.file?.url ||
            page.properties['Preview Image']?.files?.[0]?.external?.url ||
            page.properties['Preview Image']?.url ||
            page.properties['Preview Image']?.rich_text?.[0]?.plain_text ||
            page.properties['previewImage']?.files?.[0]?.file?.url ||
            page.properties['previewImage']?.files?.[0]?.external?.url ||
            page.properties['previewImage']?.url ||
            page.properties['previewImage']?.rich_text?.[0]?.plain_text;

        const coverImage = await downloadNotionImage(rawCoverImage, `blog_${page.id}_cover`);
        const previewImage = await downloadNotionImage(rawPreviewImage, `blog_${page.id}_preview`);

        return {
          id: page.id,
          slug,
          title: page.properties.Title?.title?.[0]?.plain_text || page.properties.Name?.title?.[0]?.plain_text || 'Untitled',
          description: page.properties.Description?.rich_text?.map((t: any) => t.plain_text).join('') || '',
          publishedDate: page.properties.PublishedDate?.date?.start ? new Date(page.properties.PublishedDate.date.start) : new Date(),
          status: 'Published',
          coverImage,
          previewImage,
          content: mdString?.parent || (typeof mdString === 'string' ? mdString : '') || '',
          type: page.properties.Type?.select?.name || 'Blog',
          visitors: page.properties.visitors?.rich_text?.map((t: any) => t.plain_text).join('') || page.properties.Visitors?.rich_text?.map((t: any) => t.plain_text).join('') || '0',
          customers: page.properties.customers?.rich_text?.map((t: any) => t.plain_text).join('') || page.properties.Customers?.rich_text?.map((t: any) => t.plain_text).join('') || '0',
          aov: page.properties.aov?.rich_text?.map((t: any) => t.plain_text).join('') || page.properties.AOV?.rich_text?.map((t: any) => t.plain_text).join('') || '0',
          adSpend: page.properties.adspend?.rich_text?.map((t: any) => t.plain_text).join('') || page.properties.Adspend?.rich_text?.map((t: any) => t.plain_text).join('') || '0',
        };
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    throw error;
  }
}

export async function getOffers() {
  const rawDatabaseId = import.meta.env.NOTION_OFFER_DATABASE_ID;
  
  if (!rawDatabaseId) {
    throw new Error('NOTION_OFFER_DATABASE_ID environment variable is missing.');
  }

  const databaseId = rawDatabaseId.replace(/["'\s\-]/g, '');
  console.log('Cleaned Offer Database ID:', databaseId);

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error('Notion API Error: ' + err);
    }

    const data = await response.json();
    console.log(`Fetched ${data.results.length} offers.`);

    return Promise.all(data.results.map(async (page: any) => {
      const properties = page.properties;
      
      const parseAdSpend = (val: string) => {
        if (!val) return 0;
        const normalized = val.toLowerCase().replace(/\\s/g, '');
        const num = parseFloat(normalized.replace(/[^0-9.]/g, ''));
        if (normalized.includes('k')) {
          return num * 1000;
        }
        if (normalized.includes('m')) {
          return num * 1000000;
        }
        return num || 0;
      };

      const adspendText = properties.adspend?.rich_text?.map((t: any) => t.plain_text).join('') || properties.Adspend?.rich_text?.map((t: any) => t.plain_text).join('') || '';

      const heroImagePropKey = Object.keys(properties).find(k => k.toLowerCase().trim() === 'heroimage');
      const heroImageProp = heroImagePropKey ? properties[heroImagePropKey] : null;
      
      const imagePropKey = Object.keys(properties).find(k => k.toLowerCase().trim() === 'image');
      const imageProp = imagePropKey ? properties[imagePropKey] : null;

      let rawHeroImage = null;
      if (heroImageProp?.type === 'url') {
        rawHeroImage = heroImageProp.url;
      } else if (heroImageProp?.type === 'rich_text') {
        rawHeroImage = heroImageProp.rich_text?.[0]?.plain_text || null;
      }
      
      if (!rawHeroImage) {
        rawHeroImage = page.cover?.external?.url || 
            page.cover?.file?.url || 
            imageProp?.files?.[0]?.file?.url ||
            imageProp?.files?.[0]?.external?.url || 
            null;
      }

      if (!rawHeroImage) {
        const fallbackImgKey = Object.keys(properties).find(k => k.toLowerCase().includes('image') && properties[k]?.type === 'files');
        if (fallbackImgKey && properties[fallbackImgKey]?.files?.length > 0) {
           rawHeroImage = properties[fallbackImgKey].files[0].file?.url || properties[fallbackImgKey].files[0].external?.url;
        }
      }
            
      const heroImage = await downloadNotionImage(rawHeroImage, `offer_${page.id}_hero`);

      return {
        id: page.id,
        slug: properties.slug?.rich_text?.[0]?.plain_text || properties.Slug?.rich_text?.[0]?.plain_text || '',
        clientName: properties.Name?.title?.[0]?.plain_text || 'Unknown',
        companyName: properties.companyname?.rich_text?.map((t: any) => t.plain_text).join('') || properties.Companyname?.rich_text?.map((t: any) => t.plain_text).join('') || 'Unknown',
        visitors: properties.visitors?.number || properties.Visitors?.number || 0,
        customers: properties.customers?.number || properties.Customers?.number || 0,
        avgOrderValue: properties.AOV?.number || 0,
        adSpend: parseAdSpend(adspendText),
        address: properties.address?.rich_text?.map((t: any) => t.plain_text).join('') || properties.Address?.rich_text?.map((t: any) => t.plain_text).join('') || '',
        taxnumber: properties.taxnumber?.rich_text?.map((t: any) => t.plain_text).join('') || properties.Taxnumber?.rich_text?.map((t: any) => t.plain_text).join('') || '',
        contact: properties.Contact?.rich_text?.map((t: any) => t.plain_text).join('') || properties.contact?.rich_text?.map((t: any) => t.plain_text).join('') || '',
        heroImage
      };
    }));
  } catch (error) {
    console.error('Error fetching offers from Notion:', error);
    throw error;
  }
}
