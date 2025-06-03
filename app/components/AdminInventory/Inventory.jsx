import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function Inventory({ onVolver }) {
  const [inventario, setInventario] = useState([]);
  const [nombreItem, setNombreItem] = useState('');
  const [cantidadDisponible, setCantidadDisponible] = useState('');

  const fetchInventario = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/inventario/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    });
    setInventario(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'http://127.0.0.1:8000/api/inventario/',
      {
        nombre_item: nombreItem,
        cantidad_disponible: cantidadDisponible,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }
    );
    setNombreItem('');
    setCantidadDisponible('');
    fetchInventario();
  };

  useEffect(() => {
    fetchInventario();
  }, []);

  return (
    <Container  sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
      <Typography variant="h4" mb={2} color='secondary'>
        Gestionar Inventario
      </Typography>
      <Button
         variant="outlined"
         color="secondary"
        onClick={onVolver}
        sx={{ mb: 3 }}
        >
         Volver al Panel
        </Button>
      <Box component="form" onSubmit={handleSubmit} mb={4}>
        <TextField
          label="Nombre del item"
          value={nombreItem}
          onChange={(e) => setNombreItem(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad disponible"
          type="number"
          value={cantidadDisponible}
          onChange={(e) => setCantidadDisponible(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Agregar item
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventario.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nombre_item}</TableCell>
                <TableCell>{item.cantidad_disponible}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   
    </Container>
  );
}
