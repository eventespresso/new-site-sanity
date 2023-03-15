import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'rojtizi9', // you can find this in sanity.json
	dataset: 'production', // or the name you chose in step 1
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2023-01-01', // use current date (YYYY-MM-DD) to target the latest API version
	token: process.env.SANITY_TOKEN, // Only if you want to update content with the client
});
