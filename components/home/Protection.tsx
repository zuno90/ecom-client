import { SimpleGrid, Box, Stat, StatLabel, Flex, Heading, Text, Spacer, VStack, Image, HStack } from "@chakra-ui/react"

interface StatsCardProps {
    title: string
    icon: string
}
const StatsCard = (props: StatsCardProps) => {
    const { title, icon } = props
    return (
        <Stat bg="white" px={{ base: 2, md: 4 }} py="4" shadow="md" rounded="lg">
            <HStack gap="2">
                <Image boxSize="50px" src={icon} />
                <Box>
                    <StatLabel fontWeight="medium">{title}</StatLabel>
                    <Text>Tìm hiểu thêm</Text>
                </Box>
            </HStack>
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
            <Box mx="auto" px={{ base: 2, sm: 12, md: 17 }}>
                <SimpleGrid columns={{ base: 3, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                    <StatsCard title="Mẹ và Bé" icon="/rounded-icon/me-be.webp" />
                    <StatsCard title="Người cao tuổi" icon="/rounded-icon/nguoicaotuoi.webp" />
                    <StatsCard title="Trẻ em" icon="/rounded-icon/treem.webp" />
                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default Protection
