// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import CakeDetails from './pages/CakeDetails';
import Cart from './components/Cart';
import'./App.css';
function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (cake) => {
        setCartItems([...cartItems, cake]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cakes" element={<Cakes />} />
                    <Route path="/cakes/:id" element={<CakeDetails addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
