import { useCallback, useEffect, useRef, useState } from "react";
import { characters, numbers, symbols } from "./utils";
import { Checkbox } from "./components";

function App() {
  const [passwordInput, setPasswordInput] = useState("");
  const [pwdLength, setPwdLength] = useState(8);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const pwdRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let genericPwdString = characters;
    if (isNumbers) genericPwdString += numbers;
    if (isSymbols) genericPwdString += symbols;
    for (let i = 1; i <= pwdLength; i++) {
      const randomIndex = Math.floor(Math.random() * genericPwdString.length);
      password += genericPwdString[randomIndex];
    }
    setPasswordInput(password);
  }, [pwdLength, isNumbers, isSymbols, setPasswordInput]);

  const handlePwdCopy = useCallback(() => {
    pwdRef.current?.select();
    navigator.clipboard.writeText(passwordInput);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [passwordInput]);

  useEffect(() => {
    generatePassword();
  }, [pwdLength, isNumbers, isSymbols, generatePassword]);

  return (
    <div className="h-screen w-screen bg-black text-orange-500 overflow-x-hidden">
      <div className="max-w-md mx-auto flex flex-col gap-3 bg-gray-800 px-4 py-4 my-4 rounded-md shadow-md shadow-white">
        <h1 className="text-white text-center text-lg font-medium my-2">
          Password generator
        </h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Password"
            value={passwordInput}
            readOnly
            ref={pwdRef}
            className="bg-white rounded-s-lg px-3 py-1 text-lg font-medium w-full cursor -pointer outline-none"
          />
          <button
            className="bg-blue-700 text-white text-lg px-3 py-1 rounded-e-lg"
            onClick={handlePwdCopy}
          >
            {isCopied ? "copied" : "copy"}
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-1 items-center">
            <input
              type="range"
              id="pwdLength"
              min={8}
              max={100}
              value={pwdLength}
              onChange={(event) => setPwdLength(parseInt(event.target.value))}
            />
            <label htmlFor="pwdLength">Length : {pwdLength}</label>
          </div>
          <Checkbox
            label="Numbers"
            currentState={isNumbers}
            setCurrentState={setIsNumbers}
          />
          <Checkbox
            label="Characters"
            currentState={isSymbols}
            setCurrentState={setIsSymbols}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
