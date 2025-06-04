import { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';

export default function Breakfasts ({ onVolver }) {
  const [desayunos, setDesayunos] = useState([]);

 useEffect(() => {
    const fetchDesayunos = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('http://127.0.0.1:8000/api/desayunos/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Error al obtener los desayunos');
        }

        const data = await response.json();
        setDesayunos(data);
      } catch (error) {
        console.error('Error al cargar desayunos:', error);
        alert('No se pudieron cargar los desayunos.');
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
