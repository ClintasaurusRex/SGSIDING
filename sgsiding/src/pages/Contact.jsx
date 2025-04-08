import '../components/styles/Contact.css';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const StyledContainer = styled(Container)({
  padding: '2rem 0',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContactCard = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '1rem',
  padding: '2rem',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  maxWidth: '500px',
  width: '100%',
  textAlign: 'center',
});

const IconLink = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.75rem',
  color: 'rgba(255, 255, 255, 0.9)',
  textDecoration: 'none',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  transition: 'all 0.3s ease',
  marginTop: '1rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    color: '#fff',
  },
});

export default function Contact() {
  return (
    <StyledContainer>
      <ContactCard>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
          sx={{ color: 'white', mb: 3 }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}
        >
          We'd love to hear from you. Send us an email to discuss your project.
        </Typography>
        <IconLink
          href='mailto:shaungersthofer@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <EnvelopeIcon width={24} height={24} />
          <span>Contact Us</span>
        </IconLink>
      </ContactCard>
    </StyledContainer>
  );
}
