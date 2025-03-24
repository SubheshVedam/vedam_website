'use client'
import React from "react";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const ImageGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        marginTop: { xs: "0.5rem", md: "2rem" },
        marginBottom: { xs: "0.5rem", md: "2rem" },
      }}
    >
      {/* First Row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          justifyContent: "space-around",
          marginBottom: { xs: "0.5rem", md: "1.5rem" },
        }}
      >
        {homeScreenData.fromEducationToEntrance.imagesGrid
          .slice(0, 5)
          .map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: isMobile ? 44 : 140,
                height: isMobile ? 14 : 40,
              }}
            >
              <Image
                src={item.imageUrl}
                alt={"image"}
                fill
                loading="lazy"
                style={{ 
                  objectFit: "contain",
                }}
                className="singleImageGrid"
              />
            </Box>
          ))}
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          justifyContent: "space-around",
        }}
      >
        {homeScreenData.fromEducationToEntrance.imagesGrid
          .slice(5, 10)
          .map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: isMobile ? 44 : 140,
                height: isMobile ? 14 : 40,
              }}
            >
              <Image
                src={item.imageUrl}
                alt={"image"}
                fill
                loading="lazy"
                style={{ 
                  objectFit: "contain",
                }}
                className="singleImageGrid"
              />
            </Box>
          ))}
      </Box>

      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        sx={{
          marginTop: { xs: "16px", md: "32px" },
          fontSize: { xs: "10px", md: "12px" },
          fontFamily: "Inter",
          color: "#1E1E1E",
          lineHeight: "150%",
        }}
      >
        {homeScreenData.fromEducationToEntrance.bottomText}
      </Typography>
    </Box>
  );
};