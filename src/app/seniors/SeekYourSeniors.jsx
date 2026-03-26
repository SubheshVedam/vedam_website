"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const stats = [
  { num: "20+", label: "Industry sessions" },
  { num: "10+", label: "Teams building at Innovation Lab" },
  { num: "6", label: "Student run clubs" },
  { num: "Weekly", label: "Events" },
];
const stats1 = [
  { num: "20+", label: "Industry sessions" },
  { num: "6", label: "Student run clubs" },
  { num: "10+", label: "Teams building at Innovation Lab" },
  { num: "Weekly", label: "Events" },
];
const heroPhotos = [
  "/img/seniors/class1.png",
  "/img/seniors/class3.png",
  "/img/seniors/class2.png",
  "/img/seniors/class4.png",
];
const heroPhotos1 = [
  "/img/seniors/cl1.png",
  "/img/seniors/cl3.png",
  "/img/seniors/cl2.png",
];
const clubPresidents = [
  { club: "Open-source Club Head", name: "Sidhant Pande", batch: "Batch of 2029", img: "/img/seniors/stu3.webp", linkedin: "#" },
  { club: "Competitive Coding Club Head", name: "Aayush Bhatt", batch: "Batch of 2029", img: "/img/seniors/stu2.webp", linkedin: "#" },
  { club: "Entrepreneurship Club Head", name: "Shivansh Ojha", batch: "Batch of 2029", img: "/img/seniors/stu6.webp", linkedin: "#" },
  { club: "Cultural Club Head", name: "Revansh Heda", batch: "Batch of 2029", img: "/img/seniors/stu4.webp", linkedin: "#" },
  { club: "Sports Club Head", name: "Lokendar Sangawa", batch: "Batch of 2029", img: "/img/seniors/stu1.webp", linkedin: "#" },
  { club: "ESports Club Head", name: "Aryan Mehta", batch: "Batch of 2029", img: "/img/seniors/stu5.webp", linkedin: "#" },
];
const seniorVideos = [
  { title: "Get upto 100% Scholarship!", duration: "", thumb: "/img/seniors/thumbnail1.webp", videoId: "cWqa2o0gD-M" },
  { title: "Explore Vedam School of Technology", duration: "10:23", thumb: "/img/seniors/thumbnail2.webp", videoId: "jors40NYq-Y" },
  { title: "How I cracked VSAT", duration: "12:45", thumb: "/img/seniors/thumbnail3.webp", videoId: "-0isF9k7dgg" },
  { title: "Inside the VSAT Interview", duration: "12:45", thumb: "/img/seniors/thumbnail4.webp", videoId: "ZQvmp9LwVTs" },
];
const projects = [
  {
    name: "Motif",
    desc: "A platform that helps aspiring entrepreneurs discover startup ideas, build business plans, and access resources to launch and grow their businesses.",
    img: "/img/seniors/img1.png",
    authors: ["Awaneesh Gupta", "Agrima Gupta"],
    highlightWords: ["entrepreneurs", "grow their businesses"],
  },
  {
    name: "AI Chatbot",
    desc: "An AI-powered assistant that helps users manage schedules, reminders, information, and daily task progress in one place.",
    img: "/img/seniors/img2.png",
    authors: ["Siddhant Pandey"],
    highlightWords: ["AI-powered assistant"],
  },
  {
    name: "Vaani Setu",
    desc: "A real-time sign-language-to-voice and text converter that enables seamless communication for deaf and mute individuals.",
    img: "/img/seniors/img3.png",
    authors: ["Aditya Bahuguna", "Aareev Srinivasan", "Shivansh Ojha"],
    highlightWords: ["sign-language-to-voice and text converter"],
  },
  {
    name: "Unmutte",
    desc: "An emotional wellness app designed to help users express, understand, and manage their mental and emotional well-being.",
    img: "/img/seniors/img4.png",
    authors: ["Khushi Yadav", "Sirwagya Shekhar"],
    highlightWords: ["emotional wellness"],
  },
  {
    name: "AI Mock Interviewer",
    desc: "An AI-powered interview simulator that helps users practice, improve, and gain confidence by providing real-time questions, feedback, and performance insights.",
    img: "/img/seniors/img5.png",
    authors: ["Parth Kshirsagar", "Ved Kumar Singh", "Satyam Kumar Singh", "Nimit Jain", "Yashwardhan"],
    highlightWords: ["interview simulator"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Carousel positioning constants
// ─────────────────────────────────────────────────────────────────────────────
const CARD_W = 554;
const SIDE_SCALE = 0.82;
const VISIBLE_GAP = 16;
const STEP = Math.round(CARD_W / 2 + (CARD_W * SIDE_SCALE) / 2 + VISIBLE_GAP);

const INNER_GRADIENT = "linear-gradient(111deg, #FFF 41.85%, #8A18FF 173.62%)";

const sectionHeading = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "24px", md: "36px" },
  color: "#FB7F05",
  lineHeight: 1.3,
};
const sectionPad = { px: { xs: "20px", md: "120px" }, py: { xs: "24px", md: "40px" } };

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function HighlightedText({ text, highlights = [], sx: sxProp = {} }) {
  let html = text;
  (highlights || []).forEach((word) => {
    const esc = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(esc, "g"), `<span style="color:#6C10BC;font-weight:600">${word}</span>`);
  });
  return <Typography sx={sxProp} dangerouslySetInnerHTML={{ __html: html }} />;
}

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

