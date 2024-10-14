// Archivo: app/ThemeProvider.jsx
"use client"; // Marca este componente como del lado del cliente

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/Theme'; 

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> 
      {children}
    </MuiThemeProvider>
  );
}
