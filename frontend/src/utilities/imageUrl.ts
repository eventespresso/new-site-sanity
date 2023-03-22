import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from '../../client';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the builder an image
// and returns the builder for you to specify additional parameters:
export const imageUrl = (image: Image) => {
	return builder.image(image);
};
