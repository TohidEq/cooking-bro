import React from "react";
import useTheme from "../../Hooks/useTheme";

import modeIcon from "../../assets/mode.svg";

const themeColors = ["#FF8303", "#249c6b", "#58249c", "#b70233"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
    console.log(mode);
  };

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        <div className="mode-toggle" onClick={() => toggleMode()}>
          <img
            src={modeIcon}
            alt="dark/light icon"
            style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          />
        </div>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
