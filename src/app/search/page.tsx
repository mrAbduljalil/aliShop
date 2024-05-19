// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { ProductType } from '@/types/product.types';
// import ProductCard from '@/components/product-card/index';

// const Search = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
//   const searchParams = useSearchParams();
//   const query = searchParams.get('q') || '';

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json();
//       setProducts(data.products);
//       setFilteredProducts(data.products.filter(product =>
//         product.title.toLowerCase().includes(query.toLowerCase())
//       ));
//     };

//     fetchProducts();
//   }, [query]);

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
