"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router for navigation

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log("Signup successful:", data);

      // Set authentication state (optional)
      localStorage.setItem('isAuthenticated', 'true'); // Set to 'true' after signup

      // Redirect to homepage after successful signup
      router.push('/'); // Navigate to the homepage
    } catch (error) {
      console.error("Error signing up:", error);
      // Optionally provide feedback to the user on the error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300 w-full">
            Signup
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-green-500 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

