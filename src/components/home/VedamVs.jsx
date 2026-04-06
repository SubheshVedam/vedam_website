'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { homeScreenData } from "@/constants/data";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Card = ({
  data,
  containerStyle = {},
  showBorder = false,
  textArrayStyle = {},
  headerTextStyle = {},
  textArrayContainer = {},
  textArrayTextStyle = {},
}) => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: { xs: "380px", sm: "550px" },
        ...containerStyle,
      }}
    >
      <Box style={{ height: "30px" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
            fontSize: "clamp(14px, 2vw, 1.5rem)",
            fontWeight: "700",
            lineHeight: "120%",
            fontFamily: "Inter",
            ...headerTextStyle,
          }}
        >
          {data.headerText}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          ...textArrayContainer,
        }}
      >
        {data.textArray.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              borderBottom: showBorder
                ? "1px solid rgba(132, 132, 132, 0.2)"
                : "",
              height: { xs: "48px", sm: "70px" },
              "&:last-child": {
                borderWidth: 0,
              },
              ...textArrayStyle,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              {item.icon && (
                <Image src={item.icon} width={20} height={20} alt="icon" />
              )}
              <Typography
                sx={{
                  textAlign: "left",
                  lineHeight: "120%",
                  fontSize: "clamp(11px, 2vw, 16px)",
                  fontWeight: "500",
                  ...textArrayTextStyle,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const VedamVs = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Left Scroll Button - Only visible on mobile */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          opacity: 0.8,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box
        ref={scrollContainerRef}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflowX: { xs: "auto", md: "hidden" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          scrollSnapType: { xs: "x mandatory", md: "none" },
        }}
      >
        {/* Mobile: Show left column + middle card combined */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flex: "0 0 100%",
            border: '1px solid #8A18FF',
            borderRadius: "20px",
            scrollSnapAlign: "start",
            gap: "0",
          }}
        >
          <Card
            data={homeScreenData.vedamVs.leftSideData}
            containerStyle={{
              flex: "0 0 35%",
              display: "flex",
              alignItems: "flex-start",
              marginTop: "1rem",
              paddingLeft: '12px'
            }}
            showBorder
            textArrayStyle={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            textArrayContainer={{ width: "100%" }}
            textArrayTextStyle={{
              fontWeight: "700",
              color: "rgba(30, 30, 30, 1)",
            }}
          />
          <Box
            sx={{
              flex: "0 0 65%",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              background:
                "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
              borderRadius: "20px",
            }}
          >
            <Card
              width="100%"
              data={homeScreenData.vedamVs.middleSideData}
              containerStyle={{
                paddingLeft: "28px",
                paddingRight: "28px",
                background:
                  "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
                borderRadius: "20px",
              }}
              textArrayTextStyle={{
                color: "rgba(255, 255, 255, 1)",
                textAlign: "left",
              }}
            />
          </Box>
        </Box>

        {/* Mobile: Show left column + right card combined */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flex: "0 0 100%",
            border: '1px solid #8A18FF',
            borderRadius: "20px",
            scrollSnapAlign: "start",
            gap: "0",
          }}
        >
          <Card
            data={homeScreenData.vedamVs.leftSideData}
            containerStyle={{
              flex: "0 0 35%",
              display: "flex",
              alignItems: "flex-start",
              marginTop: "1rem",
              paddingLeft: '12px',
            }}
            showBorder
            textArrayStyle={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            textArrayContainer={{ width: "100%" }}
            textArrayTextStyle={{
              fontWeight: "700",
              color: "rgba(30, 30, 30, 1)",
            }}
          />
          <Card
            data={homeScreenData.vedamVs.rightSideData}
            containerStyle={{
              flex: "0 0 65%",
              borderLeft: "1px solid #8A18FF",
              // borderTop: "1px solid #8A18FF",
              // borderBottom: "1px solid #8A18FF",
              borderRadius: "20px",
              backgroundColor: '#F4F4F4',
              height: "414px",
              paddingTop: "35px",
              paddingBottom: "20px",
              // marginTop: "1rem",
            }}
            textArrayStyle={{
              width: "100%",
              paddingLeft: "20px",
              justifyContent: "flex-start",
            }}
            headerTextStyle={{ color: "rgba(12, 38, 81, 1)" }}
            textArrayTextStyle={{
              color: "rgba(132, 132, 132, 1)",
            }}
          />
        </Box>

        {/* Desktop: Original layout */}
        <Card
          data={homeScreenData.vedamVs.leftSideData}
          containerStyle={{
            display: { xs: "none", md: "flex" },
            flex: "0 0 30%",
            alignItems: "flex-start",
            marginTop: "1rem",
          }}
          showBorder
          textArrayStyle={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          textArrayContainer={{ width: "100%" }}
          textArrayTextStyle={{ fontWeight: "700", color: "rgba(30, 30, 30, 1)" }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flex: "0 0 40%",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            background:
              "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
            borderRadius: "20px",
          }}
        >
          <Card
            width="100%"
            data={homeScreenData.vedamVs.middleSideData}
            containerStyle={{
              paddingLeft: "40px",
              paddingRight: "40px",
              background:
                "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
              borderRadius: "20px",
            }}
            textArrayTextStyle={{
              color: "rgba(255, 255, 255, 1)",
              textAlign: "left",
            }}
          />
        </Box>
        <Card
          data={homeScreenData.vedamVs.rightSideData}
          containerStyle={{
            display: { xs: "none", md: "flex" },
            flex: "0 0 30%",
            borderTop: "1px solid rgba(108, 16, 188, 1)",
            borderRight: "1px solid rgba(108, 16, 188, 1)",
            borderBottom: "1px solid rgba(108, 16, 188, 1)",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "1rem",
          }}
          textArrayStyle={{
            width: "100%",
            paddingLeft: "40px",
            justifyContent: "flex-start",
          }}
          headerTextStyle={{ color: "rgba(12, 38, 81, 1)" }}
          textArrayTextStyle={{
            color: "rgba(132, 132, 132, 1)",
          }}
        />
      </Box>

      {/* Right Scroll Button - Only visible on mobile */}
      <IconButton
        onClick={scrollRight}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          opacity: 0.8,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};