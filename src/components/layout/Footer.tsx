import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' Jaron O\'Grady. All rights reserved.'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton 
            component={Link} 
            href="https://www.linkedin.com/in/jaron-w-ogrady" 
            target="_blank" 
            rel="noopener noreferrer"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            component={Link} 
            href="https://github.com/BobtheElf" 
            target="_blank" 
            rel="noopener noreferrer"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <GitHubIcon />
          </IconButton>
          {/* <IconButton 
            component={Link} 
            href="https://twitter.com/your-twitter-handle" 
            target="_blank" 
            rel="noopener noreferrer"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <TwitterIcon />
          </IconButton> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 