import { defineField } from 'sanity';
import { blockLengthValidator } from './validators';

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
				Rule.required().min(6).error('A title of at least 30 characters is required'),
				Rule.max(36).warning('Shorter titles are usually better'),
			],
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.custom(blockLengthValidator(30, 300)),
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
