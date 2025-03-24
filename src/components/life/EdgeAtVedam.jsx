import React from "react";
import { Box, Typography } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";

export const EdgeAtVedam = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
        flexDirection: "row",
        gap: { xs: "10px", md: "20px" },
      }}
    >
      {lifeAtVedam.edgeAtVedam.data.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img src={item.image} className="edgeAtVedamImage" />
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              marginBottom: "8px",
              fontFamily: "Inter",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "120%",
              color: "#6C10BC",
              fontWeight: "700",
              fontFamily: "Inter",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              fontSize: "clamp(12px, 2vw, 14px)",
              lineHeight: "120%",
              color: "#1F1F1F",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
