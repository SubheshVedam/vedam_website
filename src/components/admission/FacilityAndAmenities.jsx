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
        padding: '80px 0', // Increased padding for more height above and below
      }}
    >
      <Box
        sx={{
          width: "1280px",
          minHeight: "3108px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px 120px",
          gap: "28px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-2%',
            fontFamily: 'Inter, sans-serif',
            width: '1040px',
            height: '43px',
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
            width: "100%",
            position: "relative",
            paddingTop: "56.25%", // 16:9 Aspect Ratio
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              src={isV2 ? "https://www.youtube.com/embed/iWm442DPj1A" : "https://www.youtube.com/embed/R9moRoww1s4"}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "20px",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
          {/* Removed the overlay Box with imageTitle and subtitleDescription */}
        </Box>
        {/* Add images below the video, stacked vertically */}
        {!isV2 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <img
              src="/img/amenities/1.png"
              alt="Facility 1"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/2.png"
              alt="Facility 2"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/3.png"
              alt="Facility 3"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/4.png"
              alt="Facility 4"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/5.png"
              alt="Facility 5"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/6.png"
              alt="Facility 6"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
            <img
              src="/img/amenities/7.png"
              alt="Facility 7"
              style={{
                height: "323px",
                width: "100%",
                objectFit: "contain",
                background: "#1D0036",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
