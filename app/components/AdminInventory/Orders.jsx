import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Button
} from '@mui/material';

export default function Orders({ onVolver }) {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access');
    axios.get('http://127.0.0.1:8000/api/pedidos/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setPedidos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('No se pudieron cargar los pedidos');
        setLoading(false);
      });
  }, []);

  return (
    <Container  sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
      <Typography variant="h4" color='secondary' gutterBottom>Lista de Pedidos</Typography>
      <Button
         variant="outlined"
         color="secondary"
        onClick={onVolver}
        sx={{ mb: 3 }}
        >
         Volver al Panel
        </Button>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Fecha Pedido</TableCell>
                <TableCell>Fecha Entrega</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido.id}>
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.cliente}</TableCell>
                  <TableCell>{new Date(pedido.fecha_pedido).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(pedido.fecha_entrega).toLocaleDateString()}</TableCell>
                  <TableCell>${pedido.total}</TableCell>
                  <TableCell>{pedido.estado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
