import React, { createContext, useContext, useState } from "react";

export interface Product {
  productimage: string;
  productname: string;
  productdescription: string;
  productprice: string;
  productId: number;
}

interface FavoritesContextProps {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (productId: number) => {
    const updatedFavorites = favorites.filter(
      (product) => product.productId !== productId
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
