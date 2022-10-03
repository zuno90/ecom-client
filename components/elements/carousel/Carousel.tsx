import { useState } from "react"
import Slider from "react-slick"
import { Box, IconButton, Text, Stack, Heading, Image } from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { useCarouselSettings } from "../../../utilts/carousel"
import { IData } from "../../../types/product.type"

export enum ECarousel {
    banner = "banner",
    product = "product",
}

interface TCarouselBreakPoint {
    type: ECarousel
    numberOfItem?: number
    numberOfScroll?: number
    top: string | undefined
    side: string | undefined
    changingSpeed?: number | undefined
    data: any
    children?: React.ReactNode
}

const Carousel: React.FC<TCarouselBreakPoint> = ({
    type,
    numberOfItem,
    numberOfScroll,
    top,
    side,
    changingSpeed,
    data,
}) => {
    const [slider, setSlider] = useState<Slider | null>(null)
    const settings = useCarouselSettings(numberOfItem, numberOfScroll, true, changingSpeed)

    return (
        <Box position="relative" width="full" overflow="hidden">
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                display={{ base: "none", md: "block" }}
                transform={"translate(0%, -50%)"}
                zIndex="2"
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                display={{ base: "none", md: "block" }}
                transform={"translate(0%, -50%)"}
                zIndex="2"
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {data.map((item: IData, index: number) => {
                    switch (type) {
                        // head banner
                        case ECarousel.banner:
                            return (
                                <Box
                                    key={index}
                                    height={{ sm: "3xs", md: "md" }}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundImage={`url(${item.image})`}
                                ></Box>
                            )
                        // product carousel
                        case ECarousel.product:
                            return (
                                <Box key={index} bg="white" p="4" borderRadius="10">
                                    <Image src={item.image} alt="product-img" />
                                    <Stack mt="4" spacing="1" maxW="lg">
                                        <Heading size="sm">{item.title}</Heading>
                                        <Text fontSize="xs" color="GrayText">
                                            {item.price}
                                        </Text>
                                    </Stack>
                                </Box>
                            )
                    }
                })}
            </Slider>
        </Box>
    )
}

export default Carousel
