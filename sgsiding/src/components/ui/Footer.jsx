import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')({
  marginTop: 'auto',
  backgroundColor: '#444445',
  padding: '1rem 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
});

const FooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
});

export function Footer() {
  return (
    <StyledFooter>
      <FooterContainer maxWidth='lg'>
        <Box sx={{ flex: 1 }}>
          <Typography variant='body2' color='rgba(255, 255, 255, 0.7)'>
            © {new Date().getFullYear()} SG Custom Exteriors
          </Typography>
        </Box>

        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant='body2' color='rgba(255, 255, 255, 0.7)'>
            Serving Cowichan Valley
          </Typography>
        </Box>

        <Box sx={{ flex: 1, textAlign: 'right' }}>
          <Link
            href='mailto:shaungersthofer@gmail.com'
            color='inherit'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              textDecoration: 'none',
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': { color: '#fff' },
            }}
          >
            Contact Us
          </Link>
        </Box>
      </FooterContainer>
    </StyledFooter>
  );
}
