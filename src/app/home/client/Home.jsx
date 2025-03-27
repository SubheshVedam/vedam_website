'use client'
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
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { Fragment } from "react";

const Home = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "2rem", lg: "3rem" },
          alignItems: "center",
          backgroundColor: "#F9F9F9",
        }}
      >
        <VideoWithText
          title={homeScreenData.hero.title}
          subtitle={homeScreenData.hero.subtitle}
        />
        <WidthContainer
          childrenStyle={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
            {/* <img
              src={"https://www.youtube.com/embed/sDn7tw1P5x8"}
              // src={homeScreenData.techTeam.image}
              width={"100%"}
              style={{ objectFit: "cover",aspectRatio:"1.73:1",borderRadius:'16px' }}
              className="techTeamImage"
              loading="lazy"
            /> */}
            <iframe
              width="100%"
              height={isMobile ? "220px" : isLarge ? "680px" : "580px"}
              style={{
                borderRadius: "16px",
                border: "none",
              }}
              src="https://www.youtube.com/embed/zHquRUSxP8o?si=MjqF-PfmelA2too8"
              title="YouTube video player"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              className="techTeamImage"
            ></iframe>
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
            titleChildContainer={{
              marginBottom: { xs: "1rem", md: "2.5rem" },
            }}
            linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)"
          >
            <VedamVs />
          </CardContainer>
          {/* <CardContainer subtitle={homeScreenData.FeeStructure.subtitle}>
            <FeeStructure />
          </CardContainer> */}
          <CardContainer
            title={homeScreenData.fromEducationToEntrance.title}
            subtitle={homeScreenData.fromEducationToEntrance.subtitle}
            linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
          >
            <ImageGrid />
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

          <CardContainer subtitle={homeScreenData.investorWhoTrustUs.subtitle}>
            <InvestorWhoTrustUs />
          </CardContainer>
        </WidthContainer>
      </Box>
    </Fragment>
  );
};

export default Home;
