"use client";
import {
  AIFirstCurriculum,
  ImageGrid,
  InCollaborationWith,
  InvestorWhoTrustUs,
  LearnFrom,
  SectionStack,
  VedamVs,
  VideoWithText,
  WhatPeople,
} from "@/components";
import { StudentsAtVedam } from "@/components/home/StudentsAtVedam";
import WhyVedam from "@/components/WhyVedam";
import { Instructors } from "@/components/home/Instructors";
import NewsSection from "@/components/home/NewsSection";
import { homeScreenData } from "@/constants/data";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import RecognitionAwards from "@/components/home/RecognitionAwards";

const Home = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showIframe1, setShowIframe1] = useState(false);
  const [videoUrl1, setVideoUrl1] = useState("");
  const [showIframe2, setShowIframe2] = useState(false);
  const [videoUrl2, setVideoUrl2] = useState("");

  const renderVideoCard = (
    isVisible,
    videoUrl,
    onPlay,
    thumbnailSrc,
    thumbnailAlt
  ) => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "220px" : isLarge ? "680px" : "580px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          style={{
            borderRadius: "16px",
            border: "none",
          }}
          src={videoUrl}
          title="YouTube video player"
          loading="lazy"
          className="techTeamImage"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Box
          onClick={onPlay}
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            style={{ objectFit: "contain" }}
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
  );

  const heroSections = [
    {
      id: "in-collaboration-with",
      subtitle: homeScreenData.inCollaborationWith2.subtitle,
      render: () => <InCollaborationWith />,
    },
    // {
    //   id: "tech-video",
    //   title: homeScreenData.techTeam.title,
    //   subtitle: homeScreenData.techTeam.subtitle,
    //   render: () =>
    //     renderVideoCard(
    //       showIframe1,
    //       videoUrl1,
    //       () => {
    //         setVideoUrl1(
    //           "https://www.youtube.com/embed/zHquRUSxP8o?autoplay=1&si=MjqF-PfmelA2too8"
    //         );
    //         setShowIframe1(true);
    //       },
    //       "/img/video_thumbnail.jpg",
    //       "Video thumbnail"
    //     ),
    // },
    {
      id: "why-vedam",
      title: homeScreenData.whyVedam.title,
      subtitle: homeScreenData.whyVedam.subtitle,
      render: () => <WhyVedam />,
    },
  ];

  const detailSections = [
    {
      id: "students-at-vedam",
      subtitle: isMobile ? "Meet the Students at Vedam" : "",
      // subtitle: "",
      render: () => <StudentsAtVedam />,
    },
    {
      id: "vedam-vs",
      subtitle: homeScreenData.vedamVs.subtitle,
      render: () => <VedamVs />,
      titleChildContainer: {
        marginBottom: { xs: "1rem", md: "2.5rem" },
      },
      linearGradientSubtitle: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)",
    },
    {
      id: "founder-video",
      title: homeScreenData.techTeam.title,
      subtitle: "Hear from our Co-Founder",
      render: () =>
        renderVideoCard(
          showIframe2,
          videoUrl2,
          () => {
            setVideoUrl2(
              "https://www.youtube.com/embed/eePpgq00LLw?autoplay=1&si=0YJjFMtSU96LI9Kn"
            );
            setShowIframe2(true);
          },
          "/img/hear_from_founder_thumbnail.jpeg",
          "Video thumbnail2"
        ),
    },
    {
      id: "image-grid",
      title: homeScreenData.fromEducationToEntrance.title,
      subtitle: homeScreenData.fromEducationToEntrance.subtitle,
      render: () => <ImageGrid />,
      linearGradientSubtitle: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
    },
    {
      id: "instructors",
      title: homeScreenData.instructor.title,
      subtitle: homeScreenData.instructor.subtitle,
      render: () => <Instructors />,
    },
    {
      id: "learn-from",
      title: homeScreenData.learnFrom.title,
      subtitle: homeScreenData.learnFrom.subtitle,
      render: () => <LearnFrom />,
    },
    {
      id: "what-people",
      subtitle: homeScreenData.whatPeople.subtitle,
      render: () => <WhatPeople />,
    },
    {
      id: "recognition-awards",
      subtitle: homeScreenData.Recognitionawards.subtitle,
      render: () => <RecognitionAwards />,
    },
    {
      id: "investors",
      subtitle: homeScreenData.investorWhoTrustUs.subtitle,
      render: () => <InvestorWhoTrustUs />,
    },
    {
      id: "news",
      subtitle: homeScreenData.intheHeadlines.subtitle,
      render: () => <NewsSection />,
    },
  ];

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
        <SectionStack
          widthContainerProps={{
            childrenStyle: {
              display: "flex",
              flexDirection: "column",
            },
          }}
          sections={heroSections}
        />
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
        <SectionStack sections={detailSections} />
      </Box>
    </Fragment >
  );
};

export default Home;
