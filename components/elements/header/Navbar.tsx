import Link from "next/link"
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
    Image,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <HStack>
            <Link href="/">
                <a>
                    <Image boxSize="80px" src="/zuno.png" />
                </a>
            </Link>
            <Spacer />
            <HStack gap="8">
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
        </HStack>
    )
}

export default Navbar
