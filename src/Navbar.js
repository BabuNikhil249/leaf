import { Link } from 'react-router-dom';

function Navbar({ userId }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const navStyle = {
    backgroundColor: 'green',
    color: 'white',
    height: '70px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: '0 20px',
    boxSizing: 'border-box',
  };

  const linksStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '18px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <nav style={navStyle}>
      <div style={linksStyle}>
        {/* Always shown */}
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/category" style={linkStyle}>Category</Link>

        {/* Conditionally shown */}
        {userId ? (
          <>
            <Link to="/products" style={linkStyle}>Products</Link>
            <Link to="/cart" style={linkStyle}>Cart</Link>
            <Link to="/orders" style={linkStyle}>Orders</Link>
            {userId === 1 && <Link to="/add-product" style={linkStyle}>Add Product</Link>}
            {userId === 1 && <Link to="/view-orders" style={linkStyle}>View Orders</Link>}
            {userId === 1 && <Link to="/delete-product" style={linkStyle}>Delete Product</Link>}
            <button onClick={handleLogout} style={linkStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/signup" style={linkStyle}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
