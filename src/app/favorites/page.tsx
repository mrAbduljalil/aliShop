// import React from 'react';
// import { useFavorites } from '../favorites/favoritesContext/favoritesContext';
// import { ProductType } from '@/types/product.types';

const ProductList: React.FC = () => {
  // const { favorites, addToFavorites } = useFavorites();

  // const sampleProducts: ProductType = { id: 1, title: 'Sample Product', description: 'This is a sample product' };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {/* <span>{sampleProducts.title}</span> */}
        {/* <button onClick={() => addToFavorites(sampleProduct)}>Add to Favorites</button> */}
      </div>
      <h2>Favorites</h2>
      <ul>
        {/* {favorites.map(product => ( */}
          {/* <li key={product.id}>{product.title}</li> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default ProductList;
