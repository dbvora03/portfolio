import type { AppProps } from 'next/app'
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#fbfbf3",
      }
    })
  },
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
