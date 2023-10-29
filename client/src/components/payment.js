import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const StripeAPIComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Send the paymentMethod.id to your server to complete the payment
      // Replace with your server-side code to handle the payment
      const paymentMethodId = paymentMethod.id;

      // Example: Send the paymentMethodId to your server
      // fetch('/your-server-endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ paymentMethodId }),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.success) {
      //     setIsPaymentSuccessful(true);
      //   } else {
      //     setError(data.error);
      //   }
      // })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Card details:
          <CardElement />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {isPaymentSuccessful && <div className="success">Payment was successful!</div>}
    </div>
  );
};

export default StripeAPIComponent;
