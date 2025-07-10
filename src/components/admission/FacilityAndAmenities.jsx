import { admissionScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import React from "react";

export const FacilityAndAmenities = ({ isV2 }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "56.25%", // 16:9 Aspect Ratio
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: isV2 ? 0 : "20px",
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
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        {!isV2 && <Box
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
        </Box>}
      </Box>
      {!isV2 && <Box
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
      </Box>}
    </Box>
  );
};
