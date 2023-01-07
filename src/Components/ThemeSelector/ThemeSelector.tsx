import React from "react";
import useTheme from "../../Hooks/useTheme";

const themeColors = ["#FF8303", "#249c6b", "#58249c", "#b70233"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
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
