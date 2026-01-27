'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const InvestorWhoTrustUs = () => {
  // Carousel refs and state
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentTranslateRef = useRef(0);
  const animationIdRef = useRef(null);

  // Investor data
  const investorData = [
    { id: 0, img: "/img/investors/alteria.webp" },
    { id: 1, img: "/img/investors/saama.webp" },
    { id: 2, img: "/img/investors/westbridge.webp" },
    { id: 3, img: "/img/investors/prime.webp" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !investorData.length) return;

    const speed = 0.8; // pixels per frame
    // Responsive item width based on screen size
    const getItemWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return 120; // mobile
      if (screenWidth < 1024) return 140; // tablet
      return 160; // desktop
    };

    // Responsive gap based on screen size
    const getGap = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) return 12; // mobile
      if (screenWidth < 1024) return 16; // tablet
      return 20; // desktop
    };

    const itemWidth = getItemWidth();
    const gap = getGap();
    const totalItemWidth = itemWidth + gap;
    const totalItems = investorData.length;
    const resetPoint = -(totalItemWidth * totalItems);

    const animate = () => {
      if (!isPaused) {
        currentTranslateRef.current -= speed;

        // Reset position seamlessly when we've moved exactly one set of images
        if (currentTranslateRef.current <= resetPoint) {
          currentTranslateRef.current = 0;
        }
      }

      // Always update the transform, whether paused or not
      carousel.style.transform = `translateX(${currentTranslateRef.current}px)`;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Cancel any existing animation before starting a new one
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPaused, investorData.length]);

  return (
    <Box
      sx={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        position: "relative",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: {
            xs: "12px", // mobile
            md: "16px", // tablet
            lg: "20px", // desktop
          },
          flexWrap: "nowrap",
          willChange: "transform",
        }}
      >
        {/* Triple the images for seamless loop */}
        {[...investorData, ...investorData, ...investorData].map(
          (item, index) => (
            <Box
              key={`${item.id}-${index}`}
              component="img"
              src={item.img}
              alt="investor logo"
              loading="lazy"
              className="investorsImage"
              sx={{
                objectFit: "contain",
                flexShrink: 0,
                width: {
                  xs: "120px", // mobile
                  md: "140px", // tablet
                  lg: "160px", // desktop
                },
                // height: {
                //   xs: "60px", // mobile
                //   md: "70px", // tablet
                //   lg: "80px", // desktop
                // },
              }}
            />
          )
        )}
      </Box>

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
        {homeScreenData.investorWhoTrustUs.bottomText}
      </Typography>
    </Box>
  );
};

export default InvestorWhoTrustUs;