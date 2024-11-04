// ProductDetailPage.js

import React from 'react';
import products from '../../lib/productsData'; // Adjust the path as necessary

const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  const product =await  products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p className="text-center text-xl font-semibold mt-10">Product not found.</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">{product.name}</h2>
      <div className="flex justify-center">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto mb-4 rounded-md" />
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        <p className="text-lg mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;











