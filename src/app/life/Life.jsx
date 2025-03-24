import { Box } from "@mui/material";
import React, { Fragment } from "react";
import {
  CardContainer,
  ClubsAtVst,
  EdgeAtVedam,
  VedamInovationLab,
  VideoWithText,
  WidthContainer,
} from "@/components";
import { lifeAtVedam } from "@/constants/data";

const Life = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "2rem", lg: "3rem" },
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <VideoWithText
        title={lifeAtVedam.hero.title}
        titleLinearGradient="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        subtitle={lifeAtVedam.hero.subtitle}
        showApplyNowButton={false}
      />
      <WidthContainer
        childrenStyle={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "2rem", lg: "3rem" },
        }}
      >
        <ClubsAtVst />
        <VedamInovationLab />
        <CardContainer subtitle={lifeAtVedam.edgeAtVedam.subtitle}>
          <EdgeAtVedam />
        </CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default Life;
