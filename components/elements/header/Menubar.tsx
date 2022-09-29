import Link from "next/link"
import {
    Flex,
    Box,
    HStack,
    Link as Clink,
    Icon,
    IconButton,
    Image,
    useColorModeValue,
    useDisclosure,
    Stack,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { GrCart } from "react-icons/gr"

const Menubar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
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
                    aria-label="Open Menu"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Box display={{ md: "none" }}>
                        <Link href="/">
                            <a>
                                <Image boxSize="50px" src="/zuno.png" />
                            </a>
                        </Link>
                    </Box>
                    <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                        {Links.map((item, index) => (
                            <NavLink key={index} slug={item.slug}>
                                {item.title}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Icon as={GrCart} w={6} h={6} display={{ md: "none" }} color="yellow.400" />
            </Flex>
            {isOpen ? (
                <Box display={{ md: "none" }}>
                    <Stack as="nav" spacing="4">
                        {Links.map((item, index) => (
                            <NavLink key={index} slug={item.slug}>
                                {item.title}
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </>
    )
}

const Links = [
    { id: 1, title: "Thực phẩm chức năng", slug: "thuc-pham-chuc-nang" },
    { id: 2, title: "Dược mỹ phẩm", slug: "duoc-my-pham" },
    { id: 3, title: "Chăm sóc cá nhân", slug: "cham-soc-ca-nhan" },
    { id: 4, title: "Thuốc", slug: "thuoc" },
    { id: 5, title: "Thiết bị y tế", slug: "thiet-bi-y-te" },
]
const NavLink = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
    <Link href={`/shop/${slug}`}>
        <Clink
            px="2"
            py="2"
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
        >
            {children}
        </Clink>
    </Link>
)

export default Menubar
