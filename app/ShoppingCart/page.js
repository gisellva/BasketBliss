"use client";

import NavLogin from '../components/Nav/NavLogin'
import Footer from '../components/Footer'
import CardProduct from '../components/Carts/CardProduct';
import Typography from '@mui/material/Typography'
import DeliveryDetails from '../components/ShoppingCartComponents/DeliveryDetails';
import { Box } from '@mui/material';


export default function page() {
  return (
    <div>
      <NavLogin/>
      <Box
       sx={{
        padding: '16px', 
        marginTop: '24px', 
      }}
      >
      <Typography variant="h3" color="primary" sx={{marginBottom:4}}>Tus productos</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          padding: 4,
          marginTop: 4, 
        }}
      >
   <CardProduct/>
      </Box>     
      <DeliveryDetails/>
      </Box>
      <Footer/>
    </div>
  );
}