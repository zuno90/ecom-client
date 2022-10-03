import {
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    HStack,
    Image,
    Text,
    Spacer,
    Box,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaBookMedical } from "react-icons/fa"

const ShopOutstanding: React.FC = () => {
    return (
        // <Box my="8">
        <Tabs variant="soft-rounded" isLazy my="8">
            <HStack>
                <HStack>
                    <FaBookMedical />
                    <Heading as="h4" size="md">
                        Sản phẩm nổi bật
                    </Heading>
                </HStack>
                <Spacer />
                <HStack gap="8">
                    <TabList>
                        <Tab _selected={{ color: "white", bg: "blue.500" }}>Bán chạy</Tab>
                        <Tab _selected={{ color: "white", bg: "blue.500" }}>Mới nhất</Tab>
                        <Tab _selected={{ color: "white", bg: "blue.500" }}>Giá cao</Tab>
                        <Tab _selected={{ color: "white", bg: "blue.500" }}>Giá thấp</Tab>
                    </TabList>
                </HStack>
            </HStack>
            <TabPanels>
                {/* <TabContent /> */}
                <TabPanel p="0">
                    <SimpleGrid columns={[null, 2, 4]} spacingX="5" spacingY="3" mt="4">
                        {Array.from(Array(8), (_, index) => (
                            <Box
                                as={motion.div}
                                animate={{ rotate: [0, 0, 270, 270, 0] }}
                                key={index}
                                border="1px"
                                borderColor="gray.200"
                                borderRadius="10"
                                p="4"
                            >
                                <Flex gap="4" flexDirection="column">
                                    <Image src="https://nhathuoclongchau.com/images/product/2022/06/00030084-dau-goi-hoa-buoi-la-beauty-250ml-giam-gay-rung-kich-thich-moc-toc-5963-62ae_large.JPG" />
                                    <Text fontWeight="bold">Hỗ trợ tình dục</Text>
                                    <Text>27.000đ / Hộp</Text>
                                </Flex>
                            </Box>
                        ))}
                    </SimpleGrid>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        // </Box>
    )
}

const TabContent = () => {
    return (
        <>
            <TabPanel>
                <p>one!</p>
            </TabPanel>
            <TabPanel>
                <p>two!</p>
            </TabPanel>
        </>
    )
}

export default ShopOutstanding
