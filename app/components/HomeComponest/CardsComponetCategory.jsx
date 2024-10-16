import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function CardsComponetCategory() {
  const Category = [
    { title: "Detalles para mujer", image: "https://i.pinimg.com/564x/c2/11/d2/c211d2b9f8563978715b47156552e32b.jpg", idCategory: 1 },
    { title: "Detalles para hombre", image: "https://i.pinimg.com/564x/73/19/b1/7319b1255714a4a0949e2097740a7dd8.jpg", idCategory: 2 },
    { title: "Detalles para niños", image: "https://i.pinimg.com/564x/3b/cd/e8/3bcde8e741c139461539b7300f42cb52.jpg", idCategory: 3 },
    { title: "Detalles para días especiales", image: "https://i.pinimg.com/564x/0f/ce/ec/0fceec11244b6ff937a4352b1bab3d71.jpg", idCategory: 4 }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 0, marginTop: 
    {xs: 16,sm:3,   md: 6,  lg: -10 }
     }}>
      <Stack sx=
      {{
       justifyContent: "center",
       alignItems: "center",
       marginBottom:9
      }}>
      <Typography variant="h4" color="primary" >Nuestras categorías</Typography>
      </Stack>
     
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center" 
      >
        
        {Category.map((category) => (
          <Grid
            item
            xs={12} 
            sm={6}   
            md={4}  
            lg={3}   
            key={category.idCategory}
          >
            <Card sx={{ maxWidth: 290, margin: '0 auto' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={category.image}
                title={category.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='primary'>
                  {category.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }} >
                <Button size="small" variant="contained" color="secondary" startIcon={<SearchIcon/>} sx={{color:"white"}}>
                  Ver Mas
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


