import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';

export default function Breakfasts ({ onVolver }) {
  const [desayunos, setDesayunos] = useState([]);

  useEffect(() => {
    const fetchDesayunos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/desayunos/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setDesayunos(response.data);
      } catch (error) {
        console.error('Error al obtener desayunos:', error);
      }
    };

    fetchDesayunos();
  }, []);

  return (
    <Box  sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Typography color="secondary" variant="h5"  className="mb-4">Desayunos Registrados</Typography>
          <Button
         variant="outlined"
         color="secondary"
        onClick={onVolver}
        sx={{ mb: 3, marginTop:4}}
        >
         Volver al Panel
        </Button>
    <TableContainer component={Paper} className="p-4">
    
      <Table>
       
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Disponible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {desayunos.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>${row.precio}</TableCell>
              <TableCell>{row.disponibilidad ? 'Sí' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
