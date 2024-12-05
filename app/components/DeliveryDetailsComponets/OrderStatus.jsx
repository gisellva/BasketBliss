import React from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import CardProduct from "../Carts/CardProduct"; 

const OrderStatus = () => {
  const steps = [
    "Pedido realizado",
    "Elaboración del producto",
    "Producto en camino",
    "Producto entregado",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "24px", 
      }}
    >
  

      {/* Tarjeta del producto */}
      <Box marginBottom={2}>
        <CardProduct />
      </Box>

      {/* Fecha de llegada */}
      <Typography
        variant="body1"
        fontWeight="medium"
        color="textSecondary"
        marginBottom={2}
      >
        Llegada el día <strong>14/06/2023</strong> a las <strong>10:00 am</strong>
      </Typography>

      {/* Progreso del pedido */}
      <Stepper alternativeLabel activeStep={2} sx={{ marginY: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography variant="caption" color="textSecondary">
                {label.toLowerCase()}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderStatus;
