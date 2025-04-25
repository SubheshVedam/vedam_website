import { admissionScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import React from "react";

export const FacilityAndAmenities = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", md: "520px" },
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/R9moRoww1s4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            padding: "28px",
            zIndex: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#FFFFFF",
              fontSize: "clamp(14px, 2vw, 24px)",
              lineHeight: "150%",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            {admissionScreenData.facilityAndAmenities.imageTitle}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#FFFFFF",
              fontSize: "clamp(12px, 2vw, 16px)",
              lineHeight: "100%",
              fontFamily: "Inter",
              fontWeight: "350",
            }}
          >
            {admissionScreenData.facilityAndAmenities.subtitleDescription}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          overflowX: { xs: "auto", md: "hidden" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {admissionScreenData.facilityAndAmenities.imageArray.map((item) => (
          <img
            key={item.id}
            src={item.imageUrl}
            style={{ width: "100%", height: "126px" }}
          />
        ))}
      </Box>
    </Box>
  );
};
