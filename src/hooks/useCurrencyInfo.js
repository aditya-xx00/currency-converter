//this is the code for formation of custom HOOK add use before name of custom hook function because it is standardized approach but not necessary.

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-10-10/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            
    }, [currency]);
    
    console.log(data);
    return data
}

export default useCurrencyInfo;