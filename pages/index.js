import React from 'react'; 
import { Box, Typography, Button } from '@mui/material';
import LinkButton from '@/components/LinkButton';
import Image from 'next/image'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Home = () => {
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0, margin: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', height: '5rem', zIndex:1100}}> 
                <Button sx={{fontSize:'18px', color:'black', fontFamily: "'Roboto Mono', monospace"}}>
                    Projects
                </Button>
            </Box> 

            {/* Gradient from this box */}
            <Box
                sx={{
                    width: '100%',
                    height: '15rem',
                    background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'flex-end',
                    alignItems: 'center',
                    position:'relative'
                }}
            >
                {/* ::after pseudo-element for white bottom border */}
                <Box sx={{ height: '100%',zIndex:1000,transform: 'translate(-5%, -35%) translateY(-10%)',// Adjust the translateY value to move the image up
}}>
                    {/* If using Next.js Image component */}
                    <Image src="/assets/mydalleimage-removebg.png" alt="Descriptive Alt Text" width={400} height={550} />
                </Box>
            </Box> {/* Closing the Box component for the gradient section */} 
            <Box sx={{ height: '5rem',display: 'flex', width: '100%',background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)', zIndex:0}}>
                    <Box sx={{ display: 'flex', width: '33%', height: '100%',}}>
                        {/* Thirds */}
                        <Box sx={{ width: '50%', }}>
                            {/* Column1 */}
                            <Box sx={{width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                        </Box>
                        <Box sx={{width:'50%'}}>
                            {/* Column2 */}
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '33%', height: '100%' }}>
                        {/* Thirds */}
                        <Box sx={{ width: '50%' }}>
                            {/* Column3 */}
                            <Box sx={{ width: '100%', height: '33%'}}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            {/* Column4 */}
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '33%', height: '100%' }}>
                        {/* Thirds */}
                        <Box sx={{ width: '50%' }}>
                            {/* Column5 */}
                            <Box sx={{ width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                        </Box>
                        <Box>
                            {/* Column6 */}
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                            <Box sx={{ width: '100%', height: '33%' }}></Box>
                        </Box>
                    </Box> 
                </Box> 
                <Box sx={{
                    position: 'absolute',
                    bottom: '49.4%',
                    left: 0,
                    width: '100%',
                    height: '5%', // Adjust the height as needed
                    bgcolor: 'white',
                    zIndex: 1,
                }} />
                
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '1rem',
                    marginTop: '5rem',
                    fontFamily: "'Roboto', sans-serif" // Apply Roboto font here
                }}>
                    <Typography variant='h3' sx={{
                        padding: '1rem',
                        fontFamily: "'Roboto Mono', monospace" // Apply Roboto font to heading
                    }}>
                        Welcome to my Portfolio!
                    </Typography>

                    <Typography sx={{ fontFamily: "'Shadows Into Light', cursive" }}>
                        Hello! I`m Jose, an enthusiastic and dedicated developer on a journey of continuous learning and growth. 
                    </Typography>
                    <Typography sx={{ fontFamily: "'Shadows Into Light', cursive" }}>
                    With a passion for coding and a flair for creative solutions, I am eager to explore new technologies and bring innovative ideas to life.
                    </Typography>
                </Box>

            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2rem' }}>
                <a href="https://www.linkedin.com/in/jose-avalos-thompson-6ba002127/" target="_blank" rel="noopener noreferrer">
                    <LinkButton>
                        <LinkedInIcon style={{ fontSize: '48px' }} color="primary" />
                    </LinkButton>
                </a>
                <a href="https://github.com/Javalost" target="_blank" rel="noopener noreferrer">
                    <LinkButton>
                        <GitHubIcon style={{ fontSize: '48px' }} />
                    </LinkButton>
                </a>
                <a href="mailto:youremail@example.com">
                    <LinkButton>
                        <MailOutlineIcon style={{ fontSize: '48px' }} color="secondary" />
                    </LinkButton>
                </a>
            </Box>
        </Box>
        </>
    );
};

export default Home;