import { defineField } from 'sanity';

export default {
	name: 'featureSnippet',
	type: 'document',
	title: 'Feature Snippet',
	description:
		"A Feature Snippet is a brief overview of a feature consisting of the features's name, a brief description of the feature, an image or icon, and a link to the fully deatiled feature page",
	fields: [
		defineField({
			name: 'title',
			title: 'Feature Snippet',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(12).error('A title of at least 12 characters is required'),
				Rule.max(90).warning('Shorter titles are usually better'),
			],
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => [
				Rule.required().min(30).error('A description of at least 30 characters is required'),
				Rule.max(480).warning('Description is getting too long. Please edit to be more consice.'),
			],
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Link',
			name: 'href',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['https'],
				}),
		}),
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
			media: 'image',
		},
	},
};
