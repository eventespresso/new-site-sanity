import { PortableText } from '@portabletext/react'
import { Box, Heading, Image, useColorModeValue, } from '@chakra-ui/react'
import { PortableTextComponents } from '../ui'
import { imageUrl } from '../../utilities'

import type { FeatureProps } from '../../../types'

export const Feature: React.FC<FeatureProps> = ({ feature }) => {
	const bg = useColorModeValue('white', 'gray.900');
	return (

		<Box>
			<Heading size='md' fontWeight={900}>{feature.title}</Heading>
			<PortableText value={feature.description} components={PortableTextComponents} />
		</Box>
	);
}
