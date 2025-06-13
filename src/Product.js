import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product({ userId, cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (p) => {
    setCart([...cart, p]);
    alert(`${p.title} has been added to your cart.`);
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // 5 products per row
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const searchInputStyle = {
    width: '300px',
    padding: '10px',
    margin: '20px auto',
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  };

  // Reorder products: matched by search appear first
  const reorderedProducts = [
    ...products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())),
    ...products.filter(p => !p.title.toLowerCase().includes(searchTerm.toLowerCase())),
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>All Products</h2>

      <input
        type="text"
        placeholder="Search plant by name..."
        style={searchInputStyle}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={gridStyle}>
        {reorderedProducts.map(p => (
          <div key={p.id}  style={cardStyle}>
            <img src={p.imageUrl} alt={p.title} style={imageStyle} />
            <h4>{p.title}</h4>
            <p>₹{p.price}</p>
            <button style={buttonStyle} onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
