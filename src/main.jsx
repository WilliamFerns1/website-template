import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider } from "@chakra-ui/react"

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <ChakraProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
    </ChakraProvider>
    </ClerkProvider>
)
