"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
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
        scrollPaddingLeft: { xs: "6px", md: 0 },
        px: { xs: "6px", md: 0 },
        py: { xs: "8px", md: 0 },
        pb: { xs: "14px", md: 0 },
        position: "relative",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: { xs: "-10px -10px 12px -10px", md: "-16px -12px 12px -12px" },
          background:
            "radial-gradient(120% 120% at 50% 0%, rgba(251, 127, 5, 0.12) 0%, rgba(251, 127, 5, 0) 62%)",
          zIndex: -1,
          pointerEvents: "none",
          borderRadius: "28px",
        },
        "&::-webkit-scrollbar": {
          height: "6px",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, minmax(292px, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: "16px", md: "22px" },
          width: "100%",
          alignItems: "stretch",
        }}
      >
        {campusCards.map((card) => {
          const buttonProps = card.href
            ? { component: Link, href: card.href }
            : { component: "button", type: "button" };

          const buttonSx = card.isExplore
            ? {
              background: "linear-gradient(102deg, #FB7F05 0%, #F05D06 100%)",
              color: "#fff",
              border: "1px solid rgba(240, 93, 6, 0.95)",
              boxShadow: "0px 10px 24px rgba(240, 93, 6, 0.3)",
              "&:hover": {
                background: "linear-gradient(102deg, #FF8E1F 0%, #F5670A 100%)",
                borderColor: "rgba(245, 103, 10, 1)",
                boxShadow: "0px 14px 28px rgba(240, 93, 6, 0.35)",
                transform: "translateY(-2px)",
              },
            }
            : {
              background:
                "linear-gradient(180deg, rgba(255, 251, 245, 1) 0%, rgba(255, 240, 221, 1) 100%)",
              color: "#A25709",
              border: "1px solid rgba(241, 151, 62, 0.65)",
              boxShadow:
                "inset 0px 1px 0px rgba(255, 255, 255, 0.8), 0px 6px 18px rgba(241, 151, 62, 0.15)",
              cursor: "default",
            };

          return (
            <Box
              key={card.id}
              sx={{
                position: "relative",
                overflow: "hidden",
                border: card.isExplore
                  ? "1px solid rgba(240, 93, 6, 0.35)"
                  : "1px solid rgba(241, 151, 62, 0.26)",
                borderRadius: "28px",
                background:
                  "linear-gradient(164deg, rgba(255, 255, 255, 1) 0%, rgba(255, 246, 235, 0.96) 100%)",
                padding: { xs: "14px", md: "16px" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: "14px", md: "18px" },
                scrollSnapAlign: { xs: "start", md: "none" },
                boxShadow: card.isExplore
                  ? "0 16px 34px rgba(240, 93, 6, 0.18)"
                  : "0 14px 30px rgba(168, 100, 36, 0.14)",
                transition:
                  "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: card.isExplore
                    ? "linear-gradient(90deg, #FB7F05 0%, #F05D06 100%)"
                    : "linear-gradient(90deg, #F3B56C 0%, #E89A46 100%)",
                  zIndex: 1,
                },
                "&:hover": {
                  transform: { xs: "none", md: "translateY(-6px)" },
                  boxShadow: card.isExplore
                    ? "0 22px 40px rgba(240, 93, 6, 0.24)"
                    : "0 20px 36px rgba(168, 100, 36, 0.19)",
                  borderColor: card.isExplore
                    ? "rgba(240, 93, 6, 0.48)"
                    : "rgba(232, 154, 70, 0.44)",
                },
                "&:hover .campus-image": {
                  transform: "scale(1.055)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.72)",
                  boxShadow: "0 10px 24px rgba(22, 19, 16, 0.16)",
                }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} campus`}
                  className="campus-image"
                  fill
                  sizes="(max-width: 900px) 280px, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: card.imagePosition ?? "center center",
                    transform: "scale(1.01)",
                    transition: "transform 380ms ease",
                  }}
                />
                {card.title && (
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
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: "12px", md: "14px" },
                  borderRadius: "18px",
                  border: "1px solid rgba(253, 221, 187, 0.62)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 247, 238, 0.88) 100%)",
                  padding: { xs: "12px 10px 14px", md: "14px 12px 16px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontSize: { xs: "1.36rem", md: "1.5rem" },
                    lineHeight: 1.3,
                    textAlign: "center",
                    minHeight: { md: "78px" },
                  }}
                >
                  {card.description}
                </Typography>
                <Button
                  {...buttonProps}
                  disableRipple={!card.isExplore}
                  sx={{
                    alignSelf: "center",
                    fontSize: { xs: "1.05rem", md: "1.12rem" },
                    lineHeight: 1,
                    textTransform: "none",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    borderRadius: "999px",
                    px: "20px",
                    py: "10px",
                    minWidth: "212px",
                    transition:
                      "transform 220ms ease, box-shadow 220ms ease, background 220ms ease, border-color 220ms ease",
                    ...buttonSx,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {card.isExplore ? (
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: 700, fontSize: "inherit", lineHeight: 1 }}
                        >
                          {card.buttonText}
                        </Typography>
                        <EastRoundedIcon sx={{ fontSize: "1.2rem" }} />
                      </>
                    ) : (
                      <>
                        <AccessTimeFilledRoundedIcon sx={{ fontSize: "1rem" }} />
                        <Typography
                          component="span"
                          sx={{ fontWeight: 700, fontSize: "inherit", lineHeight: 1 }}
                        >
                          {card.buttonText}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Button>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "80px",
                  height: "80px",
                  right: "-30px",
                  bottom: "-35px",
                  borderRadius: "999px",
                  pointerEvents: "none",
                  background: card.isExplore
                    ? "radial-gradient(circle, rgba(251, 127, 5, 0.2) 0%, rgba(251, 127, 5, 0) 72%)"
                    : "radial-gradient(circle, rgba(241, 151, 62, 0.2) 0%, rgba(241, 151, 62, 0) 72%)",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
