import { Stack } from "@chakra-ui/react"
import CheckBox from "../../shop/sidebar/CheckBox"
import PriceFilter from "../../shop/sidebar/PriceFilter"

const SearchFilter: React.FC = () => {
    return (
        <Stack spacing="8">
            <CheckBox />
            <PriceFilter />
        </Stack>
    )
}

export default SearchFilter
