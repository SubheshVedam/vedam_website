"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const feeData = {
  headers: ["Fees Component", "Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Total"],
  rows: [
    { label: "Seat Block Fees",              values: ["₹50,000",  "–",         "–",         "–",         "–",         "–",         "–",         "–",         "–",         "₹50,000"]  },
    { label: "Security Deposit (Refundable)", values: ["₹30,000",  "–",         "–",         "–",         "–",         "–",         "–",         "–",         "–",         "₹30,000"]  },
    { label: "Upskilling Fee",               values: ["₹84,813",  "₹84,813",   "₹84,813",   "₹84,813",   "₹84,813",   "₹84,813",   "₹84,813",   "₹84,813",   "–",         "₹6,38,500"] },
    { label: "Tuition Fee",                  values: ["₹1,00,000", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "₹1,34,500", "–",         "₹7,58,500"] },
  ],
  totals: ["₹2,64,813", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "–", "₹18,00,000"],
};

const loanData = {
  rows: [
    { label: "Loan Type",                 value: "Normal (Unsecured)" },
    { label: "Interest Rate (%)",         value: "13% – 15%" },
    { label: "Max Loan Amount",           value: "Upto 100% tuition fees" },
    { label: "Moratorium Period",         value: "4 years" },
    { label: "Tenure",                    value: "10 years" },
    { label: "Processing Charges",        value: "1% (incl. GST)" },
    { label: "Tax Benefits Section 8e",   value: "Available" },
  ],
};

const scholarships = [
  {
    title: "Merit Based Scholarship",
    percent: "Upto 100%",
    desc: "Recognizes academic excellence, unique talent and leadership potential.",
    img: "/img/program/scholarship-merit.png",
  },
  {
    title: "Women in Tech Scholarship",
    percent: "Upto 20%",
    desc: "Empowering and supporting women in tech for growth and success.",
    img: "/img/program/scholarship-women.png",
    bgImg: "/img/program/scholarship-women-bg.png",
  },
  {
    title: "Need Based Scholarship",
    percent: "Upto 30%",
    desc: "Focused on specific fields of study or demonstrating financial needs.",
    img: "/img/program/scholarship-need.png",
  },
];

const campusImages = [
  "/img/program/campus-1.png",
  "/img/program/campus-1.png",
  "/img/program/campus-2.png",
  "/img/program/campus-3.png",
  "/img/program/campus-4.png",
  "/img/program/campus-5.png",
];

