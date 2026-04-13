"use client";
import dynamic from "next/dynamic";
import { SectionStack, VideoWithText } from "@/components";
import WhyVedam from "@/components/WhyVedam";
import { homeScreenData } from "@/constants/data";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SectionSkeleton = ({ height = 320 }) => (
  <Box
    role="status"
    aria-label="Loading section"
    sx={{
      width: "100%",
      minHeight: height,
      borderRadius: "16px",
      background: "linear-gradient(90deg, #f2f2f2 0%, #e8e8e8 50%, #f2f2f2 100%)",
      backgroundSize: "200% 100%",
      animation: "pulse 1.2s ease-in-out infinite",
      "@keyframes pulse": {
        "0%": { backgroundPosition: "200% 0" },
        "100%": { backgroundPosition: "-200% 0" },
      },
    }}
  />
);

const InCollaborationWith = dynamic(
  () => import("@/components/home/InCollaborationWith").then((m) => m.InCollaborationWith),
  { loading: () => <SectionSkeleton height={260} /> }
);
const AIFirstCurriculum = dynamic(
  () => import("@/components/home/AIFirstCurriculum/AIFirstCurriculum").then((m) => m.AIFirstCurriculum),
  { loading: () => <SectionSkeleton height={420} /> }
);
const ImageGrid = dynamic(
  () => import("@/components/home/ImageGrid").then((m) => m.ImageGrid),
  { loading: () => <SectionSkeleton height={360} /> }
);
const InvestorWhoTrustUs = dynamic(
  () => import("@/components/home/InvestorWhoTrustUs").then((m) => m.InvestorWhoTrustUs),
  { loading: () => <SectionSkeleton height={260} /> }
);
const LearnFrom = dynamic(
  () => import("@/components/home/LearnFrom").then((m) => m.LearnFrom),
  { loading: () => <SectionSkeleton height={320} /> }
);
const VedamVs = dynamic(
  () => import("@/components/home/VedamVs").then((m) => m.VedamVs),
  { loading: () => <SectionSkeleton height={320} /> }
);
const WhatPeople = dynamic(
  () => import("@/components/home/WhatPeople").then((m) => m.WhatPeople),
  { loading: () => <SectionSkeleton height={320} /> }
);
const StudentsAtVedam = dynamic(
  () => import("@/components/home/StudentsAtVedam").then((m) => m.StudentsAtVedam),
  { loading: () => <SectionSkeleton height={360} /> }
);
const Speaker = dynamic(
  () => import("@/components/home/Speaker").then((m) => m.Speaker),
  { loading: () => <SectionSkeleton height={280} /> }
);
const Instructors = dynamic(
  () => import("@/components/home/Instructors").then((m) => m.Instructors),
  { loading: () => <SectionSkeleton height={300} /> }
);
const NewsSection = dynamic(() => import("@/components/home/NewsSection"), {
  loading: () => <SectionSkeleton height={300} />,
});
const RecognitionAwards = dynamic(() => import("@/components/home/RecognitionAwards"), {
  loading: () => <SectionSkeleton height={260} />,
});

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
    thumbnailAlt,
    containerSx = {}
  ) => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "220px" : isLarge ? "680px" : "580px",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#000",
        ...containerSx,
      }}
    >
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          style={{
            borderRadius: "inherit",
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
            style={{ objectFit: "cover", borderRadius: "inherit" }}
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
      id: "collaboration",
      title: homeScreenData.inCollaborationWith.title,
      subtitle: homeScreenData.inCollaborationWith.subtitle,
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
    //       "/img/video_thumbnail.webp",
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
              "https://www.youtube.com/embed/kxkRisXZg8Y?autoplay=1&si=0YJjFMtSU96LI9Kn"
            );
            setShowIframe2(true);
          },
          "/img/hear_from_founder_thumbnail.webp",
          "Video thumbnail2",
          {
            borderRadius: { xs: "16px", md: "22px" },
            boxShadow: "0px 18px 38px rgba(0,0,0,0.12)",
          }
        ),
    },
    {
      id: "image-grid",
      title: homeScreenData.fromEducationToEntrance.title,
      subtitle: homeScreenData.fromEducationToEntrance.subtitle,
      render: () => <ImageGrid />,
      // linearGradientSubtitle: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
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
      id: "speaker",
      subtitle: "Mentorship & Guidance from the Best in the Industry",
      render: () => <Speaker />,
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
          videoUrl={homeScreenData.hero.background_video}
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
