'use client'
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";

const investorData = [
  { id: 0, name: "Alteria", img: "/img/investors/alteria.webp" },
  { id: 1, name: "Saama", img: "/img/investors/saama.webp" },
  { id: 2, name: "WestBridge", img: "/img/investors/westbridge.webp" },
  { id: 3, name: "Prime", img: "/img/investors/prime.webp" },
];

export const InvestorWhoTrustUs = () => {
  const marqueeItems = [...investorData, ...investorData];

  return (
    <Box
      sx={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        position: "relative",
        "&:hover .investor-marquee-track": {
          animationPlayState: "paused",
        },
      }}
    >
      <Box
        className="investor-marquee-track"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: {
            xs: "12px",
            md: "16px",
            lg: "20px",
          },
          width: "max-content",
          alignItems: "center",
          willChange: "transform",
          animation: {
            xs: "investor-marquee 24s linear infinite",
            md: "investor-marquee 28s linear infinite",
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            transform: "none",
          },
        }}
      >
        {marqueeItems.map((item, index) => (
          <Box
            key={`${item.id}-${index}`}
            sx={{
              position: "relative",
              flexShrink: 0,
              width: {
                xs: "120px",
                md: "140px",
                lg: "160px",
              },
              height: {
                xs: "48px",
                md: "56px",
                lg: "64px",
              },
            }}
          >
            <Image
              src={item.img}
              alt={`${item.name} logo`}
              fill
              loading="lazy"
              sizes="(max-width: 767px) 120px, (max-width: 1023px) 140px, 160px"
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>

      <Typography
        variant={"subtitle1"}
        textAlign={"center"}
        sx={{
          marginTop: { xs: "16px", md: "32px" },
          fontSize: { xs: "6px", md: "8px" },
          fontFamily: "var(--font-inter), sans-serif",
          color: "#1E1E1E",
          lineHeight: "150%",
        }}
      >
        {homeScreenData.investorWhoTrustUs.bottomText}
      </Typography>

      <style jsx global>{`
        @keyframes investor-marquee {
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

export default InvestorWhoTrustUs;
