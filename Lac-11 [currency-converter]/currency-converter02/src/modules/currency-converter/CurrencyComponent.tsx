import { useId } from "react";
import "./styles.css";

interface IProps {
  label: string;
  amount: string;
  setAmount: (amount: string) => void;
  currencyType: string;
  setCurrencyType: (currencyType: string) => void;
  currencyNames: string[];
  isInputDisabled?: boolean;
  isAmountError?: boolean;
}
const CurrencyComponent = ({
  label,
  amount,
  setAmount,
  currencyType,
  setCurrencyType,
  currencyNames,
  isInputDisabled,
}: IProps) => {
  const id = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex justify-between">
      {/* left-side */}
      <div className="flex flex-col gap-4 w-1/2">
        <label className="text-gray-400" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          disabled={isInputDisabled}
          type="number"
          value={amount}
          placeholder="Enter an Amount"
          onChange={(event) => setAmount(event.target.value)}
          className={
            isInputDisabled
              ? "input-styles px-2 py-1 font-semibold "
              : "input-styles bg-gray-100 px-2 py-1 font-semibold rounded-md w-3/4"
          }
        />
        {!amount ? (
          <p className="text-red-600 font-medium text-sm">Enter Valid Amount</p>
        ) : null}
      </div>
      {/* right-side */}
      <div className="flex flex-col gap-4">
        <label className="text-gray-400" htmlFor={label}>
          Currency Type
        </label>
        <select
          id={label}
          value={currencyType}
          onChange={(event) => setCurrencyType(event.target.value)}
          className="bg-gray-100 py-1 px-2 rounded-md"
        >
          {currencyNames.map((eachCurrencyName) => (
            <option key={eachCurrencyName} value={eachCurrencyName}>
              {eachCurrencyName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyComponent;
