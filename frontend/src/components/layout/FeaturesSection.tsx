import { useMemo } from 'react';
import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react'
import { Feature } from '../ui'

import type { FeaturesSectionProps } from '../../../types'


export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ keyFeatures }) => {
	const bg = useColorModeValue('white', 'gray.900');
	const templateColumns = useMemo(
		() => {
			return { base: '1fr', tabletXL: 'repeat(3, 1fr)' }
		},
		[]
	);
	return (
		<Box as='section' bg={bg} w='100%' py={16}>
			<Container maxW='container.desktop' >
				<Grid gap={8} templateColumns={templateColumns}>
					{keyFeatures.map(
						(keyFeature) => {
							return (
								<Feature key={keyFeature._key} feature={keyFeature} />
							)
						}
					)}
				</Grid>
			</Container>
		</Box >
	);
}
