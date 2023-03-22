import { PortableText } from '@portabletext/react'
//CardHeader, CardFooter,
import {
	Box,
	Card,
	CardBody,
	Container,
	Grid,
	Heading,
	Image,
} from '@chakra-ui/react'
import { PortableTextComponents } from '../ui'
import { imageUrl } from '../../utilities'

import type { FeaturesSectionProps } from '../../../types'



export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ keyFeatures }) => {
	return (
		<Box as='section' bg='white' w='100%' p={16}>
			<Container maxW='container.wideScreen' >
				<Grid gap={16} templateColumns='repeat(3, 1fr)'>
					{keyFeatures.map(
						(keyFeature) => {
							const source = keyFeature.image;
							return (
								<Card key={keyFeature._key} colorScheme='whiteAlpha' direction='column' overflow='hidden' maxW='sm' size='sm' variant='unstyled'>
									{source && <Image
										objectFit='cover'
										// maxW={{ base: '100%', sm: '200px' }}
										src={imageUrl(source).width(400).url()}
										alt={keyFeature.image.asset?._key}
									/>}
									<CardBody>
										<Heading size='sm' mt='4'>{keyFeature.title}</Heading>
										<PortableText value={keyFeature.description} components={PortableTextComponents} />
									</CardBody>

								</Card>
							)
						}
					)}
				</Grid>
			</Container>
		</Box >
	);
}
