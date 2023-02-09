export type Post = {
	id: string;
	attributes: {
		title: string;
		content: string;
		createdAt: string;
	}
}
export type StrapiPost = {
	post: {
		data: Post,
	}
};

export type StrapiPosts = {
	posts: {
		data: Post[],
	}
}
