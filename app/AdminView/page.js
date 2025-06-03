'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import NavAdmin from '../components/Nav/NavAdmi';
import Inventory from '../components/AdminInventory/Inventory';
import Orders from '../components/AdminInventory/Orders';
import Breakfasts from '../components/AdminInventory/Breakfasts';
import CartsAdmin from '../components/CartsAdmin/CartsAdmin';


export default function Page() {
  const [vista, setVista] = useState('home');

  const renderVista = () => {
    if (vista === 'inventario') return <Inventory onVolver={() => setVista('home')} />;
    if (vista === 'pedidos') return <Orders onVolver={() => setVista('home')} />;
    if (vista === 'productos') return <Breakfasts onVolver={() => setVista('home')} />;
    return (
      <>
        <Box
          sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom color="primary">
            Panel de Administración
          </Typography>
        </Box>
        <CartsAdmin setVista={setVista} />
      </>
    );
  };

  return (
    <Box>
      <NavAdmin />
      {renderVista()}
    </Box>
  );
}
