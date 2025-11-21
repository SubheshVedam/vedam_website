import React from "react";
import { Typography, Box } from "@mui/material";

export const InCollaborationWith = () => {
  const campusData = [
    {
      id: 0,
      image: "/img/inCollaborationWith/img1.png",
      imageMobile: "/img/inCollaborationWith/img1_mob.png",
      text: "Ajeenkya DY Patil University, Pune",
      color: "#8A18FF",
      gradientStart: "#ECD5FF",
    },
    {
      id: 1,
      image: "/img/inCollaborationWith/img2.png",
      imageMobile: "/img/inCollaborationWith/img2_mob.png",
      text: "Ajeenkya DY Patil University, Pune",
      color: "#F57A10",
      gradientStart: "#FFE9AE",
    }
  ];

  return (
    <Box sx={{
      width: "100%",
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '14px' },
          alignItems: 'center',
        }}
      >
        {campusData.map((campus) => (
          <Box
            key={campus.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', md: '500px' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                mb: '-40px',
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={campus.image}
                alt={campus.text}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: "16px",
                  objectFit: "cover",
                  display: { xs: 'none', md: 'block' }
                }}
              />
              <Box
                component="img"
                src={campus.imageMobile}
                alt={campus.text}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: "16px",
                  objectFit: "cover",
                  display: { xs: 'block', md: 'none' }
                }}
              />
            </Box>

            <Box
              sx={{
                borderRadius: '12px',
                background: `linear-gradient(0deg, ${campus.gradientStart} 1.44%, #FFF 73.08%)`,
                width: { xs: '74%', md: '62%' },
                p: { xs: '24px 40px', md: '24px 46px' },
                position: 'relative',
                zIndex: 2,
                borderBottom: `4px solid ${campus.color}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: { xs: '16px', md: '24px' },
                  fontWeight: 500,
                  lineHeight: { xs: '22.4px', md: '33.6px' },
                  color: '#1E1E1E',
                  textAlign: 'center',
                }}
              >
                {campus.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};