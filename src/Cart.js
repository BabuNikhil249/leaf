import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart({ cart, setCart, userId }) {
  const [quantities, setQuantities] = useState({});

  // Initialize quantities when cart changes
  useEffect(() => {
    const initialQuantities = cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  const increment = (id) => {
    setQuantities(prev => {
      const updated = { ...prev };           // Copy the previous quantities
      const currentQty = updated[id] || 1;   // Get current quantity or default to 1
      updated[id] = currentQty + 1;          // Increase quantity by 1
      return updated;                        // Return updated object
    });

  };

  const decrement = (id) => {
    setQuantities(prev => {
      const updated = { ...prev };            // Make a copy of the previous state
      const currentQty = updated[id] || 1;    // Get the current quantity or default to 1
      const newQty = currentQty - 1;          // Subtract 1 from the quantity
      if (newQty < 1) {
        // Create a copy of the quantity object without the removed item
        const updatedQty = { ...prev };
        delete updatedQty[id];

        // Remove the product from the cart array
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);

        return updatedQty;
        }

      return {
        ...prev,
        [id]: newQty,
      };
    });
  };

  const placeOrders = async () => {
    for (const p of cart) {
      const quantity = quantities[p.id] || 1;
      for (let i = 0; i < quantity; i++) {
        await axios.post('http://localhost:8080/api/orders', {
          userId: userId,
          productId: p.id,
        });
      }
    }
    alert("Order placed successfully!");
    setCart([]); // Clear the cart
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  };

  const itemStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px 15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
  };

  const quantityControls = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
    userSelect: 'none',
  };

  const placeOrderBtnStyle = {
    marginTop: '20px',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
  };

  const totalCost = cart.reduce((sum, p) => {
    const qty = quantities[p.id] || 1;
    return sum + p.price * qty;
  }, 0);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Cart</h2>

      {cart.map(p => (
        <div key={p.id} style={itemStyle}>
          <span>{p.title}</span>
          <div style={quantityControls}>
            <button onClick={() => decrement(p.id)} style={buttonStyle}>-</button>
            <span>{quantities[p.id] || 1}</span>
            <button onClick={() => increment(p.id)} style={buttonStyle}>+</button>
          </div>
          <span>₹{((quantities[p.id] || 1) * p.price).toFixed(2)}</span>
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <div style={{ fontWeight: 'bold', textAlign: 'right', marginTop: '15px', fontSize: '18px' }}>
            Total: ₹{totalCost.toFixed(2)}
          </div>
          <button style={placeOrderBtnStyle} onClick={placeOrders}>Proceed to Order</button>
        </>
      ) : (
        <p style={{ textAlign: 'center', color: '#888' }}>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
