import { NextPage } from "next"
import { Box, Button, Container, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import Footer from "../components/elements/footer/Footer"
import { FaFacebook } from "react-icons/fa"

const PageNotFound: NextPage = () => {
    return (
        <>
            <Box py="8" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="4">
                <Image src="/404.webp" />
                <Heading>YÊY CẦU KHÔNG TÌM THẤY</Heading>
                <Text>Trang yêu cầu không tìm thấy. Vui lòng tìm kiếm lại.</Text>
                <Link href="/">
                    <Button rounded="full" colorScheme="messenger" leftIcon={<FaFacebook />}>
                        VỀ TRANG CHỦ
                    </Button>
                </Link>
            </Box>
            <Box bg={useColorModeValue("gray.100", "gray.700")}>
                <Container maxW="7xl">
                    <Footer />
                </Container>
            </Box>
        </>
    )
}

export default PageNotFound
