import type { BlockDefinition, Image, Slug } from '@sanity/types';

export interface Author {
	bio: Array<BlockDefinition>;
	image: Image;
	name: string;
	slug: Slug;
}

export interface Homepage {
	author: Author;
	slug: Slug;
	title: string;
}

export interface ContentProps {
	content: Homepage;
}
