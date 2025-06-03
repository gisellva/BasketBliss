import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

export default function LoginFormAdmi() {
const [formData, setFormData] = useState({
email: '',
password: ''
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.email,
        password: formData.password
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error al iniciar sesión:', errorData);
      alert('Credenciales incorrectas o error en el servidor.');
      return;
    }

const data = await response.json();


localStorage.setItem('access_token', data.access);
localStorage.setItem('refresh_token', data.refresh);
localStorage.setItem('usuario_id', data.usuario_id);
localStorage.setItem('nombre_usuario', data.nombre);
localStorage.setItem('tipo_usuario', data.tipo_usuario);


console.log('Inicio de sesión exitoso', data);
alert('Login exitoso 🎉');
    window.location.href = '/Home';

  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert('Ocurrió un error al intentar iniciar sesión.');
  }
};


return (
<Box sx={{ marginTop: 4, padding: 3 }}>
    <Stack
    sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: { xs: 1, sm: 3, md: 4, lg: 5 },  
    }}
    >
    <Typography variant="h4" color="primary">
        Inicia sesión en tu cuenta BasketBliss Administrador
    </Typography>
    </Stack>
    
    <form onSubmit={handleSubmit}>
    <Grid container spacing={3} justifyContent="center" >
        <Grid item xs={12} sm={8} md={6}>
        <TextField
            label="Correo electrónico"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            size="small"
            sx={{ 
                marginBottom: { xs: 1, sm: 3, md: 3, lg:2.5 },  
                marginTop: { xs: 1, sm: 2, md: 3, lg: 4 }     
              }}
        />
        <TextField
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            size="small"
        />
        </Grid>
        
    </Grid>
    
    <Stack
        sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        gap: 3
        }}
    >
            
        <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ color: 'white', width: '250px' }}
        >
        Iniciar sesión
        </Button>
        
    
        
    </Stack>
    </form>
    <Stack direction="row" spacing={1} sx={{
    justifyContent: "center",
    alignItems: "center",
    marginTop:4,
    marginBottom:30,
    
    }}>
    
    
   
    </Stack>
</Box>
);
}
