import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import GlobalStyle from '../theme/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
