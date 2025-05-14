import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

export default function CartsAdmin({ setVista }) {
  return (
    <Box sx={{ padding: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Gestionar Desayunos</Typography>
              <Button
                variant="contained"
                onClick={() => setVista('productos')}
                sx={{ mt: 2 }}
              >
                Ir a Productos
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ver Pedidos</Typography>
              <Button
                variant="contained"
                onClick={() => setVista('pedidos')}
                sx={{ mt: 2 }}
              >
                Ir a Pedidos
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Gestionar Inventario</Typography>
              <Button
                variant="contained"
                onClick={() => setVista('inventario')}
                sx={{ mt: 2 }}
              >
                Ir a Inventario
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
