"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://mockecom.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        setErrorMessage(errorData.message || 'Login failed');
      } else {
        const data = await response.json();
        console.log("Login successful:", data);
        
        // Save user details to local storage
        localStorage.setItem('user', JSON.stringify(data)); // Store the user details
        localStorage.setItem('isAuthenticated', 'true'); // Optionally store authentication state
        router.push('/'); // Navigate to the homepage
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
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
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-green-500 hover:underline">Signup here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

