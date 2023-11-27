import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LinkButton from '@/components/LinkButton';
import Image from 'next/image';

const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                padding: 0,
                margin: 0,
                overflow: 'hidden' // To ensure pseudo-elements do not overflow
            }}
        >
            {/* Top bar with buttons */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    height: '5rem'
                }}
            >
                <Button>
                    <Typography>Link1</Typography>
                </Button>
                <Button>
                    <Typography>Link2</Typography>
                </Button>
                <Button>
                    <Typography>Link3</Typography>
                </Button>
            </Box> 

            {/* Gradient Box */}
            <Box
                sx={{
                    width: '100%', 
                    height: '15rem',
                    background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)',
                    position: 'relative'
                }}
            >
                {/* Image positioned on top of the bottom border */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translate(-50%, 50%)',
                        '& > span': { // Next.js Image component uses a 'span' wrapper
                            display: 'block', // This ensures the span wrapper doesn't collapse
                        }
                    }}
                >
                    <Image src="/assets/mydalleimage-removebg.png" alt="Descriptive Alt Text" width={400} height={500} layout="fixed" />
                </Box>
            </Box>

            {/* Rows and columns with the possibility of gradient overlay */}
            <Box
                sx={{
                    height: '10rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)',
                    position: 'relative'
                }}
            >
                {/* Individual rows with varying opacity */}
                <Box
                    sx={{
                        display: 'flex',
                        height: '33%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                >

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        height: '33%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}
                >
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        height: '33%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                    }}
                >
                </Box>
            </Box>

            {/* Welcome Text */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '1rem'
                }}
            >
                <Typography variant='h2' sx={{ padding: '1rem' }}>
                    Welcome to my Portfolio!
                </Typography> 

                <Typography variant='h9'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant='h9'>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Box>

            {/* Bottom buttons */}
            <Box
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem'
                }}
            >
                <LinkButton /> 
                <LinkButton /> 
                <LinkButton />
            </Box>
        </Box>
    );
};

export default Home;
