import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/users/login', { email, password });
      setUserId(res.data.id);
      alert('Login successful!');
      navigate('/products'); // Redirect after login to product page
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
      setLoginFailed(true);
    }
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0fdf4',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '12px',
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const linkStyle = {
    marginTop: '30px',
    fontSize: '14px',
    color: '#1d4ed8',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const forgotLinkStyle = {
    marginTop: '15px',
    fontSize: '14px',
    color: '#ef4444',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Leaf Now - Login</h2>
        <input
          style={inputStyle}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          aria-label="Email"
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <button style={buttonStyle} onClick={handleLogin}>Login</button>

        <Link to="/signup" style={linkStyle}>New user? Create account</Link>
        <br />
        {loginFailed && (
          <Link to="/forgot" style={forgotLinkStyle}>Forgot password?</Link>
        )}
      </div>
    </div>
  );
}

export default Login;
