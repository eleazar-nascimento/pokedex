import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {

  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }

  const theme = extendTheme({
    config,

    styles: {
      global: {
        body: {
          padding: 0,
          margin: 0,
          color: '#222',
          // backgroundColor: 'orangered',
        },
        h2: {
          fontSize: '44px',
          fontWeight: 'bolder',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        },

      }
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  )
}

export default MyApp
