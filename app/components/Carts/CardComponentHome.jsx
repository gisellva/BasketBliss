import React from 'react'
import { Box, Grid } from '@mui/material';
import CartInitiation from './CartInitiation';

export default function CardsComponet() {

  const Anchetas = [
    {title:"Ancheta sopresa", price:300,image:"https://i.pinimg.com/564x/c2/11/d2/c211d2b9f8563978715b47156552e32b.jpg",idAncheta:1},
    {title:"Ancheta sopresa", price:300,image:"https://i.pinimg.com/564x/c2/11/d2/c211d2b9f8563978715b47156552e32b.jpg",idAncheta:2},
    {title:"Ancheta sopresa", price:300,image:"https://i.pinimg.com/564x/c2/11/d2/c211d2b9f8563978715b47156552e32b.jpg",idAncheta:3}
   ]
 

    return (
        <Box  >
        <Grid container spacing={5} sx={{marginLeft:3 }} >
          { Anchetas.map((ancheta) => (
            <Grid item xs={3} sm={6} md={4} xl={3} key={ancheta.idAncheta}>
              <CartInitiation
               title={ancheta.title}
               image={ancheta.image}
               price={ancheta.price}
             />
            </Grid>
          ))}
        </Grid>
        </Box>
      );
    } 