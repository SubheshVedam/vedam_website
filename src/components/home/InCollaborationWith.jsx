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
    image: "/img/campuses/Gurugram_home_page_v2.webp",
    description: "Sushant University, Gurugram, Delhi NCR",
    buttonText: "Explore Campus",
    href: "/program/vst-gurugram",
    isExplore: true,
  },
  {
    id: "pune",
    title: "",
    image: "/img/campuses/Adypu_home_page.webp",
    description: "Ajeenkya DY Patil University, Pune, Maharashtra",
    buttonText: "Explore",
    href: "/program/vst-adypu-pune",
    isExplore: true,
  },
];

export const InCollaborationWith = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        scrollSnapType: { xs: "x mandatory", md: "none" },
        scrollPaddingInline: { xs: "12px", md: 0 },
        WebkitOverflowScrolling: "touch",
        pb: { xs: "8px", md: 0 },
        "&::-webkit-scrollbar": {
          height: "6px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: `repeat(${campusCards.length}, minmax(0, 1fr))` },
          gap: { xs: "12px", md: "20px" },
          width: { xs: "max-content", md: "100%" },
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
                border: "1px solid rgba(30, 30, 30, 0.15)",
                borderRadius: "24px",
                backgroundColor: "#fff",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                flex: { xs: "0 0 280px", md: "1 1 auto" },
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
                  sizes={`(max-width: 900px) 280px, ${Math.round(100 / campusCards.length)}vw`}
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
                  fontSize: { xs: "0.98rem", md: "1.28rem" },
                  lineHeight: 1.35,
                  textAlign: "center",
                  minHeight: { md: "72px" },
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
                        Explore Campus
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
                        Coming Soon
                      </Typography>
                    </>
                  )}
                </Box>
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
