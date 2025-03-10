// src/components/Footer.js
import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto', // Pushes the footer to the bottom
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} My Next.js App. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}