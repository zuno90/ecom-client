import { Heading, Link as Clink, Image, Stack, Flex, Text } from "@chakra-ui/react"

const BlogSidebar: React.FC = () => {
    return (
        <Flex direction="column" px="2">
            <Heading fontSize="md">BAI NOI BAT</Heading>
            <Stack direction="column" mt="4" spacing="2">
                <Clink textDecoration="none" _hover={{ textDecoration: "none" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                        alt="some good alt text"
                        objectFit="contain"
                    />
                </Clink>
                <Heading fontSize="sm">TITLE</Heading>
                <Text>date</Text>
                <Text>Description</Text>
            </Stack>
        </Flex>
    )
}

export default BlogSidebar
