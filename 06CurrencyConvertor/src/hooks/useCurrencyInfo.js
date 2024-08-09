import { useEffect,useState } from "react"; 


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json ())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency] )      // As we written currency in the dependency array bcz the API call depends upon the currency (as if we write INR there it will show the INR and the rate of conversion wrt INR)

    console.log(data);
    return data;
}

export default useCurrencyInfo;