import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { CacheProvider } from '@chakra-ui/next-js'
import { Chakra as ChakraProvider, getServerSideProps, Layout } from '../components/layout';

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let slug = pageProps?.content?.slug.current;
    document.body.classList.add(slug)
  });
  return (
    <CacheProvider>
      <ChakraProvider cookies={pageProps.cookies}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps };
