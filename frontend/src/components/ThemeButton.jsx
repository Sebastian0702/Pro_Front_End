// ExempluComponenta.js
import React from 'react';
import  { useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';

const ThemeButton = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const toggleDarkModeAttribute = () => {
      document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    };
  
    useEffect(() => {
      toggleDarkModeAttribute();
    }, [darkMode]);
  
    return (
      // JSX buton sau alt element de toggle
      <button onClick={toggleDarkMode}>
        Toggle
      </button>
    );
  };
  

export default ThemeButton;
