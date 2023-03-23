import { useMemo } from 'react';
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
  useColorModeValue
} from '@chakra-ui/react'
import { BsStarFill as Star, BsStarHalf as HalfStar, BsPlugin } from "react-icons/bs";

import { ExternalLink, InternalLink, PortableTextComponents } from '../ui'

import type { HeroSectionProps } from '../../../types';

import home from '@/styles/Homepage.module.scss'


export const HeroSection: React.FC<HeroSectionProps> = ({ hero_tagline }) => {
  const bg = useColorModeValue('cyan.400', 'cyan.900');
  const color = useColorModeValue('gray.800', 'gray.200');
  const imagePos = ['-4', '-4', '-4', '-16'];

  const areas = useMemo(
    () => {
      return {
        base: `'heading' 'screenshot' 'text' 'call-to-actions'`,
        phoneXL: `'heading screenshot' 'text screenshot' 'call-to-actions screenshot'`
      };
    },
    []
  );
  const columns = useMemo(
    () => {
      return {
        base: '1fr',
        tablet: '30rem 1fr',
        desktop: '42rem 1fr',
      };
    },
    []
  );
  const bestFontSize = useMemo(
    () => {
      return {
        base: 'xl',
        tablet: '2xl',
        desktop: '4xl',
      };
    },
    []
  );
  const HeadingFontSize = useMemo(
    () => {
      return {
        base: '4xl',
        phoneXL: '5xl',
        desktop: '6xl',
      };
    },
    []
  );
  const taglineFontSize = useMemo(
    () => {
      return {
        base: 'lg',
        tablet: 'xl',
        desktop: '2xl',
      };
    },
    []
  );

  return (
    <Box as='section' bg={bg} w='100%' py={16}>
      <Container maxW='container.desktop'>
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
          <GridItem area='text' color={color} fontSize={taglineFontSize}>
            <PortableText value={hero_tagline} components={PortableTextComponents} />
          </GridItem>
          <GridItem area='screenshot'>
            <Img src={'event_espresso_admin_screenshot.png'} alt='screenshot of event espresso admin page' pos='relative' right={imagePos} />
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
    </Box>
  )
}
