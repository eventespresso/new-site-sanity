import { PortableText } from '@portabletext/react'
import { Box, Heading, Image, useColorModeValue, } from '@chakra-ui/react'
import { PortableTextComponents } from '../ui'
import { imageUrl } from '../../utilities'

import type { FeatureProps } from '../../../types'

export const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
	const bg = useColorModeValue('white', 'gray.900');
	return (
		<Box borderWidth='1px' borderRadius='lg' maxW='sm' overflow='hidden'>
			{feature.image && <Image
				objectFit='cover'
				src={imageUrl(feature.image).width(400).url()}
				alt={feature.image.asset?._key}
				width='100%'
			/>}
			<Box p={6}>
				<Heading size='sm' mt='4'>{feature.title}</Heading>
				<PortableText value={feature.description} components={PortableTextComponents} />
			</Box>

		</Box>
	);
}
