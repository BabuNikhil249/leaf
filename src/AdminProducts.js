import React, { useEffect } from "react";
import axios from "axios";

function AdminProducts() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      alert(error.response?.data || 'Failed to delete product');
    }
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2c3e50',
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '25px',
    fontWeight: '700',
    textAlign: 'center',
  };

  const productCardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px 20px',
    marginBottom: '15px',
    backgroundColor: '#fafafa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const productTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
  };

  const deleteButtonStyle = {
    backgroundColor: '#e74c3c',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  const deleteButtonHover = (e) => {
    e.target.style.backgroundColor = '#c0392b';
  };

  const deleteButtonOut = (e) => {
    e.target.style.backgroundColor = '#e74c3c';
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Manage Products</h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', fontSize: '18px' }}>
          No products found.
        </p>
      ) : (
        products.map(product => (
          <div key={product.id} style={productCardStyle}>
            <span style={productTitleStyle}>{product.title}</span>
            <button
              style={deleteButtonStyle}
              onClick={() => handleDelete(product.id)}
              onMouseEnter={deleteButtonHover}
              onMouseLeave={deleteButtonOut}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminProducts;
