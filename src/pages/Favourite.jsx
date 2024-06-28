import React from "react";
import PageNav from "../navigation/PageNav";
import FavouriteQuotes from "../components/FavouriteQuotes";

export default function Favourite() {
  return (
    <div>
      <PageNav />
      <h1 className="Fav">Favourite quotes: </h1>
      <FavouriteQuotes />
    </div>
  );
}
