import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EmailConfirmation = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 3,
        flexDirection: { xs: 'column', md: 'row' },
        textAlign: 'center',
        marginBottom:3.4 
      }}
    >
      {/* Imagen de ejemplo */}
      <img 
        src="/images/correo.png" 
        alt="Confirm Email" 
        style={{ marginBottom: { xs: 10, md: 0 }, marginRight: { md: 20 } }} 
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          Confirma tu dirección de <br/> correo electrónico
        </Typography>
        
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Para disfrutar de todas las funcionalidades <br/>recibirás un correo electrónico de verificación, <br/>sigue las instrucciones y vuelve a esta página para continuar.
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SearchIcon />} 
          sx={{ marginTop: 2 ,color:"white" }}
        >
          Ok, ya verifiqué mi email
        </Button>
      </Box>
     
    </Box>
  );
}

export default EmailConfirmation;



