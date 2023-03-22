// import { loadEnvConfig } from '@next/env';
import { createClient, type ClientConfig } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

const config: ClientConfig = {
	projectId: projectId,
	dataset: dataset,
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: apiVersion,
	token: token,
};
export const client = createClient(config);
