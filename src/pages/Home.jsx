import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for bubble effects

const Home = ({ onLogout }) => {
  const [text, setText] = useState('');
  const [lastEntry, setLastEntry] = useState('');
  const navigate = useNavigate();

  const handleEnterToDB = async () => {
    try {
      const response = await fetch('https://copyme.site/dataworker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data entered:', data);
        setLastEntry(text);
        setText('');
      } else {
        console.error('Failed to enter data, status:', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleGetLastEntry = async () => {
    try {
      const response = await fetch('https://sparkling-limit-2c02.alonhaz02.workers.dev/?action=get_last', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setLastEntry(data.text);
      } else {
        console.error('Failed to fetch last entry, status:', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleLogout = () => {
    onLogout(); // Notify App component of logout
    navigate('/'); // Redirect to login page
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw', // Full viewport width
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    background: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
    color: '#EAEAEA',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '18px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '2px solid #FF0081',
    backgroundColor: '#222',
    color: '#EAEAEA',
    width: '100%',
    maxWidth: '400px',
    outline: 'none',
    boxShadow: '0 0 10px rgba(255, 0, 129, 0.7)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    margin: '5px',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#FF0081',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
    boxShadow: '0 0 10px rgba(255, 0, 129, 0.8)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FF6F91',
    boxShadow: '0 0 15px rgba(255, 0, 129, 1)',
  };

  const buttonClickStyle = {
    transform: 'scale(0.95)',
    boxShadow: '0 0 10px rgba(255, 0, 129, 0.6)',
  };

  const boxStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '2px solid #FF0081',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#222',
    color: '#EAEAEA',
    boxShadow: '0 0 20px rgba(255, 0, 129, 0.7)',
    transition: 'box-shadow 0.3s ease',
    whiteSpace: 'pre-wrap', // Preserve spaces and line breaks
    overflowY: 'auto', // Add vertical scrollbar if needed
    maxHeight: '200px', // Limit the height of the box
  };

  const linkContainerStyle = {
    marginBottom: '20px', // Space between links and other content
  };

  const linkStyle = {
    display: 'block', // Stack links vertically
    color: '#FF0081',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '10px 0', // Vertical margin
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#FF6F91',
  };

  return (
    <div style={containerStyle}>
      <div className="bubbles"></div> {/* Bubble effect container */}
      <div style={linkContainerStyle}>
      <a href="GCPW" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>irm https://raw.githubusercontent.com/AyzinA/Powershell-Scripts/main/GCPW_IN.ps1 | iex</a>
        <a href="MAC" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>https://dl.google.com/dl/secureconnect/install/mac/EndpointVerification.dmg</a>
        <a href="WIN" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>https://pornhub.com</a>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = '#FF6F91')}
        onBlur={(e) => (e.target.style.borderColor = '#FF0081')}
      />
      <div>
        <button 
          onClick={handleEnterToDB} 
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonClickStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Enter to DB
        </button>
        <button 
          onClick={handleGetLastEntry} 
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonClickStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Get Last Entry
        </button>
        <button 
          onClick={handleLogout} 
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonClickStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Logout
        </button>
      </div>
      <div style={boxStyle}>
        <h3>Last Entry:</h3>
        <div>{lastEntry}</div>
      </div>
    </div>
  );
};

export default Home;
