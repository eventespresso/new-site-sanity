import { defineField } from 'sanity';

export default {
	name: 'navigation_menu',
	type: 'document',
	title: 'Navigation Menu',
	description: "A navigation menu displayed in the website's header or footer",
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => [Rule.required().min(3).max(12).error('A name between 3-12 characters is required')],
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 24,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Navigation Links',
			name: 'navigation_links',
			type: 'array',
			of: [{ type: 'navigation_link' }],
			validation: (Rule) =>
				Rule.required().custom((links) => {
					return Array.isArray(links) && links.length > 2 && links.length < 13
						? true
						: { message: 'Please add 3-12 key nav links' };
				}),
		}),
	],

	preview: {
		select: {
			title: 'title',
		},
	},
};
