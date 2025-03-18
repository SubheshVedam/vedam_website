"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { homeScreenData } from "@/constants/data";

export const AIFirstCurriculumDesktop = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const sectionData = homeScreenData.aiFirst.data;

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

        if (scrollY >= maxScrollTop - buffer) {
          window.scrollTo({ top: maxScrollTop, behavior: "smooth" });
        }
      } else {
        if (activeStep !== newStep) {
          setActiveStep(newStep);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(74.32% 74.32% at 50% 100%, rgba(255, 152, 26, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1080px",
          width: "100%",
        }}
      >
        <div ref={sectionRef} className="curriculum-container">
          <div className="sticky-section">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "2rem",
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={"600"}
                fontFamily={"Inter"}
                style={{ lineHeight: "150%", letterSpacing: "-2%" }}
              >
                Future proof learning
              </Typography>

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
                AI First Curriculum
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flex: "0 30%" }}>
                <div className="progress-bar">
                  {sectionData.map((section, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "16px",
                      }}
                    >
                      <div key={section.id} className="progress-item">
                        <div
                          className={`dot ${
                            activeStep >= section.id ? "active" : ""
                          }`}
                        ></div>
                        {index !== sectionData.length - 1 && (
                          <div
                            className={`connector ${
                              activeStep >= section.id ? "active" : ""
                            }`}
                          ></div>
                        )}
                      </div>
                      <div>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontFamily: "Inter",
                            fontSize: 14,
                            fontWeight: "500",
                            lineHeight: "100%",
                            color: "rgba(30, 30, 30, 1)",
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ marginTop: 4 }}
                          sx={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: "700",
                            lineHeight: "100%",
                            color: "rgba(108, 16, 188, 1)",
                          }}
                        >
                          {section.subtitle}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </Box>
              <Box sx={{ flex: "0 70%" }}>
                {sectionData[activeStep - 1].content}
              </Box>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
};
