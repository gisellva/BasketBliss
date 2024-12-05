import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://i.pinimg.com/564x/c2/11/d2/c211d2b9f8563978715b47156552e32b.jpg"
        title="green iguana"
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography gutterBottom variant="h5" component="div" color='primary'>
        Ancheta con mucho amor 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </Typography>
        <Typography color='secondary' variant="body2" >
        $200.000
        </Typography>
      </CardContent>
    </Box>
    <CardActions>
    <IconButton aria-label="shopping" color='initial'>
    <ShoppingCartIcon/>
    </IconButton>       
    <IconButton aria-label="favorite" color='primary'>
     <FavoriteIcon />
    </IconButton>
    </CardActions>
  </Card>
  
  );
}
