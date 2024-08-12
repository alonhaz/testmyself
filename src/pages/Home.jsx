import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [lastEntry, setLastEntry] = useState('');

  const handleEnterToDB = async () => {
    try {
      const response = await fetch('https://sparkling-limit-2c02.alonhaz02.workers.dev/', {
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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#1A1A1D',
    color: '#EAEAEA',
    transform: 'translateX(20px)', // Move the container 20px to the right
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '18px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '2px solid #6A097D',
    backgroundColor: '#333',
    color: '#EAEAEA',
    width: '100%',
    maxWidth: '400px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    margin: '5px',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#6A097D',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    outline: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: '#C060A1',
  };

  const buttonClickStyle = {
    transform: 'scale(0.95)',
  };

  const boxStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '2px solid #6A097D',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#333',
    color: '#EAEAEA',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    transition: 'box-shadow 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = '#C060A1')}
        onBlur={(e) => (e.target.style.borderColor = '#6A097D')}
      />
      <div>
        <button 
          onClick={handleEnterToDB} 
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonClickStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Enter to DB
        </button>
        <button 
          onClick={handleGetLastEntry} 
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          onMouseDown={(e) => e.currentTarget.style.transform = buttonClickStyle.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Get Last Entry
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
