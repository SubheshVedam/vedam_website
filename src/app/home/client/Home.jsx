"use client";
import dynamic from "next/dynamic";
import { SectionStack, VideoWithText } from "@/components";
import WhyVedam from "@/components/WhyVedam";
import { homeScreenData } from "@/constants/data";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useState, useEffect, useRef } from "react";

// ─── Skeleton placeholder (stable height prevents CLS) ───────────────────────
const SectionSkeleton = ({ height = 320 }) => (
  <Box
    role="status"
    aria-label="Loading section"
    sx={{
      width: "100%",
      minHeight: height,
      height: height,
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

// ─── IntersectionObserver-based lazy renderer ─────────────────────────────────
// Defers rendering of below-fold sections until they're 200px from the viewport.
// This dramatically reduces TBT on mobile by not hydrating everything at once.
const LazySection = ({ children, fallbackHeight = 320 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ minHeight: visible ? "auto" : fallbackHeight, width: "100%" }}
    >
      {visible ? children : <SectionSkeleton height={fallbackHeight} />}
    </div>
  );
};

// ─── Lazy-loaded sections ─────────────────────────────────────────────────────
const InCollaborationWith = dynamic(
  () => import("@/components/home/InCollaborationWith").then((m) => m.InCollaborationWith),
  { loading: () => <SectionSkeleton height={260} />, ssr: false }
);
const AIFirstCurriculum = dynamic(
  () => import("@/components/home/AIFirstCurriculum/AIFirstCurriculum").then((m) => m.AIFirstCurriculum),
  { loading: () => <SectionSkeleton height={420} />, ssr: false }
);
const ImageGrid = dynamic(
  () => import("@/components/home/ImageGrid").then((m) => m.ImageGrid),
  { loading: () => <SectionSkeleton height={360} />, ssr: false }
);
const InvestorWhoTrustUs = dynamic(
  () => import("@/components/home/InvestorWhoTrustUs").then((m) => m.InvestorWhoTrustUs),
  { loading: () => <SectionSkeleton height={260} />, ssr: false }
);
const LearnFrom = dynamic(
  () => import("@/components/home/LearnFrom").then((m) => m.LearnFrom),
  { loading: () => <SectionSkeleton height={320} />, ssr: false }
);
const VedamVs = dynamic(
  () => import("@/components/home/VedamVs").then((m) => m.VedamVs),
  { loading: () => <SectionSkeleton height={320} />, ssr: false }
);
const WhatPeople = dynamic(
  () => import("@/components/home/WhatPeople").then((m) => m.WhatPeople),
  { loading: () => <SectionSkeleton height={320} />, ssr: false }
);
const StudentsAtVedam = dynamic(
  () => import("@/components/home/StudentsAtVedam").then((m) => m.StudentsAtVedam),
  { loading: () => <SectionSkeleton height={360} />, ssr: false }
);
const Speaker = dynamic(
  () => import("@/components/home/Speaker").then((m) => m.Speaker),
  { loading: () => <SectionSkeleton height={280} />, ssr: false }
);
const Instructors = dynamic(
  () => import("@/components/home/Instructors").then((m) => m.Instructors),
  { loading: () => <SectionSkeleton height={300} />, ssr: false }
);
const NewsSection = dynamic(
  () => import("@/components/home/NewsSection"),
  { loading: () => <SectionSkeleton height={300} />, ssr: false }
);
const RecognitionAwards = dynamic(
  () => import("@/components/home/RecognitionAwards"),
  { loading: () => <SectionSkeleton height={260} />, ssr: false }
);

// ─── VideoCard ────────────────────────────────────────────────────────────────
// Uses CSS sx breakpoints instead of useMediaQuery hooks → zero JS runtime cost
const VideoCard = ({
  thumbnailSrc,
  thumbnailAlt,
  iframeTitle,
  embedUrl,
  priority = false,
  containerSx = {},
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "220px", sm: "580px", xl: "680px" },
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#000",
        ...containerSx,
      }}
    >
      {playing ? (
        <iframe
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "inherit" }}
          src={`${embedUrl}?autoplay=1`}
          title={iframeTitle}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <Box
          role="button"
          tabIndex={0}
          aria-label={`Play ${iframeTitle}`}
          onClick={() => setPlaying(true)}
          onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
          sx={{ cursor: "pointer", width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            priority={priority}
            sizes="(max-width: 600px) 100vw, (max-width: 1536px) 80vw, 1200px"
            style={{ objectFit: "cover", borderRadius: "inherit" }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0,0,0,0.6)",
              padding: "12px 16px",
              borderRadius: "100px",
              pointerEvents: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="#fff"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </Box>
        </Box>
      )}
    </Box>
  );
};

