"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import SkillTag from "./SkillTag";
import OutcomeCard from "./OutcomeCard";
import SwipeableViews from "react-swipeable-views";

const CurriculumDetail = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isXs = useMediaQuery("(max-width: 480px)");

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: "100%",
      }}>
      {/* Title & Description */}
      <Typography
        variant="h5"
        color="#6C10BC"
        sx={{
          fontWeight: "bold",
          fontSize: "20px", 
        }}>
        {data.title}
      </Typography>

      <Typography
        variant="body1"
        color="#848484"
        sx={{
          mb: 2,
          fontSize: "14px", 
        }}>
        {data.description}
      </Typography>

      {/* Skills & Technologies */}
      <Typography variant="h6" color="#0C2651" sx={{ fontWeight: "bold" }}>
        Skills & Technologies
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "flex-start",
        }}>
        {data.skills.map((skill, index) => (
          <SkillTag
            key={index}
            skill={skill}
            sx={{
              fontSize: isXs ? "12px" : "14px",
              padding: isXs ? "4px 8px" : "6px 12px",
            }}
          />
        ))}
      </Box>

      {/* Outcomes Section */}
      <Typography
        variant="h6"
        color="#0C2651"
        sx={{ mt: 3, fontWeight: "bold" }}>
        Outcomes
      </Typography>
      {isMobile ? (
        <SwipeableViews
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          containerStyle={{ display: "flex", gap: "1px" }}>
          {data.outcomes.map((outcome, index) => (
            <OutcomeCard
              key={index}
              image={outcome.image}
              title={outcome.title}
            />
          ))}
        </SwipeableViews>
      ) : (
        <Grid2 container spacing={2}>
          {data.outcomes.map((outcome, index) => (
            <Grid2 key={index}>
              <OutcomeCard image={outcome.image} title={outcome.title} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default CurriculumDetail;
