"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

const VIDEO_LOAD_ROOT_MARGIN = "200px 0px";
const VIDEO_LOAD_TIMEOUT_MS = 1200;

export const VideoWithText = ({
  title,
  subtitle,
  isImg,
  videoUrl,
  imageUrl,
  videoPosterUrl,
  showApplyNowButton = true,
  applyNowHref = "https://apply.vedam.org/",
}) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const shouldShowVideo = !isImg && Boolean(videoUrl);
  const backgroundImageSrc =
    imageUrl || videoPosterUrl || "/img/life_vedam_bg_NN.jpeg";

  useEffect(() => {
    if (!shouldShowVideo) {
      return;
    }

    const node = containerRef.current;
    if (!node || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: VIDEO_LOAD_ROOT_MARGIN }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isInView, shouldShowVideo]);

  useEffect(() => {
    if (!shouldShowVideo || !isInView) {
      return;
    }

    let cancelled = false;
    const loadVideo = () => {
      if (!cancelled) {
        setShouldLoadVideo(true);
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const callbackId = window.requestIdleCallback(loadVideo, {
        timeout: VIDEO_LOAD_TIMEOUT_MS,
      });

      return () => {
        cancelled = true;
        window.cancelIdleCallback(callbackId);
      };
    }

    const timeoutId = window.setTimeout(loadVideo, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [isInView, shouldShowVideo]);

  useEffect(() => {
    if (!shouldLoadVideo) {
      setIsVideoReady(false);
    }
  }, [shouldLoadVideo]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "95vh",
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
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Background Media */}
      <Image
        src={backgroundImageSrc}
        alt="Background"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
        className="responsive-image"
      />

      {shouldShowVideo && shouldLoadVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoReady(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: isVideoReady ? 1 : 0,
            transition: "opacity 300ms ease",
          }}
          className="responsive-video"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
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
            opacity: 0,
            transform: "translateY(-50px)",
            "@keyframes slideDownFadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(-100px)",
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
          }}
        >
          {subtitle}
        </Typography>

        {showApplyNowButton && (
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
              href={applyNowHref}
              target="_blank"
            >
              Apply Now
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
