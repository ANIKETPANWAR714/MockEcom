// app/payment-failure/page.jsx
import React from 'react';

const PaymentFailurePage = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Payment Failed!</h2>
      <p className="text-lg">We're sorry, but your payment could not be processed. Please try again.</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Return to Home
      </a>
    </div>
  );
};

export default PaymentFailurePage;
