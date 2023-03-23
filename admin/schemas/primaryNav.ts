import { defineField } from 'sanity';

export default {
	name: 'primaryNav',
	type: 'document',
	title: 'Primary Nav',
	description: "The website's primary navigation displayed in the header",
	fields: [
		defineField({
			title: 'Primary Nav Links',
			name: 'primaryNavLinks',
			type: 'array',
			of: [{ type: 'primaryNavLink' }],
			validation: (Rule) =>
				Rule.required().custom((links) => {
					return Array.isArray(links) && links.length > 2 && links.length < 7
						? true
						: { message: 'Please add 3-6 key primary nav links' };
				}),
		}),
	],

	preview: {
		select: {
			title: 'title',
		},
	},
};
