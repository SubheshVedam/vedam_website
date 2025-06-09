"use client";

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ScrollComponentDesktop } from "./ScrollComponetDesktop";
import { ScrollComponentMobile } from "./ScrollComponetMobile";

export const ScrollComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return <ScrollComponentMobile />;
  }
  return <ScrollComponentDesktop />;
};
