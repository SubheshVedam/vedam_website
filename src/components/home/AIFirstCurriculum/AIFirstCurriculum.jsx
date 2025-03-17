"use client";

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AIFirstCurriculumDesktop, CardContainer } from "../..";

export const AIFirstCurriculum = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return <Box>hellop</Box>;
  }
  return <AIFirstCurriculumDesktop />;
};
