import { createContext, useReducer } from "react";

interface AppContextInterface {
  color: string;
  changeColor: (color: string) => void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }: any) {
  const [state, dispatch] = useReducer(themeReducer, { color: "blue" });

  const changeColor = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
