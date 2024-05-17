import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.brand}</p>
    </div>
  );
};

export default ProductDetails;
