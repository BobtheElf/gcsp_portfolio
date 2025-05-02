import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Node.js',
  'Git',
];

const About: React.FC = () => {
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
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a passionate developer with a strong foundation in web development.
            I love creating intuitive and efficient solutions to complex problems.
            My journey in programming started with a curiosity about how things
            work, and it has grown into a deep passion for building meaningful
            applications.
          </Typography>
          <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 4 }}>
            Skills
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Typography variant="body1">{skill}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 