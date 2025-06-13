import React, { useEffect, useState } from 'react';
import axios from 'axios';

const statusOptions = [
  "Delivered Successfully",
  "Product will be delivered soon",
  "Product expired"
];

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  const handleStatusChange = (orderId, status) => {
    axios.put(`http://localhost:8080/api/orders/${orderId}/status`, { status })
      .then(() => {
        setOrders(orders.map(order =>
          order.id === orderId ? { ...order, status } : order
        ));
      })
      .catch(err => console.error('Error updating status:', err));
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '30px',
    fontWeight: '600',
    color: '#2c3e50',
  };

  const orderCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  };

  const labelStyle = {
    fontWeight: '600',
    marginBottom: '6px',
    display: 'block',
    color: '#34495e',
  };

  const textStyle = {
    marginBottom: '12px',
    fontSize: '16px',
  };

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>All Customer Orders</h2>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', fontSize: '18px' }}>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={orderCardStyle}>
            <p style={textStyle}><span style={labelStyle}>Product:</span> {order.product?.title}</p>
            <p style={textStyle}><span style={labelStyle}>User:</span> {order.user?.firstName} {order.user?.lastName}</p>
            <label style={labelStyle} htmlFor={`status-${order.id}`}>Status:</label>
            <select
              id={`status-${order.id}`}
              value={order.status || ""}
              onChange={e => handleStatusChange(order.id, e.target.value)}
              style={selectStyle}
            >
              <option value="">--Select Status--</option>
              {statusOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
