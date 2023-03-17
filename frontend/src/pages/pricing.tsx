import groq from 'groq'

import { client } from '../../client'

import type { GetStaticProps } from 'next';
import type { ContentProps } from '../../types';

import layout from '@/styles/layout.module.scss'

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('%c context', 'color: HotPink;', context);
  const content = await client.fetch(
    groq`*[_type == "pricing"][0]`
  )
  console.log('%c content', 'color: Yellow;', content);

  return {
    props: {
      content
    }
  }
}


const Home: React.FC<ContentProps> = (props) => {
  console.log('%c props', 'color: HotPink;', props);
  return (
    <>
      {/* ${layout.full_width} */}
      {/* <div className={`${home.bg} `}></div> */}
      <section className={`${layout.container}`}>
        <h1>title: {props?.content?.title}</h1>
      </section>
    </>
  )
}

export default Home;