// ─── Main page component ──────────────────────────────────────────────────────
const Home = () => {
  // Replaced 3× useMediaQuery (MUI) with a single native matchMedia listener.
  // MUI's useMediaQuery triggers a re-render + theme lookup on every breakpoint
  // change — native matchMedia is passive and costs nothing on mobile paint.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Hero sections (above the fold — NOT wrapped in LazySection) ─────────────
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

  // ── Below-fold sections (all wrapped in LazySection) ─────────────────────────
  const detailSections = [
    {
      id: "students-at-vedam",
      subtitle: isMobile ? "Meet the Students at Vedam" : "",
      render: () => (
        <LazySection fallbackHeight={360}>
          <StudentsAtVedam />
        </LazySection>
      ),
    },
    {
      id: "vedam-vs",
      subtitle: homeScreenData.vedamVs.subtitle,
      render: () => (
        <LazySection fallbackHeight={320}>
          <VedamVs />
        </LazySection>
      ),
      titleChildContainer: { marginBottom: { xs: "1rem", md: "2.5rem" } },
      linearGradientSubtitle: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)",
    },
    {
      id: "founder-video",
      title: homeScreenData.techTeam.title,
      subtitle: "Hear from our Co-Founder",
      render: () => (
        <LazySection fallbackHeight={580}>
          <VideoCard
            thumbnailSrc="/img/hear_from_founder_thumbnail.webp"
            thumbnailAlt="Watch our Co-Founder talk about Vedam"
            iframeTitle="Vedam Co-Founder video"
            embedUrl="https://www.youtube.com/embed/kxkRisXZg8Y"
            containerSx={{
              borderRadius: { xs: "16px", md: "22px" },
              boxShadow: "0px 18px 38px rgba(0,0,0,0.12)",
            }}
          />
        </LazySection>
      ),
    },
    {
      id: "image-grid",
      title: homeScreenData.fromEducationToEntrance.title,
      subtitle: homeScreenData.fromEducationToEntrance.subtitle,
      render: () => (
        <LazySection fallbackHeight={360}>
          <ImageGrid />
        </LazySection>
      ),
    },
    {
      id: "instructors",
      title: homeScreenData.instructor.title,
      subtitle: homeScreenData.instructor.subtitle,
      render: () => (
        <LazySection fallbackHeight={300}>
          <Instructors />
        </LazySection>
      ),
    },
    {
      id: "learn-from",
      title: homeScreenData.learnFrom.title,
      subtitle: homeScreenData.learnFrom.subtitle,
      render: () => (
        <LazySection fallbackHeight={320}>
          <LearnFrom />
        </LazySection>
      ),
    },
    {
      id: "speaker",
      subtitle: "Mentorship & Guidance from the Best in the Industry",
      render: () => (
        <LazySection fallbackHeight={280}>
          <Speaker />
        </LazySection>
      ),
    },
    {
      id: "what-people",
      subtitle: homeScreenData.whatPeople.subtitle,
      render: () => (
        <LazySection fallbackHeight={320}>
          <WhatPeople />
        </LazySection>
      ),
    },
    {
      id: "recognition-awards",
      subtitle: homeScreenData.Recognitionawards.subtitle,
      render: () => (
        <LazySection fallbackHeight={260}>
          <RecognitionAwards />
        </LazySection>
      ),
    },
    {
      id: "investors",
      subtitle: homeScreenData.investorWhoTrustUs.subtitle,
      render: () => (
        <LazySection fallbackHeight={260}>
          <InvestorWhoTrustUs />
        </LazySection>
      ),
    },
    {
      id: "news",
      subtitle: homeScreenData.intheHeadlines.subtitle,
      render: () => (
        <LazySection fallbackHeight={300}>
          <NewsSection />
        </LazySection>
      ),
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
        // isImg={homeScreenData.hero.background_hero_image}
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

      {/* AIFirstCurriculum is below the fold — defer it too */}
      <LazySection fallbackHeight={420}>
        <AIFirstCurriculum />
      </LazySection>

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
    </Fragment>
  );
};

export default Home;