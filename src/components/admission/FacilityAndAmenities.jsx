import { admissionScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import React from "react";

export const FacilityAndAmenities = ({ isV2 }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: '#1D0036',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '32px 0', md: '80px 0' }, // Responsive vertical padding
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          minHeight: { xs: 'auto', md: '3108px' },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: { xs: '12px', sm: '24px', md: '20px 120px' }, // Responsive horizontal padding
          gap: '28px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '36px' },
            lineHeight: '120%',
            letterSpacing: '-2%',
            fontFamily: 'Inter, sans-serif',
            width: { xs: '100%', md: '1040px' },
            height: { xs: 'auto', md: '43px' },
            margin: 0,
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Facilities & Amenities
        </Typography>
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            paddingTop: '56.25%', // 16:9 Aspect Ratio
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <iframe
              src={isV2 ? 'https://www.youtube.com/embed/iWm442DPj1A' : 'https://www.youtube.com/embed/R9moRoww1s4'}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '20px',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
        {/* Add images below the video, stacked vertically */}
        {!isV2 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px', // Keep gap unchanged
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <img
                key={num}
                src={`/img/amenities/${num}.png`}
                alt={`Facility ${num}`}
                style={{
                  width: '100%',
                  maxHeight: '323px',
                  height: 'auto',
                  objectFit: 'contain',
                  background: '#1D0036',
                  borderRadius: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  display: 'block',
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
