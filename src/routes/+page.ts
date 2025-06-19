import { slugFromPath } from '$lib';
import { dev } from '$app/environment';
import type { BlogPost, Repo } from '../types/common';

export const prerender = true;
export const csr = dev;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const modules: Record<string, () => any> = import.meta.glob('/src/posts/*.{md,svx,svelte.md}');

	const postPromises: Promise<BlogPost>[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post: any) => ({
			slug,
			...post.metadata
		})) as Promise<BlogPost>;

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	const { repos } = (await fetch('https://ungh.cc/users/yehorovye/repos').then((x) =>
		x.json()
	)) as {
		repos: Repo[];
	};

	const popularRepos = repos.sort((a, b) => b.stars - a.stars).slice(0, 5);

	return { posts: publishedPosts, repos: popularRepos };
}
