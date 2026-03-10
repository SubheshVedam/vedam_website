import { Box } from "@mui/material";
import React from "react";

export const WidthContainer = ({ children, childrenStyle }) => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        width: { xs: "100%", md: "1024px", xl: "1280px" },
        px: { xs: "6px", sm: "10px", md: "12px" },
      }}
    >
      <Box sx={{ width: "100%", padding: { xs: "16px 8px", md: "20px 10px" }, ...childrenStyle }}>
        {children}
      </Box>
    </Box>
  );
};
