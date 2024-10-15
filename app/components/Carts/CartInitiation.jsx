import * as React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function CartInitiation({ title, price, image }) {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} 
          alt={title} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='primary'>
            {title} 
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            ${price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="secondary" sx={{color:"white"}}>
          Comprar
        </Button>
        <Button size="small" variant="contained" color="secondary" sx={{color:"white"}}>
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
