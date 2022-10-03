import { useRouter } from "next/router"
import { useState } from "react"
import { Stack, Heading, InputGroup, InputLeftElement, Input, Checkbox } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import queryString from "query-string"

const CheckBox: React.FC = () => {
    const router = useRouter()
    const { slug } = router.query

    const [isCheckedAll, setIsCheckedAll] = useState<boolean>(true)

    // handle onChange checkbox
    const handleOnCheckedItem = (isChecked: boolean, value: string) => {
        setIsCheckedAll(false)
        if (!isChecked) {
            console.log("bo check")
            const eQ = queryString.parse(window.location.search)
            const b = eQ.brand as string
            const arrQ = b.split(",")
            const newQ = arrQ.filter((v) => v !== value).toString()
            if (!newQ) {
                setIsCheckedAll(true)
                return router.push(`/shop/${slug}`)
            }
            return router.push(`/shop/${slug}?brand=${newQ}`)
        }
        // check if has ?brand
        const brandQ = router.query.brand
        if (!brandQ) {
            const q = queryString.stringify({ brand: value })
            return router.push(`${router.asPath}?${q}`)
        }
        if (value !== brandQ) return router.push(`${router.asPath},${value}`)
    }
    return (
        <Stack spacing="4">
            <Heading size="sm">Thương hiệu</Heading>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input type="tel" placeholder="Tìm theo tên" />
            </InputGroup>

            <Stack direction="column">
                <Checkbox
                    value="all"
                    isChecked={isCheckedAll}
                    onChange={() => !isCheckedAll && (window.location.href = `/shop/${slug}`)}
                >
                    Tất cả
                </Checkbox>
                <Checkbox value="sl" onChange={(e) => handleOnCheckedItem(e.target.checked, e.target.value)}>
                    Saint-Laurent
                </Checkbox>
                <Checkbox value="dh" onChange={(e) => handleOnCheckedItem(e.target.checked, e.target.value)}>
                    Dior Homme
                </Checkbox>
                <Checkbox value="ax" onChange={(e) => handleOnCheckedItem(e.target.checked, e.target.value)}>
                    Armani X
                </Checkbox>
            </Stack>
        </Stack>
    )
}

export default CheckBox
