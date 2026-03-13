import { getBlogPosts } from '@/lib/blog';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = 'https://geomatrick.io';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function makeImageUrlsAbsolute(markdown: string): string {
  return markdown.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
    (_, alt, src) => `![${alt}](${SITE_URL}${src.startsWith('/') ? '' : '/'}${src})`
  );
}

async function markdownToHtml(markdown: string): Promise<string> {
  const absoluteMarkdown = makeImageUrlsAbsolute(markdown);
  const result = await remark().use(html).process(absoluteMarkdown);
  return result.toString();
}

export async function GET() {
  const posts = getBlogPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const contentHtml = await markdownToHtml(post.content);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${contentHtml}]]></content:encoded>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
  );

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Patrick Woodhead</title>
    <link>${SITE_URL}</link>
    <description>Blog posts by Patrick Woodhead</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date(posts[0]?.date || Date.now()).toUTCString()}</lastBuildDate>${items.join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
