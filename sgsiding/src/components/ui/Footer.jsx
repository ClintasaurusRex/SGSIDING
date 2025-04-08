import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

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

const IconLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#fff',
    transform: 'translateY(-2px)',
  },
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
          <IconLink
            href='mailto:shaungersthofer@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <EnvelopeIcon width={24} height={24} />
            <span>Contact Us</span>
          </IconLink>
        </Box>
      </FooterContainer>
    </StyledFooter>
  );
}
