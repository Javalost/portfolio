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
            <Box sx={{
                    width: '100%', 
                    height: '15rem',
                    background: 'linear-gradient(to right, #334641, #897A68, #926557, #E1E5E6)',  
                    display:'flex', 
                    flexDirection:'column',
                    alignContent: 'flex-end',
                    alignItems: 'center',
            }}>            
                <Box sx={{ 
                    
                }}>
                    {/* If using Next.js Image component */}
                    <Image src="/assets/mydalleimage-removebg.png" alt="Descriptive Alt Text" width={400} height={500} /> 
                </Box>
            </Box>
            <Box sx={{height:'10rem', background:'yellow', display:'flex', }}>
                <Box sx={{display:'flex', width:'33%', height:'100%', border:'solid'    }}> {/* Thirds */}
                    <Box sx={{background:'red', width:'50%'}}> {/* Column1 */}
                        <Box sx={{width: '100%', height:'33%',background:'blue'}}> {/* Row1-3 * Gradient shoud lead into these boxes */} 

                        </Box> 
                        <Box sx={{background:'green',width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                    <Box sx={{}}> {/* Column1 */}
                        <Box>   {/* Row4-6 Gradient Should lead into here*/}

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', width:'33%', height:'100%', border:'solid'}}> {/* Thirds */}
                    <Box sx={{background:'red', width:'50%'}}> {/* Column1 */}
                    <Box sx={{width: '100%', height:'33%',background:'blue'}}> {/* Row1-3 * Gradient shoud lead into these boxes */} 

                        </Box> 
                        <Box sx={{background:'green',width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                    <Box sx={{border:'solid'}}> {/* Column2 */}
                        <Box>   {/* Row4-6 Gradient should lead into here*/}

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', width:'33%', height:'100%', border:'solid'}}> {/* Thirds */}
                <Box sx={{background:'red', width:'50%'}}> {/* Column1 */}
                <Box sx={{width: '100%', height:'33%',background:'blue'}}> {/* Row1-3 * Gradient shoud lead into these boxes */} 

                        </Box> 
                        <Box sx={{background:'green',width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                    <Box> {/* Column2 */}
                        <Box>   {/* Row4-6 Gradient should lead into here */}

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                        <Box sx={{width:'100%', height:'33%'}}>

                        </Box>
                    </Box>
                </Box>
            </Box>

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