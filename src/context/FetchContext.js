import React, { createContext, useEffect, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    quote: "",
    author: "",
  });
  const [favourites, setFavourites] = useState([]);
  const apiCall = () => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/quotes/random");

        if (!res.ok)
          throw new Error(
            "Something went wrong with the fetching random quotes"
          );

        const resdata = await res.json();
        // console.log(resdata);
        setData({
          quote: resdata.quote,
          author: resdata.author,
        });
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  };

  useEffect(() => {
    apiCall();
  }, []);

  const addToFav = (data) => {
    setFavourites([
      ...favourites,
      {
        favquote: data.quote,
        favauthor: data.author,
      },
    ]);
  };
  console.log(favourites);
  return (
    <DataContext.Provider
      value={{
        quote: data.quote,
        author: data.author,
        request: apiCall,
        addToFav,
        favourites,

        // favquote: favourites.favquote,
        // favauthor: favourites.favauthor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of the DataProvider");
  return context;
}

export { useData, DataProvider };
