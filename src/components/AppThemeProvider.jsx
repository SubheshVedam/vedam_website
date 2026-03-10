"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import vedamTheme from "@/theme/vedamTheme";

const AppThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={vedamTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
