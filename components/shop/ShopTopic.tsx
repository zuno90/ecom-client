import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    SimpleGrid,
    Flex,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Stack,
} from "@chakra-ui/react"
import { FaBookMedical } from "react-icons/fa"

const ShopTopic: React.FC = () => {
    return (
        <Box>
            <HStack spacing="2">
                <FaBookMedical />
                <Heading as="h4" size="md">
                    Topic SP
                </Heading>
            </HStack>
            <SimpleGrid display={{ base: "none", md: "grid" }} my="4" columns={[1, null, 2]} spacing="2">
                <Box
                    border="1px"
                    borderColor="gray.200"
                    rounded="md"
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    gap="4"
                >
                    <Box width={{ base: "100%", sm: "50%" }} zIndex="2">
                        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                                alt="some good alt text"
                                objectFit="cover"
                            />
                        </Link>
                    </Box>
                    <Flex w="100%" flexDirection="column" justifyContent="center">
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nữ
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nam
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sức khoẻ tình dục
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Cân bằng nội tiết tố
                        </Text>
                    </Flex>
                </Box>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    rounded="md"
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    gap="4"
                >
                    <Box width={{ base: "100%", sm: "50%" }} zIndex="2">
                        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                                alt="some good alt text"
                                objectFit="cover"
                            />
                        </Link>
                    </Box>
                    <Flex w="100%" flexDirection="column" justifyContent="center">
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nữ
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nam
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sức khoẻ tình dục
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Cân bằng nội tiết tố
                        </Text>
                    </Flex>
                </Box>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    rounded="md"
                    display="flex"
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    gap="4"
                >
                    <Box width={{ base: "100%", sm: "50%" }} zIndex="2">
                        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                                alt="some good alt text"
                                objectFit="cover"
                            />
                        </Link>
                    </Box>
                    <Flex w="100%" flexDirection="column" justifyContent="center">
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nữ
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sinh lý nam
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Sức khoẻ tình dục
                        </Text>
                        <Text as="p" color="red.200" fontSize="sm">
                            Cân bằng nội tiết tố
                        </Text>
                    </Flex>
                </Box>
            </SimpleGrid>

            <Accordion my="4" display={{ md: "none" }} defaultIndex={[]} allowMultiple>
                <Box border="1px" borderColor="gray.400" rounded="md" my="2">
                    <AccordionItem border="none">
                        <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                            <Box flex="1" textAlign="left">
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel py="2">
                            <Text as="p" color="red.200" fontSize="sm">
                                Sinh lý nữ
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Sinh lý nam
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Sức khoẻ tình dục
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Cân bằng nội tiết tố
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Box>

                <Box border="1px" borderColor="gray.400" rounded="md" my="2">
                    <AccordionItem border="none">
                        <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                            <Box flex="1" textAlign="left">
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel py="2">
                            <Text as="p" color="red.200" fontSize="sm">
                                Sinh lý nữ
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Sinh lý nam
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Sức khoẻ tình dục
                            </Text>
                            <Text as="p" color="red.200" fontSize="sm">
                                Cân bằng nội tiết tố
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Box>
            </Accordion>
        </Box>
    )
}

export default ShopTopic
