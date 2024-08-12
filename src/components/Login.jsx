import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://useruser.alonhaz02.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.authenticated) {
        localStorage.setItem('authenticated', true);
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Page</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1A1A1D',
    color: '#EAEAEA',
    padding: '20px',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '28px',
    color: '#C060A1',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '2px solid #6A097D',
    backgroundColor: '#444',
    color: '#EAEAEA',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#6A097D',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    outline: 'none',
    width: '100%',
    marginTop: '20px',
  },
  buttonHoverStyle: {
    backgroundColor: '#C060A1',
  },
};

export default Login;
