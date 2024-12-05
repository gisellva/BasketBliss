"use client";

import NavLogin from '../components/Nav/NavLogin'
import Footer from '../components/Footer'
import OrderStatus from '../components/DeliveryDetailsComponets/OrderStatus';
import { Typography,Box } from '@mui/material';



export default function page() {
  return (
    <div>     
      <NavLogin/>
      <Box  padding={2}>
      <Typography variant="h4" color="hotpink" gutterBottom>
      Estado de tu pedido
      </Typography>
      </Box>
     <OrderStatus/>
      <Footer/>
    </div>
  );
}