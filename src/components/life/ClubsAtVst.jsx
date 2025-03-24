import React from "react";
import { Box, Typography } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";

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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "1.5rem" },
        alignItems: "center",
        borderRadius: "30px",
        justifyContent: "space-between",
        background:
          "radial-gradient(101.43% 227.29% at 100% 0%, rgba(186, 107, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        padding: { xs: "1rem", md: "2.5rem" },
      }}
    >
      <Box
        sx={{
          flex: 0.45,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: { xs: "1rem", md: "20px" },
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
          {lifeAtVedam.clubsAtVst.leftSideTitle}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "clamp(12px, 2vw, 16px)",
            lineHeight: "150%",
            fontWeight: "500",
            fontFamily: "Inter",
          }}
        >
          {lifeAtVedam.clubsAtVst.description}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 0.45,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <IconTitle
          src={"/img/robotics.webp"}
          title={lifeAtVedam.clubsAtVst.rightSideText2}
        />
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "20px 0px",
            marginBottom: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          <img
            src="/img/clubsAtVst.webp"
            alt="clubs"
            className="clubsAtVstImage"
          />
        </Box>
        <IconTitle
          src={"/img/openSource.webp"}
          title={lifeAtVedam.clubsAtVst.rightSideText2}
        />
      </Box>
    </Box>
  );
};
