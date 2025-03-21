import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { useState } from 'react';

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant='h1' gutterBottom>
            Professional Siding Services
          </Typography>
          <Typography variant='h5' sx={{ mb: 4 }}>
            Quality craftsmanship for your home's exterior
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            sx={{ mr: 2 }}
          >
            Get a Quote
          </Button>
          <Button variant='outlined' color='inherit' size='large'>
            Our Services
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Box component='main' sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component='footer'
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant='h6' gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Typography>(555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1 }} />
                <Typography>info@sgsiding.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography>123 Siding Street, City, State 12345</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant='h6' gutterBottom>
                Services
              </Typography>
              <Typography>Siding Installation</Typography>
              <Typography>Siding Repair</Typography>
              <Typography>Maintenance</Typography>
            </Box>
            <Box>
              <Typography variant='h6' gutterBottom>
                Hours
              </Typography>
              <Typography>Monday - Friday: 8:00 AM - 6:00 PM</Typography>
              <Typography>Saturday: 9:00 AM - 4:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant='body2' align='center'>
              © {new Date().getFullYear()} SG Siding. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
