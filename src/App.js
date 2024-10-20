import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './Header'
import CarCard from './CarCard';
import AboutUs from './AboutUs'; // Import the AboutUs component
import Footer from './Footer';
import { Container, Box } from '@mui/material';
import ImageCarousel from './ImageCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Container>
          <Box sx={{ mt: { xs: 3, md: 5 } }}>
            <ImageCarousel />
          </Box>

          <Routes>
            {/* Home Route showing Car Cards */}
            <Route path="/" element={<CarCard />} />
            {/* About Us Route */}
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Container>
        {/* Footer */}
        <br/><br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
