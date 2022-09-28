import { Container, Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/elements/header/Navbar"
import Menubar from "../components/elements/header/Menubar"
import Banner from "../components/elements/header/Banner"
import Process from "../components/elements/intro/Process"
import Outstanding from "../components/shop/Outstanding"
import Special from "../components/shop/Special"
import BestSell from "../components/shop/BestSell"
import Protection from "../components/home/Protection"
import ProductByAudience from "../components/shop/ProductByAudience"
import Blog from "../components/home/Blog"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pharmacy</title>
                <meta name="description" content="Pharmacy website" />
                <link rel="icon" href="/favicon.ico" />
                {/* carousel css */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* end carousel css */}
            </Head>
            <section className="__header">
                <Box bg="navy" py="6" display={{ base: "none", md: "flex" }}>
                    <Container maxW="7xl">
                        <Navbar />
                    </Container>
                </Box>
                <Menubar />
                <Banner />
            </section>
            <section className="__intro">
                <Container maxW="5xl" py="8">
                    <Process />
                </Container>
            </section>
            <section className="__category">
                <Container maxW="7xl" py="8">
                    <Outstanding />
                </Container>
                <Box bg="blue.500" py="8">
                    <Container maxW="7xl">
                        <Special />
                    </Container>
                </Box>
                <Container maxW="7xl" py="8">
                    <BestSell />
                </Container>
                <Box
                    backgroundImage="url('/backgrounds/break-line-bg.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    py="8"
                >
                    <Container maxW="7xl">
                        <Protection />
                    </Container>
                </Box>
                <Container maxW="7xl" py="8">
                    <ProductByAudience />
                </Container>
                <Container maxW="7xl" py="8">
                    <Blog />
                </Container>
            </section>
        </>
    )
}

export default Home
