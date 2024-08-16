import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Create ThemeContext
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme);

  useEffect(() => {
    setTheme(systemScheme);
  }, [systemScheme]);

  const colors = theme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

const darkColors = {
  background: '#000',
  text: '#fff',
  inputBackground: '#333',
  placeholderTextColor: '#ccc',
  buttonColor: '#5D76A9',
  errorTextColor: '#ff4d4d',
};

const lightColors = {
  background: '#fff',
  text: '#000',
  inputBackground: '#fff',
  placeholderTextColor: '#666',
  buttonColor: '#5D76A9',
  errorTextColor: '#d9534f',
};

export default ThemeProvider;