'use client'
import { useFavorites } from '../favoritesContext';
import ProductCard from "@/components/product-card";

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div>
    <h1>Favorite</h1>
    {favorites.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  )
}

export default Favorites