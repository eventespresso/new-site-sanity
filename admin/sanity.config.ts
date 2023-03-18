import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'Event Espresso',

	projectId: 'rojtizi9',
	dataset: 'production',

	plugins: [deskTool(), visionTool(), vercelDeployTool()],

	schema: {
		types: schemaTypes,
	},
});
