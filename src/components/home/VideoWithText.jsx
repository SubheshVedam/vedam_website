"use client";
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

export const VideoWithText = ({ title, subtitle, isImg, videoUrl, imageUrl }) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        aspectRatio: "16/9",
        minHeight: "100vh",
        backgroundColor: "#000",

      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {isMobile || isImg ? (
        <Image
          src={imageUrl || "/img/life_vedam_bg.webp"}
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
          padding: { xs: "20px", md: "40px" },
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(-20px)",
        }}
      >
        {/* Title with Animation */}
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: "bold",
            whiteSpace: "pre-line",
            fontFamily: "Inter",
            fontSize: {
              xs: "1.75rem",
              sm: "2.25rem",
              md: "2.75rem",
              lg: "3.5rem",
            },
            lineHeight: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.75rem",
            },
            marginBottom: { xs: "1rem", md: "1.5rem" },
            textAlign: "center",
            maxWidth: "100%",
            animation: "slideDownFadeIn 1.2s ease-out forwards",
            "@keyframes slideDownFadeIn": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: { xs: "1.5rem", md: "2rem" },
            fontFamily: "Inter",
            fontSize: {
              xs: "1rem",
              sm: "1.125rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            fontWeight: 400,
            textAlign: "center",
            maxWidth: "100%",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "1rem", sm: "1.5rem" },
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <Button
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "#F9F9F9",
              order: { xs: 1, sm: 2 },
              backgroundColor: "#FF7829",
              borderRadius: "1rem",
              padding: { xs: "12px 24px", sm: "12px 35px" },
              minWidth: { xs: "175px", sm: "auto" },
              justifyContent: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#e66820",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 20px rgba(255, 120, 41, 0.3)",
              },
            }}
            href="https://apply.vedam.org/"
            target="_blank"
          >
            Apply Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
