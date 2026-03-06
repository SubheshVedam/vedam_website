"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const campusCards = [
  {
    id: "gurugram",
    title: "",
    image: "/img/campuses/Gurugram_home_page.webp",
    description: "Home to India's fastest-growing tech and consulting ecosystem",
    buttonText: "Coming Soon",
    isExplore: false,
  },
  {
    id: "pune",
    title: "",
    image: "/img/campuses/adypu_home_page.webp",
    description: "Ajeenkya DY Patil University, Pune, Maharastra",
    buttonText: "Explore",
    href: "/admission",
    isExplore: true,
  },
  {
    id: "bengaluru",
    title: "",
    image: "/img/campuses/Bangalore_home_page.webp",
    imagePosition: "center 14%",
    description: "India's Silicon Valley and the heart of the tech revolution",
    buttonText: "Coming Soon",
    isExplore: false,
  },
];

export const InCollaborationWith = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        scrollSnapType: { xs: "x mandatory", md: "none" },
        pb: { xs: "8px", md: 0 },
        "&::-webkit-scrollbar": {
          height: "6px",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, minmax(280px, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: "12px", md: "20px" },
          width: "100%",
        }}
      >
        {campusCards.map((card) => {
          const buttonProps = card.href
            ? { component: Link, href: card.href }
            : { component: "button", type: "button" };

          const buttonSx = card.isExplore
            ? {
              backgroundColor: "rgba(251, 127, 5, 1)",
              color: "#fff",
              border: "1px solid rgba(251, 127, 5, 1)",
              "&:hover": {
                backgroundColor: "rgba(225, 113, 0, 1)",
                borderColor: "rgba(225, 113, 0, 1)",
              },
            }
            : {
              backgroundColor: "rgba(255, 244, 231, 1)",
              color: "#1E1E1E",
              border: "1px solid rgba(251, 127, 5, 0.65)",
              cursor: "default",
            };

          return (
            <Box
              key={card.id}
              sx={{
                border: "1px solid rgba(30, 30, 30, 0.15)",
                borderRadius: "24px",
                backgroundColor: "#fff",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                scrollSnapAlign: { xs: "start", md: "none" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "18px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} campus`}
                  fill
                  sizes="(max-width: 900px) 280px, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: card.imagePosition ?? "center center",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "14px", md: "18px" },
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "2.2rem" },
                    letterSpacing: "0.06em",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    textShadow: "0 4px 14px rgba(0, 0, 0, 0.32)",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {card.title}
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: { xs: "1.45rem", md: "1.62rem" },
                  lineHeight: 1.33,
                  textAlign: "center",
                  minHeight: { md: "84px" },
                }}
              >
                {card.description}
              </Typography>
              <Button
                {...buttonProps}
                sx={{
                  alignSelf: "center",
                  fontSize: { xs: "1.2rem", md: "1.3rem" },
                  lineHeight: 1,
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: "14px",
                  px: "26px",
                  py: "8px",
                  minWidth: "200px",
                  boxShadow: card.isExplore
                    ? "0px 4px 10px rgba(0, 0, 0, 0.15)"
                    : "none",
                  ...buttonSx,
                }}
              >
                {card.buttonText}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
