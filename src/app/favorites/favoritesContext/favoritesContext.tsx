// 'use client';
// import { createContext, useContext, useState, ReactNode } from 'react';
// import { ProductType } from "@/types/product.types";

// interface FavoritesContextProps {
//   favorites: ProductType[];
//   addToFavorites: (product: ProductType) => void;
// }

// const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

// export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
//   const [favorites, setFavorites] = useState<ProductType[]>([]);

//   const addToFavorites = (product: ProductType) => {
//     setFavorites([...favorites, product]);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export const useFavorites = () => {
//   const context = useContext(FavoritesContext);
//   if (context === undefined) {
//     throw new Error('useFavorites must be used within a FavoritesProvider');
//   }
  
//   return context;
// };
