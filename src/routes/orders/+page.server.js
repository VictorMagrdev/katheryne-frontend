import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
            id: post.id,
			title: post.title,
            category: post.category,
            description: post.description
		}))
	};
}
