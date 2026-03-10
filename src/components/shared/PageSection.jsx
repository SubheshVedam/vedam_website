import React from "react";
import { Box } from "@mui/material";

export const PageSection = ({
  children,
  backgroundColor = "transparent",
  paddingTop = { xs: "2rem", md: "10rem" },
  paddingBottom = "0px",
  sx = {},
  className = "",
  ...boxProps
}) => {
  return (
    <Box
      className={`section-gradient ${className}`.trim()}
      sx={{
        position: "relative",
        isolation: "isolate",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor,
        paddingTop,
        paddingBottom,
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
