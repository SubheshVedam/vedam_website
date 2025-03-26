'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const ImageGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndices, setActiveIndices] = useState([]);
  const [fadeStates, setFadeStates] = useState({});

  // Initialize with 5 random images from the 10 available
  useEffect(() => {
    const initialIndices = getRandomIndices(10, homeScreenData.fromEducationToEntrance.imagesGrid.length);
    setActiveIndices(initialIndices);
    
    const initialFadeStates = {};
    initialIndices.forEach(index => {
      initialFadeStates[index] = true; // true means visible/faded in
    });
    setFadeStates(initialFadeStates);
  }, []);

  // Get unique random indices
  const getRandomIndices = (count, max) => {
    const indices = new Set();
    while (indices.size < count) {
      const randomIndex = Math.floor(Math.random() * max);
      indices.add(randomIndex);
    }
    return Array.from(indices);
  };

  // Animation effect
  useEffect(() => {
    if (activeIndices.length === 0) return;

    const interval = setInterval(() => {
      // Randomly select which position to replace (0-4)
      const positionToReplace = Math.floor(Math.random() * 5);
      const currentIndex = activeIndices[positionToReplace];

      // Start fade out
      setFadeStates(prev => ({
        ...prev,
        [currentIndex]: false
      }));

      // After fade out completes, replace with new image
      setTimeout(() => {
        // Get a new random index that's not currently active
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * homeScreenData.fromEducationToEntrance.imagesGrid.length);
        } while (activeIndices.includes(newIndex));

        // Update active indices
        setActiveIndices(prev => {
          const newArr = [...prev];
          newArr[positionToReplace] = newIndex;
          return newArr;
        });

        // Start fade in for new image
        setFadeStates(prev => ({
          ...prev,
          [newIndex]: false // Start invisible
        }));

        // Then fade in after a small delay
        setTimeout(() => {
          setFadeStates(prev => ({
            ...prev,
            [newIndex]: true
          }));
        }, 10);
      }, 500); // Match fade duration
    }, 500); // Change images every 1.5 seconds

    return () => clearInterval(interval);
  }, [activeIndices]);

  return (
    <Box
      sx={{
        marginTop: { xs: "0.5rem", md: "2rem" },
        marginBottom: { xs: "0.5rem", md: "2rem" },
      }}
    >
      {/* Image Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          justifyContent: "space-around",
          marginBottom: { xs: "0.5rem", md: "1.5rem" },
        }}
      >
        {activeIndices.map((index, position) => {
          const item = homeScreenData.fromEducationToEntrance.imagesGrid[index];
          return (
            <Box
              key={`img-${item.id}-${position}`}
              sx={{
                position: "relative",
                width: isMobile ? 44 : 140,
                height: isMobile ? 14 : 40,
                opacity: fadeStates[index] ? 1 : 0,
                transition: 'opacity 0.5s ease',
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
          );
        })}
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