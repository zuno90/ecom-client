import { HStack, Heading, SimpleGrid, Box, Flex, Text, Image } from "@chakra-ui/react"
import { FaBookMedical } from "react-icons/fa"

const ProductByAudience: React.FC = () => {
    return (
        <>
            <HStack spacing="2">
                <FaBookMedical />
                <Heading as="h4" size="md">
                    Sản phẩm theo đối tượng
                </Heading>
            </HStack>
            <SimpleGrid columns={[2, 3, 6]} spacingX="5" spacingY="3" mt="4">
                {Array.from(Array(12), (_, index) => (
                    <Box key={index} border="1px" borderColor="gray.200" borderRadius="10" p="4">
                        <Flex gap="4" flexDirection="column">
                            <Image src="cate-icon/ho-tro-tinh-duc.webp" />
                            <Text fontWeight="bold">Hỗ trợ tình dục</Text>
                            <Text>1 SẢN PHẨM</Text>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    )
}

export default ProductByAudience