const gurugramImages = {
  statsLeft:  [{ num: "10,000+", label: "Registered startups" }, { num: "Top 5", label: "Leading AI hub in Asia" }],
  statsRight: [{ num: "800+",   label: "MNC & Fortune 500's"  }, { num: "#1",    label: "Corporate hub of North India" }],
  img1: "/img/program/gurugram-1.png",
  img2: "/img/program/gurugram-2.png",
  img3: "/img/program/gurugram-3.png",
  img4: "/img/program/gurugram-4.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────
const gradientText = {
  background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: { xs: "26px", md: "36px" },
  lineHeight: 1.2,
  letterSpacing: "-0.72px",
  display: "inline-block",
};

const sectionPad = { px: { xs: "20px", md: "128px" }, py: { xs: "32px", md: "40px" } };

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function ProgramPage() {
  const [feeTab, setFeeTab] = useState("course");
  const [loanPartner, setLoanPartner] = useState("jodo");

  return (
    <Box sx={{ bgcolor: "#fff", display: "flex", flexDirection: "column", width: "100%" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", md: "600px" },
          minHeight: { xs: "480px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background layers */}
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, #BA6BFF 0%, #933DDE 50%, #7F27CD 75%, #6C10BC 100%)" }} />
        <Box
          component="img"
          src="/img/program/hero-bg.png"
          alt=""
          sx={{ position: "absolute", inset: 0, width: "100%", height: "116.56%", top: "-9.74%", objectFit: "cover", opacity: 0.6 }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #2F0E4B 0%, rgba(0,0,0,0) 75%)" }} />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1, px: { xs: "20px", md: "128px" }, pb: { xs: "40px", md: "100px" }, pt: { xs: "120px", md: "0" }, display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Co-brand logos */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px", height: "40px" }}>
            <Box component="img" src="/img/program/partner-logo.svg" alt="Partner university" sx={{ height: "40px", width: "auto" }} />
            <Typography sx={{ color: "white", fontFamily: "Inter, sans-serif", fontWeight: 200, fontSize: "28px", transform: "rotate(-45deg)", lineHeight: 1 }}>+</Typography>
            <Box component="img" src="/img/Vedam_Final_Logo_White.png" alt="Vedam" sx={{ height: "40px", width: "auto" }} />
          </Box>

          {/* Title block */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", color: "#F9F9F9" }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: { xs: "22px", md: "32px" }, letterSpacing: "-0.64px", lineHeight: 1, maxWidth: 520 }}>
                UG Program in Computer Science &amp; Artificial Intelligence
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px" }}>
                Bachelor of Technology Degree by Sushant University, Gurugram
              </Typography>
            </Box>

            {/* Accreditation pill */}
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                backdropFilter: "blur(14px)", bgcolor: "rgba(135,135,135,0.4)",
                borderRadius: "30px", px: "20px", py: "10px",
                flexWrap: "wrap",
              }}
            >
              <Box component="img" src="/img/program/ugc-logo.svg" alt="UGC" sx={{ height: "24px", width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "10px", color: "#F9F9F9", whiteSpace: "nowrap" }}>UGC Recognised</Typography>
              <Typography sx={{ color: "white", fontSize: "10px" }}>|</Typography>
              <Box component="img" src="/img/program/nirf-logo.png" alt="NIRF" sx={{ height: "24px", width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "10px", color: "#F9F9F9", whiteSpace: "nowrap" }}>NIRF Ranked</Typography>
              <Typography sx={{ color: "white", fontSize: "10px" }}>|</Typography>
              <Box component="img" src="/img/program/naac-logo.png" alt="NAAC" sx={{ height: "24px", width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "10px", color: "#F9F9F9", whiteSpace: "nowrap" }}>NAAC Accredited</Typography>
            </Box>
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              href="https://apply.vedam.org"
              target="_blank"
              sx={{ bgcolor: "#6C10BC", borderRadius: "8px", px: "20px", py: "15px", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", letterSpacing: "-0.28px", textTransform: "none", "&:hover": { bgcolor: "#5a0ea0" } }}
            >
              Apply Now
            </Button>
            <Button
              variant="contained"
              href="/brochure"
              sx={{ bgcolor: "rgba(30,30,30,0.6)", borderRadius: "8px", px: "20px", py: "15px", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", letterSpacing: "-0.28px", textTransform: "none", "&:hover": { bgcolor: "rgba(30,30,30,0.8)" } }}
            >
              Download Brochure
            </Button>
          </Box>
        </Box>

        {/* Floating campus thumbnails — desktop only */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute", right: "128px", top: "107px",
            backdropFilter: "blur(1.75px)", bgcolor: "rgba(249,249,249,0.8)",
            borderRadius: "20px", p: "10px", gap: "8px",
            width: "365px",
          }}
        >
          {[
            { src: "/img/program/campus-1.png", label: "VST Gurugram" },
            { src: "/img/program/campus-2.png", label: "VST Pune" },
          ].map(({ src, label }) => (
            <Box key={label} sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box sx={{ height: "120px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(30,30,30,0.2)" }}>
                <Box component="img" src={src} alt={label} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", color: "#1E1E1E" }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 2. STATS BAR ────────────────────────────────────────────────────── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", pb: "40px" }}>
        <Box
          sx={{
            bgcolor: "#FAFAFA", width: "100%", height: { xs: "auto", md: "120px" },
            display: "flex", flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "stretch" }, px: { xs: "20px", md: "128px" },
          }}
        >
          {[
            { title: "4 Years", body: "Full-time residential program\nB.tech Degree  by Sushant University", highlight: false },
            { title: "Partner Campus", body: "Sushant University — Gurugram, Delhi NCR", highlight: true },
            { title: "Eligibility", body: "2025, 2026 12th student with PCM (>50% in PCM & 12th boards Overall)", highlight: false },
          ].map(({ title, body, highlight }, i) => (
            <Box
              key={i}
              sx={{
                flex: 1, display: "flex", flexDirection: "column", gap: "4px",
                justifyContent: "center", px: "20px", py: { xs: "16px", md: 0 },
                bgcolor: highlight ? "rgba(186,107,255,0.08)" : "#FAFAFA",
                borderBottom: { xs: "1px solid rgba(0,0,0,0.08)", md: "none" },
                "&:last-child": { borderBottom: "none" },
              }}
            >
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: "20px" }}>
                {title}
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "16px", whiteSpace: "pre-wrap" }}>
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", color: "#848484", textAlign: "center", letterSpacing: "-0.24px", lineHeight: 1.5, px: "20px" }}>
          *Admissions open for 2026 intake. Only top 5% applicants are selected.
        </Typography>
      </Box>

      {/* ── 3. WHY GURUGRAM? ────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Why Gurugram?</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, letterSpacing: "-0.32px", maxWidth: 1024 }}>
            Gurugram is where India's corporate world lives. From Fortune 500 headquarters to global tech giants, the city puts you at the centre of India's biggest economy.
          </Typography>
        </Box>

        {/* Stats + image mosaic grid */}
        <Box sx={{ width: "100%", overflowX: { xs: "auto", md: "visible" } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
              gridTemplateRows: { md: "90px 90px 90px 90px" },
              gap: "10px",
              minWidth: { xs: 0, md: "1024px" },
              maxWidth: "1024px",
            }}
          >
            {/* Stats tile top-left: 10,000+ / Top 5 */}
            <Box
              sx={{
                gridColumn: { md: "1 / span 2" }, gridRow: { md: "1" },
                bgcolor: "#6C10BC", borderRadius: "24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "40px", px: "35px", py: "17px",
                color: "#F9F9F9", fontFamily: "Inter, sans-serif", fontWeight: 600,
                fontSize: "16px", letterSpacing: "-0.32px", lineHeight: 1.5,
              }}
            >
              {gurugramImages.statsLeft.map(({ num, label }) => (
                <Box key={label}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#FF9900", fontSize: "24px", mb: 0 }}>{num}</Typography>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", color: "#F9F9F9" }}>{label}</Typography>
                </Box>
              ))}
            </Box>

            {/* Left tall image */}
            <Box
              sx={{
                gridColumn: { md: "1" }, gridRow: { md: "2 / span 3" },
                borderRadius: "24px", overflow: "hidden",
                minHeight: { xs: "200px", md: "auto" },
              }}
            >
              <Box component="img" src={gurugramImages.img1} alt="Gurugram" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>

            {/* Center image */}
            <Box
              sx={{
                gridColumn: { md: "2" }, gridRow: { md: "2 / span 3" },
                borderRadius: "24px", overflow: "hidden",
                minHeight: { xs: "200px", md: "auto" }, height: { md: "290px" },
              }}
            >
              <Box component="img" src={gurugramImages.img3} alt="Gurugram city" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>

            {/* Right center image */}
            <Box
              sx={{
                gridColumn: { md: "3" }, gridRow: { md: "1 / span 3" },
                borderRadius: "24px", overflow: "hidden",
                minHeight: { xs: "200px", md: "auto" },
              }}
            >
              <Box component="img" src={gurugramImages.img4} alt="Gurugram tech" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>

            {/* Far-right tall image */}
            <Box
              sx={{
                gridColumn: { md: "4" }, gridRow: { md: "1 / span 3" },
                borderRadius: "24px", overflow: "hidden",
                minHeight: { xs: "200px", md: "auto" },
              }}
            >
              <Box component="img" src={gurugramImages.img2} alt="Gurugram skyline" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>

            {/* Stats tile bottom-right: 800+ / #1 */}
            <Box
              sx={{
                gridColumn: { md: "3 / span 2" }, gridRow: { md: "4" },
                bgcolor: "#6C10BC", borderRadius: "24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "40px", px: "35px", py: "17px",
                color: "#F9F9F9", fontFamily: "Inter, sans-serif", fontWeight: 600,
                fontSize: "16px", letterSpacing: "-0.32px", lineHeight: 1.5,
              }}
            >
              {gurugramImages.statsRight.map(({ num, label }) => (
                <Box key={label}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#FF9900", fontSize: "24px", mb: 0 }}>{num}</Typography>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", color: "#F9F9F9" }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── 4. CAMPUS & AMENITIES ───────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Campus &amp; Amenities</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, maxWidth: 1024 }}>
            Sushant University&apos;s Gurugram campus is located minutes away from Cyber City, Golf Course Road, and the NCR startup corridor. The campus combines modern academic infrastructure with proximity to India&apos;s fastest-growing district.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[campusImages.slice(0, 3), campusImages.slice(3)].map((row, ri) => (
            <Box key={ri} sx={{ display: "flex", gap: "20px", flexWrap: { xs: "wrap", md: "nowrap" } }}>
              {row.map((src, i) => (
                <Box
                  key={i}
                  sx={{ flex: 1, minWidth: { xs: "calc(50% - 10px)", md: 0 }, height: { xs: "160px", md: "250px" }, borderRadius: "12px", overflow: "hidden" }}
                >
                  <Box component="img" src={src} alt={`Campus ${ri * 3 + i + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 5. ACCREDITATIONS & RECOGNITIONS ───────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
          <Typography sx={gradientText}>Accreditations &amp; Recognitions</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, maxWidth: 1024 }}>
            Your degree isn&apos;t just a certificate — it&apos;s a nationally recognised credential backed by India&apos;s top regulatory bodies, independent quality assessors, and international ranking frameworks.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "24px", md: "40px" }, flexWrap: "wrap", justifyContent: "center" }}>
          <Box component="img" src="/img/program/haryana-emblem.svg" alt="Haryana Emblem" sx={{ height: "80px", width: "auto" }} />
          <Box component="img" src="/img/program/aicte-logo.png" alt="AICTE" sx={{ height: "80px", width: "auto" }} />
          <Box component="img" src="/img/program/naac-logo.png" alt="NAAC" sx={{ height: "80px", width: "auto" }} />
          <Box component="img" src="/img/program/nirf-logo.png" alt="NIRF" sx={{ height: "80px", width: "auto" }} />
        </Box>
      </Box>

      {/* ── 6. SCHOLARSHIP PROGRAM ──────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Scholarship Program</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5 }}>
            Talent shouldn&apos;t wait on finances. Vedam rewards merit, achievement, and potential — with scholarships that make the best education accessible to the best students.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", justifyContent: "space-between" }}>
          {scholarships.map(({ title, percent, desc, img }) => (
            <Box
              key={title}
              sx={{
                flex: 1, bgcolor: "#0E020F", borderRadius: "20px",
                height: { xs: "auto", md: "365px" }, overflow: "hidden",
                position: "relative", display: "flex", flexDirection: "column",
                p: "20px", gap: "12px",
              }}
            >
              {/* Scholar image */}
              <Box
                component="img"
                src={img}
                alt={title}
                sx={{
                  position: { md: "absolute" }, bottom: 0, left: "50%",
                  transform: { md: "translateX(-50%)" },
                  width: "80%", height: "auto", objectFit: "contain",
                  display: { xs: "none", md: "block" },
                  maxHeight: "260px",
                }}
              />
              {/* Text */}
              <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "white", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "4px" }}>
                  {title}
                </Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#F97D03", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "8px" }}>
                  {percent}
                </Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "white", fontSize: "16px", letterSpacing: "-0.32px", lineHeight: 1.2 }}>
                  {desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 7. FEE STRUCTURE ────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography sx={gradientText}>Fee Structure</Typography>

        {/* Tab selector */}
        <Box sx={{ display: "flex", gap: "20px", borderBottom: "1px solid rgba(0,0,0,0.15)", pb: 0 }}>
          {[{ id: "course", label: "Course Fees" }, { id: "hostel", label: "Hostel Fees" }].map(({ id, label }) => (
            <Box
              key={id}
              onClick={() => setFeeTab(id)}
              sx={{
                pb: "10px", cursor: "pointer",
                borderBottom: feeTab === id ? "2px solid #1E1E1E" : "2px solid transparent",
                fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.32px",
                color: feeTab === id ? "#1E1E1E" : "#848484",
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {feeTab === "course" ? (
          <>
            {/* Fee table — horizontally scrollable on mobile */}
            <Box sx={{ width: "100%", overflowX: "auto" }}>
              <Box
                sx={{
                  minWidth: "900px",
                  border: "0.5px solid rgba(0,0,0,0.2)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  bgcolor: "white",
                }}
              >
                {/* Header row */}
                <Box sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)" }}>
                  {feeData.headers.map((h, i) => (
                    <Box key={i} sx={{ bgcolor: "#F4ECFA", p: "10px", borderRight: i < feeData.headers.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                      <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{h}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* Data rows */}
                {feeData.rows.map(({ label, values }, ri) => (
                  <Box key={ri} sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)", borderTop: "0.5px solid rgba(30,30,30,0.2)" }}>
                    <Box sx={{ p: "10px", pl: "20px", borderRight: "0.5px solid rgba(0,0,0,0.1)" }}>
                      <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{label}</Typography>
                    </Box>
                    {values.map((v, ci) => (
                      <Box key={ci} sx={{ p: "10px", textAlign: "center", borderRight: ci < values.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{v}</Typography>
                      </Box>
                    ))}
                  </Box>
                ))}

                {/* Total row */}
                <Box sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)", borderTop: "0.5px solid rgba(30,30,30,0.2)" }}>
                  <Box sx={{ bgcolor: "#BA6BFF", p: "10px", pl: "20px", borderRight: "0.5px solid rgba(0,0,0,0.1)" }}>
                    <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#1E1E1E", letterSpacing: "-0.24px" }}>Total Payable Fees</Typography>
                  </Box>
                  {feeData.totals.map((v, i) => (
                    <Box key={i} sx={{ bgcolor: "#BA6BFF", p: "10px", textAlign: "center", borderRight: i < feeData.totals.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                      <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#1E1E1E", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{v}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Fee highlights */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: 742 }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>
                Important Fee Highlights
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: "18px" }}>
                {[
                  "Apple Macbook is included in the above course fee.",
                  "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
                  "Hostel and mess services are available on the Sushant University campus, subject to availability and offered on a first-come, first-served basis.",
                  "The following are additional fees payable directly to the University, over and above the course fee. These include One-time component of Admission Fee (₹45,000) and Application Fee (₹1,500); the Examination Fee is ₹4,000 per semester.",
                ].map((note, i) => (
                  <Box component="li" key={i} sx={{ mb: i < 3 ? 0 : 0 }}>
                    <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "#1F1F1F", letterSpacing: "-0.24px", lineHeight: 2 }}>
                      {note}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#848484" }}>
            Hostel fee details coming soon. Please contact admissions for more information.
          </Typography>
        )}
      </Box>

      {/* ── 8. FINANCING OPTIONS ────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 1024 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography sx={gradientText}>Financing Options</Typography>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "14px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5 }}>
              At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            <Box sx={{ flex: 1, bgcolor: "#F9F9F9", px: "40px", py: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: "20px", lineHeight: 1.5 }}>Loan at Zero Cost EMI</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "12px", lineHeight: 1.5 }}>
                You can pay your annual course fee in monthly installments with no interest, no processing fee, and no hidden charges. We&apos;ve partnered trusted fintech company working with over 2,500 institutions, to offer this option.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "#fff", px: "40px", py: "20px", display: "flex", flexDirection: "column", gap: "10px", borderLeft: { md: "0.5px solid rgba(0,0,0,0.1)" }, borderTop: { xs: "0.5px solid rgba(0,0,0,0.1)", md: "none" } }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: "20px", lineHeight: 1.5 }}>Education Loan from a Bank</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: "12px", lineHeight: 1.5 }}>
                You can also access education loans through our trusted banking partners, making it easier for you to finance your education with flexible repayment options and competitive interest rates.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Financing Partners */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography sx={gradientText}>Financing Partners</Typography>

          {/* Partner selector */}
          <Box sx={{ display: "inline-flex", gap: "20px", alignItems: "center", border: "1px solid #6C10BC", borderRadius: "24px", p: "10px" }}>
            <Box
              onClick={() => setLoanPartner("propelled")}
              sx={{
                px: "20px", py: "10px", cursor: "pointer", borderRadius: "14px",
                bgcolor: loanPartner === "propelled" ? "#6C10BC" : "transparent",
              }}
            >
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", color: loanPartner === "propelled" ? "#F9F9F9" : "#6C10BC", letterSpacing: "-0.28px", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                Propelled
              </Typography>
            </Box>
            <Box
              onClick={() => setLoanPartner("jodo")}
              sx={{
                px: "20px", py: "10px", cursor: "pointer", borderRadius: "14px",
                bgcolor: loanPartner === "jodo" ? "#6C10BC" : "transparent",
              }}
            >
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", color: loanPartner === "jodo" ? "#F9F9F9" : "#6C10BC", letterSpacing: "-0.28px", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                Jodo Cred Plan
              </Typography>
            </Box>
          </Box>

          {/* Loan table */}
          <Box sx={{ width: { xs: "100%", md: "512px" }, border: "0.5px solid #6C10BC", borderRadius: "12px", overflow: "hidden", bgcolor: "white" }}>
            {loanData.rows.map(({ label, value }, i) => (
              <Box
                key={i}
                sx={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  borderBottom: i < loanData.rows.length - 1 ? "0.5px solid rgba(30,30,30,0.2)" : "none",
                }}
              >
                <Box sx={{ bgcolor: "#F4ECFA", p: "10px", borderRight: "0.5px solid rgba(30,30,30,0.2)" }}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: "12px", color: "black", letterSpacing: "-0.24px", lineHeight: 1.5 }}>
                    {label}
                  </Typography>
                </Box>
                <Box sx={{ p: "10px" }}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: i === 6 ? "10px" : "12px", color: i === 0 ? "black" : "#1F1F1F", letterSpacing: i === 6 ? "-0.2px" : "-0.24px", lineHeight: 1.5 }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── 9. CTA – BE THE NEXT GEN ENTREPRENEUR ──────────────────────────── */}
      <Box
        sx={{
          bgcolor: "white", display: "flex", alignItems: "center", justifyContent: "center",
          px: { xs: "20px", md: "37px" }, py: "26px",
        }}
      >
        <Box
          sx={{
            width: "100%", maxWidth: "1048px", height: { xs: "auto", md: "314px" },
            borderRadius: "22px", overflow: "hidden",
            background: "linear-gradient(90deg, #2B135C 24%, #8A18FF 100%)",
            position: "relative", display: "flex", alignItems: "center",
            px: { xs: "24px", md: "43px" }, py: { xs: "40px", md: "0" },
          }}
        >
          {/* Background SVG decoration */}
          <Box
            component="img"
            src="/img/program/cta-bg.svg"
            alt=""
            sx={{ position: "absolute", left: "-223px", top: "-41px", width: "596px", height: "596px", pointerEvents: "none" }}
          />

          {/* Text content */}
          <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#F9F9F9", fontSize: { xs: "28px", md: "36px" }, letterSpacing: "-0.72px", lineHeight: 1.2 }}>
                Be the Next
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#FB7F05", fontSize: { xs: "28px", md: "36px" }, letterSpacing: "-0.72px", lineHeight: 1.2 }}>
                Gen Entrepreneur
              </Typography>
            </Box>
            <Button
              variant="contained"
              href="https://apply.vedam.org"
              target="_blank"
              sx={{
                bgcolor: "#FB7F05", borderRadius: "8px", px: "20px", py: "15px",
                fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px",
                letterSpacing: "-0.28px", textTransform: "none", width: "130px",
                "&:hover": { bgcolor: "#e07004" },
              }}
            >
              Apply Now
            </Button>
          </Box>

          {/* Student images — desktop only */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute", right: 0, bottom: 0, top: 0,
              width: "65%", pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src="/img/program/cta-student-1.png"
              alt="Student"
              sx={{ position: "absolute", right: "0", top: "-26px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "45%" }}
            />
            <Box
              component="img"
              src="/img/program/cta-student-2.png"
              alt="Student"
              sx={{ position: "absolute", right: "33%", top: "5px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "35%" }}
            />
            <Box
              component="img"
              src="/img/program/cta-student-3.png"
              alt="Student"
              sx={{ position: "absolute", right: "55%", top: "13px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "28%" }}
            />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
