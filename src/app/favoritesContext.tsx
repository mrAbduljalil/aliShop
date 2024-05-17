import React, { createContext, useState, useContext, ReactNode } from 'react';

// Mahsulot turi
type ProductType = {
  id: string;
  title: string;
  // ...
};

// Context uchun turlar
type FavoritesContextType = {
  favorites: ProductType[];
  addToFavorites: (product: ProductType) => void;
};

// Boshlang'ich qiymat
const initialFavoritesContext: FavoritesContextType = {
  favorites: [],
  addToFavorites: () => {},
};

// Favorites context yaratiladi
const FavoritesContext = createContext<FavoritesContextType>(initialFavoritesContext);

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);

  const addToFavorites = (product: ProductType) => {
    setFavorites([...favorites, product]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Context ni o'qish uchun hook yaratiladi
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
