import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Category from './Category';
import Login from './Login';
import Signup from './Signup';
import Forget from './Forget';
import Products from './Product';
import Cart from './Cart';
import Orders from './Order';
import AddProduct from './AddProduct';
import AdminOrders from './AdminOrders';
import AdminProducts from './AdminProducts';
import Services from './Services';
import Contactus from './Contactus';

function App() {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar userId={userId} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forget />} />
        <Route path="/products" element={<Products userId={userId} cart={cart} setCart={setCart} />} />
       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} userId={userId} />} />

        <Route path="/orders" element={<Orders userId={userId} />} />
        <Route path="/add-product" element={<AddProduct userId={userId} />} />
         <Route path="/delete-product" element={<AdminProducts/>} />
          <Route path="/view-orders" element={<AdminOrders/>} />
      </Routes>
    </Router>
  );
}

export default App;