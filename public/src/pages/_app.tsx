import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { client } from '../../client'

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
