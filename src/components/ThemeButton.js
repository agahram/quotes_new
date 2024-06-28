import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function ThemeButton() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        outline: "none",
        marginLeft: 10,
        padding: 5,
      }}
    >
      Toggle to {!dark ? "Dark" : "Light"} theme
    </button>
  );
}
