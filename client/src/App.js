import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./components/payment/checkoutForm";
import "./components/payment/checkout.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            {/* if logged out -> render Login */}
            <Route 
            path="/login"
            element={<Login />}
            />
             {/* if logged in -> render Home */}
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* <Route 
              path="/game" 
              element={<Game />}
            /> */}
            <Route 
            path="/checkout"
            element={<CheckoutForm />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;