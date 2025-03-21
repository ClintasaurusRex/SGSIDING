import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: '#444445',
  padding: theme.spacing(3, 0),
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#fff',
  },
}));

const BlurredEmail = styled('span')({
  filter: 'blur(2px)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'blur(0)',
  },
});

export function Footer() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Email is split to make it harder for scrapers
  const emailParts = ['shaungersthof', 'er@gm', 'ail.com'];
  const blurredEmail = 'shaun•••••••••@gmail.com';

  const revealEmail = (e) => {
    e.preventDefault();
    setEmailRevealed(true);
  };

  return (
    <StyledFooter>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant='h6' color='white' gutterBottom sx={{ mb: 1 }}>
              SG Custom Exteriors
            </Typography>
            <Typography
              variant='body2'
              color='rgba(255, 255, 255, 0.7)'
              sx={{ mb: 1 }}
            >
              Professional siding and exterior services in the Cowichan Valley
              and surrounding areas.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant='h6' color='white' gutterBottom sx={{ mb: 1 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <FooterLink component={Link} to='/'>
                Home
              </FooterLink>
              <FooterLink component={Link} to='/services'>
                Services
              </FooterLink>
              <FooterLink component={Link} to='/about'>
                About Us
              </FooterLink>
              <FooterLink component={Link} to='/contact'>
                Contact
              </FooterLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant='h6' color='white' gutterBottom sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {emailRevealed ? (
                <MuiLink
                  href={`mailto:${emailParts.join('')}`}
                  color='inherit'
                  sx={{ textDecoration: 'none' }}
                >
                  Email: {emailParts.join('')}
                </MuiLink>
              ) : (
                <Button
                  onClick={revealEmail}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#fff',
                    },
                  }}
                >
                  Email: <BlurredEmail>{blurredEmail}</BlurredEmail>
                  <Typography
                    component='span'
                    variant='caption'
                    sx={{ ml: 1, color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    (click to reveal)
                  </Typography>
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography
          variant='body2'
          color='rgba(255, 255, 255, 0.7)'
          align='center'
          sx={{ mb: 1 }}
        >
          © {new Date().getFullYear()} SG Custom Exteriors. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
}
