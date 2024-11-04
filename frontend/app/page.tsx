// app/page.tsx
"use client"; // Use client-side rendering
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import RecommendedProducts from './components/RecommendedProducts';
import BestSellers from './components/BestSellers';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const HomePage = () => {
  const [products, setProducts] = useState([]); // State for product data
  const [user, setUser] = useState<{ email: string } | null>(null); // State to hold user details
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    const userDetails = localStorage.getItem('user'); // Get user details from local storage
    if (!userDetails) {
      router.push('/login'); // Redirect to login if no user found
    } else {
      setUser(JSON.parse(userDetails)); // Set user details if found
    }

    fetchProducts();
  }, [router]);

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user details from local storage
    router.push('/login'); // Redirect to login page
  };

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} /> {/* Pass user details and logout function to Navbar */}
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

