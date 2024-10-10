import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CurrencyData = { [key: string]: number };

export const useCurrencyData = (
  currentCurrency: string
): [CurrencyData, boolean] => {
  const [currencyData, setCurrencyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getCurrencyData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currentCurrency}.json`
        );
        const data = await response.json();
        setCurrencyData(data[currentCurrency]);
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    getCurrencyData();
  }, [currentCurrency]);
  return [currencyData, isLoading];
};
