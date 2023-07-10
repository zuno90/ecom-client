import type { NextPage } from "next"
import Head from "next/head"
import { Container, Box, useColorModeValue } from "@chakra-ui/react"
import Navbar from "../components/elements/header/Navbar"
import Menubar from "../components/elements/header/Menubar"
import Banner from "../components/elements/header/Banner"
import Process from "../components/elements/intro/Process"
import Outstanding from "../components/home/Outstanding"
import Special from "../components/home/Special"
import BestSell from "../components/home/BestSell"
import Protection from "../components/home/Protection"
import ProductByAudience from "../components/home/ProductByAudience"
import Blog from "../components/home/Blog"
import Footer from "../components/elements/footer/Footer"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Pharmacy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <Box bg="navy" display={{ base: "none", md: "flex" }}>
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
        <Box backgroundImage="url('/backgrounds/break-line-bg.png')" backgroundRepeat="no-repeat" py="8">
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
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Container maxW="7xl">
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Home
