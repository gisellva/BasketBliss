import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Flechas personalizadas para el carrusel
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{ position: 'absolute', left: -40, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
  >
    <ArrowBackIosIcon color='secondary' />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{ position: 'absolute', right: -40, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
  >
    <ArrowForwardIosIcon color='secondary' />
  </IconButton>
);

const Carousel = () => {
  const settings = {
   
    infinite: true,            // Ciclo infinito
    speed: 500,                // Velocidad de transición
    slidesToShow: 1,           // Muestra una diapositiva a la vez
    slidesToScroll: 1,         // Avanza una diapositiva en cada transición
    autoplay: true,            // Habilitar el autoplay
    autoplaySpeed: 3000,       // Tiempo de reproducción automática (3 segundos)
    nextArrow: <CustomNextArrow />,  // Flecha personalizada siguiente
    prevArrow: <CustomPrevArrow />,  // Flecha personalizada anterior
  };

  return (
    <Box
      sx={{
        width: '100%',             
        margin: '0 auto',
        position: 'relative',
        mt: 5,                    
        
        height: {
          xs: '30vh',  
          sm: '40vh',  
          md: '50vh',  
          lg: '60vh',  
          xl: '70vh'   
        },
        maxWidth: {
          xs: '90vw',  
          sm: '90vw',  
          md: '85vw',  
          lg: '80vw',  
          xl: '90vw'   
        }
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="/images/1.png"
            alt="Slide 1"
            style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="/images/2.png"
            alt="Slide 2"
            style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="/images/3.png"
            alt="Slide 3"
            style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
          />
        </div>
        
      </Slider>
    </Box>
  );
};

export default Carousel;
