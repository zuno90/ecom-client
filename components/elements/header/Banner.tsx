import { useBreakpointValue } from "@chakra-ui/react"
import Carousel, { ECarousel } from "../carousel/Carousel"

const Banner: React.FC = () => {
  return (
    <Carousel
      // top={useBreakpointValue({ base: "50%", md: "50%" })}
      type={ECarousel.banner}
      top="50%"
      side={useBreakpointValue({ base: "30%", md: "5px" })}
      data={data}
    />
  )
}

const data = [
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "http://localhost:3000/banners/1659455646-rU5F-sua-tam-em-be-cetaphil-uu-dai-doc-quyen.webp",
  },
  {
    title: "Design Projects 2",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "http://localhost:3000/banners/1663912917-ckgv-giam-10-thang-10.webp",
  },
  {
    title: "Design Projects 3",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "http://localhost:3000/banners/1658467715-tm6o-dac-quyen-mua-hang-1k.webp",
  },
]

export default Banner
