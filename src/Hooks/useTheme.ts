import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context == undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }

  return context;
};

export default useTheme;
