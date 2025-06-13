import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || !phone || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.put("http://localhost:8080/api/users/forgot", {
        email,
        phone,
        newPassword
      });

      alert(response.data);
    } catch (error) {
      alert("Failed to update password. Please check your details.");
      console.error(error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fefce8', // soft yellow
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '320px',
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
    backgroundColor: '#f59e0b', // amber
    color: 'white',
    padding: '12px',
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  const linkContainerStyle = {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const linkStyle = {
    fontSize: '14px',
    color: '#1d4ed8',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Forgot Password</h2>
        <input
          style={inputStyle}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="New Password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleSubmit}>Reset Password</button>

        <div style={linkContainerStyle}>
          <Link to="/login" style={linkStyle}>Back to Login</Link>
          <Link to="/signup" style={linkStyle}>New user? Create account</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
