"use client";

import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export default function PlayableVideoCard({
  embedUrl,
  thumbnailSrc,
  thumbnailAlt,
  containerSx = {},
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "220px", md: "580px", xl: "680px" },
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#000",
        ...containerSx,
      }}
    >
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          style={{
            borderRadius: "inherit",
            border: "none",
          }}
          src={embedUrl}
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Box
          onClick={() => setIsPlaying(true)}
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            style={{ objectFit: "cover", borderRadius: "inherit" }}
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
}
