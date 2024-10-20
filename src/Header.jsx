import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Use space-between to position elements */}
        <Box
          component="img"
          src={logo} // Use the imported logo image here
          alt="TT Travels Logo"
          sx={{ height: 50 }} // Adjust the height to fit your design
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ ml: 2 }}>
            About Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;