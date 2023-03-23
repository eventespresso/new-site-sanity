import { getHomepageProps, getPrimaryNav } from '../queries'
import { FeaturesSection, HeroSection } from '../components/layout'

import type { GetStaticProps } from 'next'; // GetStaticPaths, GetServerSideProps
import type { HomepageProps } from '../../types';

export const getStaticProps: GetStaticProps = async (props) => {
  const nav = await getPrimaryNav(props);
  console.log('%c getPrimaryNav', 'color: HotPink;', nav);
  const home = await getHomepageProps(props)
  console.log('%c getHomepageProps', 'color: HotPink;', home);
  return {
    props: { ...home, ...nav }
  };
}

const Home: React.FC<HomepageProps> = ({ hero_tagline, keyFeatures }) => {
  // console.log('%c homepage', 'color: HotPink;', content);
  return (
    <>
      <HeroSection hero_tagline={hero_tagline} />
      <FeaturesSection keyFeatures={keyFeatures} />
    </>
  )
}

export default Home;
