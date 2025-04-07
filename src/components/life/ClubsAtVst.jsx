"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const IconTitle = ({ src, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <img src={src} alt="image" className="clubsIconImage" />
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "clamp(20px, 2vw, 24px)",
          lineHeight: "120%",
          fontWeight: "700",
          fontFamily: "Inter",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export const ClubsAtVst = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const clubs = lifeAtVedam.clubsAtVst;

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: false,
    vertical: true, // Enable vertical sliding
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next),
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "1.5rem", md: "2.5rem" },
        alignItems: "center",
        borderRadius: "30px",
        justifyContent: "space-between",
        background:
          "radial-gradient(101.43% 227.29% at 100% 0%, rgba(186, 107, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        padding: { xs: "1rem", md: "2rem" },
        position: "relative",
        minHeight: "500px",
      }}
    >
      {/* Left Side - Description */}
      <Box
        sx={{
          width: { xs: "100%", sm: "30%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: { xs: "1rem", md: "20px" },
          position: { md: "sticky" },
          top: 0,
          height: "fit-content",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(20px, 2vw, 36px)",
            lineHeight: "100%",
            fontWeight: "700",
            marginBottom: { xs: "1rem", md: "26px" },
            fontFamily: "Inter",
          }}
        >
          {clubs[activeIndex].leftSideTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "clamp(12px, 2vw, 16px)",
            lineHeight: "150%",
            fontWeight: "350",
            fontFamily: "Inter",
          }}
        >
          {clubs[activeIndex].description}
        </Typography>
      </Box>

      {/* Right Side - Carousel */}
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          position: "relative",
        }}
      >
        <Slider ref={setSliderRef} {...settings}>
          {clubs.map((club, index) => (
            <Box key={index} sx={{padding:'20px' }}>
              <IconTitle
                src={
                  index % 2 === 0
                    ? "/img/robotics.webp"
                    : "/img/openSource.webp"
                }
                title={club.rightSideText}
              />
              <Box
                sx={{
                  width: "100%",
                  padding: "20px 0px",
                  margin: "1.5rem 0",
                }}
              >
                <Image
                  src={"/img/clubsAtVst.webp"}
                  alt="clubs"
                  width={300}
                  height={200}
                  className="clubsAtVstImage"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
