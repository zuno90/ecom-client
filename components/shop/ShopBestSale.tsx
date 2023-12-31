import { HStack, Heading, Stack, useBreakpointValue, Box } from "@chakra-ui/react"
import { FaBookMedical } from "react-icons/fa"
import Carousel, { ECarousel } from "../elements/carousel/Carousel"
import { TData } from "../../types/product.type"

const ShopBestSale = ({ data }: { data: TData }) => {
  return (
    <Box mt="4" p="4" bg="blue.400" rounded="lg">
      <HStack spacing="2">
        <FaBookMedical />
        <Heading as="h4" color="white" size="md">
          Sản phẩm bán chạy
        </Heading>
      </HStack>
      <Stack mt="4">
        <Carousel
          // top={useBreakpointValue({ base: "50%", md: "50%" })}
          type={ECarousel.product}
          numberOfItem={4}
          numberOfScroll={4}
          top="50%"
          side={useBreakpointValue({ md: "5px" })}
          changingSpeed={3000}
          data={data}
        />
      </Stack>
    </Box>
  )
}

const data = [
  {
    image:
      "https://nhathuoclongchau.com/images/product/2022/06/00033702-vien-uong-tang-suc-khang-optimax-immunity-booster-vid-fighter-20v-4698-62ae_large.jpg",
    title: "Product title 1",
    price: 200000,
  },
  {
    image:
      "https://nhathuoclongchau.com/images/product/2017/10/00009732-neilmed-pediatric-starter-kit-30-3182-d459_large.jpg",
    title: "Product title 2",
    price: 200000,
  },
  {
    image: "https://nhathuoclongchau.com/images/product/2018/11/00008138-xisat-kid-75ml-8547-5bf4_large.JPG",
    title: "Product title 3",
    price: 200000,
  },
  {
    image:
      "https://nhathuoclongchau.com/images/product/2021/09/00032402-rapidfor-sars-cov-2-rapid-antigen-test-bo-test-nhanh-khang-nguyen-sars-cov-2-7690-6153_large.jpg",
    title: "Product title 4",
    price: 200000,
  },
  {
    image:
      "https://nhathuoclongchau.com/images/product/2022/06/00033702-vien-uong-tang-suc-khang-optimax-immunity-booster-vid-fighter-20v-4698-62ae_large.jpg",
    title: "Product title 5",
    price: 200000,
  },
  {
    image:
      "https://nhathuoclongchau.com/images/product/2022/06/00033702-vien-uong-tang-suc-khang-optimax-immunity-booster-vid-fighter-20v-4698-62ae_large.jpg",
    title: "Product title 6",
    price: 200000,
  },
  {
    image:
      "https://nhathuoclongchau.com/images/product/2022/06/00033702-vien-uong-tang-suc-khang-optimax-immunity-booster-vid-fighter-20v-4698-62ae_large.jpg",
    title: "Product title 7",
    price: 200000,
  },
]

export default ShopBestSale
