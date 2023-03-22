import { client } from '../../client'
import { FeaturesSection, HeroSection } from '../components/layout'

import type { GetStaticProps } from 'next'; // GetStaticPaths, GetServerSideProps
import type { ContentProps } from '../../types';

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('%c context', 'color: HotPink;', context);
  const content = await client.fetch(`*[_type == "homepage"][0]`);
  return {
    props: { content }
  }
}

const Home: React.FC<ContentProps> = ({ content }) => {
  // console.log('%c homepage', 'color: HotPink;', content);
  return (
    <>
      <HeroSection hero_tagline={content.hero_tagline} />
      <FeaturesSection keyFeatures={content.keyFeatures} />
    </>
  )
}

export default Home;
