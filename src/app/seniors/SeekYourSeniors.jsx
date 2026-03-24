"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonIcon from "@mui/icons-material/Person";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const stats = [
  { num: "20+",    label: "Industry sessions"                },
  { num: "10+",    label: "Teams building at Innovation Lab" },
  { num: "6",      label: "Student run clubs"                },
  { num: "Weekly", label: "Events"                           },
];

const heroPhotos = [
  "/img/clubsAtVedam/open_source/img1.webp",
  "/img/clubsAtVedam/coding/img1.webp",
  "/img/clubsAtVedam/cultural/img1.webp",
  "/img/clubsAtVedam/entrepreneurship/img1.webp",
  "/img/clubsAtVedam/esports/img1.webp",
  "/img/clubsAtVedam/sports/img1.webp",
];

const clubPresidents = [
  { club: "Open-source Club Head",      name: "Sidhant Pande",     batch: "Batch of 2029", img: "/img/clubsAtVedam/open_source/img2.webp",      linkedin: "#" },
  { club: "Competitive Coding Club Head", name: "Aayush Bhatt",    batch: "Batch of 2029", img: "/img/clubsAtVedam/coding/img2.webp",            linkedin: "#" },
  { club: "Entrepreneurship Club Head", name: "Shivansh Ojha",     batch: "Batch of 2029", img: "/img/clubsAtVedam/entrepreneurship/img2.webp",  linkedin: "#" },
  { club: "Cultural Club Head",         name: "Revansh Heda",      batch: "Batch of 2029", img: "/img/clubsAtVedam/cultural/img2.webp",          linkedin: "#" },
  { club: "Sports Club Head",           name: "Lokendar Sangawa",  batch: "Batch of 2029", img: "/img/clubsAtVedam/sports/img2.webp",            linkedin: "#" },
  { club: "ESports Club Head",          name: "Aryan Mehta",       batch: "Batch of 2029", img: "/img/clubsAtVedam/esports/img2.webp",           linkedin: "#" },
];

const seniorVideos = [
  { title: "How I cracked VSAT",              duration: "10:23", thumb: "/img/VideothumbnaillifeVST.jpg",  url: "#" },
  { title: "Get upto 100% Scholarship!",      duration: "10:23", thumb: "/img/thumbnailADYPU.webp",        url: "#" },
  { title: "Explore Vedam School of Technology", duration: "12:45", thumb: "/img/video_thumbnail.jpg",    url: "#" },
];

const projects = [
  {
    name: "Motif",
    desc: "A platform that helps aspiring entrepreneurs discover startup ideas, build business plans, and access resources to launch and grow their businesses.",
    img: "/img/clubsAtVedam/entrepreneurship/img3.webp",
    authors: ["Awaneesh Gupta", "Agrima Gupta"],
    featured: true,
    highlightWords: ["entrepreneurs", "grow their businesses"],
  },
  {
    name: "AI Chatbot",
    desc: "An AI-powered assistant that helps users manage schedules, reminders, information, and daily task progress in one place.",
    img: "/img/clubsAtVedam/coding/img3.webp",
    authors: ["Siddhant Pandey"],
    featured: false,
  },
  {
    name: "Vaani Setu",
    desc: "A real-time sign-language-to-voice and text converter that enables seamless communication for deaf and mute individuals.",
    img: "/img/clubsAtVedam/open_source/img3.webp",
    authors: ["Shivansh Ojha", "Aareev Srinivasan", "Aditya Bahuguna"],
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────
const sectionHeading = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "20px", md: "28px" },
  color: "#FB7F05",
  lineHeight: 1.3,
};

const sectionPad = { px: { xs: "20px", md: "120px" }, py: { xs: "24px", md: "40px" } };

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** Prev/Next nav buttons used by carousels */
function CarouselNav({ onPrev, onNext }) {
  const btn = {
    width: 44, height: 44, border: "1.5px solid #E0E0E0",
    bgcolor: "white", color: "#1E1E1E", borderRadius: "50%",
    "&:hover": { bgcolor: "#F5F5F5" },
  };
  return (
    <Box sx={{ display: "flex", gap: "12px" }}>
      <IconButton onClick={onPrev} sx={btn} size="small"><ArrowBackIosNewIcon sx={{ fontSize: 14 }} /></IconButton>
      <IconButton onClick={onNext} sx={btn} size="small"><ArrowForwardIosIcon sx={{ fontSize: 14 }} /></IconButton>
    </Box>
  );
}

