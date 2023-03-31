import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const FavoriteContext = createContext();

export function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const infos = useMemo(
    () => ({ favorites, setFavorites }),
    [favorites, setFavorites]
  );

  return (
    <FavoriteContext.Provider value={infos}>
      {children}
    </FavoriteContext.Provider>
  );
}
FavoriteContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFavoriteContext = () => useContext(FavoriteContext);
