import React from 'react';
import { Box, Typography } from '@mui/material';
import { lifeAtVedam } from "@/constants/data";

const Robotics2 = () => {
    const { title, subtitle, icon1, icon2 } = lifeAtVedam.Robotics;

    return (
        <Box sx={{
                    borderRadius: { xs: '20px', sm: '28px', md: '36px' },
                    background: 'linear-gradient(135deg, #2B135C 0%, #6F17D1 25%, #8A18FF 45%, #8E17FF 50%, #922CCD 65%, #F97D03 100%)',
                    height: { 
                        xs: '320px', 
                        sm: '360px', 
                        md: '400px', 
                        lg: '24.4375rem' 
                    },
                    width: { 
                        xs: '100%', 
                        sm: '100%', 
                        md: '100%', 
                        lg: '41.5rem' 
                    },
                    maxWidth: { 
                        xs: '100%', 
                        lg: '41.5rem' 
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    padding: { 
                        xs: '1.5rem 1rem', 
                        sm: '2rem 1.5rem', 
                        md: '2.5rem 2rem' 
                    },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' }
                }}>
                    {/* Text Content */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        gap: { xs: '0.75rem', md: '0.5rem' },
                        zIndex: 2,
                        flex: { xs: 'none', md: '1' },
                        width: { xs: '100%', md: '40%' },
                        marginBottom: { xs: '1rem', md: 0 }
                    }}>
                        <Typography sx={{
                            fontSize: { 
                                xs: '1.5rem', 
                                sm: '1.75rem', 
                                md: '2rem', 
                                lg: '2.25rem' 
                            },
                            fontFamily: "var(--font-inter), sans-serif",
                            fontWeight: 500,
                            color: 'white',
                            lineHeight: '1.2',
                            letterSpacing: '-0.02em'
                        }}>
                            {title}
                        </Typography>
                        <Typography sx={{
                            fontSize: { 
                                xs: '0.875rem', 
                                sm: '1rem', 
                                md: '1.125rem', 
                                lg: '1.25rem' 
                            },
                            fontFamily: "var(--font-inter), sans-serif",
                            fontWeight: 300,
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.5',
                            maxWidth: { xs: '100%', md: '280px' }
                        }}>
                            {subtitle}
                        </Typography>
                    </Box>
        
                    {/* Images Container */}
                    <Box sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        right: { xs: 'auto', md: 0 },
                        top: { xs: 'auto', md: 0 },
                        bottom: { xs: 'auto', md: 0 },
                        width: { xs: '100%', md: '60%' },
                        height: { xs: 'auto', md: '100%' },
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'column' },
                        alignItems: { xs: 'center', md: 'flex-end' },
                        justifyContent: { xs: 'space-around', md: 'center' },
                        paddingRight: { xs: 0, md: '2rem' },
                        gap: { xs: '1rem', md: 0 }
                    }}>
                    
                        <Box
                            component="img"
                            src={icon1}
                            alt="Mac Studio"
                            sx={{
                                width: { 
                                    xs: '300px', 
                                    sm: '180px', 
                                    md: '280px', 
                                    lg: '21.5985rem' 
                                },
                                height: { 
                                    xs: '230px', 
                                    sm: '215px', 
                                    md: '330px', 
                                    lg: '25.5rem' 
                                },
                                // objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))',
                                transform: {
                                    xs: 'perspective(400px) rotateY(-10deg) rotateX(3deg)',
                                    md: 'perspective(600px) rotateY(-15deg) rotateX(5deg)'
                                },
                                zIndex: 2,
                                marginRight: { xs: '-85px', md: '-35px' }
                            }}
                        />
                        
                   
                        {/* <Box
                            component="img"
                            src={icon2}
                            alt="Vision Pro"
                            sx={{
                                width: { 
                                    xs: '150px', 
                                    sm: '200px', 
                                    md: '310px', 
                                    lg: '24.125rem' 
                                },
                                height: { 
                                    xs: '115px', 
                                    sm: '150px', 
                                    md: '235px', 
                                    lg: '18.5rem' 
                                },
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))',
                                transform: {
                                    xs: 'perspective(400px) rotateY(10deg) rotateX(-3deg)',
                                    md: 'perspective(600px) rotateY(15deg) rotateX(-5deg)'
                                },
                                marginBottom: { xs: 0, md: '10rem' },
                                zIndex: 1
                            }}
                        /> */}
                    </Box>
        
              
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: { xs: 0, md: '50%' },
                        bottom: 0,
                        background: {
                            xs: 'linear-gradient(180deg, rgba(43, 19, 92, 0.2) 0%, transparent 70%)',
                            md: 'linear-gradient(90deg, rgba(43, 19, 92, 0.3) 0%, transparent 100%)'
                        },
                        borderRadius: { xs: '20px', sm: '28px', md: '36px' },
                        zIndex: 1
                    }} />
                </Box>
    );
};

export default Robotics2;