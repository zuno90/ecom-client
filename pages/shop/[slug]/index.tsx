import React from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import { Container, Box, Stack, useColorModeValue, Hide } from "@chakra-ui/react"
import Navbar from "../../../components/elements/header/Navbar"
import Menubar from "../../../components/elements/header/Menubar"
import Breadcrumb from "../../../components/elements/breadcrumb/Breadcrumb"
import SearchFilter from "../../../components/elements/search/SearchFilter"
import ShopMainLayout from "../../../components/shop/ShopMainLayout"
import Footer from "../../../components/elements/footer/Footer"

const Topic: NextPage = (props) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Head>
                <title>Shop | Pharmacy</title>
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
            </section>
            <section className="__shop">
                <Container maxW="7xl">
                    <Breadcrumb />
                    <Stack direction="row" mt="4" gap="4">
                        <Hide below="md">
                            <SearchFilter />
                        </Hide>
                        <Box w={{ base: "100%", md: "80%" }}>
                            <ShopMainLayout />
                        </Box>
                    </Stack>
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

export async function getServerSideProps(ctx: any) {
    console.log(ctx.query)
    const brandQuery = ctx.query.brand
    // call api
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Topic
