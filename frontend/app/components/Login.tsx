// app/login.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error messages
  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    setErrorMessage(''); // Clear any previous error message

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error message from response
        throw new Error(errorData.message || 'Login failed'); // Use error message from server if available
      }

      const data = await response.json();
      console.log("Login successful:", data);
      localStorage.setItem('user', JSON.stringify(data.user)); // Save user details
      router.push('/'); // Navigate to homepage after successful login
    } catch (error: any) {
      console.error("Error logging in:", error);
      setErrorMessage(error.message); // Set error message to state for displaying
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
        
        {errorMessage && ( // Conditionally render the error message
          <div className="mb-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg py-2 font-bold hover:from-purple-700 hover:to-blue-600 transition duration-200 shadow-md">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


