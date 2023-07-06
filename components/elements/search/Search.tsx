import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useState } from 'react'

const Search = () => {
    const [arrCheck, setArrCheck] = useState(['1'])
    const handleCheck = (data: any) => {
        let arrTemp = [...arrCheck]
        if (arrTemp.includes(data)) {
            if (arrTemp.length === 1)
                return
            arrTemp = arrTemp.filter((item) => item !== data)
            console.log(arrTemp, "tempp")

        } else {
            if (data === 'all') {
                arrTemp = ['all']
            }
            else {
                arrTemp = arrTemp.filter((item) => item !== 'all')
                arrTemp.push(data)
            }
            // console.log("falsee ne ")
        }
        setArrCheck(arrTemp)


    }
    return <>
        {["all", "1", '2', "3", "4"].map((item, key) => {
            console.log(arrCheck.includes(item), "arrCheck.includes(item)");
            return <Checkbox key={key} isChecked={arrCheck.includes(item) ? true : false} onChange={() => handleCheck(item)}>Checkbox</Checkbox>

        })}

    </>
}

export default Search
