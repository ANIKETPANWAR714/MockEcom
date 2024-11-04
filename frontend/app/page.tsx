// app/page.tsx
"use client"; // Use client-side rendering
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import RecommendedProducts from './components/RecommendedProducts';
import BestSellers from './components/BestSellers';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    const userDetails = localStorage.getItem('user');
    console.log('User details:accessed'); // Check if user details are retrieved correctly
    if (!userDetails) {
      router.push('/login');
    } else {
      setUser(JSON.parse(userDetails));
    }

    fetchProducts();
  }, [router]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <Hero />
      <FeaturedCategories />
      <RecommendedProducts products={products} />
      <BestSellers products={products} />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 eCommerce Mock. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


