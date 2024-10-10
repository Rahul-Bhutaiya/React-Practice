import { useId } from "react";

interface IProps {
  label: string;
  currentCurrencyName: string;
  setCurrentCurrencyName: (currencyName: string) => void;
  currentValue: string | number;
  setCurrentValue: (changingValue: string) => void;
  currencyNames: string[] | undefined;
  isReadOnly?: boolean;
}

const CurrencyBox = ({
  label,
  currentCurrencyName,
  setCurrentCurrencyName,
  currentValue,
  setCurrentValue,
  currencyNames,
  isReadOnly,
}: IProps) => {
  const id = useId();
  return (
    <div>
      {/* left side  */}
      <div>
        <label htmlFor={id}>{label}</label>
        <br />
        <input
          id={id}
          readOnly={isReadOnly}
          type="number"
          placeholder="Enter Amount"
          value={currentValue}
          onChange={(event) => setCurrentValue(event.target.value)}
        />
      </div>
      {/* right side */}
      <div>
        <p>Currency Type</p>
        <select
          value={currentCurrencyName}
          onChange={(event) => setCurrentCurrencyName(event.target.value)}
        >
          {currencyNames?.map((eachCurrencyName) => (
            <option value={eachCurrencyName} key={eachCurrencyName}>
              {eachCurrencyName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyBox;
