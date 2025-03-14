import { Box } from "@mui/material";
import React from "react";

export const WidthContainer = ({ children, childrenStyle }) => {
  return (
    <Box
      sx={{
        maxWidth: "1080px",
        width: { xs: "100%", md: "1080px" },
      }}
    >
      <Box
        style={childrenStyle}
        sx={{ width: "100%", padding: { xs: "10px 20px" } }}
      >
        {children}
      </Box>
    </Box>
  );
};
