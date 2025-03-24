import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";

export const VedamInovationLab = () => {
  return (
    <Box
      sx={{
        border: "0.5px solid rgba(0, 0, 0, 0.2)",
        padding: { xs: "20px", md: "30px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: "1rem", md: "2.5rem" },
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <img
        src="/img/innovationlab.webp"
        alt="innovation"
        className="innovationImageStyle"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(20px, 2vw, 36px)",
            lineHeight: "100%",
            fontWeight: "700",
            marginBottom: { xs: "1rem", md: "26px" },
            fontFamily: "Inter",
          }}
        >
          {lifeAtVedam.vedamLab.linearGradientText}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "clamp(12px, 2vw, 16px)",
            lineHeight: "150%",
            fontWeight: "500",
            fontFamily: "Inter",
          }}
        >
          {lifeAtVedam.vedamLab.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem",
            backgroundColor: "rgba(108, 16, 188, 1)",
            padding: "10px 20px",
            borderRadius: "0.5rem",
          }}
          href="https://apply.vedam.org/"
          target="_blank"
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: "500",
              textTransform: "initial",
              fontFamily: "Inter",
            }}
          >
            Apply Now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
