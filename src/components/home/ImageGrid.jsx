"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { homeScreenData } from "@/constants/data";

const SLIDE_DURATION = 40; // seconds

export const ImageGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = homeScreenData.fromEducationToEntrance.imagesGrid;

  // Split images into two rows
  const mid = Math.ceil(images.length / 2);
  const row1 = images.slice(0, mid);
  const row2 = images.slice(mid);

  // Helper to render a sliding row
  const SlidingRow = ({ images, reverse, speed }) => (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: isMobile ? 40 : 60,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 3 : 6,
          width: "max-content",
          animation: `${reverse ? "slide-rtl-reverse" : "slide-rtl"} ${speed}s linear infinite`,
        }}
        className={reverse ? "slide-rtl-reverse" : "slide-rtl"}
      >
        {/* Duplicate for seamless loop */}
        {[...images, ...images].map((item, idx) => (
          <Box
            key={item.imageUrl + idx}
            sx={{
              position: "relative",
              width: isMobile ? 80 : 140,
              height: isMobile ? 32 : 40,
              flexShrink: 0,
            }}
          >
            <Image
              src={item.imageUrl}
              alt={"company logo"}
              fill
              loading="lazy"
              style={{ objectFit: "contain" }}
              className="singleImageGrid"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        marginTop: { xs: "0.5rem", md: "2rem" },
        marginBottom: { xs: "0.5rem", md: "2rem" },
      }}
    >
      {/* Sliding Rows */}
      <SlidingRow images={row1} reverse={false} speed={SLIDE_DURATION} />
      <SlidingRow images={row2} reverse={true} speed={SLIDE_DURATION + 7} />

      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        sx={{
          marginTop: { xs: "16px", md: "32px" },
          fontSize: { xs: "6px", md: "8px" },
          fontFamily: "Inter",
          color: "#1E1E1E",
          lineHeight: "150%",
        }}
      >
        {homeScreenData.fromEducationToEntrance.bottomText}
      </Typography>

      {/* Keyframes for sliding animation */}
      <style jsx global>{`
        @keyframes slide-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-rtl-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};