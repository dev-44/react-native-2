import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesProvider = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsIds((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
