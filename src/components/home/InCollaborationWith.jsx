"use client";

import React, { useEffect, useRef } from "react";
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
    href: "/admission/vst-gurugram",
    isExplore: true,
  },
  {
    id: "pune",
    title: "",
    image: "/img/campuses/Adypu_home_page.webp",
    description: "Ajeenkya DY Patil University, Pune, Maharashtra",
    buttonText: "Explore",
    href: "/admission/vst-adypu-pune",
    isExplore: true,
  },
  {
    id: "bengaluru",
    title: "",
    image: "/img/campuses/Bangalore_home_page_v2.webp",
    imagePosition: "center 14%",
    description: "Sri Venkateshwara college of Engineering Autonomous, Bengaluru",
    buttonText: "Coming Soon",
    isExplore: false,
  },
];

export const InCollaborationWith = () => {
  const scrollContainerRef = useRef(null);
  const mobileCarouselCards = [...campusCards, ...campusCards];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || typeof window === "undefined") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = () => window.matchMedia("(max-width: 899.95px)").matches;
    const passiveEvent = { passive: true };

    let rafId;
    let resumeTimeoutId;
    let lastFrameTime = 0;
    let loopPoint = 0;
    let paused = false;

    const recalculateLoopPoint = () => {
      const duplicateStartNode = container.querySelector("[data-duplicate-start='true']");
      loopPoint = duplicateStartNode ? duplicateStartNode.offsetLeft : container.scrollWidth / 2;
    };

    const animate = (timestamp) => {
      rafId = window.requestAnimationFrame(animate);

      if (!isMobile() || reducedMotionQuery.matches) {
        lastFrameTime = timestamp;
        return;
      }

      if (!loopPoint) {
        recalculateLoopPoint();
      }

      if (!lastFrameTime) {
        lastFrameTime = timestamp;
        return;
      }

      const deltaSeconds = (timestamp - lastFrameTime) / 1000;
      lastFrameTime = timestamp;

      if (paused) {
        return;
      }

      container.scrollLeft += 76 * deltaSeconds;

      if (loopPoint > 0 && container.scrollLeft >= loopPoint) {
        container.scrollLeft -= loopPoint;
      }
    };

    const pauseAndResume = () => {
      paused = true;
      if (resumeTimeoutId) {
        window.clearTimeout(resumeTimeoutId);
      }
      resumeTimeoutId = window.setTimeout(() => {
        paused = false;
      }, 1800);
    };

    const handleResize = () => {
      recalculateLoopPoint();
      if (!isMobile()) {
        container.scrollLeft = 0;
      }
    };

    recalculateLoopPoint();
    rafId = window.requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    container.addEventListener("touchstart", pauseAndResume, passiveEvent);
    container.addEventListener("touchmove", pauseAndResume, passiveEvent);
    container.addEventListener("mousedown", pauseAndResume);
    container.addEventListener("wheel", pauseAndResume, passiveEvent);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (resumeTimeoutId) {
        window.clearTimeout(resumeTimeoutId);
      }
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("touchstart", pauseAndResume);
      container.removeEventListener("touchmove", pauseAndResume);
      container.removeEventListener("mousedown", pauseAndResume);
      container.removeEventListener("wheel", pauseAndResume);
    };
  }, []);

  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        scrollSnapType: "none",
        pb: { xs: "8px", md: 0 },
        "&::-webkit-scrollbar": {
          height: "6px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: "repeat(3, minmax(0, 1fr))" },
          gap: { xs: "12px", md: "20px" },
          width: { xs: "max-content", md: "100%" },
        }}
      >
        {mobileCarouselCards.map((card, index) => {
          const isDuplicate = index >= campusCards.length;
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
              key={`${card.id}-${isDuplicate ? "dup" : "base"}`}
              data-campus-card="true"
              data-duplicate-start={index === campusCards.length ? "true" : undefined}
              sx={{
                border: "1px solid rgba(30, 30, 30, 0.15)",
                borderRadius: "24px",
                backgroundColor: "#fff",
                padding: "14px",
                display: isDuplicate ? { xs: "flex", md: "none" } : "flex",
                flexDirection: "column",
                gap: "18px",
                flex: { xs: "0 0 280px", md: "1 1 auto" },
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
