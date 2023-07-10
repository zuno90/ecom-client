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
import Link from "next/link"
import { FaBookMedical } from "react-icons/fa"

const ShopOutstanding: React.FC = () => {
  return (
    <Tabs my="4" variant="soft-rounded" isLazy>
      <HStack>
        <HStack>
          <FaBookMedical />
          <Heading as="h4" size="md">
            Sản phẩm nổi bật
          </Heading>
        </HStack>
        <Spacer />
        <HStack>
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
        <TabPanel p={0}>
          <SimpleGrid columns={[null, 2, 4]} spacingX="5" spacingY="3" mt="4">
            {Array.from(Array(8), (_, index) => (
              <Link href="#" key={index}>
                <a>
                  <Box
                    as={motion.div}
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    transition="1s linear"
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
                </a>
              </Link>
            ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
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
