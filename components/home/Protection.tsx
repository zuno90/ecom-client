import {
    SimpleGrid,
    Box,
    Stat,
    StatLabel,
    StatNumber,
    Flex,
    Heading,
    Text,
    Spacer,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react"
import { BsPerson } from "react-icons/bs"
import { FiServer } from "react-icons/fi"
import { GoLocation } from "react-icons/go"

interface StatsCardProps {
    title: string
    stat: string
    icon: React.ReactNode
}
const StatsCard = (props: StatsCardProps) => {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py="4"
            shadow="md"
            border="1px solid"
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded="lg"
        >
            <Flex justifyContent="space-between">
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight="medium">{title}</StatLabel>
                    <StatNumber fontSize="2xl" fontWeight="medium">
                        {stat}
                    </StatNumber>
                </Box>
                <Box my="auto" color={useColorModeValue("gray.800", "gray.200")} alignContent="center">
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

const Protection: React.FC = () => {
    return (
        <Flex alignItems="center">
            <VStack>
                <Heading as="h4" size="2xl">
                    BẢO VỆ
                </Heading>
                <Text fontSize="2xl">Sức khoẻ người thân</Text>
            </VStack>
            <Spacer />
            <Box maxW="7xl" mx="auto" px={{ base: 2, sm: 12, md: 17 }}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                    <StatsCard title="Users" stat="5,000" icon={<BsPerson size="3em" />} />
                    <StatsCard title="Servers" stat="1,000" icon={<FiServer size="3em" />} />
                    <StatsCard title="Datacenters" stat="7" icon={<GoLocation size="3em" />} />
                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default Protection
