import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context/ContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    )
}

export default MyApp
