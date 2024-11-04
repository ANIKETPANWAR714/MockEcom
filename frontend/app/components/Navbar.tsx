// app/components/Navbar.tsx
"use client"; // Make sure this is a client component
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  user: { email: string } | null; // Define user prop type
  onLogout: () => void; // Add onLogout function prop
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Call your logout API endpoint here if needed
    // await fetch('/api/logout', { method: 'POST' }); // Uncomment if you have a logout API
    onLogout(); // Call the passed logout function
    router.push('/login'); // Redirect to the login page
  };

  return (
    <nav className="bg-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-3xl font-bold transition duration-300 hover:text-blue-200">
          MockEcom
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white text-lg hover:text-blue-200 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white text-lg hover:text-blue-200 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="text-white text-lg hover:text-blue-200 transition duration-300">
              Checkout
            </Link>
          </li>
          {user ? (
            <>
              <li className="text-white-500 text-lg bg-red-400 rounded ">{user.email}</li> {/* Display user email */}
              <li>
                <button 
                  onClick={handleLogout} 
                  className="bg-white text-blue-800 rounded-md px-4 py-2 transition duration-300 hover:bg-blue-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="bg-white text-blue-800 rounded-md px-4 py-2 transition duration-300 hover:bg-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="bg-white text-blue-800 rounded-md px-4 py-2 transition duration-300 hover:bg-blue-200">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

