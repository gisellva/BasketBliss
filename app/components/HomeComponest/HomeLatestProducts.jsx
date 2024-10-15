import { Box, Grid, Typography } from '@mui/material';
import CartInitiation from '../Carts/CartInitiation';


const Anchetas2 = [
  { title: "Ancheta sorpresa 1", price: 300, image: "https://i.pinimg.com/control/564x/2e/b0/af/2eb0af86bd1457fcb286aa49e66cf683.jpg", idAncheta: 4 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/control/564x/3e/4a/99/3e4a997993a3b7bf3f900d9f3a8a3578.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/control/564x/cf/77/74/cf7774d30475165c8908b9c9eeb3d10a.jpg", idAncheta: 6 }, 
  { title: "Ancheta sorpresa 1", price: 300, image: "https://i.pinimg.com/control/564x/2e/b0/af/2eb0af86bd1457fcb286aa49e66cf683.jpg", idAncheta: 4 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/control/564x/3e/4a/99/3e4a997993a3b7bf3f900d9f3a8a3578.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/control/564x/cf/77/74/cf7774d30475165c8908b9c9eeb3d10a.jpg", idAncheta: 6 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/control/564x/3e/4a/99/3e4a997993a3b7bf3f900d9f3a8a3578.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/control/564x/cf/77/74/cf7774d30475165c8908b9c9eeb3d10a.jpg", idAncheta: 6 }
];

export default function HomeLatestProducts() {
    return (
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        
        <Typography variant="h4" color="primary" sx={{ textAlign: 'center',marginBottom:9 }}>
  Últimos productos
</Typography>
         
          <Grid 
            item
            xs={20} 
            md={8} 
           
          >
            <Grid container spacing={4} justifyContent="center">
              {Anchetas2.map((ancheta) => (
                <Grid 
                  item xs={12} sm={6} md={3} 
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
        
        </Grid>
      </Box>
    );
  }
