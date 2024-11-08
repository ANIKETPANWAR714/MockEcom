// app/payment-success/page.jsx
import React from 'react';
import Link from 'next/link';

const PaymentSuccessPage = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
      <p className="text-lg">Thank you for your purchase. Your order has been processed successfully.</p>
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Return to Home
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
