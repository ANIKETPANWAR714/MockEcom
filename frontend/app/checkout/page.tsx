"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleCompletePurchase = () => {
    // Serialize cart items to a query string
    const queryString = new URLSearchParams({ cartItems: JSON.stringify(cartItems) }).toString();
    
    // Redirect to the payment page with query parameters
    router.push(`/payment?${queryString}`);
  };

  if (cartItems.length === 0) {
    return <p className="text-center">No items in your cart.</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
            </div>
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
          </div>
        ))}
      </div>
      <button 
        onClick={handleCompletePurchase}
        className="bg-green-500 text-white rounded px-4 py-2 mt-4 hover:bg-green-600 transition"
      >
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;

