import React from 'react';
import { useTheme } from './ThemeContext';

const Service = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div style={{ 
            padding: '50px', 
            textAlign: 'center',
            backgroundColor: isDarkMode ? 'black' : '#f4f4f4',
            color: isDarkMode ? '#ffffff' : '#000000'
        }}>
            <h1>Our Services</h1>
            <p>We provide the best Mediterranean experience.</p>
            
            <button onClick={toggleTheme} style={buttonStyle}>
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginTop: '20px',
    
};

export default Service;