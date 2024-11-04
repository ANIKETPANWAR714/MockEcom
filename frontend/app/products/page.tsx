// ProductsPage.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import products from '../lib/productsData'; // Adjust the path as necessary

const ProductsPage = () => {
  const router = useRouter();

  const handleAddToCart = (product) => {
    const cartItem = JSON.stringify([product]);
    localStorage.setItem('cart', cartItem);
    router.push('/checkout');
  };

  const handleViewDetails = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleViewDetails(product.id)}
                className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;




