import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

import { Layout } from '../components/layout';
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pid } = router.query
  console.log('%c pid', 'color: Yellow;', router.query);

  useEffect(() => {
    let slug = Array.isArray(pid) ? pid.join('.') : pid;
    slug = slug ? slug : 'homepage';
    const uiMode = pageProps.isDark ? 'dark-mode' : 'light-mode';
    document.body.classList.add(slug)
    document.body.classList.add(uiMode)
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
