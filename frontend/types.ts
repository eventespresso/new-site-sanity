import type { BlockDefinition, Image, Slug } from '@sanity/types';

export interface Author {
	bio: Array<BlockDefinition>;
	image: Image;
	name: string;
	slug: Slug;
}

export interface Homepage {
	slug: Slug;
	title: string;
	hero_tagline: string;
}

export interface ContentProps {
	content: Homepage;
}
