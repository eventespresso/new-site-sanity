import { defineField } from 'sanity';

export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fields: [
		defineField({
			name: 'name',
			title: 'Page Nme',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(3).error('A page name of at least 3 characters is required'),
				Rule.max(60).error('Page Names can not be longer than 60 characters'),
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
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],

	preview: {
		select: {
			title: 'name',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection: any) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
};
