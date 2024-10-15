import { createContext, useContext } from "react";

interface typeThemeContext {
  themeMode: string;
  changeThemeMode: () => void;
}

const ThemeContext = createContext<typeThemeContext | undefined>(undefined);
export const ThemeContextProvider = ThemeContext.Provider;
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Theme context is not defined");
  }
  return context;
};
