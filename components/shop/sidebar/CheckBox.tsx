import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Stack, Heading, InputGroup, InputLeftElement, Input, Checkbox } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import queryString from "query-string"

type TCheckBox = {
  name: string
  title: string
  list: any[]
  handleOnCheckedItem: any
  checkedItems: any
}

type TFilter = {
  type: string
  value: string[]
}

const CheckBox: React.FC<TCheckBox> = ({ name, title, list, handleOnCheckedItem, checkedItems }) => {
  const router = useRouter()
  const { slug } = router.query
  const f = router.query["filters[]"]
  if (f) {
    const q = queryString.parse(`filters[]=${f}`, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    })
    // console.log(q, "query")
  }

  const [filter, setFilter] = useState<TFilter | null>(null)


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
              isChecked={checkedItems?.hasOwnProperty(name) ? checkedItems[name]?.includes(item.value) : item.value === 'all' ? true : false}
              // isIndeterminate={item.value === "all" && isIndeterminate}

              value={item.value}
              onChange={(e) => handleOnCheckedItem(name, item.value)}
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
