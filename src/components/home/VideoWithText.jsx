"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Button from "@mui/material/Button";

export const VideoWithText = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        width: { xs: "auto", lg: "100%" },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></Box>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "95vh",
          objectFit: "cover",
        }}
        className="responsive-video"
      >
        <source src={homeScreenData.hero.background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            whiteSpace: "pre-line",
            fontFamily: "Inter",
            fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
            marginBottom: "1rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            marginBottom: "0.5rem",
            fontFamily: "Inter",
            fontSize: "clamp(10px, 2vw, 20px)",
            whiteSpace: "pre-line",
          }}
        >
          {subtitle}
        </Typography>
        <Button
          sx={{
            fontSize: "clamp(20px. 2.5vw, 12px)",
            color: "#F9F9F9",
            background:
              "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
            borderRadius: "8px",
            padding: "10px 20px",
            boxShadow: "0px 0px 11.2px rgba(255, 255, 255, 0.25)",
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};
