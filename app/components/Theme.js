// Archivo: theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EC84B5',
    },
    secondary: {
      main: '#B5E1E0', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
 
});

export default theme;
