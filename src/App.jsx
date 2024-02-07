import { useState } from 'react'

import { useUser } from "@clerk/clerk-react";
import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './utils/firebaseconfig.js';
import { doc, getFirestore, collection, getDoc, getDocs, query, orderBy, limit } from 'firebase/firestore'; // Import query, orderBy, and limit
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Layout from "./components/Layout"

import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="/sign-in/*"
                    element={<SignIn routing="path" path="/sign-in" />}
                />
                <Route
                    path="/sign-up/*"
                    element={<SignUp routing="path" path="/sign-up" />}
                />
                <Route
                    path="/home"
                    element={
                        <>
                            <SignedIn>
                                <Home />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Route>
        </Routes>
    </Router>
  )
}

export default App
