import { PortableText } from '@portabletext/react'
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Img,
  LightMode,
  Text,
  VStack,
  useColorMode
} from '@chakra-ui/react'
import { BsStarFill as Star, BsStarHalf as HalfStar, BsPlugin } from "react-icons/bs";

import { ExternalLink, InternalLink, PortableTextComponents } from '../ui'

import type { HeroSectionProps } from '../../../types';

import home from '@/styles/Homepage.module.scss'

const areas = {
  base: `'heading' 'screenshot' 'text' 'call-to-actions'`,
  phoneHrz: `'heading screenshot' 'text screenshot' 'call-to-actions screenshot'`
};

const columns = {
  base: '1fr',
  tablet: '30rem 1fr',
  desktop: '42rem 1fr',
};

const bestFontSize = {
  base: 'xl',
  tablet: '2xl',
  desktop: '4xl',
};

const HeadingFontSize = {
  base: '4xl',
  tablet: '5xl',
  desktop: '7xl',
};

const bodyFontSize = {
  base: 'lg',
  tablet: 'xl',
  desktop: '2xl',
};

export const HeroSection: React.FC<HeroSectionProps> = ({ hero_tagline }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? 'gray.800' : 'gray.50';

  return (
    <Container maxW='container.desktop' >
      <Grid
        as='section'
        className={home.hero_section}
        gridTemplateColumns={columns}
        my={8}
        templateAreas={areas}
      >
        <GridItem area='heading'>
          <Heading as='h1' color={color} fontSize={HeadingFontSize} fontWeight={900}>
            <Text as='span' color='pink.500' fontSize={bestFontSize}>the best</Text>
            <Text as='span'>Event Registration</Text>
            <Text as='span'>& Ticketing Plugin</Text>
            <Text as='span'>for <Text as='span' color='blue.500'>WordPress</Text></Text>
          </Heading>
        </GridItem>
        <GridItem area='text' fontSize={bodyFontSize}>
          <PortableText value={hero_tagline} components={PortableTextComponents} />
        </GridItem>
        <GridItem area='screenshot'>
          <Img src={'event_espresso_admin_screenshot.png'} alt='screenshot of event espresso admin page' />
        </GridItem>
        <GridItem area='call-to-actions'>
          <VStack align='start'>
            <HStack>
              <Icon as={Star} boxSize={12} color='yellow.500' />
              <Icon as={Star} boxSize={12} color='yellow.500' />
              <Icon as={Star} boxSize={12} color='yellow.500' />
              <Icon as={Star} boxSize={12} color='yellow.500' />
              <Icon as={HalfStar} boxSize={12} color='yellow.500' />
            </HStack>
            <ExternalLink href='https://wordpress.org/support/plugin/event-espresso-decaf/reviews/'>
              4.3 out of 5 stars on wordpress.org
            </ExternalLink>
          </VStack>
          <HStack
            // className={home.call_to_actions}
            pt={8}
          >
            <InternalLink href="/buy-now">
              <LightMode>
                <Button colorScheme='pink' size='lg'>Buy Now</Button>
              </LightMode>
            </InternalLink>
            <InternalLink href="/pricing">
              <LightMode>
                <Button colorScheme='purple' size='lg'>See Pricing Plans</Button>
              </LightMode>
            </InternalLink>
            <ExternalLink href='https://wordpress.org/plugins/event-espresso-decaf' hideIcon>
              <Button variant='ghost' colorScheme='blue' size='lg'>try decaf for free</Button>
            </ExternalLink>
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  )
}
