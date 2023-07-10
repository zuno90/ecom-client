import { useState } from "react"
import {
  Box,
  Stack,
  Heading,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
} from "@chakra-ui/react"

const PriceFilter: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50000)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  return (
    <Stack spacing="8">
      <Heading size="sm">Giá bán</Heading>
      <Slider
        defaultValue={100000}
        min={0}
        max={1000000}
        step={50000}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={0} mt="2" fontSize="sm">
          0đ
        </SliderMark>
        <SliderMark value={850000} mt="2" fontSize="sm">
          1tr đ
        </SliderMark>
        <SliderTrack bg="purple.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="purple.500" />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.400"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${new Intl.NumberFormat().format(sliderValue)} VNĐ`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Stack>
  )
}

export default PriceFilter
