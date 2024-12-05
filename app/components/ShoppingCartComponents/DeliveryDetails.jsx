import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos

export default function DeliveryDetails() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Box sx={{ padding: 2, fontFamily: 'Arial, sans-serif' }}>
      {/* Subtotal y opciones de envío */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink', textAlign: 'left' }}>
          Sub total:
          <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}> $100.000</Typography>
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink', marginTop: 2 }}>
          Envío:
        </Typography>

        {/* Opciones de envío */}
        <Box sx={{ marginLeft: 3 }}>
          <Typography variant="body2" sx={{ color: 'black', marginBottom: 1 }}>
            ● Bogotá (Barrios Unidos, Candelaria, Chapinero, etc.): $12.000
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', marginBottom: 1 }}>
            ● Bogotá (Antonio Nariño, Kennedy, Puente Aranda, etc.): $15.000
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', marginBottom: 1 }}>
            ● Bogotá (Bosa, Ciudad Bolívar, Usme): $25.000
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', marginBottom: 1 }}>
            ● Alrededores (Chía, Cota, Mosquera, etc.): $25.000
          </Typography>
          <Typography variant="body2" sx={{ color: 'black', marginBottom: 1 }}>
            ● Alrededores (Madrid, Cajicá): $28.000
          </Typography>
        </Box>
      </Box>

      {/* Fecha de entrega */}
      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink', textAlign: 'left' }}>
        fecha de entrega:
        <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>
          {' '}{selectedDate.toLocaleDateString('es-ES')}
        </Typography>
      </Typography>

      {/* Calendario */}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
        <Calendar
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale="es-ES" 
        />
      </Box>

      {/* Hora, Dirección y Total */}
      <Box sx={{ marginTop: 4, textAlign: 'left' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink' }}>
          Hora de la entrega:
          <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}> 10:00 am</Typography>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink', marginTop: 1 }}>
          Dirección:
          <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}> calle 44 # 23 - 58, Soacha</Typography>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'hotpink', marginTop: 1 }}>
          Total:
          <Typography component="span" sx={{ fontWeight: 'normal', color: 'black' }}>$128.000</Typography>
        </Typography>
      </Box>

      {/* Botón de pagar */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Button variant="contained" sx={{ backgroundColor: '#b2ebf2', color: 'white', textTransform: 'none' }}>
          Pagar
        </Button>
      </Box>
    </Box>
  );
}
