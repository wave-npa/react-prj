import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePost) => {},
  removeFavorite: (postId) => {},
  isFavorite: (postId) => {},
});

export function FavoritesContextHandler(data) {
  const [Favorites, setFavorites] = useState([]);

  function addFavoriteHandler(favoritePost) {
    //concat is push() but return array
    setFavorites((prevFavorite) => {
      return prevFavorite.concat(favoritePost);
    });
  }

  function removeFavoriteHandler(postId) {
    setFavorites((prevFavorite) => {
        return prevFavorite.filter(post => post.id !== postId);
    });
  }

  function isFavoriteHandler(postId) {
    return Favorites.some(post => post.id === postId);
  }

  const context = {
    favorites: Favorites,
    totalFavorites: Favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {data.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
