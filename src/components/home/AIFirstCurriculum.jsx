"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const sections = [
  { id: 1, title: "Step 1", content: "Content for step 1" },
  { id: 2, title: "Step 2", content: "Content for step 2" },
  { id: 3, title: "Step 3", content: "Content for step 3" },
  { id: 4, title: "Step 4", content: "Content for step 4" },
];

export const AIFirstCurriculum = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height / sections.length;

      // Calculate which step is active
      const scrollY = window.scrollY - sectionRef.current.offsetTop;
      const newStep = Math.min(
        sections.length,
        Math.max(1, Math.floor(scrollY / sectionHeight) + 1)
      );
      setActiveStep(newStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "1080px",
        width: { xs: "100%", md: "1080px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: { xs: "10px 20px" },
        }}
      >
        <div ref={sectionRef} className="curriculum-container">
          <div className="sticky-section">
            <div className="progress-bar">
              {sections.map((section, index) => (
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
                    {index !== sections.length - 1 && (
                      <div
                        className={`connector ${
                          activeStep > section.id ? "active" : ""
                        }`}
                      ></div>
                    )}
                  </div>
                  <div>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        fontWeight: "500",
                        lineHeight: "100%",
                        color: "rgba(30, 30, 30, 1)",
                      }}
                    >
                      year 1
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ marginTop: 4 }}
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 16,
                        fontWeight: "700",
                        lineHeight: "100%",
                        color: "rgba(108, 16, 188, 1)",
                      }}
                    >
                      Foundation
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-box">
              <h2>{sections[activeStep - 1].title}</h2>
              <p>{sections[activeStep - 1].content}</p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};
