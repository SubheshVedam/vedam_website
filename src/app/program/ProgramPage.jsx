"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const semesterFees = [
  {
    sem: "Semester 1",
    rows: [
      { label: "Seat Block Fees",               value: "₹50,000" },
      { label: "Security Deposit (Refundable)",  value: "₹30,000" },
      { label: "Upskilling Fee",                 value: "₹84,813" },
      { label: "Tuition Fee",                    value: "₹1,00,000" },
    ],
    total: "₹2,64,813",
  },
  ...["2","3","4","5","6","7","8"].map((n) => ({
    sem: `Semester ${n}`,
    rows: [
      { label: "Upskilling Fee", value: n === "8" ? "–" : "₹84,813" },
      { label: "Tuition Fee",    value: n === "8" ? "–" : "₹1,34,500" },
    ],
    total: n === "8" ? "–" : "₹2,19,313",
  })),
];

const feeData = {
  headers: ["Fees Component", "Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8", "Total"],
  rows: [
    { label: "Seat Block Fees",               values: ["₹50,000",   "–",          "–",          "–",          "–",          "–",          "–",          "–",          "–",  "₹50,000"]   },
    { label: "Security Deposit (Refundable)",  values: ["₹30,000",   "–",          "–",          "–",          "–",          "–",          "–",          "–",          "–",  "₹30,000"]   },
    { label: "Upskilling Fee",                 values: ["₹84,813",   "₹84,813",    "₹84,813",    "₹84,813",    "₹84,813",    "₹84,813",    "₹84,813",    "₹84,813",    "–",  "₹6,38,500"] },
    { label: "Tuition Fee",                    values: ["₹1,00,000", "₹1,34,500",  "₹1,34,500",  "₹1,34,500",  "₹1,34,500",  "₹1,34,500",  "₹1,34,500",  "₹1,34,500",  "–",  "₹7,58,500"] },
  ],
  totals: ["₹2,64,813", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "₹2,19,313", "–", "₹18,00,000"],
};

const feeNotes = [
  "Apple Macbook is included in the above course fee.",
  "The fees mentioned in the table is the Course fees. This is exclusive of Hostel & Mess fees.",
  "Hostel and mess services are available on the Sushant University campus, subject to availability and offered on a first-come, first-served basis.",
  "Additional fees payable directly to the University, over and above the course fee: one-time Application Fee (₹1,500), Registration Fee (₹5,000), Uniform Fee (₹5,000), Sports Activity Fee (₹5,000), and Examination Fee (₹3,000 per semester).",
];

const loanData = {
  rows: [
    { label: "Loan Type",               value: "Normal (Unsecured)"      },
    { label: "Interest Rate (%)",        value: "13% – 15%"               },
    { label: "Max Loan Amount",          value: "Upto 100% tuition fees"  },
    { label: "Moratorium Period",        value: "4 years"                 },
    { label: "Tenure",                   value: "10 years"                },
    { label: "Processing Charges",       value: "1% (incl. GST)"          },
    { label: "Tax Benefits Section 8e",  value: "Available"               },
  ],
};

const scholarships = [
  { title: "Merit Based Scholarship",   percent: "Upto 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.png"  },
  { title: "Women in Tech Scholarship", percent: "Upto 20%",  desc: "Empowering and supporting women in tech for growth and success.",         img: "/img/program/scholarship-women.png" },
  { title: "Need Based Scholarship",    percent: "Upto 30%",  desc: "Focused on specific fields of study or demonstrating financial needs.",    img: "/img/program/scholarship-need.png"  },
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
  statsLeft:  [{ num: "10,000+", label: "Registered startups"       }, { num: "Top 5", label: "Leading AI hub in Asia"         }],
  statsRight: [{ num: "800+",    label: "MNC & Fortune 500's"        }, { num: "#1 in India",    label: "Corporate Hub"          }],
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
  fontSize: { xs: "20px", md: "36px" },
  lineHeight: 1.2,
  letterSpacing: { xs: "-0.4px", md: "-0.72px" },
  display: "inline-block",
};

