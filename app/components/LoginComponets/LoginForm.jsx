import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginForm() {
const [formData, setFormData] = useState({
email: '',
password: ''
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
<Box sx={{ marginTop: 4, padding: 3 }}>
    <Stack
    sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: { xs: 1, sm: 3, md: 4, lg: 5 },  
    }}
    >
    <Typography variant="h4" color="primary">
        Inicia sesión en tu cuenta BasketBliss
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
            <Typography variant="body1" color="initial">Olvide mi password</Typography>
        <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ color: 'white', width: '250px' }}
        >
        Iniciar sesión
        </Button>
        
        <Button
        variant="outlined"
        color="secondary"
        startIcon={<GoogleIcon />}
    sx={{ width: '250px' }}
        onClick={() => console.log('Iniciar sesión con Google')}
        >
        Iniciar sesión con Google
        </Button>
        
    </Stack>
    </form>
    <Stack direction="row" spacing={1} sx={{
    justifyContent: "center",
    alignItems: "center",
    marginTop:4,
    marginBottom:30,
    
    }}>
    <Typography variant="body1" color="initial">¿Aún no tienes una cuenta? </Typography>
    <Typography variant="body1" color="primary"> Registrate</Typography>
    </Stack>
</Box>
);
}
