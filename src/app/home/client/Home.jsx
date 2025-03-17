import {
  AIFirstCurriculum,
  CardContainer,
  FeeStructure,
  ImageGrid,
  InCollaborationWith,
  InvestorWhoTrustUs,
  LearnFrom,
  VedamVs,
  VideoWithText,
  WhatPeople,
  WidthContainer,
} from "@/components";
import WhyVedam from "@/components/WhyVedam";
import { detailsData, homeScreenData } from "@/constants/data";
import { Box } from "@mui/material";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "1.5rem" },
          alignItems: "center",
          paddingBottom: "16px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <VideoWithText />
        <WidthContainer
          childrenStyle={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <CardContainer
            title={homeScreenData.fromEducationToEntrance.title}
            subtitle={homeScreenData.fromEducationToEntrance.subtitle}
            linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
          >
            <ImageGrid />
          </CardContainer>
          <CardContainer
            title={homeScreenData.inCollaborationWith.title}
            subtitle={homeScreenData.inCollaborationWith.subtitle}
          >
            <InCollaborationWith />
          </CardContainer>
          <CardContainer
            title={homeScreenData.techTeam.title}
            subtitle={homeScreenData.techTeam.subtitle}
          >
            <img
              src={homeScreenData.techTeam.image}
              width={"100%"}
              height={200}
              style={{ objectFit: "fill" }}
              className="techTeamImage"
              loading="lazy"
            />
          </CardContainer>
          <CardContainer
            title={homeScreenData.whyVedam.title}
            subtitle={homeScreenData.whyVedam.subtitle}
          >
            <WhyVedam />
          </CardContainer>
        </WidthContainer>
      </Box>
      <AIFirstCurriculum />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          paddingBottom: "16px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <WidthContainer>
          <CardContainer
            subtitle={homeScreenData.vedamVs.subtitle}
            linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)"
          >
            <VedamVs />
          </CardContainer>
          <CardContainer subtitle={homeScreenData.FeeStructure.subtitle}>
            <FeeStructure />
          </CardContainer>
          <CardContainer
            title={homeScreenData.learnFrom.title}
            subtitle={homeScreenData.learnFrom.subtitle}
          >
            <LearnFrom />
          </CardContainer>
          <CardContainer subtitle={homeScreenData.whatPeople.subtitle}>
            <WhatPeople />
          </CardContainer>
          <CardContainer subtitle={homeScreenData.learnFrom.subtitle}>
            <InvestorWhoTrustUs />
          </CardContainer>
        </WidthContainer>
      </Box>
    </Fragment>
  );
};

export default Home;
