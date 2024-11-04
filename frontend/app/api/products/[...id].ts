// app/api/products/[id].ts
import { NextResponse } from 'next/server';

const products = [
  {
    id: '1',
    title: 'Product 1',
    image: '/images/product1.jpg',
    price: 29.99,
  },
  {
    id: '2',
    title: 'Product 2',
    image: '/images/product2.jpg',
    price: 49.99,
  },
  {
    id: '3',
    title: 'Product 3',
    image: '/images/product3.jpg',
    price: 19.99,
  },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = products.find((prod) => prod.id === params.id);
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
