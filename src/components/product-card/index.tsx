'use client'
// import { useCart } from '@/app/cart/cartContext/cartContext';
// import { useFavorites } from '@/app/favorites/favoritesContext/favoritesContext';
import { ProductType } from "@/types/product.types";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import { FaBasketShopping } from "react-icons/fa6";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";


interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [liked, setLiked] = useState<boolean>(false);
  // const { addToFavorites } = useFavorites();
  // const { addToCart } = useCart();

  const handleLike = () => {
    setLiked(!liked);
    // addToFavorites(product);
  };

  const handleAddToCart = () => {
    // addToCart(product);
  };

  return (
    <div className="w-[280px] shadow-md p-5 rounded-md">
      <button onClick={handleLike}>
        {liked ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={194}
        height={194}
        className="h-[194px] object-cover"
      />

      <div className="relative">
        <div className="text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8">
          {Math.round(product.discountPercentage)}%
        </div>
        <div>{product.title}</div>

        <div className="line-through">{product.price}$</div>
        <div className="">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
          $
        </div>
        <br />
        <button className="cartBtn" onClick={handleAddToCart}>
          <FaBasketShopping />
        </button>
        <br />
        <Link href={`/product/${product.id}`}>
          <button className="detailsBtn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
