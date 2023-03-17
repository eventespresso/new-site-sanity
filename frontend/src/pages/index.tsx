import groq from 'groq'

import { client } from '../../client'

import type { GetStaticProps } from 'next';
import type { ContentProps } from '../../types';

import home from '../styles/Homepage.module.scss'
import layout from '@/styles/layout.module.scss'

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log('%c context', 'color: HotPink;', context);
  const content = await client.fetch(
    groq`*[_type == "homepage"][0]`
  )
  console.log('%c queryResults', 'color: Yellow;', content);

  return {
    props: {
      content
    }
  }
}


const Home: React.FC<ContentProps> = ({ content }) => {
  console.log('%c homepage', 'color: HotPink;', content);
  return (
    <section className={home.hero}>
      <div className={layout.container}>
        <h1>title: {content?.title}</h1>
      </div>
    </section>
  )
}


export default Home;
