'use client';

import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';

const ToggleButton = () => {
  const searchParams = useSearchParams();
  const selectedFee = searchParams.get('fee') || 'tuition';

  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <Box
        sx={{
          backgroundColor: '#F9F9F9',
          borderRadius: 4.4,
          padding: '0.5rem',
          display: 'flex',
          position: 'relative',
          width: '21rem',
          height: '4.1rem',
          mx: 'auto',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(8px)',
          border:'1px solid #E5E2E2',
        }}
      >
            <Box
            sx={{
                position: 'absolute',
                top: '0.485rem',
                left: selectedFee === 'tuition' ? '0.8rem' : 'calc(50% + 0.3rem)',
                width: 'calc(50% - 0.8rem)',
                height: 'calc(100% - 1rem)',
                background: '#6513AC',
                borderRadius: 2.7,
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
                fontSize: '0.95rem',
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
    <Box maxWidth={800} mx="auto" p={2}>
      <ToggleButton />
      {/* <Box mt={2}>
        {selectedFee === 'tuition' ? (
          <Box> Tuition Fee Content Here</Box>
        ) : (
          <Box> Hostel Fee Content Here</Box>
        )}
      </Box> */}
    </Box>
  );
};

export default FeesToggleButton;
