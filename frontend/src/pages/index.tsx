import groq from 'groq'
import Image from 'next/image'
import Link from 'next/link'

import { client } from '../../client'
import eventEspressoAdmin from '../../public/event_espresso_admin_screenshot.png'

import type { GetStaticProps } from 'next';
import type { ContentProps } from '../../types';

import buttons from '@/styles/Buttons.module.scss'
import home from '@/styles/Homepage.module.scss'
import layout from '@/styles/Layout.module.scss'

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
    <section className={`${layout.container} hero_section`}>
      <div className={home.hero}>
        <h1>
          <span className={home.the_best}>the best</span>
          <span className={home.event_reg}>Event Registration</span>
          <span className={home.ticketing}>& Ticketing Plugin</span>
          <span>for <span className={home.wordpress}>WordPress</span></span>
        </h1>
        <div className={home.hero_text}>
          <p>Event Espresso is the best WordPress plugin for online event registration and ticketing - with the best full-time support.</p>
          <p>Easily transform your existing WordPress website into a full-featured event registration and ticketing website.</p>
        </div>
        <Image src={eventEspressoAdmin} alt='screenshot of event espresso admin page' />
        <div className={home.call_to_actions}>
          <Link href="/buy-now" className={`${buttons.btn} ${buttons.btn__buy_now}`}>
            Buy Now
          </Link>
          <Link href="/pricing" className={`${buttons.btn} ${buttons.btn__pricing}`}>
            See Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  )
}


export default Home;
