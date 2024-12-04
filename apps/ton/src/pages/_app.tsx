import { FloatingNavigation } from 'components/FloatingNavigation'
import { Providers } from 'components/Providers'
import type { AppProps } from 'next/app'
import { TonContextProvider } from 'ton/react/TonContextProvider'
import '../styles/globals.css' // Import global CSS

const MyApp = ({ Component, pageProps }: AppProps<{ dehydratedState?: any }>) => {
  return (
    <TonContextProvider>
      <Providers dehydratedState={pageProps.dehydratedState}>
        {/* <TonConnector> */}

        <Component {...pageProps} />

        <FloatingNavigation />
        {/* </TonConnector> */}
      </Providers>
    </TonContextProvider>
  )
}

export default MyApp
