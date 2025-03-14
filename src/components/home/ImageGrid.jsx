import React from "react";
import Image from "next/image";
import { Box, ImageListItem, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const ImageGrid = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "0.5rem", md: "2rem" },
        marginBottom: { xs: "0.5rem", md: "2rem" },
      }}
    >
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
            <Image
              key={item.id}
              src={item.imageUrl}
              alt={"image"}
              width={44}
              height={11}
              loading="lazy"
              style={{ objectFit: "contain", aspectRatio: 1 }}
              className="singleImageGrid"
            />
          ))}
      </Box>
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
            <Image
              key={item.id}
              src={item.imageUrl}
              alt={"image"}
              width={44}
              height={11}
              loading="lazy"
              style={{ objectFit: "fill", aspectRatio: 1 }}
              className="singleImageGrid"
            />
          ))}
      </Box>
      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        sx={{
          marginTop: { xs: "16px", md: "32px" },
          fontSize: { xs: "10px", md: "12px" },
          fontFamily: "Inter, sans-serif",
          color: "#1E1E1E",
        }}
        lineHeight={"150%"}
        fontFamily="Inter"
      >
        {homeScreenData.fromEducationToEntrance.bottomText}
      </Typography>
    </Box>
  );
};
