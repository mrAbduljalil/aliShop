'use client'

import ProductCard from "@/components/product-card";
import { useCart } from "../cartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
    <h1>Cart</h1>
    <ul>
      {cartItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  </div>
  );
};

export default Cart;


