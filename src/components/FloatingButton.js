'use client'
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { keyframes } from '@emotion/react';

// Animation for subtle pulse effect
const pulse = keyframes`
  0% { transform: scale(0.98); }
  50% { transform: scale(1); }
  100% { transform: scale(0.98); }
`;

const FloatingButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: {xs:'24px',sm:'70px'},
      right: '20px',
      zIndex: 1000,
      animation: `${pulse} 3.4s ease-in-out infinite`,
    }}>
      <Button
        className="liquid-cta-orange"
        onClick={handleClick}
        sx={{
          fontSize: "clamp(12px, 2.5vw, 18px)",
          color: "#231233",
          background: "linear-gradient(120deg, #FB7F05 0%, #FFA41A 62%, #FFE3BA 100%)",
          borderRadius: "14px",
          padding: "12px 24px",
          boxShadow: "0px 16px 30px rgba(72, 39, 8, 0.24)",
          transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isClicked ? 'translateY(4px) scale(0.98)' : 'none',
          '&:hover': {
            background: "linear-gradient(120deg, #FB7F05 0%, #FFA41A 62%, #FFE3BA 100%)",
            boxShadow: "0px 20px 34px rgba(72, 39, 8, 0.28)",
            transform: 'translateY(-3px) scale(1.02)',
          },
          '&:active': {
            transform: 'translateY(4px) scale(0.96)',
            boxShadow: "0px 10px 18px rgba(72, 39, 8, 0.2)",
          },
        }}
        href="https://apply.vedam.org/"
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon sx={{ 
          color: '#2A135B',
          transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
          transform: 'scale(0.95)',
          '&:hover': {
            transform: 'scale(1.06)'
          }
        }} />}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default FloatingButton;
