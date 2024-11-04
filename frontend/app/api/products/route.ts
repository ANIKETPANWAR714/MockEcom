// app/api/products/route.ts
import { NextResponse } from 'next/server';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description of Product 1.',
    price: 29.99,
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description of Product 2.',
    price: 39.99,
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description of Product 3.',
    price: 19.99,
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description of Product 4.',
    price: 49.99,
    image: '/images/product4.jpg',
  },
];

export async function GET() {
  return NextResponse.json(products);
}
