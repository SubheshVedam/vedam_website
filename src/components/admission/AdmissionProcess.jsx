"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { admissionScreenData } from "@/constants/data";

export const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Initialize step refs array
  useEffect(() => {
    stepRefs.current = Array(admissionScreenData.admissionProcess.rightSideArray.length)
      .fill()
      .map((_, i) => stepRefs.current[i] || null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate the visible area of the container
      const visibleStart = Math.max(0, -containerTop);
      const visibleEnd = Math.min(containerHeight, viewportHeight - containerTop);

      // Find which step is most visible
      let mostVisibleStep = 0;
      let maxVisibility = 0;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        
        const stepRect = step.getBoundingClientRect();
        const stepTop = stepRect.top - containerTop;
        const stepBottom = stepRect.bottom - containerTop;

        // Calculate visible height of the step
        const visibleHeight = Math.min(stepBottom, visibleEnd) - Math.max(stepTop, visibleStart);
        const visibility = visibleHeight / stepRect.height;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleStep = index;
        }
      });

      setActiveStep(mostVisibleStep);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        marginTop: { xs: "1rem", md: "2rem" },
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "2rem",
        gap: { xs: 0, md: "1rem" },
        position: "relative",
      }}
    >
      {/* Left Side Navigation - Progress Indicator */}
      {isMdUp && (
        <Box
          sx={{
            flex: "0 0 20%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            top: "100px",
            alignSelf: "flex-start",
          }}
        >
          {admissionScreenData.admissionProcess.leftSideArray.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
              onClick={() => {
                stepRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: activeStep >= index ? "#6C10BC" : "#8F8F8F",
                  transition: "background-color 0.3s ease",
                }}
              />
              <Typography
                variant="inherit"
                sx={{
                  fontWeight: "600",
                  lineHeight: "100%",
                  fontSize: "1rem",
                  color: activeStep >= index ? "#6C10BC" : "#8F8F8F",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Right Side Content */}
      <Box
        ref={containerRef}
        sx={{
          flex: {
            xs: "0 0 100%",
            md: "0 0 80%",
          },
          paddingRight: { xs: "0px", md: "20px" },
          height: {xs:"40vh",sm:"50vh"},
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          position: "relative",
          paddingRight: { xs: "0px", md: "20px", lg: "40px" },
        }}
      >
        {admissionScreenData.admissionProcess.rightSideArray.map((item, index) => (
          <Box
            key={item.id}
            ref={el => (stepRefs.current[index] = el)}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              position: "relative",
              gap: { xs: "1rem", md: "1.5rem" },
              paddingBottom: { xs: "1rem", md: "1.5rem" },
              paddingRight: { xs: "10px", md: "20px", lg: "60px" },
              minHeight: {xs:'20vh',sm:"30vh"},
              scrollSnapAlign: "start",
            }}
          >
            {/* Vertical line between steps */}
            {item.id !==
              admissionScreenData.admissionProcess.rightSideArray.length -
                1 && (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 0,
                  top: 0,
                  left: { xs: "7px", md: "15px" },
                  bottom: 0,
                  height: "100%",
                  width: "1.5px",
                  backgroundColor: "#6C10BC",
                  opacity: activeStep > item.id ? 1 : 0.3,
                  transition: "opacity 0.3s ease",
                }}
              />
            )}

            {/* Step indicator circle */}
            <Box
              sx={{
                position: "relative",
                zIndex: 3,
                width: { xs: "16px", md: "30px" },
                minWidth: { xs: "16px", md: "30px" },
                maxWidth: { xs: "16px", md: "30px" },
                height: { xs: "16px", md: "30px" },
                minHeight: { xs: "16px", md: "30px" },
                maxHeight: { xs: "16px", md: "30px" },
                borderRadius: "50%",
                backgroundColor:
                  activeStep >= item.id ? "#6C10BC" : "rgba(108, 16, 188, 0.3)",
                transition: "background-color 0.3s ease",
              }}
            />
            
            {/* Step content */}
            <Box
              sx={{
                height: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  fontSize: "clamp(12px, 2vw, 20px)",
                  color: "#6C10BC",
                  fontFamily: "Inter",
                  lineHeight: "100%",
                  marginBottom: "4px",
                }}
              >
                {item.step}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "400",
                  fontSize: "clamp(1rem, 2vw, 2rem)",
                  color: "rgba(31, 31, 31, 1)",
                  fontFamily: "Inter",
                  lineHeight: "100%",
                  marginBottom: { xs: "12px", md: "16px" },
                }}
              >
                {item.title}
              </Typography>
              {item.id == 4 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <img src="/img/info.webp" className="infoImage" />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#6C10BC",
                      fontSize: "clamp(12px, 2vw, 14px)",
                      fontFamily: "Inter",
                      fontWeight: "500",
                      lineHeight: "150%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.infoText}
                  </Typography>
                </Box>
              )}
              <Typography
                variant="caption"
                sx={{
                  fontWeight: "250",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  color: "rgba(31, 31, 31, 1)",
                  fontFamily: "Inter",
                  lineHeight: "150%",
                }}
              >
                {item.subtitle}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: "600",
                  fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
                  fontFamily: "Inter",
                  color: "rgba(108, 16, 188, 1)",
                  marginTop: "0.5rem",
                }}
              >
                {item.subtitle1}
              </Typography>
              {item.showButton && (
                <Button
                  variant="inherit"
                  sx={{
                    marginTop: "1rem",
                    padding: { xs: "8px 16px", md: "10px 20px" },
                    backgroundColor: "rgba(251, 127, 5, 1)",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(251, 127, 5, 0.8)",
                    },
                  }}
                  href="https://apply.vedam.org/"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "clamp(14px, 2vw, 20px)",
                      fontFamily: "Inter",
                    }}
                  >
                    Apply Now
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};