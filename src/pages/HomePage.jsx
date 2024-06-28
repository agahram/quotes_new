import Quote from "../components/Quotes";
import Author from "../components/Author";
import Button from "../components/Button";
import ThemeButton from "../components/ThemeButton";
import PageNav from "../navigation/PageNav";
import FavButton from "../components/FavButton";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <PageNav />
      <Quote />
      <Author />
      <Button />
      <ThemeButton />
      <FavButton />
    </div>
  );
}
