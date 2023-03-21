// import type { AppProps } from 'next/app'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: any) {
  const { locale } = props.__NEXT_DATA__ || 'en';
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <Html dir={dir} lang={locale}>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/groupe" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
