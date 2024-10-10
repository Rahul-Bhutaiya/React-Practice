import { useEffect, useState } from "react";

export const useCurrency = (currentCurrency: string) => {
  const [currencyData, setCurrencyData] = useState();
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currentCurrency}.json`
    )
      .then((response) => response.json())
      .then((data) => setCurrencyData(data[currentCurrency]));
  }, [currentCurrency]);
  return currencyData;
};
