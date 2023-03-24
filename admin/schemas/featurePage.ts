import { defineField } from 'sanity';

export default {
	name: 'featurePage',
	type: 'document',
	title: 'Feature Page',
	description:
		"A Feature Page is a detailed exploration of a feature consisting of the features's name, a full description of the feature, and an image or icon",
	fields: [
		defineField({
			name: 'title',
			title: 'Feature Page Title',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(6).error('A title of at least 6 characters is required'),
				Rule.max(90).warning('Shorter titles are usually better'),
			],
		}),
		defineField({
			name: 'description',
			title: 'Feature Description',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required(),
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
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
			media: 'image',
		},
	},
};
