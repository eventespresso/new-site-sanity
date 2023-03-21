import { defineField } from 'sanity';

export default {
	name: 'keyFeature',
	type: 'document',
	title: 'Key Feature',
	fields: [
		defineField({
			name: 'title',
			title: 'Feature',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],

	preview: {
		select: {
			title: 'title',
			description: 'description',
			media: 'image',
		},
	},
};
