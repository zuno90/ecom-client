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
    Hide,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { GrCart } from "react-icons/gr"
import { menuList } from "../../../utilts/constants"

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
                justifyContent={{ base: "space-between", md: "center" }}
            >
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Hide above="md">
                        <Link href="/">
                            <a>
                                <Image boxSize="50px" src="/zuno.png" />
                            </a>
                        </Link>
                    </Hide>
                    <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                        {menuList.map((item, index) => (
                            <NavLink key={index} slug={item.slug}>
                                {item.title}
                            </NavLink>
                        ))}
                        <Link href="/blog">
                            <Clink p="2" _hover={{ textDecoration: "none" }}>
                                Blog
                            </Clink>
                        </Link>
                    </HStack>
                </HStack>
                <Icon as={GrCart} w={6} h={6} display={{ md: "none" }} color="yellow.400" />
            </Flex>
            {isOpen ? (
                <Box display={{ md: "none" }}>
                    <Stack as="nav" spacing="4">
                        {menuList.map((item, index) => (
                            <NavLink key={index} slug={item.slug}>
                                {item.title}
                            </NavLink>
                        ))}
                        <Link href="/blog">
                            <Clink p="2" _hover={{ textDecoration: "none" }}>
                                Blog
                            </Clink>
                        </Link>
                    </Stack>
                </Box>
            ) : null}
        </>
    )
}

const NavLink = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
    <Clink
        className="__menu"
        href={`/shop/${slug}`}
        p="2"
        _hover={{
            textDecoration: "none",
        }}
    >
        {children}
    </Clink>
)

export default Menubar
