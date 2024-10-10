import { useCallback, useEffect, useState } from "react";
import { useCurrencyData } from "./hooks/useCurrencyData";
import CurrencyComponent from "./CurrencyComponent";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("0");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [currentCurrencyType, setCurrentCurrency] = useState("usd");
  const [convertingCurrencyType, setConvertingCurrencyType] = useState("inr");

  const [currencyData, isLoading] = useCurrencyData(currentCurrencyType);
  const currencyNames = Object.keys(currencyData);

  function handleSwap() {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setCurrentCurrency(convertingCurrencyType);
    setConvertingCurrencyType(currentCurrencyType);
  }
  const handleCurrencyConversion = useCallback(() => {
    if (!amount || amount === "0" || isLoading) {
      setConvertedAmount("0");
      return;
    }
    const convertedAmount =
      currencyData && currencyData[convertingCurrencyType] * Number(amount);

    const roundedAmount = convertedAmount
      ? Math.round((convertedAmount + Number.EPSILON) * 100) / 100
      : "0";
    setConvertedAmount(String(roundedAmount));
  }, [
    amount,
    currentCurrencyType,
    convertingCurrencyType,
    currencyData,
    setConvertedAmount,
  ]);

  useEffect(() => {
    handleCurrencyConversion();
  }, [
    amount,
    currentCurrencyType,
    convertingCurrencyType,
    handleCurrencyConversion,
  ]);

  return (
    // wrapper
    <div
      className="h-screen w-screen bg-gray-800 px-4 py-2 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      {/* container */}
      <div className="h-full flex justify-center items-center ">
        <div className="relative min-w-[35%] max-w-md flex flex-col border border-gray-60 p-3 md:p-5 rounded-md backdrop-blur-sm bg-white/30 gap-1">
          <CurrencyComponent
            label="From"
            amount={amount}
            setAmount={setAmount}
            currencyType={currentCurrencyType}
            setCurrencyType={setCurrentCurrency}
            currencyNames={currencyNames}
          />
          <div className="relative w-full">
            <button
              onClick={handleSwap}
              className="bg-blue-600 w-fit rounded-md py-0.5 md:py-1 px-1 md:px-2 text-sm md:text-base text-white border-2 border-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              swap
            </button>
          </div>
          <CurrencyComponent
            label="To"
            amount={convertedAmount}
            setAmount={setConvertedAmount}
            currencyType={convertingCurrencyType}
            setCurrencyType={setConvertingCurrencyType}
            currencyNames={currencyNames}
            isInputDisabled
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
