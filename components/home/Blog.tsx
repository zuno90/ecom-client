import {
    Box,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Text,
    Tag,
    Link,
    useColorModeValue,
    SpaceProps,
    SimpleGrid,
    VStack,
    Flex,
} from "@chakra-ui/react"
import { FaBookMedical } from "react-icons/fa"

const Blog: React.FC = () => {
    return (
        <>
            <HStack spacing="2">
                <FaBookMedical />
                <Heading as="h4" size="md">
                    Góc sức khoẻ
                </Heading>
            </HStack>
            <HStack mt="4" gap="2">
                <Box w="100%">
                    <Image
                        borderRadius="lg"
                        src="/articles/adenovirus-khi-nao-tre-can-nhap-vien-dieu-tri-noi-tru-DPjNz-1664268292_large.webp"
                        alt="some good alt text"
                        objectFit="contain"
                    />
                </Box>
                <Flex w="100%" direction="column">
                    {articleList.map((item: any, index: number) => (
                        <Box w="100%">
                            <Image
                                w="100%"
                                h="auto"
                                borderRadius="lg"
                                src={item.image}
                                alt="some good alt text"
                                objectFit="contain"
                            />
                            <VStack align="stretch">
                                <Heading size="md">{item.title}</Heading>
                                <Text>3 ngày trước</Text>
                            </VStack>
                        </Box>
                    ))}
                </Flex>
            </HStack>
        </>
    )
}

const articleList = [
    {
        title: "TITLE 1",
        image: "/articles/vi-sao-ban-ngu-hay-giat-minh-cach-han-che-tinh-trang-nay-nhu-the-nao-BWEBj-1664210273_medium.webp",
    },
    {
        title: "TITLE 2",
        image: "/articles/gao-lut-tim-than-co-tac-dung-gi-voi-suc-khoe-gzasi-1664124092_medium.webp",
    },
    {
        title: "TITLE 3",
        image: "/articles/nhung-dieu-phu-huynh-can-biet-ve-u-mau-o-tre-em-qUxPT-1664117549_medium.webp",
    },
    {
        title: "TITLE 4",
        image: "/articles/sup-lo-xanh-co-tac-dung-gi-voi-suc-khoe-OnBTi-1664091597_medium.webp",
    },
]

export default Blog
