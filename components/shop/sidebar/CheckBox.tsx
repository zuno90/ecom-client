import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
    Stack,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Checkbox,
    CheckboxGroup,
    useCheckboxGroup,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import queryString from "query-string"

type TCheckBox = {
    name: string
    title: string
    list: any[]
}

type TFilter = {
    type: string
    value: string
}

const CheckBox: React.FC<TCheckBox> = ({ name, title, list }) => {
    const router = useRouter()

    const { slug } = router.query

    const [filter, setFilter] = useState<TFilter[] | string[]>([])
    const [checkedItems, setCheckedItems] = useState<boolean[]>([])
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    console.log(filter, "filterrrr")

    // handle onChange checkbox
    const handleOnCheckedItem = (isChecked: boolean, type: string, value: string) => {
        setFilter([])
        console.log({ isChecked, type, value })
        if (value !== "all") {
            if (isChecked) {
                setFilter([...filter, { type, value }])
            } else {
                if (filter.includes({ type, value })) filter.filter((ele) => ele !== { type, value })
            }
        } else {
            isChecked && setFilter([{ type, value }])
        }
        // setIsCheckedAll(false)
        // if (!isChecked) {
        //     const eQ = queryString.parse(window.location.search)
        //     const b = eQ.brand as string
        //     const arrQ = b.split(",")
        //     const newQ = arrQ.filter((v) => v !== value).toString()
        //     if (!newQ) {
        //         setIsCheckedAll(true)
        //         return router.push(`/shop/${slug}`)
        //     }
        //     return router.push(`/shop/${slug}?${type}=${newQ}`)
        // }
        // // check if has  query
        // console.log(router.query)
        // const brandQ = router.query.type
        // if (!brandQ) {
        // const qObj: TFilter = {}
        // qObj[filter.type] = filter.value
        // const q = queryString.stringify(qObj)
        // console.log(qObj)
        // return router.push(`${router.asPath}?${q}`)
        // }
        // if (value !== brandQ) return router.push(`${router.asPath},${value}`)
    }

    return (
        <Stack spacing="4">
            <Heading size="sm">{title}</Heading>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input type="tel" placeholder="Tìm theo tên" />
            </InputGroup>

            <Stack direction="column">
                {list.map((item, index) => (
                    // <CheckboxGroup key={index} defaultValue={["all"]}>
                    <Checkbox
                        isChecked={item.value === "all" ? allChecked : checkedItems[index]}
                        isIndeterminate={item.value === "all" && isIndeterminate}
                        value={item.value}
                        onChange={(e) => handleOnCheckedItem(e.target.checked, name, e.target.value)}
                    >
                        {item.title}
                    </Checkbox>
                    // </CheckboxGroup>
                ))}
            </Stack>
        </Stack>
    )
}

export default CheckBox
