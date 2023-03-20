import { loadEnvConfig } from '@next/env';
import { createClient, type ClientConfig } from '@sanity/client';

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const config: ClientConfig = {
	projectId: process.env.SANITY_API_PROJECT_ID,
	dataset: process.env.SANITY_API_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-01-01',
	token: process.env.SANITY_API_WRITE_TOKEN,
};
console.log('%c Sanity Client Config', 'color: DodgerBlue;', config);

export const client = createClient(config);
