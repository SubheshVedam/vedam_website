import { Box } from "@mui/material";
import React from "react";

export const WidthContainer = ({ children, childrenStyle }) => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        width: { xs: "100%", md: "1080px", xl: "1280px" },
      }}
    >
      <Box sx={{ width: "100%", padding: "20px 10px", ...childrenStyle }}>
        {children}
      </Box>
    </Box>
  );
};
