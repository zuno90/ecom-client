import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb as B, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"

const Breadcrumb: React.FC = () => {
    return (
        <B py="2" spacing="2" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </B>
    )
}

export default Breadcrumb
