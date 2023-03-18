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
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'hero_tagline_1',
			title: 'Hero Section Tagline 1',
			type: 'string',
		}),
		defineField({
			name: 'hero_tagline_2',
			title: 'Hero Section Tagline 2',
			type: 'string',
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
