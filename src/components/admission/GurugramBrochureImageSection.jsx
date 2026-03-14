"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const gurugramCollaborationData = {
  rightSideText1: "Sushant University",
  data: [
    {
      id: 0,
      image: "/img/branch.webp",
      text: " B.Tech in Computer Science with specialisation in Artificial Intelligence - UGC Approved",
    },
    {
      id: 1,
      image: "/img/location.webp",
      text: "Gurugram, Haryana",
    },
  ],
};

const IconText = ({
  icon,
  text,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      borderRadius: "12px",
      padding: "12px 14px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 100%)",
      border: "1px solid rgba(108, 16, 188, 0.12)",
    }}
  >
    <Image src={icon} alt="" width={20} height={20} />
    <Typography
      variant="subtitle2"
      color="rgba(42, 19, 91, 0.9)"
      fontWeight="500"
      sx={{ fontSize: "clamp(12px, 2vw, 0.95rem)" }}
    >
      {text}
    </Typography>
  </Box>
);

export const GurugramBrochureImageSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid rgba(108, 16, 188, 0.15)",
        borderRadius: "28px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "1rem", md: "1.25rem" },
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: { xs: "20px", md: "28px" },
        width: "100%",
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF6EE 56%, #F7EEFF 100%)",
        boxShadow: "0 16px 30px rgba(42, 19, 91, 0.09)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: 180, md: 230 },
          height: { xs: 180, md: 230 },
          right: { xs: -80, md: -100 },
          top: { xs: -80, md: -100 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,16,188,0.16) 0%, rgba(108,16,188,0) 70%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: { xs: 200, md: 280 },
          height: { xs: 200, md: 280 },
          left: { xs: -120, md: -140 },
          bottom: { xs: -120, md: -150 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,127,5,0.16) 0%, rgba(251,127,5,0) 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          position: "relative",
          aspectRatio: "2.07 / 1",
          minHeight: { xs: 120, sm: 160, md: 220 },
          maxHeight: { xs: 180, sm: 220, md: 260 },
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.72)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 12px 24px rgba(42,19,91,0.16)",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            backgroundImage: 'url("/img/campuses/gurugram_collaboration_piyush.jpeg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: "cover", md: "108% auto" },
            backgroundPosition: { xs: "center -20px", md: "30% -30px" },
          }}
          aria-label="VST Gurugram collaboration"
          role="img"
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background:
              "linear-gradient(180deg, rgba(42, 19, 91, 0.06) 0%, rgba(42, 19, 91, 0.36) 100%)",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            left: 14,
            bottom: 14,
            px: 1.3,
            py: 0.6,
            borderRadius: "999px",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.4)",
            background: "rgba(42, 19, 91, 0.45)",
            backdropFilter: "blur(3px)",
          }}
        >
          VST GURUGRAM
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "43%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "rgba(108, 16, 188, 0.9)",
            textTransform: "uppercase",
          }}
        >
          Partner University
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "clamp(1.35rem, 2vw, 2rem)",
            lineHeight: "118%",
            letterSpacing: "-0.02em",
            fontWeight: 800,
            color: "#2A135B",
            marginBottom: 0.5,
          }}
        >
          {gurugramCollaborationData.rightSideText1}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          {gurugramCollaborationData.data.map((item) => (
            <IconText key={item.id} icon={item.image} text={item.text} />
          ))}
        </Box>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: "0.86rem",
            lineHeight: 1.45,
            color: "rgba(42, 19, 91, 0.75)",
          }}
        >
          Learn in an industry-integrated environment designed for hands-on AI
          and computer science education.
        </Typography>
      </Box>
    </Box>
  );
};
