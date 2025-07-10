"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export const VedamInovationLab = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  // Carousel refs and state
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentTranslateRef = useRef(0);
  const animationIdRef = useRef(null);

  const innovationImages = [
    "/img/innovation_lab/image4.jpg",
    "/img/innovation_lab/image2.jpg",
    "/img/innovation_lab/innovation_lab_7.jpeg",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const speed = 0.8; // pixels per frame
    const itemWidth = 280 + 24; // width + gap
    const totalItems = innovationImages.length;
    const resetPoint = -(itemWidth * totalItems);

    const animate = () => {
      if (!isPaused) {
        currentTranslateRef.current -= speed;

        // Reset position when we've moved exactly one set of images
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
  }, [isPaused, innovationImages.length]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: {
              xs: "12px", // 0px and up
              sm: "24px", // 600px and up
            },
            fontStyle: "normal",
            fontWeight: 400,
            letterSpacing: "-0.72px",
          }}>
          Vedam Innovation Lab is a cutting-edge incubator driving innovation in
          AR/VR, AI & ML, IoT, Robotics and Drones.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "auto",
          height: isMobile ? "220px" : isLarge ? "565px" : "580px",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
        {showIframe ? (
          <iframe
            width="100%"
            height="100%"
            style={{
              borderRadius: "16px",
              border: "none",
            }}
            src={videoUrl}
            title="YouTube video player"
            loading="lazy"
            className="techTeamImage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box
            onClick={() => {
              setVideoUrl(
                "https://www.youtube.com/embed/eq8HnUDuN0E?autoplay=1&si=0"
              );
              setShowIframe(true);
            }}
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}>
            <Image
              src="/img/VideothumbnaillifeVST.jpg"
              alt="Video thumbnail"
              width={2000}
              height={1200}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.6)",
                padding: "12px 16px",
                borderRadius: "100px",
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="#fff"
                viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Box>
          </Box>
        )}
      </Box>

      {/* Infinite Carousel Section */}
      <Box
        sx={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          position: "relative",
          marginTop: "33px",
          height: "200px",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            flexWrap: "nowrap",
            willChange: "transform",
          }}>
          {/* Triple the images for seamless loop */}
          {[...innovationImages, ...innovationImages, ...innovationImages].map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "280px",
                height: "200px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: 2,
            color: "#5E00AF",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: {
              xs: "18px", // 0px and up
              sm: "24px", // 600px and up
            },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "31px",
            letterSpacing: "-0.72px",
          }}
          className="text-trim"
        >
          Vedam Innovation Zone: Engineering Tomorrow's Tech Today
        </Typography>
      </Box>
    </Box>
  );
};