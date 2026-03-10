"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Button from "@mui/material/Button";

export const VideoWithText = ({ title, subtitle, isImg, videoUrl, imageUrl }) => {
  return (
    <Box
      className="section-gradient"
      sx={{
        width: "100%",
        minHeight: "95vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(110% 120% at 12% 0%, rgba(108, 16, 188, 0.42) 0%, rgba(47, 27, 80, 0.58) 42%, rgba(20, 12, 40, 0.72) 100%), linear-gradient(160deg, rgba(42, 19, 91, 0.6) 0%, rgba(251, 127, 5, 0.22) 100%)",
          zIndex: 1,
        }}
      />

      {/* Background Media */}
      {!isImg ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          className="responsive-video"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={imageUrl || "/img/life_vedam_bg.jpeg"}
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          className="responsive-image"
        />
      )}

      {/* Content Container */}
      <Box
        className="glass-strong"
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
          padding: { xs: "22px 18px", md: "34px 42px" },
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: { xs: "20px", md: "28px" },
          border: "1px solid rgba(255,255,255,0.24)",
          boxShadow: "0 24px 52px rgba(12, 9, 37, 0.36)",
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
            textWrap: "balance",
            animation: "heroFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            opacity: 0,
            transform: "translateY(12px)",
            "@keyframes heroFadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(12px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
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
            color: "rgba(255,255,255,0.96)",
            textWrap: "pretty",
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
            className="liquid-cta-orange"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "#221131",
              order: { xs: 1, sm: 2 },
              background:
                "linear-gradient(120deg, #FB7F05 0%, #FFA41A 64%, #FFD39D 100%)",
              borderRadius: "14px",
              padding: { xs: "12px 24px", sm: "12px 35px" },
              minWidth: { xs: "175px", sm: "auto" },
              justifyContent: "center",
              transition: "all 240ms cubic-bezier(0.22, 1, 0.36, 1)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 18px 34px rgba(29, 19, 58, 0.34)",
              "&:hover": {
                background:
                  "linear-gradient(120deg, #FB7F05 0%, #FFA41A 64%, #FFD39D 100%)",
                transform: "translateY(-3px) scale(1.02)",
                boxShadow: "0 20px 36px rgba(29, 19, 58, 0.4)",
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