const sectionPad = { px: { xs: "20px", md: "128px" }, py: { xs: "20px", md: "40px" } };

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function StatsTile({ stats }) {
  return (
    <Box
      sx={{
        bgcolor: "#6C10BC", borderRadius: { xs: "10px", md: "24px" },
        display: "grid", gridTemplateColumns: "1fr 1fr",
        px: { xs: "20px", md: "35px" }, py: { xs: "12px", md: "17px" },
        gap: { xs: "40px", md: "40px" },
        color: "#F9F9F9",
      }}
    >
      {stats.map(({ num, label }) => (
        <Box key={label}>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#FF9900", fontSize: { xs: "10px", md: "24px" }, lineHeight: 1.5 }}>{num}</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "10px", md: "16px" }, color: "#F9F9F9", lineHeight: 1.5, letterSpacing: { xs: "-0.2px", md: "-0.32px" } }}>{label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

function SemAccordion({ item, isOpen, onToggle }) {
  const isFirst = item.sem === "Semester 1";
  return (
    <Box sx={{ borderRadius: "8px", overflow: "hidden" }}>
      {/* Header */}
      <Box
        onClick={onToggle}
        sx={{
          bgcolor: isFirst ? "#6C10BC" : "#F9F9F9",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          px: "10px", py: "10px", cursor: "pointer",
          borderRadius: isOpen ? "8px 8px 0 0" : "8px",
        }}
      >
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.32px", color: isFirst ? "#F9F9F9" : "#1F1F1F", lineHeight: 1.5 }}>
          {item.sem}
        </Typography>
        {isOpen
          ? <KeyboardArrowUpIcon sx={{ color: isFirst ? "#F9F9F9" : "#1F1F1F" }} />
          : <KeyboardArrowDownIcon sx={{ color: isFirst ? "#F9F9F9" : "#1F1F1F" }} />}
      </Box>
      {/* Expanded rows */}
      {isOpen && (
        <Box>
          {item.rows.map(({ label, value }, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: "rgba(108,16,188,0.08)", display: "flex", justifyContent: "space-between",
                px: "10px", py: "8px", borderBottom: "0.5px solid rgba(31,31,31,0.2)",
              }}
            >
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "#1F1F1F", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{label}</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "#1F1F1F", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{value}</Typography>
            </Box>
          ))}
          <Box sx={{ bgcolor: "rgba(108,16,188,0.08)", display: "flex", justifyContent: "space-between", px: "10px", py: "8px" }}>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>Total</Typography>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{item.total}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function ProgramPage() {
  const [feeTab, setFeeTab] = useState("course");
  const [loanPartner, setLoanPartner] = useState("jodo");
  const [openSem, setOpenSem] = useState(0);

  return (
    <Box sx={{ bgcolor: "#fff", display: "flex", flexDirection: "column", width: "100%" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "319px", md: "600px" },
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
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #2F0E4B 0%, rgba(0,0,0,0) 75%)" }} />

        {/* Content */}
        <Box
          sx={{
            position: "relative", zIndex: 1,
            px: { xs: "20px", md: "128px" },
            pb: { xs: "20px", md: "100px" },
            pt: { xs: "20px", md: "0" },
            display: "flex", flexDirection: "column",
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {/* Co-brand logos */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Box component="img" src="/img/program/partner-logo.svg" alt="Partner university" sx={{ height: { xs: "27px", md: "40px" }, width: "auto" }} />
            <Typography sx={{ color: "white", fontFamily: "Inter, sans-serif", fontWeight: 200, fontSize: { xs: "20px", md: "28px" }, transform: "rotate(-45deg)", lineHeight: 1 }}>+</Typography>
            <Box component="img" src="/img/Vedam_Final_Logo_White.png" alt="Vedam" sx={{ height: { xs: "22px", md: "40px" }, width: "auto" }} />
          </Box>

          {/* Title block */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "12px", md: "20px" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", color: "#F9F9F9" }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: { xs: "16px", md: "32px" }, letterSpacing: { xs: "-0.32px", md: "-0.64px" }, lineHeight: 1, maxWidth: { xs: 245, md: 520 } }}>
                UG Program in Computer Science &amp; Artificial Intelligence
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "14px" } }}>
                Bachelor of Technology Degree by Sushant University, Gurugram
              </Typography>
            </Box>

            {/* Accreditation pill */}
            <Box
              sx={{
                display: "inline-flex", alignItems: "center",
                gap: { xs: "6px", md: "10px" },
                backdropFilter: "blur(14px)", bgcolor: "rgba(135,135,135,0.4)",
                borderRadius: "30px",
                px: { xs: "10px", md: "20px" },
                py: { xs: "5px", md: "10px" },
              }}
            >
              <Box component="img" src="/img/program/ugc-logo.svg" alt="UGC" sx={{ height: { xs: "16px", md: "24px" }, width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: { xs: "6px", md: "10px" }, color: "#F9F9F9", whiteSpace: "nowrap" }}>UGC Recognised</Typography>
              <Typography sx={{ color: "white", fontSize: { xs: "8px", md: "10px" } }}>|</Typography>
              <Box component="img" src="/img/program/nirf-logo.png" alt="NIRF" sx={{ height: { xs: "16px", md: "24px" }, width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: { xs: "6px", md: "10px" }, color: "#F9F9F9", whiteSpace: "nowrap" }}>NIRF Ranked</Typography>
              <Typography sx={{ color: "white", fontSize: { xs: "8px", md: "10px" } }}>|</Typography>
              <Box component="img" src="/img/program/naac-logo.png" alt="NAAC" sx={{ height: { xs: "16px", md: "24px" }, width: "auto" }} />
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: { xs: "6px", md: "10px" }, color: "#F9F9F9", whiteSpace: "nowrap" }}>NAAC Accredited</Typography>
            </Box>
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              component="a"
              href="https://apply.vedam.org"
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: "#6C10BC", borderRadius: "8px",
                px: { xs: "10px", md: "20px" }, py: { xs: "8px", md: "15px" },
                fontFamily: "Inter, sans-serif", fontWeight: 500,
                fontSize: { xs: "10px", md: "14px" }, letterSpacing: "-0.28px",
                textTransform: "none", "&:hover": { bgcolor: "#5a0ea0" },
              }}
            >
              Apply Now
            </Button>
            <Button
              component="a"
              href="/brochure"
              variant="contained"
              sx={{
                bgcolor: "rgba(30,30,30,0.6)", borderRadius: "8px",
                px: { xs: "10px", md: "20px" }, py: { xs: "8px", md: "15px" },
                fontFamily: "Inter, sans-serif", fontWeight: 500,
                fontSize: { xs: "10px", md: "14px" }, letterSpacing: "-0.28px",
                textTransform: "none", "&:hover": { bgcolor: "rgba(30,30,30,0.8)" },
              }}
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
            borderRadius: "20px", p: "10px", gap: "8px", width: "365px",
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "8px", md: "12px" }, alignItems: "center", pb: { xs: "20px", md: "40px" } }}>
        <Box
          sx={{
            bgcolor: "#FAFAFA", width: "100%",
            height: { xs: "60px", md: "120px" },
            display: "flex", flexDirection: "row",
            alignItems: "stretch",
            px: { xs: "20px", md: "128px" },
            overflow: "hidden",
          }}
        >
          {[
            { title: "4 Years",        body: "Full-time residential program\nB.Tech Degree  by Sushant University", highlight: false },
            { title: "Partner Campus", body: "Sushant University —\nGurugram, Delhi NCR",                          highlight: true  },
            { title: "Eligibility",    body: "2025, 2026 12th student with PCM\n(>50% in PCM & 12th boards Overall)", highlight: false },
          ].map(({ title, body, highlight }, i) => (
            <Box
              key={i}
              sx={{
                flex: 1, display: "flex", flexDirection: "column", gap: "4px",
                justifyContent: "center",
                px: { xs: i === 0 ? "0" : "10px", md: "20px" },
                py: { xs: "10px", md: 0 },
                pr: { xs: i === 0 ? "10px" : undefined, md: undefined },
                bgcolor: highlight ? "rgba(186,107,255,0.08)" : "#FAFAFA",
              }}
            >
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "10px", md: "20px" }, whiteSpace: "nowrap" }}>
                {title}
              </Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: { xs: "6px", md: "16px" }, whiteSpace: "pre-wrap", lineHeight: { xs: 1.3, md: 1.5 } }}>
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "8px", md: "12px" }, color: "#848484", textAlign: "center", letterSpacing: "-0.16px", lineHeight: 1.5, px: "20px" }}>
          *Admissions open for 2026 intake. Only top 5% applicants are selected.
        </Typography>
      </Box>

      {/* ── 3. WHY GURUGRAM? ────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Why Gurugram?</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, fontSize: { xs: "10px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, letterSpacing: { xs: "-0.2px", md: "-0.32px" }, maxWidth: 1024 }}>
            Gurugram is where India&apos;s corporate world lives. From Fortune 500 headquarters to global tech giants, the city puts you at the centre of India&apos;s biggest economy.
          </Typography>
        </Box>

        {/* ── Mobile layout (xs only) */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "4px" }}>
          <StatsTile stats={gurugramImages.statsLeft} />
          <Box sx={{ display: "flex", gap: "4px", height: "111px" }}>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img1} alt="Gurugram" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img2} alt="Gurugram skyline" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </Box>
          <StatsTile stats={gurugramImages.statsRight} />
          <Box sx={{ display: "flex", gap: "4px", height: "111px" }}>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img3} alt="Gurugram city" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img4} alt="Gurugram tech" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </Box>
        </Box>

        {/* ── Desktop layout (md+) */}
        <Box sx={{ display: { xs: "none", md: "block" }, width: "100%", overflowX: "visible" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "90px 90px 90px 90px",
              gap: "10px",
              maxWidth: "1024px",
            }}
          >
            <Box sx={{ gridColumn: "1 / span 2", gridRow: "1" }}>
              <StatsTile stats={gurugramImages.statsLeft} />
            </Box>
            <Box sx={{ gridColumn: "1", gridRow: "2 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img1} alt="Gurugram" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "2", gridRow: "2 / span 3", borderRadius: "24px", overflow: "hidden", height: "290px" }}>
              <Box component="img" src={gurugramImages.img3} alt="Gurugram city" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "3", gridRow: "1 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img4} alt="Gurugram tech" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "4", gridRow: "1 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={gurugramImages.img2} alt="Gurugram skyline" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "3 / span 2", gridRow: "4" }}>
              <StatsTile stats={gurugramImages.statsRight} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── 4. CAMPUS & AMENITIES ───────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Campus &amp; Amenities</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, fontSize: { xs: "10px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, maxWidth: 1024 }}>
            Sushant University&apos;s Gurugram campus is located minutes away from Cyber City, Golf Course Road, and the NCR startup corridor. The campus combines modern academic infrastructure with proximity to India&apos;s fastest-growing district.
          </Typography>
        </Box>

        {/* Mobile: 2-col grid, 3 rows */}
        <Box sx={{ display: { xs: "grid", md: "none" }, gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          {campusImages.map((src, i) => (
            <Box key={i} sx={{ height: "115px", borderRadius: "4px", overflow: "hidden" }}>
              <Box component="img" src={src} alt={`Campus ${i + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          ))}
        </Box>

        {/* Desktop: 3-col grid, 2 rows */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", gap: "20px" }}>
          {[campusImages.slice(0, 3), campusImages.slice(3)].map((row, ri) => (
            <Box key={ri} sx={{ display: "flex", gap: "20px" }}>
              {row.map((src, i) => (
                <Box key={i} sx={{ flex: 1, height: "250px", borderRadius: "12px", overflow: "hidden" }}>
                  <Box component="img" src={src} alt={`Campus ${ri * 3 + i + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 5. ACCREDITATIONS & RECOGNITIONS ───────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "40px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
          <Typography sx={gradientText}>Accreditations &amp; Recognitions</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, fontSize: { xs: "10px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5, maxWidth: 1024 }}>
            Your degree isn&apos;t just a certificate — it&apos;s a nationally recognised credential backed by India&apos;s top regulatory bodies, independent quality assessors, and international ranking frameworks.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "10px 40px", md: "40px" }, flexWrap: "wrap", justifyContent: "center" }}>
          <Box component="img" src="/img/program/naac-logo.png"      alt="NAAC"    sx={{ height: { xs: "30px", md: "80px" }, width: "auto" }} />
          <Box component="img" src="/img/program/nirf-logo.png"      alt="NIRF"    sx={{ height: { xs: "30px", md: "80px" }, width: "auto" }} />
          <Box component="img" src="/img/program/haryana-emblem.svg" alt="Haryana" sx={{ height: { xs: "40px", md: "80px" }, width: "auto" }} />
          <Box component="img" src="/img/program/aicte-logo.png"     alt="AICTE"   sx={{ height: { xs: "30px", md: "80px" }, width: "auto" }} />
        </Box>
      </Box>

      {/* ── 6. SCHOLARSHIP PROGRAM ──────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "20px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Scholarship Program</Typography>
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, fontSize: { xs: "10px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5 }}>
            Talent shouldn&apos;t wait on finances. Vedam rewards merit, achievement, and potential — with scholarships that make the best education accessible to the best students.
          </Typography>
        </Box>

        {/* Mobile: horizontal card rows */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "4px" }}>
          {scholarships.map(({ title, percent, desc, img }) => (
            <Box
              key={title}
              sx={{
                bgcolor: "black", border: "0.216px solid rgba(132,132,132,0.5)",
                borderRadius: "10px", overflow: "hidden",
                display: "flex", alignItems: "center",
                gap: "17px", px: "10px", py: "8px",
              }}
            >
              <Box component="img" src={img} alt={title} sx={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0 }} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "white", fontSize: "10px", letterSpacing: "-0.2px", lineHeight: 1.2, mb: "4px" }}>
                  {`${title} (${percent})`}
                </Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "white", fontSize: "8px", letterSpacing: "-0.16px", lineHeight: 1.2 }}>
                  {desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Desktop: tall vertical dark cards */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "row", gap: "20px", justifyContent: "space-between" }}>
          {scholarships.map(({ title, percent, desc, img }) => (
            <Box
              key={title}
              sx={{
                flex: 1, bgcolor: "#0E020F", borderRadius: "20px",
                height: "365px", overflow: "hidden",
                position: "relative", display: "flex", flexDirection: "column",
                p: "20px", gap: "12px",
              }}
            >
              <Box
                component="img"
                src={img}
                alt={title}
                sx={{
                  position: "absolute", bottom: 0, left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%", height: "auto", objectFit: "contain",
                  maxHeight: "260px",
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "white", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "4px" }}>{title}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#F97D03", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "8px" }}>{percent}</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "white", fontSize: "16px", letterSpacing: "-0.32px", lineHeight: 1.2 }}>{desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 7. FEE STRUCTURE ────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "0px", md: "20px" } }}>
        <Typography sx={{ ...gradientText, mb: { xs: "0px", md: "0px" } }}>Fee Structure</Typography>

        {/* Tab selector */}
        <Box sx={{ display: "flex", gap: "20px", borderBottom: "1px solid rgba(0,0,0,0.15)", mt: { xs: "10px", md: 0 }, px: { xs: "0px", md: "0px" } }}>
          {[{ id: "course", label: "Course Fees" }, { id: "hostel", label: "Hostel Fees" }].map(({ id, label }) => (
            <Box
              key={id}
              onClick={() => setFeeTab(id)}
              sx={{
                pb: "10px", cursor: "pointer",
                borderBottom: feeTab === id ? "2px solid #1E1E1E" : "2px solid transparent",
                fontFamily: "Inter, sans-serif", fontWeight: 700,
                fontSize: { xs: "12px", md: "16px" }, letterSpacing: "-0.32px",
                color: feeTab === id ? "#1E1E1E" : "#848484",
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {feeTab === "course" ? (
          <>
            {/* ── Mobile: accordion per semester */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "8px", mt: "8px" }}>
              {semesterFees.map((item, idx) => (
                <SemAccordion
                  key={item.sem}
                  item={item}
                  isOpen={openSem === idx}
                  onToggle={() => setOpenSem(openSem === idx ? -1 : idx)}
                />
              ))}
              {/* Total Course Fee */}
              <Box
                sx={{
                  bgcolor: "#FF9900", borderRadius: "8px",
                  display: "flex", justifyContent: "space-between",
                  px: "10px", py: "10px",
                }}
              >
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "16px", color: "#1F1F1F", letterSpacing: "-0.32px", lineHeight: 1.5 }}>Total Course Fee</Typography>
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", color: "#1E1E1E", letterSpacing: "-0.32px", lineHeight: 1.5 }}>₹18,00,000</Typography>
              </Box>
            </Box>

            {/* ── Desktop: table */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: "100%", overflowX: "auto" }}>
              <Box sx={{ minWidth: "900px", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: "24px", overflow: "hidden", bgcolor: "white" }}>
                <Box sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)" }}>
                  {feeData.headers.map((h, i) => (
                    <Box key={i} sx={{ bgcolor: "#F4ECFA", p: "10px", borderRight: i < feeData.headers.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                      <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{h}</Typography>
                    </Box>
                  ))}
                </Box>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: 742, mt: { xs: "8px", md: 0 } }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>
                Important Fee Highlights
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: "18px" }}>
                {feeNotes.map((note, i) => (
                  <Box component="li" key={i}>
                    <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 2 }}>
                      {note}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Typography sx={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#848484", mt: "16px" }}>
            Hostel fee details coming soon. Please contact admissions for more information.
          </Typography>
        )}
      </Box>

      {/* ── 8. FINANCING OPTIONS ────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "40px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" }, maxWidth: 1024 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography sx={gradientText}>Financing Options</Typography>
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, fontSize: { xs: "10px", md: "16px" }, color: "#1E1E1E", lineHeight: 1.5 }}>
              At Vedam School of Technology, we understand that flexibility and convenience in fee payments are important to our students and their families. To make this process easier and more accessible, we have partnered with recognized financial companies.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            <Box sx={{ flex: 1, bgcolor: "#F9F9F9", px: { xs: "20px", md: "40px" }, py: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.5 }}>Loan at Zero Cost EMI</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, color: "#1E1E1E", fontSize: { xs: "10px", md: "12px" }, lineHeight: 1.5 }}>
                You can pay your annual course fee in monthly installments with no interest, no processing fee, and no hidden charges. We&apos;ve partnered trusted fintech company working with over 2,500 institutions, to offer this option.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "#fff", px: { xs: "20px", md: "40px" }, py: "20px", display: "flex", flexDirection: "column", gap: "10px", borderTop: "0.5px solid rgba(0,0,0,0.1)" }}>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.5 }}>Education Loan from a Bank</Typography>
              <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: { xs: 500, md: 600 }, color: "#1E1E1E", fontSize: { xs: "10px", md: "12px" }, lineHeight: 1.5 }}>
                You can also access education loans through our trusted banking partners, making it easier for you to finance your education with flexible repayment options and competitive interest rates.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Financing Partners */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
          <Typography sx={gradientText}>Financing Partners</Typography>

          {/* Partner selector */}
          <Box sx={{ display: "inline-flex", gap: "4px", alignItems: "center", border: "1px solid #6C10BC", borderRadius: "24px", p: "5px", alignSelf: "flex-start" }}>
            {[{ id: "propelled", label: "Propelled" }, { id: "jodo", label: "Jodo Cred Plan" }].map(({ id, label }) => (
              <Box
                key={id}
                onClick={() => setLoanPartner(id)}
                sx={{ px: "20px", py: "10px", cursor: "pointer", borderRadius: "14px", bgcolor: loanPartner === id ? "#6C10BC" : "transparent" }}
              >
                <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "8px", md: "14px" }, color: loanPartner === id ? "#F9F9F9" : "#6C10BC", letterSpacing: "-0.16px", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Loan table */}
          <Box sx={{ width: { xs: "100%", md: "512px" }, border: "0.5px solid #6C10BC", borderRadius: "12px", overflow: "hidden", bgcolor: "white" }}>
            {loanData.rows.map(({ label, value }, i) => (
              <Box
                key={i}
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < loanData.rows.length - 1 ? "0.5px solid rgba(30,30,30,0.2)" : "none" }}
              >
                <Box sx={{ bgcolor: "#F4ECFA", p: "10px", borderRight: "0.5px solid rgba(30,30,30,0.2)" }}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: { xs: "10px", md: "12px" }, color: "black", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 1.5 }}>
                    {label}
                  </Typography>
                </Box>
                <Box sx={{ p: "10px" }}>
                  <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: { xs: "10px", md: "12px" }, color: i === 0 ? "black" : "#1F1F1F", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 1.5 }}>
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
          <Box
            component="img"
            src="/img/program/cta-bg.svg"
            alt=""
            sx={{ position: "absolute", left: "-223px", top: "-41px", width: "596px", height: "596px", pointerEvents: "none" }}
          />
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
              component="a"
              href="https://apply.vedam.org"
              target="_blank"
              variant="contained"
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
            <Box component="img" src="/img/program/cta-student-1.png" alt="Student" sx={{ position: "absolute", right: "0", top: "-26px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "45%" }} />
            <Box component="img" src="/img/program/cta-student-2.png" alt="Student" sx={{ position: "absolute", right: "33%", top: "5px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "35%" }} />
            <Box component="img" src="/img/program/cta-student-3.png" alt="Student" sx={{ position: "absolute", right: "55%", top: "13px", height: "100%", width: "auto", objectFit: "contain", maxWidth: "28%" }} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
