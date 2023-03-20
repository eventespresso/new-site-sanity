import { defineCliConfig, type CliConfig } from 'sanity/cli';

const config: CliConfig = {
	api: {
		projectId: process.env.SANITY_API_PROJECT_ID,
		dataset: process.env.SANITY_API_DATASET,
	},
};

export default defineCliConfig(config);
