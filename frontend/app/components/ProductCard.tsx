// app/components/ProductCard.tsx
import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
