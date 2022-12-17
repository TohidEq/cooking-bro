import { createContext } from "react";

interface AppContextInterface {
  color: string;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

export function ThemeProvider({ children }: any) {
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
