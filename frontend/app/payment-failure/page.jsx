// app/payment-failure/page.jsx
import React from 'react';
import Link from 'next/link';

const PaymentFailurePage = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Payment Failed!</h2>
      <p className="text-lg">We&apos;re sorry, but your payment could not be processed. Please try again.</p>
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Return to Home
      </Link>
    </div>
  );
};

export default PaymentFailurePage;

