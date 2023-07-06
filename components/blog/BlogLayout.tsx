import { Container, Box, Show, Flex } from "@chakra-ui/react"
import Breadcrumb from "../elements/breadcrumb/Breadcrumb"
import BlogLatest from "./layout/BlogLatest"
import BLogMain from "./layout/BLogMain"
import BlogSidebar from "./layout/BlogSidebar"

const BlogLayout: React.FC = () => {
    return (
        <>
            <Show above="md">
                <BlogLatest />
            </Show>
            <Container maxW="7xl">
                <Breadcrumb />
                <Flex my="4" gap="2">
                    <BLogMain />
                    <Show above="md">
                        <BlogSidebar />
                    </Show>
                </Flex>
            </Container>
        </>
    )
}

export default BlogLayout
