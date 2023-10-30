import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import { Login } from './pages/Login';

// Register is a tab on the login page, so an import for Register is not necessary.

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
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;