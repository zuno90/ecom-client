import { NextPage } from "next"
import Head from "next/head"
import {
    Container,
    Box,
    Text,
    Link,
    Heading,
    Image,
    useColorModeValue,
    HStack,
    Tag,
    SpaceProps,
} from "@chakra-ui/react"
import Footer from "../../components/elements/footer/Footer"
import Menubar from "../../components/elements/header/Menubar"
import Navbar from "../../components/elements/header/Navbar"
import BlogLayout from "../../components/blog/BlogLayout"

const Blog: NextPage = () => {
    return (
        <>
            <Head>
                <title>Blog | Pharmacy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Pharmacy website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="__header">
                <Box bg="navy" display={{ base: "none", md: "flex" }}>
                    <Container maxW="7xl">
                        <Navbar />
                    </Container>
                </Box>
                <Menubar />
            </section>
            <section className="__blog">
                <BlogLayout />
            </section>
            <Box bg={useColorModeValue("gray.100", "gray.700")}>
                <Container maxW="7xl">
                    <Footer />
                </Container>
            </Box>
        </>
    )
}

export default Blog
