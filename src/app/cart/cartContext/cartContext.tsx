'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType } from "@/types/product.types";

interface CartContextProps {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw Error('useCart must be used within a CartProvider');
  }
  return context;
};
