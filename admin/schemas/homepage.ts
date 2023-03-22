import { defineField, defineType } from 'sanity';

export default {
	name: 'homepage',
	type: 'document',
	title: 'Homepage',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(30).error('A title of at least 30 characters is required'),
				Rule.max(90).error('Titles can not be longer than 90 characters'),
			],
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'hero_tagline',
			title: 'Hero Section Tagline',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required().min(1).max(3).error('Please add 1-3 blocks of text'),
		}),
		defineField({
			title: 'Key Features',
			name: 'keyFeatures',
			type: 'array',
			of: [{ type: 'keyFeature' }],
			validation: (Rule) =>
				Rule.required().custom((features) => {
					return Array.isArray(features) && features.length > 2 && features.length < 7
						? true
						: { message: 'Please add 3-6 key features' };
				}),
		}),
		// defineField({
		// 	name: 'author',
		// 	title: 'Author',
		// 	type: 'reference',
		// 	to: { type: 'author' },
		// }),
		// defineField({
		// 	name: 'mainImage',
		// 	title: 'Main image',
		// 	type: 'image',
		// 	options: {
		// 		hotspot: true,
		// 	},
		// }),
		// defineField({
		// 	name: 'categories',
		// 	title: 'Categories',
		// 	type: 'array',
		// 	of: [{ type: 'reference', to: { type: 'category' } }],
		// }),
		// defineField({
		// 	name: 'publishedAt',
		// 	title: 'Published at',
		// 	type: 'datetime',
		// }),
		// defineField({
		// 	name: 'body',
		// 	title: 'Body',
		// 	type: 'blockContent',
		// }),
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection: any) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
};
