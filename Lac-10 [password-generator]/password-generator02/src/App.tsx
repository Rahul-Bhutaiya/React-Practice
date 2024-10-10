import { useCallback, useEffect, useRef, useState } from "react";
import { characters, numbers, symbols } from "./utils";

function App() {
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const pwdRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let genericPassword = characters;
    if (isNumber) genericPassword += numbers;
    if (isSymbols) genericPassword += symbols;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * genericPassword.length);
      password += genericPassword[randomIndex];
    }
    setPasswordInput(password);
  }, [isNumber, isSymbols, passwordLength, setPasswordInput]);

  const handlePwdCopy = useCallback(() => {
    navigator.clipboard.writeText(passwordInput);
    pwdRef.current?.select();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [passwordInput]);

  useEffect(() => {
    generatePassword();
  }, [isNumber, isSymbols, passwordLength]);

  return (
    // wrapper
    <div className="h-screen w-screen bg-gray-950 text-orange-500 py-4 px-4">
      {/* main container */}
      <div className="max-w-md mx-auto bg-gray-800 rounded-md py-3 px-4 shadow-md shadow-white flex flex-col gap-3">
        <h1 className="text-white text-center font-semibold text-lg mt-3">
          Password generator
        </h1>
        <div className="w-full flex items-center">
          <input
            type="text"
            readOnly
            value={passwordInput}
            ref={pwdRef}
            className="w-full rounded-s-md px-2 py-1 font-semibold outline-none"
          />
          <button
            onClick={handlePwdCopy}
            className="bg-blue-700 rounded-e-md text-white px-2 py-1"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex md:flex-row flex-col gap-2 md:justify-between items-start ">
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="pwd-count"
              min={8}
              max={50}
              value={passwordLength}
              onChange={(event) =>
                setPasswordLength(parseInt(event.target.value))
              }
            />
            <label htmlFor="pwd-count">Length : {passwordLength}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="number-checkbox"
              checked={isNumber}
              onChange={() => setIsNumber(!isNumber)}
            />
            <label htmlFor="number-checkbox">Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="symbols-checkbox"
              checked={isSymbols}
              onChange={() => setIsSymbols(!isSymbols)}
            />
            <label htmlFor="symbols-checkbox">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
