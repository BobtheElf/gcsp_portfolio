import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'MinisculeDB',
    description: 'A system which creates a distributed database among Raspberry Pi Picos. The Raspberry Pi Picos run an SQL-based querying system with a custom iterator as well as other commands to affect the functionality of the database. The database recorded digital signals (button presses) and analog signals (potentiometer values) and stored them in a single table queried by the custom DBMS.',
    image: 'https://github.com/BobtheElf/MinisculeDB/blob/main/IMG_4822.jpg?raw=true',
    technologies: ['C', 'Pico SDK', 'Git', 'SQL', 'VSCode'],
    githubUrl: 'https://github.com/BobtheElf/MinisculeDB',
  },
  {
    title: 'Project 2',
    description: 'Another project description highlighting its unique aspects and other stuff as well.',
    image: 'https://via.placeholder.com/200x200',
    technologies: ['React', 'Material-UI', 'Firebase'],
    githubUrl: '#',
  },
  {
    title: 'Project 3',
    description: 'Another project description highlighting its unique aspects and other stuff as well.',
    image: 'https://via.placeholder.com/200x200',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
  },
  {
    title: 'Project 4',
    description: 'Another project description highlighting its unique aspects and other stuff as well.',
    image: 'https://via.placeholder.com/200x200',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center">
            My Projects
          </Typography>
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              mt: 2,
              justifyContent: 'center'
            }}
          >
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={5} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ height: '100%', maxWidth: '500px' }}
                >
                  <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      width="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography>
                        {project.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Technologies: {project.technologies.join(', ')}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={project.githubUrl} target="_blank">
                        GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 