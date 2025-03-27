import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";

const SingleCard = ({ icon, text, isCurriculum }) => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(12, 38, 81, 0.2)",
        borderRadius: "10px",
        padding: isCurriculum ? 0 : "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: "0 0 29%",
      }}
    >
      <Box sx={{ borderRadius: "10px" }}>
        <Image
          src={icon}
          alt="icon"
          width={212}
          height={114}
          objectFit="contain"
          style={{
            // width: "100%",
            height:'100%'
,            aspectRatio:'1.51:1.',
            borderRadius: "10px 10px 0 0",
          }}
        />
      </Box>
      <Box sx={{ padding: "5px 10px 10px 10px" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: "600",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export const AIYear2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: { xs: "10px", md: "20px" },
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          fontFamily: "Inter",
          fontWeight: "700",
          color: "rgba(108, 16, 188, 1)",
          lineHeight: "100%",
          marginBottom: "0.5rem",
        }}
      >
        {homeScreenData.year2.title}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "clamp(10px, 2vw, 14px)",
          fontFamily: "Inter",
          fontWeight: "500",
          color: "rgba(132, 132, 132, 1)",
          marginBottom: "2rem",
          lineHeight: "100%",
        }}
      >
        {homeScreenData.year2.subtitle}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: "700",
          color: "rgba(12, 38, 81, 1)",
          marginBottom: "0.5rem",
          lineHeight: "100%",
        }}
      >
        {homeScreenData.year2.secondTitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {homeScreenData.year2.secondArray.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#F9F9F9",
              paddingX: { xs: "10px", md: "20px" },
              paddingY: { xs: "5px", md: "10px" },
              borderRadius: "40px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "12px",
                fontFamily: "Inter",
                fontWeight: "700",
                color: "rgba(30, 30, 30, 1)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: "700",
          color: "rgba(12, 38, 81, 1)",
          lineHeight: "100%",
          marginBottom: "0.5rem",
          textAlign: "left",
        }}
      >
        {homeScreenData.year2.Outcomes}
      </Typography>
      <Box
        id="check"
        sx={{
          flex: { xs: "0 0 40%", md: "0 0 30%" },
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "10px",
          width: "100%",
          overflowX: { xs: "auto", md: "hidden" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {homeScreenData.year2.outcomeArray.map((item) => (
          <SingleCard
            key={item.id}
            icon={item.icon}
            text={item.text}
            isCurriculum={true}
          />
        ))}
      </Box>
    </Box>
  );
};
