import { useData } from "../context/FetchContext";

export default function Quote() {
  const { favourites } = useData();
  console.log(favourites);
  return (
    <div>
      {favourites.map((favourite) => (
        <Favourite favObj={favourite} key={favourite.favquote} />
      ))}
    </div>
  );
}
function Favourite({ favObj }) {
  return (
    <div>
      <p className="favQuote">"{favObj.favquote}"</p>
      <p className="favAuthor">{favObj.favauthor}</p>
    </div>
  );
}
