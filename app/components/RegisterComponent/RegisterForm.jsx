import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography,Stack } from '@mui/material';

export default function RegisterForm() {
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

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   
    const resUser = await fetch('http://127.0.0.1:8000/api/registrar-cliente/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        correo_electronico: formData.correo,
        password: formData.contrasena,
        tipo_usuario: 'cliente'
      })
    });

    if (!resUser.ok) {
      const error = await resUser.json();
      console.error('Error creando usuario:', error);
      alert('No se pudo registrar el usuario');
      return;
    }

    
    const resLogin = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.correo,
        password: formData.contrasena
      })
    });

    const loginData = await resLogin.json();
    if (!resLogin.ok) {
      alert("Usuario creado, pero no se pudo iniciar sesión.");
      return;
    }

    localStorage.setItem('access_token', loginData.access);
    localStorage.setItem('refresh_token', loginData.refresh);

   
    const resCliente = await fetch('http://127.0.0.1:8000/api/clientes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginData.access}`
      },
      body: JSON.stringify({})
    });

    if (!resCliente.ok) {
      alert("Usuario creado, pero no se pudo registrar como cliente.");
      return;
    }

    alert('Registro exitoso 🎉');
    window.location.href = '/Login';

  } catch (error) {
    console.error('Error en el registro:', error);
    alert('Algo falló al registrar. Intenta más tarde.');
  }
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
