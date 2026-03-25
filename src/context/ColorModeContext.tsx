import React, { createContext, useContext, useState, useEffect } from "react";

interface ColorModeContextValue {
  isDark: boolean;
  toggle: () => void;
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  isDark: false,
  toggle: () => { },
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      return stored === null ? true : stored === "true";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
    document.body.classList.toggle("light-mode", !isDark);
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <ColorModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ColorModeContext.Provider>
  );
};
