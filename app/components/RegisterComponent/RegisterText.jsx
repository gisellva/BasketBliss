import { Box, Typography,Stack } from '@mui/material'
import React from 'react'

export default function RegisterText() {
  return (
    <Box  sx={{ marginTop: 2, marginBottom:4, padding:2 }}>
        <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        <Typography variant="body1" color="initial">Al registrarte, aceptas nuestras Condiciones de uso y nuestra Política de privacidad.</Typography>
        <Stack direction="row" spacing={2}>
        <Typography variant="body1" color="initial">¿Ya tienes una cuenta? </Typography>
        <Typography variant="body1" color="primary">Inicia Sesión</Typography>
        </Stack>
        
        </Stack>
        
    </Box>
  )
}
