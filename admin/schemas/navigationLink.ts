import { defineField } from 'sanity';

export default {
	name: 'navigation_link',
	type: 'document',
	title: 'Navigation Link',
	description: "A link displayed in the website's navigation in the header or footer",
	hidden: true,
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
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'string',
		}),
		defineField({
			name: 'variant',
			title: 'Text Link or Button Style?',
			type: 'string',
			description: `Deafults to "link" which will display menu item as a text link. Button styles include:
			- "solid" standard fully coloured button style,
			- "outline" button with coloured border but transparent background,
			- "ghost" text link with button-like hover effects.`,
			initialValue: 'link',
			options: {
				list: [
					{ title: 'text link', value: 'link' },
					{ title: 'button: solid', value: 'solid' },
					{ title: 'button: outline', value: 'outline' },
					{ title: 'button: ghost', value: 'ghost' },
				],
			},
		}),
		defineField({
			name: 'color',
			title: 'Button Color Scheme',
			type: 'string',
			options: {
				list: [
					{ title: 'blue', value: 'blue' },
					{ title: 'pink', value: 'pink' },
					{ title: 'purple', value: 'purple' },
				],
			},
		}),
		defineField({
			name: 'has_submenu',
			title: 'Has SubMenu?',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'submenu',
			title: 'SubMenu',
			type: 'array',
			hidden: ({ parent }) => parent?.has_submenu,
			of: [{ type: 'navigation_link' }],
			validation: (Rule) =>
				Rule.required().custom((links) => {
					return Array.isArray(links) && links.length > 0 && links.length < 13
						? true
						: { message: 'Please add 1-12 key nav links' };
				}),
		}),
	],

	initialValue: {
		href: '/',
		color: 'blue',
		variant: 'link',
	},

	preview: {
		select: {
			title: 'text',
		},
	},
};
