import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { CacheProvider } from '@chakra-ui/next-js'
import type { GetServerSideProps } from 'next'; // GetStaticPaths, GetServerSideProps

import { getPrimaryNav } from '../queries'
import { Chakra as ChakraProvider, Layout } from '../components/layout';
import { client } from '../../client'


import '../styles/globals.scss'


// const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await client.fetch(`*[_type == "primaryNav"][0]`);
//   console.log('%c primaryNav', 'color: HotPink;', data);
//   return {
//     props: { data }
//   }
// }


// // also export a reusable function getServerSideProps
// export const getServerSideProps: GetServerSideProps = async (props) => {
//   // const data = await client.fetch(`*[_type == "primaryNav"][0]`);
//   // console.log('%c primaryNav', 'color: HotPink;', data);

//   // return {
//   //   props: {
//   //     // first time users will not have any cookies and you may not return
//   //     // undefined here, hence ?? is necessary
//   //     cookies: req.headers.cookie ?? '',
//   //     data,
//   //   },
//   // }
//   return await getPrimaryNav(props);
// }


// also export a reusable function getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const data = await client.fetch(`*[_type == "primaryNav"][0]`);
  // console.log('%c primaryNav', 'color: HotPink;', data);

  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
      // data,
    },
  }
}


export default function App({ Component, pageProps }: AppProps) {
  // console.log('%c Component', 'color: HotPink;', Component);
  console.log('%c pageProps', 'color: HotPink;', pageProps);
  useEffect(() => {
    let slug = pageProps?.content?.slug.current;
    document.body.classList.add(slug)
  });
  return (
    <CacheProvider>
      <ChakraProvider cookies={pageProps.cookies}>
        <Layout primary_nav={pageProps.primary_nav_links || []}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
}

// re-export the reusable `getServerSideProps` function
export { GetServerSideProps };