/** Club president card */
function PresidentCard({ club, name, batch, img, linkedin }) {
  return (
    <Box
      sx={{
        width: { xs: "195px", md: "216px" },
        minWidth: { xs: "195px", md: "216px" },
        borderRadius: "12px",
        bgcolor: "white",
        boxShadow: "0 2px 16px rgba(108,16,188,0.08)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Background gradient ellipse */}
      <Box
        sx={{
          position: "absolute", bottom: "-30px", left: "50%",
          transform: "translateX(-50%)",
          width: "360px", height: "270px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(108,16,188,0.15) 0%, rgba(186,107,255,0.08) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <Box sx={{ p: { xs: "12px", md: "14px" }, position: "relative", zIndex: 1 }}>
        {/* Club title */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif", fontWeight: 700,
            fontSize: { xs: "12px", md: "14px" }, color: "#6C10BC",
            lineHeight: 1.4, mb: { xs: "10px", md: "14px" },
            minHeight: { xs: "34px", md: "44px" },
          }}
        >
          {club}
        </Typography>

        {/* Photo */}
        <Box
          sx={{
            width: "100%", height: { xs: "115px", md: "126px" },
            borderRadius: "8px", overflow: "hidden", mb: "12px",
          }}
        >
          <Box
            component="img"
            src={img}
            alt={name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Divider */}
        <Box sx={{ height: "1px", bgcolor: "#EEEEEE", mb: "10px" }} />

        {/* Student details */}
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "13px", md: "15px" }, color: "#1E1E1E", mb: "4px" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", color: "#848484" }}>
            {batch}
          </Typography>
          <Box
            component="a"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex", alignItems: "center", gap: "4px",
              px: "8px", py: "3px",
              bgcolor: "rgba(108,16,188,0.08)", borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/img/linkedInIcon.png"
              alt="LinkedIn"
              sx={{ width: "14px", height: "14px", objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <OpenInNewIcon sx={{ fontSize: "12px", color: "#6C10BC" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/** Video card */
function VideoCard({ title, duration, thumb, url, isSmall }) {
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: isSmall ? { xs: "280px", md: "367px" } : { xs: "280px", md: "367px" },
        minWidth: isSmall ? { xs: "280px", md: "367px" } : { xs: "280px", md: "367px" },
        borderRadius: "12px",
        overflow: "hidden",
        flexShrink: 0,
        textDecoration: "none",
        display: "block",
      }}
    >
      {/* Thumbnail */}
      <Box sx={{ position: "relative", width: "100%", paddingTop: { xs: "56%", md: "60%" }, bgcolor: "#1E1E1E" }}>
        <Box
          component="img"
          src={thumb}
          alt={title}
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Play button */}
        <Box
          sx={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 46, height: 46,
            bgcolor: "rgba(255,255,255,0.9)", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <PlayCircleIcon sx={{ fontSize: 32, color: "#6C10BC" }} />
        </Box>
      </Box>

      {/* Title + duration */}
      <Box sx={{ bgcolor: "#1E1E1E", px: "20px", py: "12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "13px", md: "15px" }, color: "white", lineHeight: 1.4, flex: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "#848484", whiteSpace: "nowrap", mt: "2px" }}>
          {duration}
        </Typography>
      </Box>
    </Box>
  );
}

/** Author pill */
function AuthorPill({ name, size = "md" }) {
  return (
    <Box
      sx={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        bgcolor: "rgba(108,16,188,0.08)", borderRadius: "20px",
        px: size === "sm" ? "8px" : "12px",
        py: size === "sm" ? "4px" : "8px",
        flexShrink: 0,
      }}
    >
      <PersonIcon sx={{ fontSize: size === "sm" ? 12 : 16, color: "#6C10BC" }} />
      <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: size === "sm" ? "9px" : "11px", color: "#1E1E1E", whiteSpace: "nowrap" }}>
        {name}
      </Typography>
    </Box>
  );
}

/** Project card — featured (large) */
function FeaturedProjectCard({ name, desc, img, authors }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(108,16,188,0.12) 0%, rgba(186,107,255,0.06) 50%, rgba(255,255,255,0) 100%)",
        border: "1px solid rgba(108,16,188,0.15)",
        p: { xs: "16px", md: "24px" },
        minHeight: { xs: "360px", md: "390px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Shimmer BG */}
      <Box
        sx={{
          position: "absolute", right: "-60px", top: "-40px",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(186,107,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ display: "flex", gap: "20px", position: "relative", zIndex: 1 }}>
        {/* Text */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: { xs: "16px", md: "18px" }, color: "#1E1E1E", mb: "16px" }}>
            {name}
          </Typography>
          <Typography
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: { xs: "13px", md: "14px" }, color: "#3A3A3A", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{
              __html: desc
                .replace(/entrepreneurs/g, '<span style="color:#6C10BC;font-weight:600">entrepreneurs</span>')
                .replace(/grow their businesses/g, '<span style="color:#6C10BC;font-weight:600">grow their businesses</span>'),
            }}
          />
        </Box>

        {/* Image */}
        <Box
          sx={{
            width: { xs: "100px", md: "183px" },
            height: { xs: "100px", md: "166px" },
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
            bgcolor: "rgba(108,16,188,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Box component="img" src={img} alt={name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Box>

      {/* Author pills */}
      <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap", mt: "16px", position: "relative", zIndex: 1 }}>
        {authors.map((a) => <AuthorPill key={a} name={a} />)}
      </Box>
    </Box>
  );
}

/** Project card — small */
function SmallProjectCard({ name, desc, img, authors }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(20,10,40,0.92) 0%, rgba(10,5,20,0.96) 100%)",
        border: "1px solid rgba(108,16,188,0.2)",
        p: { xs: "16px", md: "20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: { xs: "auto", md: "300px" },
      }}
    >
      {/* Shimmer */}
      <Box
        sx={{
          position: "absolute", right: "-40px", top: "-40px",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(108,16,188,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ display: "flex", gap: "12px", position: "relative", zIndex: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: { xs: "14px", md: "16px" }, color: "white", mb: "12px" }}>
            {name}
          </Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            {desc}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "70px", md: "80px" },
            height: { xs: "70px", md: "80px" },
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
            bgcolor: "rgba(255,255,255,0.05)",
          }}
        >
          <Box component="img" src={img} alt={name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "6px", flexWrap: "wrap", mt: "12px", position: "relative", zIndex: 1 }}>
        {authors.map((a) => <AuthorPill key={a} name={a} size="sm" />)}
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────
export default function SeekYourSeniors() {
  const presidentsRef = useRef(null);
  const videosRef = useRef(null);
  const projectsRef = useRef(null);

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    const amount = 240;
    ref.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#FAFAFA", display: "flex", flexDirection: "column", width: "100%", overflow: "hidden" }}>

      {/* ── 1. HERO / LANDING ──────────────────────────────────────────────── */}
      <Box
        sx={{
          bgcolor: "white",
          position: "relative",
          overflow: "hidden",
          ...sectionPad,
          pt: { xs: "32px", md: "60px" },
          pb: { xs: "24px", md: "40px" },
        }}
      >
        {/* Blob decorations */}
        <Box sx={{ position: "absolute", right: "-80px", bottom: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(108,16,188,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", left: "-80px", top: "40px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(251,127,5,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* ── Mobile layout ── */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center", gap: "20px", position: "relative", zIndex: 1 }}>
          {/* Title */}
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "28px", background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.2 }}>
              Class of 2029
            </Typography>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#1E1E1E", mt: "4px" }}>
              From 19 Indian States
            </Typography>
          </Box>

          {/* Photo row */}
          <Box sx={{ display: "flex", gap: "8px", overflowX: "auto", pb: "4px", width: "100%", "&::-webkit-scrollbar": { display: "none" } }}>
            {heroPhotos.slice(0, 3).map((src, i) => (
              <Box key={i} sx={{ minWidth: "91px", height: "60px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                <Box component="img" src={src} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            ))}
          </Box>

          {/* Stats — 2×2 grid */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%" }}>
            {stats.map(({ num, label }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "22px", color: "#6C10BC", lineHeight: 1 }}>{num}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", color: "#848484", lineHeight: 1.3 }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Desktop layout ── */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center", gap: "32px", position: "relative", zIndex: 1 }}>
          {/* Photo strip + heading + photo strip */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", width: "100%" }}>
            {/* Left photos */}
            <Box sx={{ display: "flex", gap: "12px" }}>
              <Box sx={{ width: "126px", height: "84px", borderRadius: "12px", overflow: "hidden" }}>
                <Box component="img" src={heroPhotos[0]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box sx={{ width: "100px", height: "68px", borderRadius: "12px", overflow: "hidden", alignSelf: "center" }}>
                <Box component="img" src={heroPhotos[1]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Box>

            {/* Title */}
            <Box sx={{ textAlign: "center", minWidth: 320 }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "48px", background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.1 }}>
                Class of 2029
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "22px", color: "#1E1E1E", mt: "6px" }}>
                From 19 Indian States
              </Typography>
            </Box>

            {/* Right photos */}
            <Box sx={{ display: "flex", gap: "12px" }}>
              <Box sx={{ width: "100px", height: "68px", borderRadius: "12px", overflow: "hidden", alignSelf: "center" }}>
                <Box component="img" src={heroPhotos[2]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box sx={{ width: "126px", height: "84px", borderRadius: "12px", overflow: "hidden" }}>
                <Box component="img" src={heroPhotos[3]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Box>
          </Box>

          {/* Stats row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
            {stats.map(({ num, label }, i) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "40px", color: "#6C10BC", lineHeight: 1 }}>{num}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#848484", lineHeight: 1.3, maxWidth: "120px" }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── 2. MEET YOUR CLUB PRESIDENTS ───────────────────────────────────── */}
      <Box sx={{ bgcolor: "white", ...sectionPad, mt: { xs: "8px", md: "12px" } }}>
        {/* Section heading + nav */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "16px", md: "24px" } }}>
          <Typography sx={sectionHeading}>Meet Your Club Presidents</Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CarouselNav onPrev={() => scroll(presidentsRef, "prev")} onNext={() => scroll(presidentsRef, "next")} />
          </Box>
        </Box>

        {/* Cards row */}
        <Box
          ref={presidentsRef}
          sx={{
            display: "flex",
            gap: { xs: "12px", md: "24px" },
            overflowX: "auto",
            pb: "8px",
            "&::-webkit-scrollbar": { height: "4px" },
            "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(108,16,188,0.2)", borderRadius: "4px" },
            "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
          }}
        >
          {clubPresidents.map((p) => (
            <PresidentCard key={p.name} {...p} />
          ))}
        </Box>

        {/* Mobile nav */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "flex-end", mt: "12px" }}>
          <CarouselNav onPrev={() => scroll(presidentsRef, "prev")} onNext={() => scroll(presidentsRef, "next")} />
        </Box>
      </Box>

      {/* ── 3. ALL YOUR QUERIES ANSWERED BY YOUR SENIORS ────────────────────── */}
      <Box sx={{ bgcolor: "white", ...sectionPad, mt: { xs: "8px", md: "12px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "16px", md: "24px" } }}>
          <Typography sx={{ ...sectionHeading, maxWidth: { xs: "220px", md: "none" } }}>
            All your Queries Answered by your Seniors
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CarouselNav onPrev={() => scroll(videosRef, "prev")} onNext={() => scroll(videosRef, "next")} />
          </Box>
        </Box>

        <Box
          ref={videosRef}
          sx={{
            display: "flex",
            gap: { xs: "12px", md: "24px" },
            overflowX: "auto",
            pb: "8px",
            "&::-webkit-scrollbar": { height: "4px" },
            "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(108,16,188,0.2)", borderRadius: "4px" },
            "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
          }}
        >
          {seniorVideos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </Box>

        {/* Mobile nav */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "flex-end", mt: "12px" }}>
          <CarouselNav onPrev={() => scroll(videosRef, "prev")} onNext={() => scroll(videosRef, "next")} />
        </Box>
      </Box>

      {/* ── 4. STUDENT PROJECTS ──────────────────────────────────────────────── */}
      <Box sx={{ bgcolor: "white", ...sectionPad, mt: { xs: "8px", md: "12px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "16px", md: "24px" } }}>
          <Typography sx={sectionHeading}>Student Projects</Typography>
          <CarouselNav onPrev={() => scroll(projectsRef, "prev")} onNext={() => scroll(projectsRef, "next")} />
        </Box>

        {/* Horizontal carousel — same pattern as other sections */}
        <Box
          ref={projectsRef}
          sx={{
            display: "flex",
            gap: { xs: "12px", md: "24px" },
            overflowX: "auto",
            pb: "8px",
            "&::-webkit-scrollbar": { height: "4px" },
            "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(108,16,188,0.2)", borderRadius: "4px" },
            "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
          }}
        >
          {/* Featured card — wider */}
          <Box sx={{ minWidth: { xs: "280px", md: "540px" }, maxWidth: { xs: "300px", md: "540px" } }}>
            <FeaturedProjectCard {...projects[0]} />
          </Box>
          {/* Smaller cards */}
          {projects.slice(1).map((p) => (
            <Box key={p.name} sx={{ minWidth: { xs: "260px", md: "460px" }, maxWidth: { xs: "280px", md: "460px" } }}>
              <SmallProjectCard {...p} />
            </Box>
          ))}
        </Box>

        {/* Mobile nav below */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "flex-end", mt: "12px" }}>
          <CarouselNav onPrev={() => scroll(projectsRef, "prev")} onNext={() => scroll(projectsRef, "next")} />
        </Box>
      </Box>

    </Box>
  );
}
