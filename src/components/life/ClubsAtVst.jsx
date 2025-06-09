"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { lifeAtVedam } from "@/constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Custom arrow components
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          bottom: -50,
          right: "50%",
          transform: "translateX(10px)",
          zIndex: 1,
          backgroundColor: "rgba(108, 16, 188, 0.2)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          mx: 2,
          mt: "-20px",
        }}
      >
        <ArrowDownwardIcon sx={{color:'#6C10BC'}} />
      </IconButton>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          bottom: -50,
          left: "50%",
          transform: "translateX(-10px)",
          zIndex: 1,
          backgroundColor: "rgba(108, 16, 188, 0.2)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          mx: 2,
          mt: "-20px",
        }}
      >
        <ArrowUpwardIcon sx={{color:'#6C10BC',zIndex:100}} />
      </IconButton>
    );
  };

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: true,
    vertical: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        pb: 8, // Add padding at bottom for arrows
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
          pb: 8, // Add padding at bottom for arrows
        }}
      >
        <Slider ref={setSliderRef} {...settings}>
          {clubs.map((club, index) => (
            <Box key={index} sx={{ padding: { xs: "8px", sm: "20px" } }}>
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
                  src={club.image}
                  alt={club.rightSideText}
                  width={300}
                  height={200}
                  className="clubsAtVstImage"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    height: isMobile ? "200px" : "300px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
