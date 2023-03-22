import type { BlockDefinition, Image, Slug } from '@sanity/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface Author {
	_key: string;
	_type: 'author';
	bio: Array<BlockDefinition>;
	image: Image;
	name: string;
	slug: Slug;
}

export interface ContentProps {
	content: Homepage;
}

export interface FeaturesSectionProps {
	keyFeatures: Array<KeyFeature>;
}

export interface HeroSectionProps {
	hero_tagline: Array<PortableTextBlock>;
}

export interface Homepage {
	slug: Slug;
	title: string;
	hero_tagline: Array<PortableTextBlock>;
	keyFeatures: Array<KeyFeature>;
}

export interface KeyFeature {
	_key: string;
	_type: 'keyFeature';
	description: Array<PortableTextBlock>;
	image: Image;
	title: string;
}
