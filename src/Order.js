import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders({ userId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/orders/user/${userId}`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.error('Failed to fetch orders', err));
  }, [userId]);

  const handleRemove = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8080/api/orders/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
      alert('Order removed successfully');
    } catch (error) {
      alert('Failed to remove order');
      console.error(error);
    }
  };

  // Calculate total cost
  const totalCost = orders.reduce((sum, order) => sum + (order.product?.price || 0), 0);

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Orders</h2>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No orders found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Product</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price (₹)</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.product?.title}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{order.product?.price.toFixed(2)}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.status}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button
                    onClick={() => handleRemove(order.id)}
                    style={{
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            {/* Total Cost row */}
            <tr style={{ backgroundColor: '#f9f9f9', fontWeight: 'bold' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }} colSpan={1}>
                Total:
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{totalCost.toFixed(2)}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }} colSpan={2}></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;
