import { Box, Flex, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react"

const Outstanding: React.FC = () => {
  return (
    <>
      <Heading as="h5" size="md" textAlign="center">
        DANH MỤC NỔI BẬT
      </Heading>
      <SimpleGrid columns={[2, 3, 6]} spacingX="5" spacingY="3" mt="4">
        {Array.from(Array(12), (_, index) => (
          <Box key={index} bg="yellow" borderRadius="10" textAlign="center" p="4">
            <Flex gap="4" flexDirection="column" alignItems="center">
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

export default Outstanding
