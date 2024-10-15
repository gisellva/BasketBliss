import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#8BD3DD',  // Color de fondo
        padding: '20px 0',           // Espaciado del pie de página
        marginTop: 'auto',           // Asegura que el pie de página se mantenga al final
        textAlign: 'center',         // Centra el texto
      }}
    >
      <Typography variant="body1" sx={{color:"white"}}>
      BasketBliss
      </Typography>
    </Box>
  );
}
