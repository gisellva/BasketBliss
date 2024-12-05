import React from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import CardProduct from '../Carts/CardProduct'; 

export default function CheckoutPage() {
  return (
    <Box sx={{ padding: 4, fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Título principal */}
      <Typography variant="h4" color="hotpink" gutterBottom>
        Detalles del pedido
      </Typography>

      {/* Sección de cartas de productos */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 4 }}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Box>

      {/* Resumen y detalles de envío */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        {/* Detalles de envío */}
        <Box>
          <Typography variant="body1" color="hotpink" gutterBottom>
            Envío: 
            <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>
              {' '}Alrededores (Madrid, Cajicá): $28,000
            </Typography>
          </Typography>
          <Typography variant="body1" color="hotpink" gutterBottom>
            Dirección: 
            <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>
              {' '}calle 44 324-58
            </Typography>
          </Typography>
          <Typography variant="body1" color="hotpink" gutterBottom>
            Hora de entrega: 
            <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>
              {' '}10:00 am
            </Typography>
          </Typography>
          <Typography variant="body1" color="hotpink">
            Fecha de entrega: 
            <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>
              {' '}14/06/2023
            </Typography>
          </Typography>
        </Box>

        {/* Resumen de compra */}
        <Box sx={{ textAlign: 'center', marginLeft: 4 }}>
          <Typography variant="h5" color="hotpink" gutterBottom>
            Resumen de compra
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="payment-method" name="payment-method" defaultValue="paypal">
              <FormControlLabel
                value="paypal"
                control={<Radio color="primary" />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" style={{ width: 24 }} />
                    <Typography>Paypal</Typography>
                  </Box>
                }
              />
            </RadioGroup>
          </FormControl>
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            Total: <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>$200,000</Typography>
          </Typography>
        </Box>
      </Box>

      {/* Botón de pagar */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#b2ebf2',
            color: 'white',
            textTransform: 'none',
            padding: '12px 24px',
            fontSize: '16px',
          }}
        >
          Pagar
        </Button>
      </Box>
    </Box>
  );
}
