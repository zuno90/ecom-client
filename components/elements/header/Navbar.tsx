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
import { FcDocument, FcShop } from "react-icons/fc"
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
                    <Icon as={FcDocument} w={8} h={8} />
                    <Text color="white">Tra cứu đơn hàng</Text>
                </HStack>
                <HStack>
                    <Icon as={FcShop} w={8} h={8} />
                    <Text color="white">Giỏ hàng</Text>
                </HStack>
                <Button onClick={toggleColorMode} variant="outline" rounded="full" p="1">
                    {colorMode === "light" ? <MoonIcon color="yellow.200" /> : <SunIcon color="yellow.200" />}
                </Button>
            </HStack>
        </HStack>
    )
}

export default Navbar
