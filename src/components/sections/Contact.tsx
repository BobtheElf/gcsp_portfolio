import React, { useRef, useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Link, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Turnstile } from '@marsidev/react-turnstile';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const sanitizeInput = (input: string): string => {
    // Basic XSS prevention
    return input.replace(/[<>]/g, '');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting
    const now = Date.now();
    if (now - lastSubmissionTime < 30000) {
      setSnackbarMessage('Please wait 30 seconds before sending another message.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Check Turnstile
    if (!turnstileToken) {
      setSnackbarMessage('Please complete the CAPTCHA verification.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = sanitizeInput(formData.get('user_name') as string);
    const email = sanitizeInput(formData.get('user_email') as string);
    const message = sanitizeInput(formData.get('message') as string);
    const timestamp = new Date().toLocaleString();

    // Basic validation
    if (!name || !email || !message) {
      setSnackbarMessage('All fields are required.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Add timestamp to the form data
      const formElement = form.current as HTMLFormElement;
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      timeInput.value = timestamp;
      formElement.appendChild(timeInput);

      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formElement,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      formElement.reset();
      setLastSubmissionTime(Date.now());
      setTurnstileToken(null);
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Get in Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  margin="normal"
                  required
                  inputProps={{ maxLength: 100 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  type="email"
                  margin="normal"
                  required
                  inputProps={{ maxLength: 100 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                  inputProps={{ maxLength: 1000 }}
                />
                <Box sx={{ my: 2 }}>
                  <Turnstile
                    siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY!}
                    onSuccess={handleTurnstileSuccess}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                  disabled={isSubmitting || !turnstileToken}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: { xs: 4, md: 0 } }}>
                <Typography variant="h5" gutterBottom>
                  Connect with Me
                </Typography>
                <Typography variant="body1" paragraph>
                  Feel free to reach out through any of these platforms:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="https://www.linkedin.com/in/jaron-w-ogrady" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/BobtheElf" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 