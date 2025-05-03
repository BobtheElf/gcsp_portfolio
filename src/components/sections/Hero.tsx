import React, { useState } from 'react';
import { Box, Typography, Button, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        position: 'relative',
      }}
    >
      <Container maxWidth="sm">
        {showAbout && (
          <Button
            variant="contained"
            size="large"
            onClick={() => setShowAbout(false)}
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              transform: 'none',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              '&:active': {
                transform: 'scale(0.95)'
              },
              transition: 'transform 0.2s ease-in-out'
            }}
          >
            Back
          </Button>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Grand Challenges Scholars Program Portfolio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Grand Challenges Scholars Program has been the
            most influential part of my engineering education.
            Below is a journey through my experience tailored 
            toward tackling the world's grandest challenges.
          </Typography>
          {!showAbout && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => setShowAbout(true)}
                >
                  Start
                </Button>
              </motion.div>
            </Box>
          )}
        </motion.div>

        {showAbout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                paragraph
              >
                Hello, I am Jaron O'Grady. Going into college, I knew that I wanted to create
                electronics which brought value to people's lives. However, I had no specific
                industry, job position, or other post-college career path in mind. My
                Grandma Joy had always told me, "college is about figuring out what you
                don't want to be," and as a freshman, I had the time to determine what that
                would be. In my first year at the Colorado School of Mines, I joined the
                Thorson First Year Honors Program, the class which single-handedly started
                me on this journey. From that class, I started appreciating the role of
                Humanities and Social Sciences in engineering, and was primed to begin a
                well-rounded engineering education which incorporated a human-centered
                philosophy. In addition, I learned about GCSP from my Thorson Professor,
                {' '}
                <Link 
                  href="https://eds.mines.edu/project/mcclelland-cj/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'primary.light',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Dr. CJ McClelland
                </Link>. After attending information sessions for the program, I
                realized that the mission of GCSP, a program dedicated to producing the
                engineers needed to solve the world's toughest challenges,  
                would lead me toward a truly multidisciplinary engineering experience.
              </Typography>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Hero; 