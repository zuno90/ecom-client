import Link from "next/link"
import {
    useColorModeValue,
    Heading,
    Box,
    Image,
    HStack,
    Text,
    SpaceProps,
    Tag,
    Link as Clink,
    Show,
    SimpleGrid,
    Divider,
} from "@chakra-ui/react"

interface IBlogTags {
    tags: Array<string>
    marginTop?: SpaceProps["marginTop"]
}

const BlogTags: React.FC<IBlogTags> = ({ tags }) => {
    return (
        <HStack spacing="1">
            {tags.map((tag) => (
                <Tag key={tag} size="sm" variant="solid" bg="purple.300" color="white">
                    {tag}
                </Tag>
            ))}
        </HStack>
    )
}

interface BlogAuthorProps {
    date: Date
    name: string
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({ name, date }) => (
    <HStack spacing="4">
        <Image
            borderRadius="full"
            boxSize="30px"
            src="https://100k-faces.glitch.me/random-image"
            alt={`Avatar of ${name}`}
        />
        <Text fontWeight="medium">
            {name} - {date.toLocaleDateString()}
        </Text>
    </HStack>
)

const BLogMain: React.FC = () => {
    return (
        <SimpleGrid gap="8">
            {Array.from(Array(4), (_, index) => (
                <>
                    <Box key={index} display="flex">
                        <Box display="flex" flex="1">
                            <Box width={{ base: "100%", sm: "90%" }} zIndex="2">
                                <Clink textDecoration="none" _hover={{ textDecoration: "none" }}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="some good alt text"
                                        objectFit="contain"
                                    />
                                </Clink>
                            </Box>
                        </Box>
                        <Box display="flex" flex="1" flexDirection="column" gap="2">
                            <BlogTags tags={["Engineering", "Product"]} />
                            <Heading>
                                <Link href="/">
                                    <Clink textDecoration="none" _hover={{ textDecoration: "none" }}>
                                        Blog article title
                                    </Clink>
                                </Link>
                            </Heading>
                            <Show above="sm">
                                <Text
                                    as="p"
                                    color={useColorModeValue("gray.700", "gray.200")}
                                    fontSize={{ base: "md", sm: "sm" }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Text>
                            </Show>
                            <BlogAuthor name="ZUNO" date={new Date("2021-04-06T19:01:27Z")} />
                        </Box>
                    </Box>
                    <Divider />
                </>
            ))}
        </SimpleGrid>
    )
}

export default BLogMain
