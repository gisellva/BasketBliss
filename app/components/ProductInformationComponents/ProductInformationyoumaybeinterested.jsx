import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material'; // Asegúrate de que estos estén correctamente importados
import CartInitiation from '../Carts/CartInitiation';


const Anchetas2 = [
  { title: "Ancheta sorpresa 1", price: 300, image: "https://i.pinimg.com/736x/7d/cf/9f/7dcf9ff691072fea81ea9b124d566dc8.jpg", idAncheta: 4 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/736x/29/81/69/2981695c64c58bcd049bedc3f5a8cc74.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/564x/7f/09/0d/7f090d146f980b82245c2ba8ce851cf7.jpg", idAncheta: 6 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/564x/ab/76/82/ab76825f1caed66319d50429fa9cfd3f.jpg", idAncheta: 62 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/enabled_lo/564x/7a/4e/df/7a4edf49f61e79ae475dfd54bd3bfd9c.jpg", idAncheta: 65 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/564x/c4/dd/92/c4dd92b4a35f395f0e449c519721c83c.jpg", idAncheta: 68 },
 
];

export default function ProductInformation() {
  return (
<Box sx={{ padding: 2 ,marginBottom:3}}> 
    <Stack sx={{
    justifyContent: "center",
    alignItems: "center",
    marginTop:3,
    marginBottom:3
    }}>
    <Typography variant="h4" color="primary" >Desayuno Sorpresa Para Hombre</Typography>
    </Stack>
    <Stack
     direction="column"
     spacing={2}
     sx={{
       justifyContent: "center",
       alignItems: "baseline",
       marginTop:3,
       marginBottom:3,
       marginLeft:3
     }}
    >
    <Typography variant="h6" color="secondary">Te puede interesar</Typography>
    </Stack>
    <Grid container spacing={3} justifyContent="center">
    {Anchetas2.map((ancheta) => (
        <Grid 
        item xs={12} sm={6} md={4} 
        key={ancheta.idAncheta}
        sx={{
            display: 'flex', 
            justifyContent: 'center' 
        }}
        >
        <CartInitiation
            title={ancheta.title}
            price={ancheta.price}
            image={ancheta.image}
        />
        </Grid>
    ))}
    </Grid> 
</Box>
);
}
