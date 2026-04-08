import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Jraft Creative Blog',
    description: 'Tips, guides, and insights on web design, SEO, and digital marketing for Singapore businesses.',
    site: context.site ?? 'https://jraftcreative.com',
    items: posts
      .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description,
        link: `/blog/${post.id}/`,
        categories: post.data.category ? [post.data.category] : undefined,
        author: post.data.author,
      })),
    customData: `<language>en-sg</language>`,
  });
}
