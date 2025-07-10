'use client';

import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { homeScreenData } from "@/constants/data";
import Image from "next/image";

const SingleIconText = ({
  icon,
  text,
  flexDirection = "row",
  textColor = "rgba(30, 30, 30, 1)",
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: flexDirection, gap: "12px" }}>
      <Image
        src={icon}
        alt="svg"
        width={20}
        height={20}
        className="iconStyle"
      />
      <Typography
        variant="subtitle2"
        color={textColor}
        fontWeight={"500"}
        sx={{ fontSize: "clamp(12px, 2vw 1rem)" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const InCollaborationWith = () => {
  const data = homeScreenData.inCollaborationWith;
  const [showVideo, setShowVideo] = useState(false);
  const YOUTUBE_URL = "https://www.youtube.com/embed/3PCRxHdf--g?autoplay=1";
  return (
    <Box
      sx={{
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderStyle: "solid",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        justifyContent: "space-between",
        padding: { xs: "20px", md: "40px" },
        width: "100%",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "55%" }, position: "relative", height: 260 }}>
        {showVideo ? (
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "16px", border: "none", width: "100%", height: "100%", aspectRatio: "2.07/1" }}
            src={YOUTUBE_URL}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box
            onClick={() => setShowVideo(true)}
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="/img/thumbnail.webp"
              width={"100%"}
              height={260}
              style={{ objectFit: "cover", aspectRatio: "2.07:1", width: "100%", height: "100%" }}
              alt="Collaboration Thumbnail"
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
      <Box
        sx={{
          width: { xs: "100%", md: "43%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontSize: "clamp(1.2rem, 2vw, 2rem)",
            lineHeight: "120%",
            letterSpacing: "-2%",
            fontWeight: "700",
            marginBottom: 8,
          }}
        >
          {data.rightSideText1}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {data.data.map((item) => (
            <SingleIconText key={item.id} icon={item.image} text={item.text} />
          ))}
        </Box>
        <Button
          style={{
            marginTop: "1.2rem",
            backgroundColor: "rgba(251, 127, 5, 1)",
            padding: "15px 20px",
            borderRadius: "8px",
          }}
          sx={{
            width: { xs: "100%", md: "auto" },
            transition: "background-color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(220, 110, 5, 1)",
              transform: "scale(1.05)",
            },
          }}
          href="https://apply.vedam.org/"
          target="_blank"
        >
          <SingleIconText
            icon={data.buttonIcon}
            text={data.buttonText}
            flexDirection="row-reverse"
            textColor={"#F9F9F9"}
          />
        </Button>
      </Box>
    </Box>
  );
};
