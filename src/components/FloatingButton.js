'use client'
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const FloatingButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
      transition: 'transform 0.2s ease'
    }}>
      <Button
        color="inherit"
        sx={{
          backgroundColor: "#6C10BC",
          borderRadius: "8px",
          padding: { xs: "12px 24px", md: "16px 32px" },
          boxShadow: '0 4px 20px rgba(108, 16, 188, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            backgroundColor: "#5A0DA3",
            boxShadow: '0 6px 24px rgba(108, 16, 188, 0.4)',
            transform: 'translateY(-2px)'
          },
          transform: isClicked ? 'translateY(2px)' : 'none'
        }}
        href="https://apply.vedam.org/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        endIcon={<OpenInNewIcon sx={{color:'white'}}/>}
      >
        <Typography
          variant="button"
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: 600,
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            lineHeight: "100%",
            textTransform: "none",
            letterSpacing: "0.5px",
            whiteSpace: 'nowrap'
          }}
        >
          Apply Now
        </Typography>
      </Button>
    </Box>
  );
};

export default FloatingButton;