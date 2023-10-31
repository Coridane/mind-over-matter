import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Game from './pages/gamePage';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { setContext } from "@apollo/client/link/context";
import CheckoutForm from "./components/payment/checkoutForm";
import "./components/payment/checkout.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), 
  cache: new InMemoryCache(),
});

function App() {


  return (
  
    <ApolloProvider client={client}>
      {/* mutation to take in information gathered in loggedOut state
       */}
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
            <Route 
              path="/game" 
              element={<Game />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;