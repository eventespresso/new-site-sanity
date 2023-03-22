import { defineField } from 'sanity';

export default {
	name: 'keyFeature',
	type: 'document',
	title: 'Key Feature',
	description:
		"A Key Feature is a brief overview of a main feature, value proposition, or selling point, consisting of the features's name, a brief description of the feature, and an image or icon",
	fields: [
		defineField({
			name: 'title',
			title: 'Feature',
			type: 'string',
			validation: (Rule) => [
				Rule.required().min(30).error('A title of at least 30 characters is required'),
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
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
			media: 'image',
		},
	},
};
