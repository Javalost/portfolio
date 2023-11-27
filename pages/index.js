import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LinkButton from '@/components/LinkButton';
import Image from 'next/image';

const Home = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0, margin: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', height: '5rem' }}> 
                <Button>
                    <Typography>
                        Link1
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Link2
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Link3
                    </Typography>
                </Button>
            </Box> 

            {/* Gradient from this box */}
            <Box
                sx={{
                    width: '100%',
                    height: '25rem',
                    background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'flex-end',
                    alignItems: 'center',
                    position:'relative'
                }}
            >
                {/* ::after pseudo-element for white bottom border */}
                <Box sx={{                    
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    bottom:0,
                    height: '1%', // Adjust the height to control the white overlay size
                    background:'white',
                    zIndex: 1, // Ensure it covers the gradient
                }} 
                />
                <Box sx={{ height: '100%', border:'solid', }}>
                    {/* If using Next.js Image component */}
                    <Image src="/assets/mydalleimage-removebg.png" alt="Descriptive Alt Text" width={200} height={300} />
                </Box>
                <Box sx={{ height: '30%', display: 'flex', width: '100%',}}>
                    <Box sx={{ display: 'flex', width: '33%', height: '100%',}}>
                        {/* Thirds */}
                        <Box sx={{ width: '50%', }}>
                            {/* Column1 */}
                            <Box sx={{ background:'white',width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{ background:'white',width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
                            <Box sx={{ background:'white',width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
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
                            <Box sx={{ width: '100%', height: '33%' }}>{/* Row1-3 * Gradient shoud lead into these boxes */}</Box>
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
            </Box> {/* Closing the Box component for the gradient section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '1rem' }}>
                <Typography variant='h2' sx={{ padding: '1rem' }}>
                    Welcome to my Portfolio!
                </Typography> 

                <Typography variant='h9'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </Typography>
                <Typography variant='h9'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'2rem' }}>
                <LinkButton /> 
                <LinkButton /> 
                <LinkButton />
            </Box>
        </Box>
    );
};

export default Home;