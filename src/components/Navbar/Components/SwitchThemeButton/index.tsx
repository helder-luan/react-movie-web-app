import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeContext from "../../../../contexts/ThemeContext";

import * as S from "./styles";

function SwitchThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.SwitchThemeButton onClick={() => toggleTheme()}>
      <button className={theme.title}>
        {theme.title === "dark" ? <FiMoon /> : <FiSun />}
      </button>
    </S.SwitchThemeButton>
  );
}

export default SwitchThemeButton;
