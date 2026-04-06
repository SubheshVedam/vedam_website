"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const speakerImages = [
  "/img/speaker/img1.webp",
  "/img/speaker/img2.webp",
  "/img/speaker/img3.webp",
  "/img/speaker/img4.webp",
  "/img/speaker/img5.webp",
  "/img/speaker/img6.webp",
  "/img/speaker/img7.webp",
  "/img/speaker/img8.webp",
];

export const Speaker = () => {
  const scrollContainerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getYouTubeVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\?\/]+)/,
      /youtube\.com\/embed\/([^&\?\/]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    if (url && !url.includes("/") && !url.includes("http")) {
      return url;
    }

    return null;
  };

  const getGoogleDriveEmbedUrl = (url) => {
    const fileIdMatch = url.match(/\/d\/([^\/]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return null;
  };

  const getEmbedUrl = (url) => {
    if (url.includes("drive.google.com")) {
      return getGoogleDriveEmbedUrl(url);
    }

    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }

    return null;
  };

  const speakerVideos = [
    {
      id: 1,
      thumbnail: isMobile ? "/img/speaker/speaker1_mob.webp" : "/img/speaker/speaker1.webp",
      videoUrl: "https://youtu.be/C1WADUPpx98?si=obOLIeGiFlo4KG6n",
    },
    {
      id: 2,
      thumbnail: isMobile ? "/img/speaker/speaker2_mob.webp" : "/img/speaker/speaker2.webp",
      videoUrl: "https://www.youtube.com/watch?v=RRnFQXXoAzw",
    },
    {
      id: 3,
      thumbnail: isMobile ? "/img/speaker/speaker3_mob.webp" : "/img/speaker/speaker3.webp",
      videoUrl: "https://www.youtube.com/watch?v=0Pp7yhV1-1g",
    },
    {
      id: 4,
      thumbnail: isMobile ? "/img/speaker/speaker4_mob.webp" : "/img/speaker/speaker4.webp",
      videoUrl: "https://youtu.be/Ffd_UBBWrMU",
    },
    {
      id: 5,
      thumbnail: isMobile ? "/img/speaker/speaker5_mob.webp" : "/img/speaker/speaker5.webp",
      videoUrl: "https://youtu.be/mkRGpgc__xw?si=HYHMvO0RWDB0Pavj",
    },
  ];

  const marqueeImages = [...speakerImages, ...speakerImages];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={scrollLeft}
          aria-label="Scroll speaker videos left"
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            opacity: 0.8,
            backgroundColor: "background.paper",
            width: 44,
            height: 44,
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1.2rem",
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            padding: "0 40px",
          }}
        >
          {speakerVideos.map((video) => {
            const embedUrl = getEmbedUrl(video.videoUrl);

            return (
              <Box
                key={video.id}
                sx={{
                  minWidth: isMobile ? "280px" : "420px",
                  height: isMobile ? "210px" : "300px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {activeVideo === video.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{
                      borderRadius: "16px",
                      border: "none",
                    }}
                    src={embedUrl}
                    title="Video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setActiveVideo(video.id)}
                    aria-label={`Play speaker video ${video.id}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      border: "none",
                      padding: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt=""
                      fill
                      sizes={isMobile ? "280px" : "420px"}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(0,0,0,0.6)",
                        padding: "12px 16px",
                        borderRadius: "100px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(0,0,0,0.8)",
                          transform: "translate(-50%, -50%) scale(1.1)",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        fill="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Box>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        <IconButton
          onClick={scrollRight}
          aria-label="Scroll speaker videos right"
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            opacity: 0.8,
            backgroundColor: "background.paper",
            width: 44,
            height: 44,
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          position: "relative",
          height: "200px",
          "&:hover .speaker-marquee-track": {
            animationPlayState: "paused",
          },
        }}
      >
        <Box
          className="speaker-marquee-track"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            flexWrap: "nowrap",
            width: "max-content",
            willChange: "transform",
            animation: "speaker-marquee 36s linear infinite",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              transform: "none",
            },
          }}
        >
          {marqueeImages.map((image, index) => (
            <Box
              key={`${image}-${index}`}
              sx={{
                width: "280px",
                height: "200px",
                borderRadius: "20px",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="280px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes speaker-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};
