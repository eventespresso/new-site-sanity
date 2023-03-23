import { defineField } from 'sanity';

export default {
	name: 'primaryNavLink',
	type: 'document',
	title: 'Primary Nav Link',
	description: "A link displayed in the website's primary navigation in the header",
	fields: [
		defineField({
			name: 'text',
			title: 'Link Text',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(3).error('A link of at least 3 characters is required'),
				Rule.max(12).warning('Shorter link text is usually better'),
			],
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'string',
		}),
		defineField({
			title: 'Link',
			name: 'href',
			type: 'url',
			description: `Can be a path starting with a '/' or a full URL starting with 'https://'`,
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ['https'],
				}),
		}),
	],

	preview: {
		select: {
			title: 'text',
		},
	},
};
