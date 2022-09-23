import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
