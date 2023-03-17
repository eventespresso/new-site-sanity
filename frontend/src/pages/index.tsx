import groq from 'groq'

import { client } from '../../client'

import type { GetStaticProps } from 'next';
import type { HomepageProps } from '../../types';

import styles from '../styles/Homepage.module.scss'
import layout from '@/styles/layout.module.scss'

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('%c context', 'color: HotPink;', context);
  const queryResults = await client.fetch(
    groq`*[_type == "homepage" ][0]`
  )
  console.log('%c queryResults', 'color: Yellow;', queryResults);

  return {
    props: {
      queryResults
    }
  }
}


const Home: React.FC<HomepageProps> = ({ homepage }) => {
  console.log('%c homepage', 'color: HotPink;', homepage);
  return (
    <div className={layout.container}>
      <h1>title: {homepage?.title}</h1>
    </div>
  )
}

export default Home;
