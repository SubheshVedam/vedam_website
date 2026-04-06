"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { lifeAtVedam } from "@/constants/data";
import { CardContainer } from "@/components";

export const ScrollComponentDesktop = () => {
  const contentRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const sectionData = lifeAtVedam.aiFirst.data;
  const { title: cardTitle, subtitle: cardSubtitle } = lifeAtVedam.AI;

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const totalScrollableHeight = scrollHeight - clientHeight;

    if (totalScrollableHeight === 0) return;

    const scrollPercentage = scrollTop / totalScrollableHeight;
    const newActiveStep = Math.min(
      Math.floor(scrollPercentage * sectionData.length),
      sectionData.length - 1
    );

    setActiveStep(newActiveStep);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // minHeight: "37.5rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "80rem",
          width: { xs: "100%", md: "64rem", xl: "80rem" },
          paddingX: "2rem",
        }}
      >
        <CardContainer title="" subtitle="">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "31.25rem",
              // marginTop: "2rem",
            }}
          >
            {/* Left Progress Section */}
            <Box
              sx={{
                flex: "0 0 12.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "2.6rem",
                marginRight: "1.5rem",
                marginTop: "1rem",
              }}
            >
              {sectionData.map((section, index) => (
                <Box
                  key={section.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0",
                    position: "relative",
                    marginTop: "0.1rem",
                  }}
                >
                  {/* Text Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      component="div"
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        lineHeight: "1.3",
                        background:
                          activeStep >= index
                            ? "linear-gradient(135deg, #6C10BC 0%, #FF981A 100%)"
                            : "#C076FF",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textFillColor: "transparent",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {/* Dot and Line */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "1.3125rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* Dot */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.0625rem"
                      height="1.0625rem"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="10"
                        fill="white"
                        stroke={activeStep >= index ? "#7B2CBF" : "#E0E0E0"}
                      />
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="6"
                        fill={activeStep >= index ? "#7B2CBF" : "#E0E0E0"}
                        stroke={activeStep >= index ? "#7B2CBF" : "#E0E0E0"}
                      />
                    </svg>

                    {/* Connector Line */}
                    {index !== sectionData.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "1.3125rem",
                          left: "50%",
                          transform: "translateX(-1px)",
                          width: "0.125rem",
                          height: "3.75rem",
                          backgroundImage:
                            activeStep > index
                              ? `repeating-linear-gradient(to bottom, #8A18FF, #8A18FF 0.625rem, transparent 0.625rem, transparent 0.875rem)`
                              : `repeating-linear-gradient(to bottom, #E0E0E0, #E0E0E0 0.625rem, transparent 0.625rem, transparent 0.875rem)`,
                          transition: "all 0.3s ease",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Right Content Section */}
            <Box
              sx={{
                flex: "1",
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
              onScroll={handleScroll}
              ref={contentRef}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0rem",
                }}
              >
                {sectionData.map((item, index) => (
                  <Box
                    key={item.id}
                    sx={{
                      minHeight:
                        index === sectionData.length - 1
                          ? "31.25rem"
                          : "27.5rem",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
                      paddingX: "2rem",
                      paddingY: "1rem",
                      transition: "all 0.3s ease",
                      transform:
                        activeStep === index ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        width: "100%",
                      }}
                    >
                      {item.content || `Content ${index + 1}`}
                    </Box>
                  </Box>
                ))}
                <Box sx={{ height: "2rem" }} />
              </Box>
            </Box>
          </Box>
        </CardContainer>
      </Box>
    </Box>
  );
};
