import React, { useState } from 'react';
import axios from 'axios';

function AddProduct({ userId }) {
  const [form, setForm] = useState({});

  const handleAdd = async () => {
    const res = await axios.post(`http://localhost:8080/api/products/add/${userId}`, form);
    alert(res.data);
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#28a745',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add Product</h2>
      <input
        placeholder="Title"
        style={{ ...inputStyle, ...(focusedInput === 'title' ? inputFocusStyle : {}) }}
        onChange={e => setForm({ ...form, title: e.target.value })}
        onFocus={() => setFocusedInput('title')}
        onBlur={() => setFocusedInput(null)}
      />
      <input
        placeholder="Image URL"
        style={{ ...inputStyle, ...(focusedInput === 'imageUrl' ? inputFocusStyle : {}) }}
        onChange={e => setForm({ ...form, imageUrl: e.target.value })}
        onFocus={() => setFocusedInput('imageUrl')}
        onBlur={() => setFocusedInput(null)}
      />
      <input
        placeholder="Price"
        type="number"
        style={{ ...inputStyle, ...(focusedInput === 'price' ? inputFocusStyle : {}) }}
        onChange={e => setForm({ ...form, price: parseFloat(e.target.value) })}
        onFocus={() => setFocusedInput('price')}
        onBlur={() => setFocusedInput(null)}
      />
      <button
        style={buttonStyle}
        onClick={handleAdd}
        onMouseEnter={e => (e.target.style.backgroundColor = '#218838')}
        onMouseLeave={e => (e.target.style.backgroundColor = '#28a745')}
      >
        Add
      </button>
    </div>
  );
}

export default AddProduct;
