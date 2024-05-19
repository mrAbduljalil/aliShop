'use client'
import { useCart } from '@/app/cart/cartContext/cartContext';
import ProductCard from "@/components/product-card";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Cart;
