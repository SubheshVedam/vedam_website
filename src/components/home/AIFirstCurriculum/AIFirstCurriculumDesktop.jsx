"use client";

import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { homeScreenData } from "@/constants/data";
import { CardContainer } from "@/components";

export const AIFirstCurriculumDesktop = () => {
  const [activeStep, setActiveStep] = useState(1);

  const sectionData = homeScreenData.aiFirst.data;

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const scrollPosition = scrollTop + clientHeight;
    const contentHeight = scrollHeight / 5;

    const newActiveContent = Math.floor(scrollPosition / contentHeight);
    setActiveStep(newActiveContent);
  };

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
        <div className="curriculum-container">
          <div>
            <CardContainer
              title=" Future proof learning"
              subtitle=" AI First Curriculum"
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ flex: "0 30%" }}>
                  <div
                    className="progress-bar"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      height: "360px",
                      position: "relative",
                    }}
                  >
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
                <Box
                  sx={{
                    height: "70vh",
                    flex: "0 70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                  }}
                  onScroll={handleScroll}
                >
                  {sectionData.map((item) => {
                    return <div key={item.id}>{item.content}</div>;
                  })}
                </Box>
              </Box>
            </CardContainer>
          </div>
        </div>
      </Box>
    </Box>
  );
};
