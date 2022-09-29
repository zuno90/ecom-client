import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { Container, Box, Breadcrumb } from "@chakra-ui/react"
import Navbar from "../../components/elements/header/Navbar"
import Menubar from "../../components/elements/header/Menubar"
import SearchFilter from "../../components/elements/search/SearchFilter"
import ShopMainLayout from "../../components/shop/ShopMainLayout"
import ShopBestSale from "../../components/shop/ShopBestSale"

const Category: NextPage = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Head>
                <title>Shop | Pharmacy</title>
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
            <section className="__shop">
                <Container maxW="7xl">
                    <Breadcrumb />
                    <Box display="flex" mt="4" gap="4">
                        <SearchFilter />
                        <ShopMainLayout />
                    </Box>
                </Container>
            </section>
            {/* <ShopBestSale data={bestsellList} /> */}
        </>
    )
}

const bestsellList = [
    { id: 1, title: "best sell 1", price: 100, image: "" },
    { id: 2, title: "best sell 2", price: 200, image: "" },
    { id: 3, title: "best sell 3", price: 300, image: "" },
    { id: 4, title: "best sell 4", price: 400, image: "" },
    { id: 5, title: "best sell 5", price: 500, image: "" },
    { id: 6, title: "best sell 6", price: 600, image: "" },
]

export default Category
