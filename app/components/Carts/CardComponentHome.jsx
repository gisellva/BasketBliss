import React from 'react'
import { Box } from '@mui/material';
import CartInitiation from './CartInitiation';
import Grid from '@mui/material/Grid2';

export default function CardsComponent({ items }) {
  return (
    <Box>
      <Grid container spacing={5} sx={{ marginLeft: 3 }}>
        {items.map((item) => (
          <Grid item xs={3} sm={6} md={4} xl={3} key={item.idAncheta}>
            <CartInitiation
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}