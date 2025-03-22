import React from "react";
import { Box, Typography } from "@mui/material";

export const CardContainer = ({
  title = "",
  subtitle = "",
  children,
  linearGradientSubtitle = "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)",
  containerStyle = {},
  titleChildContainer = {},
  showSubtitleBottomBorder = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: { xs: "1rem", md: "2rem", lg: "3rem" },
        ...containerStyle,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
          ...titleChildContainer,
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
        {showSubtitleBottomBorder && (
          <Box
            sx={{
              borderBottom: showSubtitleBottomBorder
                ? "1px solid rgba(0, 0, 0, 0.3)"
                : "none",
              marginTop: showSubtitleBottomBorder ? "20px" : 0,
              width: "100%",
            }}
          ></Box>
        )}
      </Box>
      {children}
    </Box>
  );
};
