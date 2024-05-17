// cartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProductType } from "@/types/product.types";

type CartContextType = {
  cartItems: ProductType[];
  addToCart: (product: ProductType) => void;
};

const initialCartContext: CartContextType = {
  cartItems: [],
  addToCart: () => {},
};

const CartContext = createContext<CartContextType>(initialCartContext);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
