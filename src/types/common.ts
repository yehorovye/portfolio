export interface Repo {
	id: number;
	name: string;
	repo: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	pushedAt: string;
	stars: number;
	watchers: number;
	forks: number;
	defaultBranch: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	published: boolean;
	[key: string]: any;
}
