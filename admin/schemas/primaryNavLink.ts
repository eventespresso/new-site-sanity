import { defineField } from 'sanity';

export default {
	name: 'primary_nav_link',
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
			name: 'color',
			title: 'Color Scheme',
			type: 'string',
			options: {
				list: [
					{ title: 'blue', value: 'blue' },
					{ title: 'pink', value: 'pink' },
				],
				layout: 'radio',
			},
		}),
		defineField({
			name: 'variant',
			title: 'Variant',
			type: 'string',
			options: {
				list: [
					{ title: 'solid', value: 'solid' },
					{ title: 'ghost', value: 'ghost' },
					{ title: 'outline', value: 'outline' },
					{ title: 'text', value: 'text' },
				],
				layout: 'radio',
			},
		}),
		defineField({
			title: 'Link',
			name: 'href',
			type: 'url',
			description: `Can be a path starting with a '/' or a full URL starting with 'https://'`,
			validation: (Rule) =>
				Rule.required().uri({
					allowRelative: true,
					relativeOnly: false,
					// scheme: ['https', '/'],
				}),
		}),
	],

	preview: {
		select: {
			title: 'text',
		},
	},
};
