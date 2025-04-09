"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const ImageGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndices, setActiveIndices] = useState([]);
  const [fadeStates, setFadeStates] = useState({});

  // Initialize with random images (9 for mobile, 10 for desktop)
  useEffect(() => {
    const count = isMobile ? 9 : 10;
    const initialIndices = getRandomIndices(
      count,
      homeScreenData.fromEducationToEntrance.imagesGrid.length
    );
    setActiveIndices(initialIndices);
  
    const initialFadeStates = {};
    initialIndices.forEach((index) => {
      initialFadeStates[index] = { opacity: 1, transitioning: false };
    });
    setFadeStates(initialFadeStates);
  }, [isMobile]);

  // Get unique random indices
  const getRandomIndices = (count, max) => {
    const indices = new Set();
    while (indices.size < count) {
      const randomIndex = Math.floor(Math.random() * max);
      indices.add(randomIndex);
    }
    return Array.from(indices);
  };

  // Subtle fade animation effect
  useEffect(() => {
    if (activeIndices.length === 0) return;

    const interval = setInterval(() => {
      const totalImages = isMobile ? 9 : 10;
      const positionsToReplace = [];
      const changeCount = Math.floor(totalImages * 0.4); // Change 40% of images at a time

      while (positionsToReplace.length < changeCount) {
        const randomPos = Math.floor(Math.random() * totalImages);
        if (
          !positionsToReplace.includes(randomPos) &&
          !fadeStates[activeIndices[randomPos]]?.transitioning
        ) {
          positionsToReplace.push(randomPos);
        }
      }

      // Start fade out
      setFadeStates((prev) => {
        const newStates = { ...prev };
        positionsToReplace.forEach((pos) => {
          const currentIndex = activeIndices[pos];
          newStates[currentIndex] = { opacity: 0, transitioning: true };
        });
        return newStates;
      });

      // After fade out, replace with new images
      setTimeout(() => {
        const newIndices = [...activeIndices];
        const usedIndices = new Set(activeIndices);

        positionsToReplace.forEach((pos) => {
          let newIndex;
          do {
            newIndex = Math.floor(
              Math.random() *
                homeScreenData.fromEducationToEntrance.imagesGrid.length
            );
          } while (usedIndices.has(newIndex));

          newIndices[pos] = newIndex;
          usedIndices.add(newIndex);
        });

        setActiveIndices(newIndices);

        // Start fade in (starting transparent)
        setFadeStates((prev) => {
          const newStates = { ...prev };
          positionsToReplace.forEach((pos) => {
            const newIndex = newIndices[pos];
            newStates[newIndex] = { opacity: 0, transitioning: true };
          });
          return newStates;
        });

        // Complete fade in
        setTimeout(() => {
          setFadeStates((prev) => {
            const newStates = { ...prev };
            positionsToReplace.forEach((pos) => {
              const newIndex = newIndices[pos];
              newStates[newIndex] = { opacity: 1, transitioning: false };
            });
            return newStates;
          });
        }, 500);
      }, 500); // Fade out duration
    }, 2000); // Change interval

    return () => clearInterval(interval);
  }, [activeIndices, fadeStates, isMobile]);

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
          gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(5, 1fr)",
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
                width: isMobile ? 80 : 140,
                height: isMobile ? 32 : 40,
                opacity: fadeStates[index]?.opacity ?? 1,
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                filter:
                  fadeStates[index]?.opacity < 1 ? "grayscale(20%)" : "none",
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