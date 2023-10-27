import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your own Stripe Publishable Key
const stripePromise = loadStripe('your_stripe_publishable_key');

const CheckoutForm = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async (event) => {
    event.preventDefault();

    // Call your server to create a Payment Intent or Payment Method
    // Send the necessary information to your server, and your server should handle the Stripe API interactions
    try {
      const response = await fetch('/your-payment-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd' }),
      });

      if (response.ok) {
        const result = await response.json();
        const { clientSecret } = result;

        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'John Doe',
            },
          },
        });

        if (error) {
          console.error(error);
        } else if (paymentIntent.status === 'succeeded') {
          setIsPaid(true);
        }
      } else {
        console.error('Failed to create payment intent.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="form-group">
        <label>Card details:</label>
        <CardElement />
      </div>
      <button type="submit" disabled={isPaid}>
        {isPaid ? 'Paid' : 'Pay Now'}
      </button>
    </form>
  );
};

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;
