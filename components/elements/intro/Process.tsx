import {
    Flex,
    Heading,
    Box,
    HStack,
    Text,
    Icon,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Image,
    Divider,
} from "@chakra-ui/react"

const Process = () => {
    return (
        <Flex gap="8" justifyContent="space-between">
            <Box w="100%" p="4" textAlign="center">
                <Flex gap="2" flexDirection="column" alignItems="center">
                    <Image src="intro/chuptoathuoc.webp" />
                    <Heading size="md" color="blue.400">
                        CHỤP TOA THUỐC
                    </Heading>
                    <Text>đơn giản & nhanh chóng</Text>
                </Flex>
            </Box>
            <Box w="100%" p="4" textAlign="center">
                <Flex gap="2" flexDirection="column" alignItems="center">
                    <Image src="intro/info-ct.webp" />
                    <Heading size="md" color="blue.400">
                        NHẬP THÔNG TIN LIÊN LẠC
                    </Heading>
                    <Text>để được tư vấn đặt hàng</Text>
                </Flex>
            </Box>
            <Box w="100%" p="4" textAlign="center">
                <Flex gap="2" flexDirection="column" alignItems="center">
                    <Image src="intro/duoc-sy.webp" />
                    <Heading size="md" color="blue.400">
                        NHẬN BÁO GIÁ TỪ DƯỢC SỸ
                    </Heading>
                    <Text>kèm theo tư vấn miễn phí</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Process
