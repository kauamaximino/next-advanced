import { Html, Head, Main, NextScript } from 'next/document'
import favicon from './favicon-web.ico'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href={favicon} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
