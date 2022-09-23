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
        <>
            <Box>
                <Flex
                    py="4"
                    minWidth="max-content"
                    alignItems="center"
                    display={{ base: "none", md: "flex" }}
                >
                    <Box>LOGO</Box>
                    <Spacer />
                    <HStack>
                        <Icon as={MoonIcon} w={8} h={8} color="yellow.400" />
                        <Text>Giỏ hàng</Text>
                    </HStack>
                    <HStack>
                        <Icon as={MoonIcon} w={8} h={8} color="yellow.400" />
                        <Text>Giỏ hàng</Text>
                    </HStack>
                    <Button onClick={toggleColorMode} variant="transparents">
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar
