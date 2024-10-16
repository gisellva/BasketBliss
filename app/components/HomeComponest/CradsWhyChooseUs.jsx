import { Box, Stack, Typography } from '@mui/material';

export default function CradsWhyChooseUs({ title, description, imageSrc }) {
  return (
    <Box
    sx={{
        width: '100%', 
        maxWidth: 900, 
        minHeight: 300, 
        padding: 4, 
       
        borderRadius: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
       
      }}
    >
      <Stack 
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
        <Stack >
          <Typography variant="h6" color="secondary">{title}</Typography>
          <Typography variant="body1" color="initial" sx={{ whiteSpace: 'pre-line' }}>
            {description}
          </Typography>
        </Stack>

      
        <img src={imageSrc} alt={title} style={{ width: 'auto', height: 'auto' }} />
      </Stack>
    </Box>
  );
}
