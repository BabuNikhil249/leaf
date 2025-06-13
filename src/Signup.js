import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({});

  const handleSignup = async () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'place', 'password', 'confirmPassword'];
    for (let field of requiredFields) {
      if (!form[field]) {
        alert(`Please enter ${field}`);
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    //  Phone number should be exactly 10 digits
    if (!/^\d{10}$/.test(form.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const checkRes = await axios.post('http://localhost:8080/api/users/check', {
        email: form.email,
        phone: form.phone
      });

      if (checkRes.data.exists) {
        alert("User already exists with this email or phone number.");
        return;
      }

      const signupRes = await axios.post('http://localhost:8080/api/users/signup', form);
      alert(signupRes.data);

    } catch (error) {
      alert("Something went wrong during signup.");
      console.error(error);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ecfdf5',
    fontFamily: 'Arial, sans-serif',
  };

  const formBoxStyle = {
    backgroundColor: '#fff',
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
    width: '100%',
    padding: '12px',
    backgroundColor: '#16a34a',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const linkStyle = {
    marginTop: '25px',
    fontSize: '14px',
    color: '#1d4ed8',
    display: 'block',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={formBoxStyle}>
        <h2>Leaf Now - Signup</h2>

        <input
          style={inputStyle}
          placeholder="FirstName"
          type="text"
          onChange={e => setForm({ ...form, firstName: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="LastName"
          type="text"
          onChange={e => setForm({ ...form, lastName: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Email"
          type="text"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Phone"
          type="text"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Place"
          type="text"
          onChange={e => setForm({ ...form, place: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Password"
          type="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="ConfirmPassword"
          type="password"
          onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <button style={buttonStyle} onClick={handleSignup}>Sign Up</button>

        <Link to="/login" style={linkStyle}>Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Signup;
