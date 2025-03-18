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
import Image from "next/image";

export const AdmissionProcess = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const sectionData = admissionScreenData.admissionProcess.leftSideArray;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height / sectionData.length;

      const scrollY = window.scrollY - sectionRef.current.offsetTop;

      let newStep = Math.floor(scrollY / sectionHeight) + 1;

      newStep = Math.min(sectionData.length, Math.max(1, newStep));

      const maxScrollTop =
        sectionRef.current.offsetTop + (sectionData.length - 1) * sectionHeight;

      const buffer = 50;

      if (newStep === sectionData.length) {
        if (activeStep !== sectionData.length) {
          setActiveStep(newStep);
        }
      } else {
        if (activeStep !== newStep) {
          setActiveStep(newStep);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1080px",
          width: "100%",
        }}
      >
        <div ref={sectionRef} className="admission-process-container">
          <div className="ap-sticky-container">
            <Typography
              variant="h4"
              fontFamily={"Inter"}
              style={{
                fontWeight: "700",
                background:
                  "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
              }}
              lineHeight={"120%"}
              letterSpacing={"-2%"}
            >
              {admissionScreenData.admissionProcess.subtitle}
            </Typography>
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
              }}
            >
              {isMdUp && (
                <Box
                  sx={{
                    flex: {
                      md: "0 0 20%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                  }}
                >
                  {admissionScreenData.admissionProcess.leftSideArray.map(
                    (item) => (
                      <Typography
                        key={item.id}
                        variant="inherit"
                        sx={{
                          fontWeight: "600",
                          lineHeight: "100%",
                          fontSize: "1rem",
                          color: activeStep > item.id ? "#6C10BC" : "#8F8F8F",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.text}
                      </Typography>
                    )
                  )}
                </Box>
              )}

              <Box
                sx={{
                  flex: { xs: "0 0 100%", md: "0 0 80%" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {admissionScreenData.admissionProcess.rightSideArray.map(
                  (item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        position: "relative",
                        gap: { xs: "1rem", md: "1.5rem" },
                        paddingBottom: { xs: "1rem", md: "1.5rem" },
                      }}
                    >
                      {item.id !==
                        admissionScreenData.admissionProcess.rightSideArray
                          .length -
                          1 && (
                        <Box
                          sx={{
                            position: "absolute",
                            zIndex: 0,
                            top: 0,
                            left: { xs: "4px", md: "9px" },
                            bottom: 0,

                            height: "100%",
                            width: "1.5px",
                            backgroundColor: "#6C10BC",
                            opacity: activeStep > item.id ? 1 : 0,
                            transition: "opacity 0.5s ease",
                          }}
                        />
                      )}

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 3,
                          width: { xs: "10px", md: "20px" },
                          minWidth: { xs: "10px", md: "20px" },
                          maxWidth: { xs: "10px", md: "20px" },
                          height: { xs: "10px", md: "20px" },
                          minHeight: { xs: "10px", md: "20px" },
                          maxHeight: { xs: "10px", md: "20px" },
                          borderRadius: "50%",
                          backgroundColor:
                            activeStep > item.id
                              ? "#6C10BC"
                              : "rgba(108, 16, 188, 0.3)",
                        }}
                      />
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
                            fontSize: "clamp(12px, 2vw, 16px)",
                            color: "#6C10BC",
                            fontFamily: "Inter",
                            lineHeight: "100%",
                          }}
                        >
                          {item.step}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            marginTop: "4px",
                            fontWeight: "600",
                            fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
                            color: "rgba(31, 31, 31, 1)",
                            fontFamily: "Inter",
                            lineHeight: "100%",
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
                              marginTop: "1rem",
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
                              }}
                            >
                              {item.infoText}
                            </Typography>
                          </Box>
                        )}
                        <Typography
                          variant="caption"
                          sx={{
                            marginTop: "0.5rem",
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "rgba(31, 31, 31, 1)",
                            fontFamily: "Inter",
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
                          }}
                        >
                          {item.subtitle1}
                        </Typography>
                        {item.showButton && (
                          <Button
                            variant="inherit"
                            sx={{
                              marginTop: "10px",
                              padding: { xs: "8px 16px", md: "10px 20px" },
                              backgroundColor: "rgba(251, 127, 5, 1)",
                              borderRadius: "8px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#FFFFFF",
                                fontSize: "14px",
                                fontFamily: "Inter",
                              }}
                            >
                              Apply Now
                            </Typography>
                          </Button>
                        )}
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
};
