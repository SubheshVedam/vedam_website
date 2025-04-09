"use client";
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
import { homeScreenData } from "@/constants/data";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const Home = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showIframe1, setShowIframe1] = useState(false);
  const [videoUrl1, setVideoUrl1] = useState("");
  const [showIframe2, setShowIframe2] = useState(false);
  const [videoUrl2, setVideoUrl2] = useState("");

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
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: isMobile ? "220px" : isLarge ? "680px" : "580px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {showIframe1 ? (
                <iframe
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "16px",
                    border: "none",
                  }}
                  src={videoUrl1}
                  title="YouTube video player"
                  loading="lazy"
                  className="techTeamImage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Box
                  onClick={() => {
                    setVideoUrl1(
                      "https://www.youtube.com/embed/zHquRUSxP8o?autoplay=1&si=MjqF-PfmelA2too8"
                    );
                    setShowIframe1(true);
                  }}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/video_thumnail.jpeg"
                    alt="Video thumbnail"
                    fill
                    style={{ objectFit: "cover" }}
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
          <CardContainer
            title={homeScreenData.techTeam.title}
            subtitle={"Hear from our Founder"}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: isMobile ? "220px" : isLarge ? "680px" : "580px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {showIframe2 ? (
                <iframe
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "16px",
                    border: "none",
                  }}
                  src={videoUrl2}
                  title="YouTube video player"
                  loading="lazy"
                  className="techTeamImage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Box
                  onClick={() => {
                    setVideoUrl2(
                      "https://www.youtube.com/embed/eePpgq00LLw?autoplay=1&si=0YJjFMtSU96LI9Kn"
                    );
                    setShowIframe2(true);
                  }}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/video_thumnail.jpeg"
                    alt="Video thumbnail2"
                    fill
                    style={{ objectFit: "cover" }}
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
          </CardContainer>
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
