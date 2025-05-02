import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of the project and its main features.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Project 2',
    description: 'Another project description highlighting its unique aspects.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'Material-UI', 'Firebase'],
    githubUrl: '#',
    demoUrl: '#',
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
                  style={{ width: '100%', maxWidth: '500px' }}
                >
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
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
                      <Button size="small" href={project.demoUrl} target="_blank">
                        Live Demo
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