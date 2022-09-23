import { Container, Box, useColorModeValue } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/home/Navbar"
import Menubar from "../components/home/Menubar"
import Banner from "../components/home/Banner"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pharmacy</title>
                <meta name="description" content="Pharmacy website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box bg={useColorModeValue("blue.500", "blue.800")}>
                <Container maxW="7xl">
                    <Navbar />
                </Container>
            </Box>
            <Menubar />
            <Banner />
        </>
    )
}

export default Home
