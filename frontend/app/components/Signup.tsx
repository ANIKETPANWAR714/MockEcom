"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://mockecom.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message === 'User already exists') {
          // Handle specific error message
          setErrorMessage('This email is already registered. Please use a different email.');
        } else {
          throw new Error(errorData.message || 'Signup failed');
        }
      } else {
        const data = await response.json();
        console.log("Signup successful:", data);
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/'); // Navigate to the homepage
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Signup</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
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
          <button type="submit" disabled={loading} className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300 w-full">
            {loading ? 'Signing Up...' : 'Signup'}
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
