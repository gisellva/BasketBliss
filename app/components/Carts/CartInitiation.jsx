import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';

export default function CartInitiation({title, image,price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
        ${price} mil pesos
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button  variant="soft"  color="info" size="lg">Comprar</Button>
        <Button  variant="soft"  color="info" size="lg">ver más</Button>
      </CardActions>
    </Card>
  );
}