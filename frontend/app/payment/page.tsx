"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const items = query.get('cartItems');

    if (items) {
      const parsedItems = JSON.parse(items);
      setCartItems(parsedItems);

      // Calculate total amount
      const total = parsedItems.reduce((sum, item) => sum + item.price, 0);
      setTotalAmount(total);
    } else {
      router.push('/'); // Redirect to homepage if no items found
    }
  }, [router]);

  const handleConfirmPayment = () => {
    // Logic for confirming payment can go here
    alert('Payment confirmed! Thank you for your purchase.');
    router.push('/payment-success'); // Redirect to success page after payment confirmation
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Payment</h2>
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
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button 
        onClick={handleConfirmPayment}
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600 transition"
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;

