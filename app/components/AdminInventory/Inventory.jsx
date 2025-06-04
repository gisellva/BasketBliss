import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
  IconButton,
} from '@mui/material';

export default function Inventory({ onVolver }) {
   const [inventario, setInventario] = useState([]);
  const [nombreItem, setNombreItem] = useState('');
  const [cantidadDisponible, setCantidadDisponible] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const token = localStorage.getItem('access_token');
  const fetchInventario = async () => {
     try {
      const res = await fetch('http://127.0.0.1:8000/api/inventario/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      setInventario(data);
    } catch (error) {
      console.error('Error al cargar inventario:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      nombre_item: nombreItem,
      cantidad_disponible: parseInt(cantidadDisponible),
    };

    try {
      const url = editandoId
        ? `http://127.0.0.1:8000/api/inventario/${editandoId}/`
        : 'http://127.0.0.1:8000/api/inventario/';
      const method = editandoId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(itemData)
      });

      if (res.ok) {
        await fetchInventario();
        setNombreItem('');
        setCantidadDisponible('');
        setEditandoId(null);
      } else {
        alert('Error al guardar el item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 const handleEliminar = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/inventario/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchInventario();
      } else {
        alert('No se pudo eliminar el item');
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };
   const handleEditar = (item) => {
    setNombreItem(item.nombre_item);
    setCantidadDisponible(item.cantidad_disponible.toString());
    setEditandoId(item.id);
  };
  useEffect(() => {
    fetchInventario();
  }, []);

  return (
    
   <Container sx={{
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
          {editandoId ? 'Guardar Cambios' : 'Agregar Item'}
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventario.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nombre_item}</TableCell>
                <TableCell>{item.cantidad_disponible}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditar(item)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEliminar(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
 
  );
}
