import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/themeContext";
import { Card, ThemeBtn } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const changeThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, changeThemeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">{<Card />}</div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
