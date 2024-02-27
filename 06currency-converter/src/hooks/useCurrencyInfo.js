import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [datee, setDatee] = useState("");

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => (setData(res[currency]), setDatee(res.date)));
  }, [currency]);
  console.log(datee);
  return [data,datee];
}

export default useCurrencyInfo;
