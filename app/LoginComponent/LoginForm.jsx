import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography,Stack } from '@mui/material';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    contrasena: '',
    apellido: '',
    fechaNacimiento: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ marginTop: 4,padding:3  }}>
       <Stack sx=
      {{
       justifyContent: "center",
       alignItems: "center",
       marginBottom:4
      }}>
      <Typography variant="h4" color="primary" >Nuestras categorías</Typography>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cédula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contraseña"
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              fullWidth
              required
              type="email"
            />
          </Grid>
        </Grid>
        <Stack sx=
      {{
       justifyContent: "center",
       alignItems: "center",
       marginBottom:2
      }}>
     <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 , color:"white"}}
        >
          Enviar
        </Button>
      </Stack>
        
      </form>
    </Box>
  );
}
