import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, Button} from '@mui/material';
import Image from 'next/image';
import styled, {keyframes} from 'styled-components';

const popInAnimation = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
// Styled component for the bottom cards
const CustomCard = styled(Card)`
  width: 15rem;
  height: 15rem;
  border-radius: 15px;
  border: solid;
  box-shadow: 10px 0 6px 0.1px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  animation: ${popInAnimation} 0.3s ease-out;
  animation-delay: ${props => props.delay}s; // Dynamic delay based on props
  animation-fill-mode: backwards; // Starts animation from the beginning
`;

const Projects = () => {
    const projectKeys = ['folklore', 'twentyfour']; // Project keys
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Current project index 
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const [projectDescription, setProjectDescription] = useState("Initial project description...");
    const [projectTitle, setProjectTitle] = useState('');



    const ImageWrapper = styled.div`
        position: relative;
        width: 100%; // Or set to the width you need
        height: 15rem; // Or set to the height you need
        overflow: hidden;
    `;

    const updateAnimationTrigger = () => setAnimationTrigger(prev => prev + 1);
    const updateProjectDescription = (newDescription) => {
        setProjectDescription(newDescription);
    };
    useEffect(() => {
        const newDescription = projectDescriptions[projectKeys[currentProjectIndex]];
        setProjectDescription(newDescription);
        const newTitle = projectTitles[projectKeys[currentProjectIndex]]; // assuming you have a similar object for titles
        setProjectTitle(newTitle);
      }, [currentProjectIndex]);


      const projectTitles = {
        folklore: 'Folklore',
        twentyfour: 'Game of 24',
      };
    // Handler to cycle to the previous project
    const previousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectKeys.length) % projectKeys.length);
        updateAnimationTrigger();

    };

    // Handler to cycle to the next project
    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectKeys.length);
        updateAnimationTrigger();

    };

    // Function to get the background image URL
    const getBackgroundImageUrl = (projectKey) => projectImages[projectKey];

    // Map of project keys to their respective background images and screens
    const projectImages = {
        folklore: '/assets/folklore/folkloreicon.png',
        twentyfour: '/assets/twentyfour/twentyfouricon.png',
        // Add more projects as needed
    };
    const projectDescriptions = {
        folklore: "A website for the visual presentation of folklore stories across the world using Leaflet and the contribution of users",
        twentyfour: "A simple game of 24. Complete with manipulated numbered and arithmetic layouts",
        // Add more descriptions as needed
    };
    const projectScreens = {
        folklore: ['/assets/folklore/FolkScreen1.png', '/assets/folklore/FolkScreen2.png', '/assets/folklore/FolkScreen3.png', '/assets/folklore/FolkScreen4.png'],
        twentyfour: ['/assets/twentyfour/24screen1.png', '/assets/twentyfour/24Screen2.png', '/assets/twentyfour/24Screen6.png', '/assets/twentyfour/24Screen4.png'],
        // Add more projects as needed
    };

    const selectedProjectKey = projectKeys[currentProjectIndex];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background:'lightgrey' }}>
            {/* Top section placeholder */}
            <Box sx={{
                width: '100%',
                height: '2rem',
                paddingLeft:'2rem',
                display:'flex',
                alignItems:'center',
            }}>
                <Typography variant='h6' fontFamily="'Roboto Mono', monospace" marginLeft={'3rem'}>
                    PORTFOLIO
                </Typography>
                <Button href={"/"}>
                    <Typography variant='h10' color={'black'} fontFamily="'Roboto Mono', monospace" marginLeft={'3rem'}>
                        Home
                    </Typography>
                </Button>
                <Button href={"https://www.linkedin.com/in/jose-avalos-thompson-6ba002127/"}>
                    <Typography variant='h10' fontFamily="'Roboto Mono', monospace">
                        LinkedIn
                    </Typography>
                </Button>
                <Button href={"https://github.com/Javalost"}>
                    <Typography variant='h10' color={'black'} fontFamily="'Roboto Mono', monospace">
                        Github
                    </Typography>
                </Button>
                
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
                <Typography variant='h3' fontFamily="'Roboto Mono', monospace" marginLeft={'3rem'}>
                    {projectTitle}
                </Typography>
            </Box>
            

            {/* Central project showcase */}
            <Box sx={{
                height: '30rem',
                display: 'flex',
                justifyContent: 'space-around',
                gap: '2rem',
                alignItems: 'flex-end',
            }}>
               {/* Left card */}
               {projectKeys.length > 1 && (
                    <Card
                        sx={{
                            width: '18rem',
                            height: '25rem',
                            borderRadius: '15px',
                            background:'lightgrey',
                            
                        }}
                    >
                        <Typography variant='h6' fontFamily="'Roboto Mono', monospace" padding={'2rem'}>
                            {projectDescription}
                        </Typography>

                    </Card>
                )}
                <Card
                    sx={{
                        width: '25rem',
                        height: '100%',
                        borderRadius: '15px',
                        boxShadow: '7px 10px 8px -1px rgba(0, 0, 0, 0.8)',
                        backgroundImage: `url(${getBackgroundImageUrl(selectedProjectKey)})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Content of the selected project */}
                </Card> 
                {projectKeys.length > 1 && (
                    <Card
                        sx={{
                            width: '18rem',
                            height: '25rem',
                            borderRadius: '15px',
                            boxShadow: '14px 5px 5px -3px rgba(0, 0, 0, 0.8)',
                            backgroundImage: `url(${getBackgroundImageUrl(projectKeys[(currentProjectIndex + 1) % projectKeys.length])})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', 
                            cursor: 'pointer',
                        }}
                        onClick={nextProject}
                    >
                        {/* Placeholder for next project */}
                    </Card>
                )}
            </Box>

            {/* Bottom cards section */}
            <Box sx={{ display: 'flex', marginTop: '2rem', padding: '4rem', justifyContent: 'space-between' }}>
                {projectScreens[selectedProjectKey].map((screen, index) => (
                    <CustomCard key={`${animationTrigger}-${index}`} elevation={0} delay={index * 0.1}>
                        <ImageWrapper>
                            <Image
                                src={screen}
                                alt={`Screen ${index + 1}`}
                                // apply styles directly to the image using the style prop if needed
                                width={240} // replace with the actual width of your image
                                height={240} // replace with the actual height of your image
                                // You can still use objectFit, but you don't need to specify layout='fill' anymore
                                style={{ objectFit: 'cover' }}
                            />
                        </ImageWrapper>                    
                    </CustomCard>
                ))}
            </Box>

        </Box>
    );
};

export default Projects;
