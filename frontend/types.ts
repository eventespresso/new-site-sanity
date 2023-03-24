import type { PropsWithChildren } from 'react';
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

export interface FeatureProps {
	feature: KeyFeature;
}
export interface FeaturesSectionProps {
	keyFeatures: Array<KeyFeature>;
}

export interface HeroSectionProps {
	hero_tagline: Array<PortableTextBlock>;
}

export interface HomepageProps {
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

export interface MenuItemProps {
	color?: string;
	has_submenu: boolean;
	href: string;
	icon?: any;
	submenu?: Array<MenuItemProps>;
	text: string;
	variant?: string;
}

export interface PricingPageProps {
	slug: Slug;
	title: string;
}
