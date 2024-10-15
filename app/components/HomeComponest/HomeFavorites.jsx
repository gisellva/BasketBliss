import { Box, Grid } from '@mui/material';
import CartInitiation from '../Carts/CartInitiation';


const Anchetas2 = [
  { title: "Ancheta sorpresa 1", price: 300, image: "https://i.pinimg.com/control/564x/2e/b0/af/2eb0af86bd1457fcb286aa49e66cf683.jpg", idAncheta: 4 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/control/564x/3e/4a/99/3e4a997993a3b7bf3f900d9f3a8a3578.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/control/564x/cf/77/74/cf7774d30475165c8908b9c9eeb3d10a.jpg", idAncheta: 6 }, 
  { title: "Ancheta sorpresa 1", price: 300, image: "https://i.pinimg.com/control/564x/2e/b0/af/2eb0af86bd1457fcb286aa49e66cf683.jpg", idAncheta: 4 },
  { title: "Ancheta sorpresa 2", price: 350, image: "https://i.pinimg.com/control/564x/3e/4a/99/3e4a997993a3b7bf3f900d9f3a8a3578.jpg", idAncheta: 5 },
  { title: "Ancheta sorpresa 3", price: 400, image: "https://i.pinimg.com/control/564x/cf/77/74/cf7774d30475165c8908b9c9eeb3d10a.jpg", idAncheta: 6 }
];

export default function HomeFavorites() {
    return (
      <Box sx={{ flexGrow: 1, marginTop:12 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Imagen de Nuestros Favoritos */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', marginBottom: 3 }}>
            <img 
              src="/images/Nuestrosfavoritos.png" 
              alt="favoritos" 
              style={{ width: '100%', maxWidth: '700px', height: 'auto' }} 
            />
          </Grid>
  
          <Grid 
            item
            xs={20} 
            md={8} 
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' }, 
              alignItems: 'flex-start', 
              flexDirection: 'column', 
              gap: 3 
            }} 
          >
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
          </Grid>
        </Grid>
      </Box>
    );
  }
