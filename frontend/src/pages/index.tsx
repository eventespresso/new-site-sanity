import groq from 'groq'
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Grid, GridItem, Heading, HStack, Img, LightMode, Text, VStack, useColorMode } from '@chakra-ui/react'

import { client } from '../../client'
// import eventEspressoAdmin from '../../public/event_espresso_admin_screenshot.png'

import type { GetStaticProps } from 'next'; // GetStaticPaths, GetServerSideProps
import type { ContentProps } from '../../types';

import buttons from '@/styles/Buttons.module.scss'
import home from '@/styles/Homepage.module.scss'

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('%c context', 'color: HotPink;', context);
  const content = await client.fetch(`*[_type == "homepage"][0]`);
  return {
    props: { content }
  }
}

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

const Home: React.FC<ContentProps> = ({ content }) => {
  console.log('%c homepage', 'color: HotPink;', content);

  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? 'gray.800' : 'gray.100';
  console.log('%c colorMode', 'color: HotPink;', colorMode);
  return (
    <Grid
      as='section'
      className={home.hero_section}
      gridTemplateColumns={columns}
      my={8}
      templateAreas={areas}
    >
      <GridItem area='heading'>
        <Heading as='h1' color={color} fontSize={HeadingFontSize}>
          <Text as='span' color='pink.500' fontSize={bestFontSize}>the best</Text>
          <Text as='span'>Event Registration</Text>
          <Text as='span'>& Ticketing Plugin</Text>
          <Text as='span'>for <Text as='span' color='blue.500'>WordPress</Text></Text>
        </Heading>
      </GridItem>
      <GridItem area='text'>
        <VStack fontSize={bodyFontSize}
        //className={home.hero_text}
        >

          <Text>
            Event Espresso is the best WordPress plugin for online event registration and ticketing - with the best full-time support.
          </Text>
          <Text>
            Easily transform your existing WordPress website into a full-featured event registration and ticketing website.
          </Text>
        </VStack>
      </GridItem>
      <GridItem area='screenshot'>
        <Img src={'event_espresso_admin_screenshot.png'} alt='screenshot of event espresso admin page' />
      </GridItem>
      <GridItem area='call-to-actions'>
        <HStack
          // className={home.call_to_actions}
          pt={8}
        >
          <Link href="/buy-now">
            <LightMode>
              <Button as="a" colorScheme='pink' size='lg'>Buy Now</Button>
            </LightMode>
          </Link>
          <Link href="/pricing">
            <LightMode>
              <Button as="a" colorScheme='purple' size='lg'>See Pricing Plans</Button>
            </LightMode>
          </Link>
        </HStack>
      </GridItem>
    </Grid>
  )
}


export default Home;
