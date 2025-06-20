import { json } from '@sveltejs/kit';
import { slugFromPath } from '$lib';
import type { BlogPost } from '../../../types/common';

interface MdsvexFile {
	default: any;
	metadata: Record<string, any>;
}

export const prerender = true;

export async function GET() {
	const modules = import.meta.glob<MdsvexFile>('/src/posts/*.{md,svx,svelte.md}');

	const postPromises: Promise<BlogPost>[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post: MdsvexFile) => {
			return {
				slug,
				...post.metadata
			};
		}) as Promise<BlogPost>;

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published);

	// Sort posts by date (newest first)
	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return json(publishedPosts);
}
