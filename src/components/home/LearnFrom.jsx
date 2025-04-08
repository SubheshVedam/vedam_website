"use client";
import React, { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { expertsData } from "@/constants/data";
import ExpertCard from "../atoms/ExpertCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const LearnFrom = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          opacity: 0.8,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1.2rem",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          padding: "0 40px",
        }}
      >
        {expertsData.map((expert, index) => (
          <ExpertCard
            key={`expertsCard-${index}`}
            imageUrl={expert.imageUrl}
            name={expert.name}
            logo={expert.logo}
            designation={expert.designation}
            info={expert.info}
            rating={expert.rating}
            linkedIn={expert.linkedIn}
          />
        ))}
      </Box>

      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          opacity: 0.8,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};
