import { Box, Stack, Grid, GridItem, Heading, Text } from "@chakra-ui/react"

type TCustomBlogLatest = {
    title: string
    date: Date
}

const CustomBlogLatest: React.FC<TCustomBlogLatest> = ({ title, date }) => {
    return (
        <Stack h="100%" justifyContent="end" p="2">
            <Heading fontSize="xl">{title}</Heading>
            <Text fontSize="sm">{date.toLocaleDateString()}</Text>
        </Stack>
    )
}

const BlogLatest: React.FC = () => {
    return (
        <Grid h="500px" templateRows="repeat(2, 1fr)" templateColumns="repeat(12, 1fr)" gap="2">
            <GridItem
                rowSpan={2}
                colSpan={8}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            >
                <CustomBlogLatest title="TITLE" date={new Date()} />
            </GridItem>
            <GridItem
                colSpan={2}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            >
                <CustomBlogLatest title="TITLE" date={new Date()} />
            </GridItem>
            <GridItem
                colSpan={2}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            >
                <CustomBlogLatest title="TITLE" date={new Date()} />
            </GridItem>
            <GridItem
                colSpan={4}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            >
                <CustomBlogLatest title="TITLE" date={new Date()} />
            </GridItem>
        </Grid>
    )
}

export default BlogLatest
