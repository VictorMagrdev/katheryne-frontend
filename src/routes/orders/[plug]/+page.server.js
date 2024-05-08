import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export async function load({ params }) {
	const post = await posts.find((post) => post.id === params.plug);
	if (!post) throw error(404);

	return {
		post
	};
}
