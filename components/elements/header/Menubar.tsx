import {
    Flex,
    Box,
    HStack,
    Link,
    Icon,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { GrCart } from "react-icons/gr"

const Menubar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            bg={useColorModeValue("white", "gray.900")}
            px="4"
            py="2"
            boxShadow="base"
            alignItems="center"
            justifyContent={{ sm: "space-between", md: "center" }}
        >
            <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems="center">
                <Box display={{ md: "none" }}>LOGO</Box>
                <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                    {Links.map((item, index) => (
                        <NavLink key={index}>{item}</NavLink>
                    ))}
                </HStack>
            </HStack>
            <Icon as={GrCart} w={6} h={6} display={{ md: "none" }} color="yellow.400" />
        </Flex>
    )
}

const Links = ["Thực phẩm chức năng", "Dược mỹ phẩm", "Chăm sóc cá nhân", "Thuốc", "Thiết bị y tế"]
const NavLink = ({ children }: { children: React.ReactNode }) => (
    <Link
        px="2"
        py="1"
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href=""
    >
        {children}
    </Link>
)

export default Menubar
