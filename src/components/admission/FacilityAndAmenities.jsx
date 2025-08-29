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
          minHeight: 'auto',
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

        {/* Images: first five stacked, last two side-by-side */}
        {!isV2 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {[2, 3, 4, 5, 6].map((num) => (
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

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: '22px',
                width: '100%',
              }}
            >
              {[7, 8].map((num) => (
                <Box
                  key={num}
                  sx={{
                    flex: 1,
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={`/img/amenities/${num}.png`}
                    alt={`Facility ${num}`}
                    style={{
                      width: '100%',
                      maxHeight: '323px',
                      height: 'auto',
                      objectFit: 'contain',
                      background: '#1D0036',
                      borderRadius: '16px',
                      display: 'block',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
