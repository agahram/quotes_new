import { useData } from "../context/FetchContext";

export default function FavButton() {
  const { addToFav, quote, author } = useData();
  function handleFavQuote() {
    addToFav({
      author,
      quote,
    });
  }
  return (
    <button className="favButton" onClick={() => handleFavQuote()}>
      Select as a favourite quote
    </button>
  );
}
