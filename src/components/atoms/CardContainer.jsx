import React from "react";
import { Box, Typography } from "@mui/material";

export const CardContainer = ({
  title,
  subtitle,
  children,
  linearGradientSubtitle,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: { xs: "20px", md: "32px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        {title && (
          <Typography
            variant="subtitle2"
            fontWeight={"600"}
            fontFamily={"Inter"}
            style={{ lineHeight: "150%", letterSpacing: "-2%" }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            variant="h4"
            fontFamily={"Inter"}
            style={{
              fontWeight: "700",
              background: linearGradientSubtitle,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
            }}
            lineHeight={"120%"}
            letterSpacing={"-2%"}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      {children}
    </Box>
  );
};
