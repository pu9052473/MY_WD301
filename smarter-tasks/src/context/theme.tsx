// we are crating the context component
import React, { createContext, useState, PropsWithChildren } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
  });

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const valueToShare = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={valueToShare}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
