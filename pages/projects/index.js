import React, { useState } from 'react';
import { Box, Typography, Card } from '@mui/material';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  width: 15rem;
  height: 15rem;
  border-radius: 15px;
  border: solid;
  box-shadow: 10px 0 6px -5px rgba(0, 0, 0, 0.5); // Adjusted shadow opacity
`;

const Projects = () => {
    const projects = ['folklore', 'twentyfour']; // Assuming two projects
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [sideProject, setSideProject] = useState(projects[1]);

    // Swap the selected project with the side project
    const swapProjects = () => {
        setSelectedProject(sideProject);
        setSideProject(selectedProject);
    };

    // Retrieve background image based on project name
    const getBackgroundImage = (project) => {
        const images = {
            folklore: '/assets/folkloreicon.png',
            twentyfour: '/assets/twentyfouricon.png',
            // Add more project images as needed
        };
        return images[project];
    };

    return (
            <Box sx={{display:'flex', flexDirection:'column',
        }}>
            <Box sx={{
                width:'100%',
                height:'2rem',
                padding:'15px', 
            }}>
                <Typography>
                    Thing
                </Typography>
            </Box>
            
             {/* Central project showcase */}
             <Box sx={{
                height: '30rem',
                display: 'flex',
                justifyContent: 'space-around',
                gap: '2rem',
                alignItems: 'flex-end'
            }}>
                {/* Left card */}
                <Card
                    onClick={swapProjects}
                    sx={{
                        width: '18rem',
                        height: '25rem',
                        borderRadius: '15px',
                        backgroundImage: `url(${getBackgroundImage(sideProject)})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        boxShadow: '6px 0 5px -3px rgba(0, 0, 0, 0.8)',
                        display: projects.length > 1 ? 'block' : 'none' // Hide if only one project
                    }}
                >
                    {/* Content for side project */}
                </Card>

                {/* Center card with dynamic content based on state */}
                <Card
                    sx={{
                        width: '25rem',
                        height: '100%',
                        borderRadius: '15px',
                        boxShadow: '7px 0 8px -1px rgba(0, 0, 0, 0.8)',
                        backgroundImage: `url(${getBackgroundImage(selectedProject)})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Content of the selected project */}
                </Card>

                {/* Right card */}
                <Card
                    sx={{
                        width: '18rem',
                        height: '25rem',
                        borderRadius: '15px',
                        boxShadow: '14px 0 5px -3px rgba(0, 0, 0, 0.8)',
                        display: projects.length > 1 ? 'block' : 'none' // Hide if only one project
                    }}
                >
                    {/* Placeholder content or empty */}
                </Card>
            </Box>

            <Box sx={{ display: 'flex', marginTop: '2rem', padding: '4rem', justifyContent: 'space-between' }}>
                <CustomCard elevation={0}>
                    Test Content 1
                </CustomCard>
                <CustomCard elevation={0}>
                    Test Content 2
                </CustomCard>
                <CustomCard elevation={0}>
                    Test Content 3
                </CustomCard>
                <CustomCard elevation={0}>
                    Test Content 4
                </CustomCard>
            </Box>
        
        
         </Box>
    );
};

export default Projects;
