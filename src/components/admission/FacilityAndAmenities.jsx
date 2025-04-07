import { admissionScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const FacilityAndAmenities = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", md: "388px" },
          borderRadius: "20px",
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 71.57%, #000000 100%), url(${admissionScreenData.facilityAndAmenities.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "20px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingLeft: "28px",
            paddingBottom: "28px",
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
