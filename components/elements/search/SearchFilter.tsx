import { Stack } from "@chakra-ui/react"
import { Fragment } from "react"
import CheckBox from "../../shop/sidebar/CheckBox"
import PriceFilter from "../../shop/sidebar/PriceFilter"

const checkBoxList = [
    {
        name: "brand",
        title: "Thương hiệu",
        list: [
            {
                value: "all",
                title: "Tất cả",
            },
            {
                value: "sp",
                title: "Saint-Laurent",
            },
            {
                value: "dh",
                title: "Dior Homme",
            },
            {
                value: "ax",
                title: "Armani Xchange",
            },
        ],
    },
    {
        name: "customer",
        title: "Đối tượng",
        list: [
            {
                value: "all",
                title: "Tất cả",
            },
            {
                value: "rich",
                title: "Người giàu",
            },
            {
                value: "poor",
                title: "Người nghèo",
            },
        ],
    },
]

const SearchFilter: React.FC = () => {
    return (
        <Stack spacing="8">
            {checkBoxList.map((v, i) =>
                i === 0 ? (
                    <Fragment key={i}>
                        <CheckBox name={v.name} title={v.title} list={v.list} />
                        <PriceFilter />
                    </Fragment>
                ) : (
                    <CheckBox key={i} name={v.name} title={v.title} list={v.list} />
                )
            )}
        </Stack>
    )
}

export default SearchFilter
