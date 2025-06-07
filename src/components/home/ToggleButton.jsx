'use client';
import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';

const ToggleButton = () => {
  const searchParams = useSearchParams();
  const selectedFee = searchParams.get('fee') || 'tuition';

  return (
    <Box display="flex" justifyContent="center" mb={2} px={{ xs: 2, sm: 0 }}>
      <Box
        sx={{
          backgroundColor: '#F9F9F9',
          borderRadius: { xs: 3, sm: 4.4 },
          padding: { xs: '0.4rem', sm: '0.5rem' },
          display: 'flex',
          position: 'relative',
          width: { 
            xs: '21rem', 
            sm: '21rem', 
            md: '21rem' 
          },
          maxWidth: '21rem',
          height: { xs: '3.5rem', sm: '4.1rem' },
          mx: 'auto',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #E5E2E2',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '0.4rem', sm: '0.485rem' },
            left: selectedFee === 'tuition' 
              ? { xs: '0.6rem', sm: '0.8rem' }
              : { xs: 'calc(50% + 0.2rem)', sm: 'calc(50% + 0.3rem)' },
            width: { xs: 'calc(50% - 0.6rem)', sm: 'calc(50% - 0.8rem)' },
            height: { xs: 'calc(100% - 0.8rem)', sm: 'calc(100% - 1rem)' },
            background: '#6513AC',
            borderRadius: { xs: 2, sm: 2.7 },
            transition: 'left 0.4s ease',
            zIndex: 1,
          }}
        />
        {['tuition', 'hostel'].map((type) => (
          <Link
            key={type}
            href={`?fee=${type}`}
            scroll={false}
            style={{ flex: 1, zIndex: 2, textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: selectedFee === type ? '#fff' : '#6513AC',
                fontWeight: 600,
                height: '100%',
                fontSize: { 
                  xs: '0.85rem', 
                  sm: '0.9rem', 
                  md: '0.95rem' 
                },
                px: { xs: 1, sm: 0 },
                textAlign: 'center',
                whiteSpace: { xs: 'nowrap', sm: 'normal' },
              }}
            >
              {type === 'tuition' ? 'Tuition Fees' : 'Hostel/Mess Fees'}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const FeesToggleButton = () => {
  const searchParams = useSearchParams();
  const selectedFee = searchParams.get('fee') || 'tuition';

  return (
    <Box 
      width="100%"
      display="flex" 
      justifyContent="center"
    >
      <ToggleButton />
      {/* <Box mt={2}>
        {selectedFee === 'tuition' ? (
          <Box>Tuition Fee Content Here</Box>
        ) : (
          <Box>Hostel Fee Content Here</Box>
        )}
      </Box> */}
    </Box>
  );
};

export default FeesToggleButton;