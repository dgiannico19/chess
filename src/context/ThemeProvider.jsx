import React, { createContext, useContext, useState } from "react";
import { themes } from "../constants/config";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("classic");

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
