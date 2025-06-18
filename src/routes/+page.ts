import { slugFromPath } from '$lib';
import { dev } from '$app/environment';

export const prerender = true;
export const csr = dev;

interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	published: boolean;
	[key: string]: any;
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const modules: Record<string, () => any> = import.meta.glob('/src/posts/*.{md,svx,svelte.md}');

	const postPromises: Promise<Post>[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post: any) => ({
			slug,
			...post.metadata
		})) as Promise<Post>;

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: publishedPosts };
}
