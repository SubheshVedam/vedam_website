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
      <Box style={childrenStyle} sx={{ width: "100%", padding: {xs:"20px 30px", sm:"20px 10px"} }}>
        {children}
      </Box>
    </Box>
  );
};
