"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import SkillTag from "./SkillTag";
import OutcomeCard from "./OutcomeCard";
import SwipeableViews from "react-swipeable-views";

const CurriculumDetail = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ p: 3 }}>
      {/* Title & Description */}
      <Typography variant="h5" color="#6C10BC" sx={{ fontWeight: "bold" }}>
        {data.title}
      </Typography>
      <Typography variant="body1" color="#848484" sx={{ mb: 2 }}>
        {data.description}
      </Typography>

      {/* Skills & Technologies */}
      <Typography
        variant="h6"
        color="#0C2651"
        sx={{ fontWeight: "bold " }}>
        Skills & Technologies
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {data.skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
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
        <SwipeableViews>
          {data.outcomes.map((outcome, index) => (
            <OutcomeCard key={index} outcome={outcome} />
          ))}
        </SwipeableViews>
      ) : (
        <Grid2 container spacing={2}>
          {" "}
          {data.outcomes.map((outcome, index) => (
            <Grid2 xs={12} sm={6} md={4} key={index}>
              <OutcomeCard image={outcome.image} title={outcome.title} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default CurriculumDetail;
