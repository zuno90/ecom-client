import {
    Flex,
    Spacer,
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
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex>
            <Box>LOGO</Box>
            <Spacer />
            <HStack gap="6">
                <HStack>
                    <Icon as={MoonIcon} w={8} h={8} color="yellow.400" />
                    <Text color="white">Tài khoản</Text>
                </HStack>
                <HStack>
                    <Icon as={MoonIcon} w={8} h={8} color="yellow.400" />
                    <Text color="white">Giỏ hàng</Text>
                </HStack>
                <Button onClick={toggleColorMode} variant="transparents">
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
        </Flex>
    )
}

export default Navbar
