import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import Search from "../components/elements/search/Search"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Component {...pageProps} />
      <Search />
    </ChakraProvider>
  )
}

export default MyApp
