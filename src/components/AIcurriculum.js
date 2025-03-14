"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurriculumDetail from "./CurriculumDetail";
import YearProgress from "./YearProgress";
import { curriculumData } from "@/constants/data";

const AIcurriculum = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(max-width: 900px)");

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        background:
          "radial-gradient(ellipse at bottom left, rgba(251, 127, 5, 0.5) 1%, rgba(255, 255, 255, 1) 40%)",
        py: 4,
        px: isMobile ? 2 : 4,
      }}>
      {/* Header */}
      <Typography
        color="#1E1E1E"
        fontWeight={600}
        fontSize={isMobile ? "14px" : isTablet ? "18px" : "20px"}>
        Future Proof Learning
      </Typography>
      <Typography
        variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
        sx={{ fontWeight: 700, display: "inline-block" }}>
        <Box
          component="span"
          sx={{
            backgroundImage: "linear-gradient(90deg, #FB7F05 2%, #6C10BC 98%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          AI First
        </Box>{" "}
        <Box component="span" sx={{ color: "#6C10BC" }}>
          Curriculum
        </Box>
      </Typography>

      {/* Mobile Accordion View */}
      {isMobile ? (
        curriculumData.map((yearData, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleChange(index)}
            sx={{
              border: expanded === index ? "none" : "1px solid #ddcaed",
              borderRadius: "12px",
              overflow: "hidden",
              mb: 1,
              backgroundColor: "transparent",
            }}>
            {/* Accordion Header */}
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: expanded === index ? "white" : "#6C10BC" }}
                />
              }
              sx={{
                backgroundColor: expanded === index ? "#ddcaed" : "#FFFFFF",
                color: expanded === index ? "white" : "#1E1E1E",
                borderRadius: "12px",
                padding: "12px 16px",
                fontWeight: 700,
              }}>
              <Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}>
                  {yearData.year}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: expanded === index ? "#6C10BC" : "#1E1E1E",
                    fontWeight: 700,
                  }}>
                  {yearData.title}
                </Typography>
              </Box>
            </AccordionSummary>

            {/* Accordion Details */}
            <AccordionDetails
              sx={{
                backgroundColor: "transparent",
                padding: "16px",
              }}>
              <CurriculumDetail data={yearData} />
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        // Tablet & Desktop View
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}>
          {/* Left Side - Year Progression */}
          <Box
            sx={{
              flex: "0 0 auto",
              width: isTablet ? "35%" : "30%",
              mr: "-8px",
            }}>
            <YearProgress
              activeYear={activeYear}
              setActiveYear={setActiveYear}
            />
          </Box>

          {/* Right Side - Show only the selected year's curriculum */}
          <Box sx={{ flex: "1", maxWidth: "100%", overflow: "hidden" }}>
            <CurriculumDetail data={curriculumData[activeYear]} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AIcurriculum;
