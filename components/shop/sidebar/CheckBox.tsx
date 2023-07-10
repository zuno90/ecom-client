import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Stack, Heading, InputGroup, InputLeftElement, Input, Checkbox } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import queryString from "query-string"

type TCheckBox = {
  name: string
  title: string
  list: any[]
}

type TFilter = {
  type: string
  value: string[]
}

const CheckBox: React.FC<TCheckBox> = ({ name, title, list }) => {
  const router = useRouter()
  const { slug } = router.query
  const f = router.query["filters[]"]
  if (f) {
    const q = queryString.parse(`filters[]=${f}`, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    })
    console.log(q, "query")
  }

  const [filter, setFilter] = useState<TFilter | null>(null)

  const [checkedItems, setCheckedItems] = useState<string[]>(["all"])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  // handle onChange checkbox
  const handleOnCheckedItem = (isChecked: boolean, type: string, value: string) => {
    let arrTemp = [...checkedItems]
    if (checkedItems.includes(value)) {
      if (arrTemp.length === 1) return
      arrTemp = arrTemp.filter((item) => item !== value)
    } else {
      if (value === "all") arrTemp = ["all"]
      else {
        arrTemp = arrTemp.filter((item) => item !== "all")
        arrTemp.push(value)
      }
    }
    console.log(arrTemp, "queryyyy")
    setCheckedItems(arrTemp)
    setFilter({ type, value: arrTemp })
  }

  const handleUrl = () => {
    if (!filter) return
    console.log(filter, "filter ...")
    if (filter.value[0] === "all") return router.push(`${slug}`)

    console.log("current param", f)
    if (f) {
      const q = queryString.parse(`filters[]=${f}`, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      })
      console.log("qqqq", q)
      console.log("q filters", q.filters)
      if (q.filters && q.filters[0] !== filter.type) router.push(`${router.asPath}|${filter.type}|${filter.value}`)
    }
    return router.push(`${slug}?filters[]=${filter.type}|${filter.value}`)
  }
  useEffect(() => {
    handleUrl()
  }, [filter])

  return (
    <Stack spacing="4">
      <Heading size="sm">{title}</Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="tel" placeholder="Tìm theo tên" />
      </InputGroup>

      <Stack direction="column">
        {list.map((item, index) => {
          return (
            <Checkbox
              key={index}
              isChecked={checkedItems.includes(item.value)}
              isIndeterminate={item.value === "all" && isIndeterminate}
              value={item.value}
              onChange={(e) => handleOnCheckedItem(e.target.checked, name, e.target.value)}
            >
              {item.title}
            </Checkbox>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default CheckBox
