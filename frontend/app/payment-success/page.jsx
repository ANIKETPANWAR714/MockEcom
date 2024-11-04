// app/payment-success/page.jsx
import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
      <p className="text-lg">Thank you for your purchase. Your order has been processed successfully.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Return to Home
      </a>
    </div>
  );
};

export default PaymentSuccessPage;
