import { createContext, PropsWithChildren, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import dark from "../styles/Themes/dark";
import light from "../styles/Themes/light";

type PropsThemeContext = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

const DEFAULT_VALUE = {
  theme: light,
  toggleTheme: () => {},
};

const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE);

function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme.title == "light" ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export { ThemeContextProvider };
export default ThemeContext;
