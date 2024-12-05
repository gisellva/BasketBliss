import React from "react";
import { Box, Typography, Button, Grid, Pagination, Stack } from "@mui/material";
import CardProduct from "../Carts/CardProduct"; // Asegúrate de que la ruta sea correcta

const Searching = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      {/* Encabezado */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        <img  src="/images/av.png" alt="avion" style={{
    width: "100%", 
    maxWidth: "400px", 
    height: "auto", 
  }}/>
      </Box>
      <Typography variant="h4" color="primary" >Anchetas sorpresa</Typography>
      <Stack
  direction="row"
  spacing={40}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:-10,
    marginLeft:6
  }}
>
      {/* Filtros */}
      <Box sx={{ display: "flex", gap: "16px", marginBottom: "32px", flexDirection: "column"}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#BDE0FE",
            color: "#000",
            "&:hover": { backgroundColor: "#A0D2F5" },
          }}
        >
          Categorías
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#BDE0FE",
            color: "#000",
            "&:hover": { backgroundColor: "#A0D2F5" },
          }}
        >
          Género
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#BDE0FE",
            color: "#000",
            "&:hover": { backgroundColor: "#A0D2F5" },
          }}
        >
          Ocasión
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#BDE0FE",
            color: "#000",
            "&:hover": { backgroundColor: "#A0D2F5" },
          }}
        >
          Lo más vendido
        </Button>
      </Box>

      {/* Lista de productos */}
      <Grid container spacing={2}>
        {[...Array(3)].map((_, index) => (
          <Grid item xs={12} key={index}>
         
            <CardProduct
              titulo="Ancheta con mucho amor"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              precio="$200.000"
              imagen="ruta-a-la-imagen" 
            />
          </Grid>
        ))}
      </Grid>
      </Stack>
      {/* Paginación */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default Searching;
