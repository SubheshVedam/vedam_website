import React from "react";
import { Box } from "@mui/material";

export const PageSection = ({
  children,
  backgroundColor = "#F9F9F9",
  paddingTop = { xs: "2rem", md: "10rem" },
  paddingBottom = "0px",
  sx = {},
  ...boxProps
}) => {
  return (
    <Box
      sx={{
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
