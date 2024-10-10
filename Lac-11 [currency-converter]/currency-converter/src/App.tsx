import { useState } from "react";
import { useCurrency } from "./hooks";
import { CurrencyBox } from "./components";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromValue, setFromValue] = useState<string | number>("0");
  const [toValue, setToValue] = useState<string | number>("0");
  const currencyData = useCurrency(fromCurrency);
  const currencyNames = currencyData && Object.keys(currencyData);

  function handleConversion() {
    const convertedAmount = currencyData
      ? currencyData[toCurrency] * Number(fromValue)
      : "0";
    const roundedAmount =
      Math.round(((convertedAmount as number) + Number.EPSILON) * 100) / 100;
    setToValue(roundedAmount);
  }

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromValue(toValue);
    setToValue(fromValue);
  }

  return (
    // wrapper
    <div>
      {/* main-container */}
      <div>
        <CurrencyBox
          label="From"
          currentCurrencyName={fromCurrency}
          setCurrentCurrencyName={setFromCurrency}
          currentValue={fromValue}
          setCurrentValue={setFromValue}
          currencyNames={currencyNames}
        />
        <button onClick={handleSwap}>swap</button>
        <CurrencyBox
          label="To"
          currentCurrencyName={toCurrency}
          setCurrentCurrencyName={setToCurrency}
          currentValue={toValue}
          setCurrentValue={setToValue}
          currencyNames={currencyNames}
          isReadOnly={true}
        />
        <button onClick={handleConversion}>
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