// ─────────────────────────────────────────────────────────────────────────────
// InfiniteAuthorScroll — single-line infinite marquee of author name pills
// ─────────────────────────────────────────────────────────────────────────────
function InfiniteAuthorScroll({ authors }) {
  const trackRef = useRef(null);
  const animIdRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || authors.length === 0) return;

    const speed = 0.55;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animIdRef.current = requestAnimationFrame(animate);
    };

    animIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animIdRef.current);
  }, [authors]);

  const pills = [...authors, ...authors, ...authors, ...authors];

  return (
    <Box
      sx={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <Box
        ref={trackRef}
        sx={{
          display: "inline-flex",
          gap: "8px",
          flexWrap: "nowrap",
          willChange: "transform",
        }}
      >
        {pills.map((name, i) => (
          <Box
            key={i}
            sx={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              border: "1px solid rgba(108,16,188,0.25)",
              bgcolor: "white",
              borderRadius: "20px", px: "10px", py: "4px",
              flexShrink: 0,
            }}
          >
            <PersonIcon sx={{ fontSize: 11, color: "#6C10BC" }} />
            <Typography sx={{
              fontFamily: "Inter, sans-serif", fontWeight: 500,
              fontSize: "11px", color: "#1E1E1E", whiteSpace: "nowrap",
            }}>
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// AuthorCarousel — desktop only, one author at a time with arrows
// ─────────────────────────────────────────────────────────────────────────────
function AuthorCarousel({ authors }) {
  const [idx, setIdx] = useState(0);
  const n = authors.length;
  if (n === 0) return null;

  const arrowBtn = {
    width: 28, height: 28,
    bgcolor: "rgba(108,16,188,0.08)",
    border: "1px solid rgba(108,16,188,0.2)",
    color: "#6C10BC", borderRadius: "50%",
    "&:hover": { bgcolor: "rgba(108,16,188,0.15)" },
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {n > 1 && (
        <IconButton onClick={() => setIdx((i) => (i - 1 + n) % n)} sx={arrowBtn} size="small">
          <ArrowBackIosNewIcon sx={{ fontSize: 10 }} />
        </IconButton>
      )}
      <Box sx={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        bgcolor: "white", border: "1px solid rgba(108,16,188,0.2)",
        borderRadius: "20px", px: "16px", py: "8px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      }}>
        <PersonIcon sx={{ fontSize: 15, color: "#6C10BC", flexShrink: 0 }} />
        <Typography sx={{
          fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px",
          color: "#1E1E1E", whiteSpace: "nowrap",
        }}>
          {authors[idx]}
        </Typography>
      </Box>
      {n > 1 && (
        <IconButton onClick={() => setIdx((i) => (i + 1) % n)} sx={arrowBtn} size="small">
          <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
        </IconButton>
      )}
      {n > 1 && (
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "rgba(108,16,188,0.5)" }}>
          {idx + 1}/{n}
        </Typography>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DesktopCenterCard
// ─────────────────────────────────────────────────────────────────────────────
// ─── DesktopCenterCard ───────────────────────────────────────────────────────
function DesktopCenterCard({ project }) {
  return (
    <Box sx={{
      width: `${CARD_W}px`,
      flexShrink: 0,
      backgroundImage: "url('/img/seniors/desktop_bg2.png')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: "28px",
      overflow: "hidden",
      p: "22px 22px 26px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}>
      {/* Inner gradient — NO author row inside */}
      <Box sx={{
        background: INNER_GRADIENT,
        borderRadius: "16px",
        p: "24px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{
              fontFamily: "Inter, sans-serif", fontWeight: 700,
              fontSize: "24px", color: "#6C10BC", mb: "14px",
            }}>
              {project.name}
            </Typography>
            <HighlightedText
              text={`• ${project.desc}`}
              highlights={project.highlightWords}
              sx={{
                fontFamily: "Inter, sans-serif", fontWeight: 400,
                fontSize: "14px", color: "#1E1E1E", lineHeight: 1.85,
              }}
            />
          </Box>
          <Box sx={{
            width: "196px", height: "196px", minWidth: "196px",
            bgcolor: "white", borderRadius: "16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden",
          }}>
            <Box component="img" src={project.img} alt={project.name}
              sx={{ width: "85%", height: "85%", objectFit: "contain" }} />
          </Box>
        </Box>
      </Box>

      <InfiniteAuthorScroll authors={project.authors} />
    </Box>
  );
}

// ─── DesktopSideCard ─────────────────────────────────────────────────────────
function DesktopSideCard({ project }) {
  return (
    <Box sx={{
      width: `${CARD_W}px`,
      flexShrink: 0,
      backgroundImage: "url('/img/seniors/desktop_bg2.png')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: "24px",
      overflow: "hidden",
      p: "22px 22px 26px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}>
      {/* Inner gradient */}
      <Box sx={{
        background: INNER_GRADIENT,
        borderRadius: "16px",
        p: "24px 20px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{
              fontFamily: "Inter, sans-serif", fontWeight: 700,
              fontSize: "24px", color: "#6C10BC", mb: "14px",
            }}>
              {project.name}
            </Typography>
            <HighlightedText
              text={`• ${project.desc}`}
              highlights={project.highlightWords}
              sx={{
                fontFamily: "Inter, sans-serif", fontWeight: 400,
                fontSize: "14px", color: "#1E1E1E", lineHeight: 1.85,
              }}
            />
          </Box>
          <Box sx={{
            width: "196px", height: "196px", minWidth: "196px",
            bgcolor: "white", borderRadius: "16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden",
          }}>
            <Box component="img" src={project.img} alt={project.name}
              sx={{ width: "85%", height: "85%", objectFit: "contain" }} />
          </Box>
        </Box>
      </Box>

      <InfiniteAuthorScroll authors={project.authors} />
    </Box>
  );
}

function MobileCard({ project, onPrev, onNext, current, total }) {
  const arrowBtn = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: 36,
    height: 36,
    bgcolor: "white",
    border: "1.5px solid rgba(108,16,188,0.25)",
    color: "#6C10BC",
    borderRadius: "50%",
    boxShadow: "0 2px 10px rgba(108,16,188,0.18)",
    "&:hover": { bgcolor: "rgba(108,16,188,0.06)" },
  };

  return (
    // Outer wrapper — position:relative so arrows can escape the card
    <Box sx={{ position: "relative", width: "100%" }}>

      {/* ── Left arrow — sits at left edge, vertically centered ── */}
      <IconButton onClick={onPrev} size="small" sx={{ ...arrowBtn, left: "-28px" }}>
        <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
      </IconButton>

      {/* ── Right arrow — sits at right edge, vertically centered ── */}
      <IconButton onClick={onNext} size="small" sx={{ ...arrowBtn, right: "-28px" }}>
        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
      </IconButton>

      {/* ── Card body — inset so arrows can protrude ── */}
      <Box sx={{
        backgroundImage: "url('/img/seniors/mobile_bg2.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        borderRadius: "26px",
        overflow: "hidden",
        height: "370px",
        p: "30px",
      }}>
        {/* Inner gradient box */}
        <Box sx={{
          background: INNER_GRADIENT,
          borderRadius: "14px",

          p: "18px",
          display: "flex",
          height: "310px",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}>

          {/* Title — centered */}
          <Typography sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#6C10BC",
            textAlign: "center",
            lineHeight: '13px',
          }}>
            {project.name}
          </Typography>

          {/* Large image — centered white square */}
          <Box sx={{
            width: "100px",
            height: "100px",
            bgcolor: "white",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <Box
              component="img"
              src={project.img}
              alt={project.name}
              sx={{ width: "80%", height: "80%", objectFit: "contain" }}
            />
          </Box>

          {/* Description — centered */}
          <HighlightedText
            text={project.desc}
            highlights={project.highlightWords}
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "#1E1E1E",
              lineHeight: '18px',
              textAlign: "center",
            }}
          />

          {/* Infinite author scroll */}
          <Box sx={{ width: "100%" }}>
            <InfiniteAuthorScroll authors={project.authors} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PresidentCard
// ─────────────────────────────────────────────────────────────────────────────
function PresidentCard({ club, name, batch, img, linkedin, index }) {
  const isBg1 = index % 2 === 0;
  const bgImage = isBg1 ? "url('/img/seniors/bg1.png')" : "url('/img/seniors/bg2.png')";
  const textColor = isBg1 ? "#1E1E1E" : "#FFFFFF";
  const subTextColor = isBg1 ? "#1E1E1E" : "rgba(255,255,255,0.85)";
  const dividerColor = isBg1 ? "#EEEEEE" : "rgba(255,255,255,0.2)";

  return (
    <Box sx={{
      width: { xs: "195px", md: "216px" }, minWidth: { xs: "195px", md: "216px" },
      borderRadius: "12px",
      backgroundImage: bgImage,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
    }}>
      <Box sx={{
        p: { xs: "12px", md: "14px" }, position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <Typography sx={{
          fontFamily: "Inter, sans-serif", fontWeight: 700,
          fontSize: { xs: "16px", md: "18px" }, color: textColor,
          lineHeight: 1.4, mb: { xs: "10px", md: "14px" },
          minHeight: { xs: "34px", md: "44px" }, textAlign: "center",
        }}>
          {club}
        </Typography>
        <Box sx={{
          width: "100%", height: { xs: "115px", md: "126px" },
          borderRadius: "8px", overflow: "hidden", mb: "12px",
        }}>
          <Box component="img" src={img} alt={name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box sx={{ height: "1px", bgcolor: dividerColor, mb: "10px", width: "100%" }} />
        <Typography sx={{
          fontFamily: "Inter, sans-serif", fontWeight: 600,
          fontSize: "18px", color: textColor, mb: "4px", alignSelf: "flex-start",
        }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <Typography sx={{
            fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", color: subTextColor,
          }}>
            {batch}
          </Typography>
          <Box component="a" href={linkedin} target="_blank" rel="noopener noreferrer"
            sx={{
              display: "flex", alignItems: "center", gap: "4px",
              px: "8px", py: "3px",
              bgcolor: isBg1 ? "rgba(108,16,188,0.08)" : "rgba(255,255,255,0.15)",
              borderRadius: "12px", textDecoration: "none",
            }}
          >
            <Box component="img" src="/img/linkedInIcon.png" alt="LinkedIn"
              sx={{ width: "14px", height: "14px", objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; }} />
            <OpenInNewIcon sx={{ fontSize: "12px", color: isBg1 ? "#6C10BC" : "#FFFFFF" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VideoCard — inline YouTube embed on play click
// ─────────────────────────────────────────────────────────────────────────────
function VideoCard({ title, duration, thumb, videoId }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Box sx={{
      width: { xs: "280px", md: "367px" }, minWidth: { xs: "280px", md: "367px" },
      borderRadius: "12px", border: "1px solid rgba(108,16,188,0.15)",
      overflow: "hidden", flexShrink: 0, display: "block",
    }}>
      <Box sx={{
        position: "relative", width: "100%",
        paddingTop: { xs: "56%", md: "60%" }, bgcolor: "#1E1E1E",
      }}>
        {playing ? (
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none",
            }}
          />
        ) : (
          <>
            <Box
              component="img"
              src={thumb}
              alt={title}
              sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              onClick={() => setPlaying(true)}
              sx={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                <rect width="46" height="46" rx="23" fill="#1E1E1E" fillOpacity="0.8" />
                <path d="M31 22.5L18.25 29.8612L18.25 15.1388L31 22.5Z" fill="white" />
              </svg>
            </Box>
          </>
        )}
      </Box>
      <Box sx={{
        bgcolor: "#FFF", px: "20px", py: "10px", height: "67px",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px",
      }}>
        <Typography sx={{
          fontFamily: "Inter, sans-serif", fontWeight: 600,
          fontSize: { xs: "16px", md: "19px" }, color: "#1E1E1E", lineHeight: 1.4, flex: 1,
        }}>
          {title}
        </Typography>
        <Typography sx={{
          fontFamily: "Inter, sans-serif", fontWeight: 500,
          fontSize: "12px", color: "#848484", whiteSpace: "nowrap", mt: "2px",
        }}>
          {duration}
        </Typography>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
export default function SeekYourSeniors() {
  const presidentsRef = useRef(null);
  const videosRef = useRef(null);

  const scrollRow = (ref, dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "next" ? 240 : -240, behavior: "smooth" });
  };

  const [projectIdx, setProjectIdx] = useState(0);
  const n = projects.length;
  const prevProject = () => setProjectIdx((i) => (i - 1 + n) % n);
  const nextProject = () => setProjectIdx((i) => (i + 1) % n);

  const getOffset = (i) => {
    let off = i - projectIdx;
    if (off > Math.floor(n / 2)) off -= n;
    if (off < -Math.floor(n / 2)) off += n;
    return off;
  };

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: "url('/img/seniors/bg-seek-seniors-mob.png')",
          md: "url('/img/seniors/bg-seek-seniors.png')",
        },
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
      }}
    >

      {/* ── 1. HERO ── */}
      <Box sx={{
        bgcolor: "transparent", position: "relative", overflow: "hidden",
        ...sectionPad, pt: { xs: "32px", md: "60px" }, pb: { xs: "24px", md: "40px" },
      }}>

        {/* Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center", gap: "20px", position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{
              fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "28px",
              background: "linear-gradient(90deg,#6C10BC 0%,#FB7F05 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", lineHeight: 1.2,
            }}>Class of 2029</Typography>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#1E1E1E", mt: "4px" }}>
              From 19 Indian States
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "14px" }}>
            {heroPhotos1.slice(0, 3).map((src, i) => (
              <Box key={i} sx={{ minWidth: "91px", height: "60px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                <Box component="img" src={src} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            ))}
          </Box>
          <Box sx={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px",
            width: "100%", height: "86px", padding: "10px",
            background: "linear-gradient(91deg,#8A18FF 0.58%,#2B135C 64.67%)",
          }}>
            {stats1.map(({ num, label }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "22px", color: "#FFF", lineHeight: 1 }}>{num}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px", color: "#FFF", lineHeight: 1.3 }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", alignItems: "center", gap: "32px", position: "relative", zIndex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "112px", width: "100%", mt: "80px" }}>
            <Box sx={{ display: "flex", gap: "18px" }}>
              <Box sx={{ width: "126px", height: "84px", borderRadius: "12px", overflow: "hidden" }}>
                <Box component="img" src={heroPhotos[0]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box sx={{ width: "100px", height: "68px", borderRadius: "12px", overflow: "hidden", alignSelf: "center" }}>
                <Box component="img" src={heroPhotos[1]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", minWidth: 320 }}>
              <Typography sx={{
                fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "48px",
                background: "linear-gradient(90deg,#6C10BC 0%,#FB7F05 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", lineHeight: 1.1,
              }}>Class of 2029</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "22px", color: "#1E1E1E", mt: "6px" }}>
                From 19 Indian States
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <Box sx={{ width: "100px", height: "68px", borderRadius: "12px", overflow: "hidden", alignSelf: "center" }}>
                <Box component="img" src={heroPhotos[2]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Box sx={{ width: "126px", height: "84px", borderRadius: "12px", overflow: "hidden" }}>
                <Box component="img" src={heroPhotos[3]} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
            {stats.map(({ num, label }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "40px", color: "#6C10BC", lineHeight: 1 }}>{num}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", color: "#1E1E1E", lineHeight: 1.3 }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── 2. CLUB PRESIDENTS ── */}
      <Box sx={{ bgcolor: "transparent", ...sectionPad, mt: { xs: "8px", md: "12px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "16px", md: "24px" } }}>
          <Typography sx={sectionHeading}>Meet Your Club Presidents</Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CarouselNav onPrev={() => scrollRow(presidentsRef, "prev")} onNext={() => scrollRow(presidentsRef, "next")} />
          </Box>
        </Box>
        <Box ref={presidentsRef} sx={{
          display: "flex", gap: { xs: "12px", md: "24px" }, overflowX: "auto", pb: "8px",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          {clubPresidents.map((p, i) => <PresidentCard key={p.name} {...p} index={i} />)}
        </Box>
      </Box>

      {/* ── 3. SENIOR VIDEOS ── */}
      <Box sx={{ bgcolor: "transparent", ...sectionPad, mt: { xs: "8px", md: "12px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "16px", md: "24px" } }}>
          <Typography sx={{ ...sectionHeading, maxWidth: { xs: "220px", md: "none" } }}>
            All your Queries Answered by your Seniors
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CarouselNav onPrev={() => scrollRow(videosRef, "prev")} onNext={() => scrollRow(videosRef, "next")} />
          </Box>
        </Box>
        <Box ref={videosRef} sx={{
          display: "flex", gap: { xs: "12px", md: "28px" }, overflowX: "auto", pb: "8px",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          {seniorVideos.map((v) => <VideoCard key={v.videoId} {...v} />)}
        </Box>
      </Box>

      {/* ── 4. STUDENT PROJECTS ── */}
      <Box sx={{
        bgcolor: "transparent", mt: { xs: "8px", md: "12px" },
        px: { xs: "32px", md: "120px" },
        pt: { xs: "24px", md: "48px" },
        pb: { xs: "32px", md: "60px" },
        overflow: { xs: "visible", md: "hidden" },
      }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: "24px", md: "36px" } }}>
          <Typography sx={sectionHeading}>Student Projects</Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "12px" }}>
            <IconButton onClick={prevProject} size="small" sx={{
              width: 44, height: 44, border: "1.5px solid #E0E0E0",
              bgcolor: "white", color: "#1E1E1E", borderRadius: "50%",
              "&:hover": { bgcolor: "#F5F5F5" },
            }}>
              <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton onClick={nextProject} size="small" sx={{
              width: 44, height: 44, border: "1.5px solid #E0E0E0",
              bgcolor: "white", color: "#1E1E1E", borderRadius: "50%",
              "&:hover": { bgcolor: "#F5F5F5" },
            }}>
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>

        {/* DESKTOP carousel */}
        <Box sx={{ display: { xs: "none", md: "block" }, position: "relative", overflow: "hidden", height: "380px" }}>
          {projects.map((p, i) => {
            const offset = getOffset(i);
            const isCenter = offset === 0;
            const scale = isCenter ? 1 : SIDE_SCALE;
            const isVisible = Math.abs(offset) <= 1;
            return (
              <Box
                key={p.name}
                onClick={() => !isCenter && setProjectIdx(i)}
                sx={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: `translate(calc(-50% + ${offset * STEP}px), -50%) scale(${scale})`,
                  transformOrigin: "center center",
                  transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
                  zIndex: isCenter ? 3 : 1,
                  cursor: !isCenter ? "pointer" : "default",
                  opacity: isVisible ? 1 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {isCenter ? <DesktopCenterCard project={p} /> : <DesktopSideCard project={p} />}
              </Box>
            );
          })}
        </Box>

        {/* MOBILE — single card, arrows float at left/right center edges */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileCard
            project={projects[projectIdx]}
            onPrev={prevProject}
            onNext={nextProject}
            current={projectIdx}
            total={n}
          />
        </Box>
      </Box>
    </Box>
  );
}