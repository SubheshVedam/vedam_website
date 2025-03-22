"use client";

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AIFirstCurriculumDesktop } from "../..";
import { AIFirstCurriculumMobile } from "./AIFirstCurriculumMobile";

export const AIFirstCurriculum = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return <AIFirstCurriculumMobile />;
  }
  return <AIFirstCurriculumDesktop />;
};
