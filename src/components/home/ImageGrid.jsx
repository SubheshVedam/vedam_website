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

  // Initialize with 5 random images from the available ones
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
      // Select 3 random positions to replace (0-4)
      const positionsToReplace = [];
      while (positionsToReplace.length < 3) {
        const randomPos = Math.floor(Math.random() * 10);
        if (!positionsToReplace.includes(randomPos)) {
          positionsToReplace.push(randomPos);
        }
      }

      // Start fade out for the selected images
      setFadeStates(prev => {
        const newFadeStates = {...prev};
        positionsToReplace.forEach(pos => {
          const currentIndex = activeIndices[pos];
          newFadeStates[currentIndex] = false;
        });
        return newFadeStates;
      });

      // After fade out completes, replace with new images
      setTimeout(() => {
        // Get new random indices that aren't currently active
        const newIndices = [...activeIndices];
        const usedIndices = new Set(activeIndices);
        
        positionsToReplace.forEach(pos => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * homeScreenData.fromEducationToEntrance.imagesGrid.length);
          } while (usedIndices.has(newIndex));
          
          newIndices[pos] = newIndex;
          usedIndices.add(newIndex);
        });

        // Update active indices
        setActiveIndices(newIndices);

        // Start fade in for new images (initially invisible)
        setFadeStates(prev => {
          const newFadeStates = {...prev};
          positionsToReplace.forEach(pos => {
            const newIndex = newIndices[pos];
            newFadeStates[newIndex] = false;
          });
          return newFadeStates;
        });

        // Then fade in after a small delay
        setTimeout(() => {
          setFadeStates(prev => {
            const newFadeStates = {...prev};
            positionsToReplace.forEach(pos => {
              const newIndex = newIndices[pos];
              newFadeStates[newIndex] = true;
            });
            return newFadeStates;
          });
        }, 10);
      }, 500); // Match fade duration
    }, 2000); // Change images every 2 seconds

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