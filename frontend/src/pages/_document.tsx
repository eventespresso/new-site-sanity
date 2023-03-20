'use client'

import { Html, Head, Main, NextScript } from 'next/document'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import theme from '../styles/theme'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/groupe" rel="stylesheet" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CacheProvider>
          <ChakraProvider>
            <Main />
          </ChakraProvider>
        </CacheProvider>
        <NextScript />
      </body>
    </Html>
  )
}
