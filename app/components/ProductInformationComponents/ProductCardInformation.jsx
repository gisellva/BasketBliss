import React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';

export const ProductCardInformation = ({ title, price, description, contents, imageUrl }) => {
  return (
    <Box sx={{ padding: 4 , marginTop:3}}>
      <Grid container spacing={4}>
    
        <Grid item xs={12} sm={5}>
          <Box
            component="img"
            src={imageUrl}
            alt={title}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              backgroundColor: '#E0E0E0',
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Typography variant="h5" color="primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color: '#8BD3DD', fontWeight: 'bold' }}>
            {price}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {description}
          </Typography>

          <Typography variant="subtitle1" color="secondary" sx={{ marginBottom: 1 }}>
            Contiene:
          </Typography>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {contents.map((item, index) => (
              <li key={index}>
                <Typography variant="body2">{item}</Typography>
              </li>
            ))}
          </ul>

          
          <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 3 }}>
            <Button variant="outlined" sx={{ color: '#8BD3DD', borderColor: '#8BD3DD' }}>
              - 1 +
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#8BD3DD', color: 'white' }}>
              Añadir al carrito
            </Button>
          </Stack>
        </Grid>
      </Grid>

      
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="subtitle2" color="primary" sx={{ marginBottom: 1 }}>
          Condiciones:
        </Typography>
        <Typography variant="body2">
          • Si realizas tu orden sobre este producto, se diseñará y entregará igual a la foto publicada.
        </Typography>
        <Typography variant="body2">
          • Contacta a nuestro WhatsApp autorizado para confirmar detalles adicionales.
        </Typography>
      </Box>
    </Box>
  );
};



