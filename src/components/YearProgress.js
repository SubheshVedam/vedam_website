"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepConnector,
  useMediaQuery,
} from "@mui/material";
import { curriculumData } from "@/constants/data";
import { useTheme } from "@mui/material/styles";

const CustomStepIcon = ({ completed }) => (
  <Box
    sx={{
      width: 30,
      height: 30,
      backgroundColor: completed ? "#6C10BC" : "#D1A3E6",
      borderRadius: "50%",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  />
);

const CustomStepConnector = ({ isActive }) => (
  <StepConnector
    sx={{
      "& .MuiStepConnector-line": {
        borderLeftWidth: 4,
        borderColor: isActive ? "#6C10BC" : "transparent", // Ensure line updates
        minHeight: 30,
        transition: "border-color 0.4s ease-in-out",
        position: "relative",
        top: "-15px",
      },
    }}
  />
);

const YearProgress = ({ activeYear, setActiveYear }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (activeYear > visibleSteps) {
      setTimeout(() => {
        setVisibleSteps(activeYear);
      }, 200);
    }
  }, [activeYear, visibleSteps]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isMobile ? "100%" : 300,
        px: isMobile ? 2 : 0,
      }}>
      <Stepper orientation="vertical">
        {curriculumData.map((yearData, index) => (
          <Step key={index} active={true} onClick={() => setActiveYear(index)}>
            {index > 0 && (
              <CustomStepConnector isActive={index <= activeYear} />
            )}
            <StepLabel
              slots={{
                stepIcon: () => (
                  <CustomStepIcon completed={index <= activeYear} />
                ),
              }}
              sx={{
                cursor: "pointer",
                "& .MuiTypography-root": {
                  fontSize: isMobile ? "14px" : "16px",
                },
              }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ fontSize: isMobile ? "12px" : "14px" }}>
                {yearData.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#6C10BC",
                  fontWeight: 700,
                  fontSize: isMobile ? "16px" : "20px",
                }}>
                {yearData.title}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default YearProgress;
