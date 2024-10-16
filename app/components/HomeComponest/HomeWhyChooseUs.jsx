import { Box, Typography } from '@mui/material'
import React from 'react'
import CradsWhyChooseUs from './CradsWhyChooseUs'
import { Grid } from '@mui/joy'

export default function HomeWhyChooseUs() {
  return (
    
    <Box sx={{ marginTop: 7 }}>
      
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        ¿Por qué elegirnos?
      </Typography>

   
      <Grid 
        container 
        spacing={2} 
        justifyContent="center" 
        alignItems="center"      
        sx={{ maxWidth: '1200px', margin: '0 auto' }} 
      >
        
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CradsWhyChooseUs
            title="Entregas a tiempo"
            description={`Servicio de entrega a domicilio propio\n en Bogotá y alrededores en el mismo día.\n Cubrimos domicilios de desayunos sorpresa\n y ramos de flores.`}
            imageSrc="/images/calendario.png"
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CradsWhyChooseUs
            title="Modelos únicos"
            description={`Diseñamos ramos de flores para toda ocasión, novedosos regalos para cumpleaños, fechas especiales y nacimientos.`}
            imageSrc="/images/corazon.png"
          />
        </Grid>

        {/* Columna 2 */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CradsWhyChooseUs
            title="Flores frescas"
            description={`Entregamos flores frescas a domicilio. También llevamos desayunos sorpresa, canastas de frutas y anchetas.`}
            imageSrc="/images/flor.png"
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CradsWhyChooseUs
            title="Mejor precio"
            description={`El precio y la calidad de nuestras flores es incomparable. Somos una floristería en Bogotá con todos los estándares de calidad.`}
            imageSrc="/images/pagos.png"
          />
        </Grid>
      </Grid>
    </Box>
  )
}
