import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#8BD3DD',  
        padding: '20px 0',           
        marginTop: 'auto',           
        textAlign: 'center',         
      }}
    >
      <Typography variant="body1" sx={{color:"white"}}>
      BasketBliss
      </Typography>
    </Box>
  );
}
