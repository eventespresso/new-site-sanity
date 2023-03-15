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
}

export interface HomepageProps {
	homepage: Homepage;
}
