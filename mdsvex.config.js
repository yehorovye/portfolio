import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[
			remarkGithub,
			{
				repository: 'https://github.com/yehorovye/portfolio.git'
			}
		],
		remarkAbbr
	],
	rehypePlugins: [rehypeSlug]
});

export default config;
