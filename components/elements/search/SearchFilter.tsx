import { Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import CheckBox from "../../shop/sidebar/CheckBox"
import PriceFilter from "../../shop/sidebar/PriceFilter"
import queryString from "query-string"

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
    name: "brand222",
    title: "Thương hiệu sếp Zunos",
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
    ]
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
type TFilter = {
  type: string
  value: string[]
}

const SearchFilter: React.FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const f = router.query["filters[]"]

  if (f) {
    const q = queryString.parse(`filters[]=${f}`, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    })

  }
  const [checkedItems, setCheckedItems] = useState<any>({})
  const [filter, setFilter] = useState<any>(null)

  const handleOnCheckedItem = (type: string, value: string) => {

    let arrTemp;
    if (!filter) {
      arrTemp = { ...checkedItems, [type]: checkedItems[type] ? [...checkedItems[type], value] : [value] }
      if (value === 'all') arrTemp[type] = ["all"]
      setCheckedItems(arrTemp)
      return setFilter(arrTemp)

    } else arrTemp = { ...checkedItems }

    if (checkedItems[type]?.includes(value)) {
      if (arrTemp[type].length === 1) {
        if (value === 'all')
          return
        arrTemp[type] = ["all"]
        setCheckedItems(arrTemp)
        setFilter({ ...filter, [type]: arrTemp[type] })
        return
      }
      arrTemp[type] = arrTemp[type]?.filter((item: any) => item !== value && item !== 'all')
    } else {
      if (value === "all") arrTemp[type] = ["all"]
      else {
        if (arrTemp[type] === undefined) arrTemp[type] = []
        else {
          arrTemp[type] = arrTemp[type].filter((item: any) => item !== value && item !== 'all')
        }
        arrTemp[type].push(value)

      }
    }
    setCheckedItems(arrTemp)
    setFilter({ ...filter, [type]: arrTemp[type] })
  }
  const handleUrlCurrent = () => {

    if (!filter) return
    const arrString: any = []

    Object.keys(filter)?.map((item, index) => {

      if (!filter[item].includes('all')) {
        arrString.push((arrString.length !== 0 ? "|" : "") + item + "|")
        let paramsChild: any = []
        // router.push(`${router.asPath}|${item}|`)
        filter[item].map((item2: any, index: any) => {
          if (filter[item].length === index)
            paramsChild.push(item2 + "|")
          paramsChild.push(item2)

          // router.push(`,${item2}`)
        })
        // paramsChild.push("|")
        arrString.push(paramsChild.toString())
      }
    })
    let a = ''
    arrString.map((item: any) => {
      a += item
    })

    if (a.length === 0) return router.push(`${slug}`)
    router.push(`${slug}?filters[]=${a}`)
  }
  const handleUrl = () => {
    const q = window.location.search.split('filters[]=')[1]?.split("|")
    if (!q) return
    let obj = {}
    for (let i = 0; i < q.length - 1; i += 2) {
      obj = { ...obj, [q[i]]: q[i + 1].split(',') }
    }
    setCheckedItems(obj)

  }
  useEffect(() => {
    handleUrlCurrent()
  }, [filter])
  useEffect(() => {
    handleUrl()
  }, [])


  return (
    <Stack spacing="8">
      {checkBoxList.map((v, i) =>
        i === 0 ? (
          <Fragment key={i}>
            <CheckBox name={v.name} title={v.title} list={v.list} handleOnCheckedItem={handleOnCheckedItem} checkedItems={checkedItems} />
            <PriceFilter />
          </Fragment>
        ) : (
          <CheckBox key={i} name={v.name} title={v.title} list={v.list} handleOnCheckedItem={handleOnCheckedItem} checkedItems={checkedItems} />
        )
      )}
    </Stack>
  )
}

export default SearchFilter
