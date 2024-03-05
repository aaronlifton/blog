import rss from '@astrojs/rss';
import { g as getCollection } from './_slug__ZSB9XKnz.mjs';
import { S as SITE_TITLE, b as SITE_DESCRIPTION } from './about_Toot-axz.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
