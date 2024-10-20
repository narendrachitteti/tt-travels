import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <div>
      {/* About Us Section */}
      <Box
        sx={{
          bgcolor: '#414a4c', // Background color for About Us section
          p: 4, // Padding for the About Us section
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Left side content */}
              <Typography variant="h4" component="h2" gutterBottom color="white">
                About Us
              </Typography>
              <Typography variant="body1" paragraph color="white">
                We provide the best services for car and bus rentals in Tirupati. Affordable rates, reliable service.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="flex-start">
              {/* Right side contact info */}
              <Typography variant="h6" component="h3" gutterBottom color="white">
                Contact Us
              </Typography>
              <Typography variant="body1" color="white">
                <a href="tel:+919391711883" style={{ color: 'white', textDecoration: 'none' }}>
                  Phone: +91 9391711883
                </a>
              </Typography>
              <Typography variant="body1" color="white">
                <a href="mailto:info@tttravels.com" style={{ color: 'white', textDecoration: 'none' }}>
                  Email: info@tttravels.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ bgcolor: 'primary.main', p: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="white">
          © 2024 TT Travels. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
