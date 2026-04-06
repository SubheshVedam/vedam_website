"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────
const gradientText = {
  background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 700,
  fontSize: { xs: "20px", md: "36px" },
  lineHeight: 1.2,
  letterSpacing: { xs: "-0.4px", md: "-0.72px" },
  display: "inline-block",
};

const sectionDescriptionText = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: { xs: 400, md: 400 },
  fontSize: { xs: "10px", md: "16px" },
  color: "#1E1E1E",
  lineHeight: 1.5,
  letterSpacing: { xs: "-0.2px", md: "-0.32px" },
};

const sectionPad = { px: { xs: "20px", md: "128px" }, py: { xs: "20px", md: "40px" } };

// ─────────────────────────────────────────────────────────────────────────────
// StatsTile
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
          <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "#FF9900", fontSize: { xs: "10px", md: "24px" }, lineHeight: 1.5 }}>{num}</Typography>
          <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: { xs: "10px", md: "16px" }, color: "#F9F9F9", lineHeight: 1.5, letterSpacing: { xs: "-0.2px", md: "-0.32px" } }}>{label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SemAccordion
// ─────────────────────────────────────────────────────────────────────────────
function SemAccordion({ item, isOpen, onToggle }) {
  const isFirst = item.sem === "Semester 1";
  return (
    <Box sx={{ borderRadius: "8px", overflow: "hidden" }}>
      <Box
        onClick={onToggle}
        sx={{
          bgcolor: isFirst ? "#6C10BC" : "#F9F9F9",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          px: "10px", py: "10px", cursor: "pointer",
          borderRadius: isOpen ? "8px 8px 0 0" : "8px",
        }}
      >
        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.32px", color: isFirst ? "#F9F9F9" : "#1F1F1F", lineHeight: 1.5 }}>
          {item.sem}
        </Typography>
        {isOpen
          ? <KeyboardArrowUpIcon sx={{ color: isFirst ? "#F9F9F9" : "#1F1F1F" }} />
          : <KeyboardArrowDownIcon sx={{ color: isFirst ? "#F9F9F9" : "#1F1F1F" }} />}
      </Box>
      {isOpen && (
        <Box>
          {item.rows.map(({ label, value, isSubTotal }, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: isSubTotal ? "rgba(108,16,188,0.14)" : "rgba(108,16,188,0.08)",
                display: "flex", justifyContent: "space-between",
                px: "10px", py: "8px", borderBottom: "0.5px solid rgba(31,31,31,0.2)",
              }}
            >
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: isSubTotal ? 700 : 500, fontSize: "12px", color: isSubTotal ? "#6C10BC" : "#1F1F1F", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{label}</Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: isSubTotal ? 700 : 500, fontSize: "12px", color: isSubTotal ? "#6C10BC" : "#1F1F1F", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{value}</Typography>
            </Box>
          ))}
          <Box sx={{ bgcolor: "rgba(108,16,188,0.08)", display: "flex", justifyContent: "space-between", px: "10px", py: "8px" }}>
            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>Total</Typography>
            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>{item.total}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared: renders a list of room-type cards + a notes block
// ─────────────────────────────────────────────────────────────────────────────
function RoomTypeCards({ roomTypes, notes }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "20px" } }}>
      {/* Room cards */}
      {roomTypes.map(({ type, rows }) => (
        <Box
          key={type}
          sx={{
            border: "1.5px solid transparent",
            borderRadius: { xs: "12px", md: "16px" },
            overflow: "hidden",
            background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #6C10BC, #FB7F05) border-box",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Box sx={{ bgcolor: "rgba(108,16,188,0.08)", p: { xs: "10px 14px", md: "14px 20px" }, borderRight: "0.5px solid rgba(108,16,188,0.2)" }}>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: { xs: "12px", md: "14px" }, color: "#6C10BC" }}>
                Room Type
              </Typography>
            </Box>
            <Box sx={{ bgcolor: "#6C10BC", p: { xs: "10px 14px", md: "14px 20px" } }}>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: { xs: "12px", md: "14px" }, color: "#fff" }}>
                {type}
              </Typography>
            </Box>
          </Box>

          {/* Rows */}
          {rows.map(({ label, value }, i) => (
            <Box key={i} sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "0.5px solid rgba(108,16,188,0.15)" }}>
              <Box sx={{ bgcolor: "rgba(108,16,188,0.04)", p: { xs: "10px 14px", md: "12px 20px" }, borderRight: "0.5px solid rgba(108,16,188,0.15)" }}>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                  {label}
                </Typography>
              </Box>
              <Box sx={{ p: { xs: "10px 14px", md: "12px 20px" } }}>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", lineHeight: 1.6 }}>
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}

      {/* Notes */}
      {notes?.length > 0 && (
        <Box
          sx={{
            bgcolor: "rgba(108,16,188,0.04)",
            border: "0.5px solid rgba(108,16,188,0.2)",
            borderRadius: { xs: "10px", md: "14px" },
            p: { xs: "14px 16px", md: "20px 24px" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "10px", md: "12px" },
          }}
        >
          <Box
            sx={{
              display: "inline-flex", alignItems: "center",
              bgcolor: "rgba(108,16,188,0.1)", borderRadius: "6px",
              px: "10px", py: "4px", width: "fit-content", mb: "4px",
            }}
          >
            <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: { xs: "11px", md: "13px" }, color: "#6C10BC", letterSpacing: "-0.24px" }}>
              Note
            </Typography>
          </Box>

          {notes.map((note, i) => (
            <Box key={i} sx={{ display: "flex", gap: { xs: "8px", md: "12px" }, alignItems: "flex-start" }}>
              <Box
                sx={{
                  minWidth: { xs: "20px", md: "24px" },
                  height: { xs: "20px", md: "24px" },
                  borderRadius: "50%",
                  bgcolor: "#6C10BC",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, mt: "1px",
                }}
              >
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: { xs: "9px", md: "11px" }, color: "#fff", lineHeight: 1 }}>
                  {i + 1}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", lineHeight: 1.7 }}>
                {note}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Legacy hostel section — Gurugram (flat roomTypes array)
// ─────────────────────────────────────────────────────────────────────────────
function LegacyHostelSection({ hostelFees }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "24px" }, mt: { xs: "8px", md: 0 } }}>
      <RoomTypeCards roomTypes={hostelFees.roomTypes} notes={hostelFees.notes} />
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// New hostel section — Pune (hostelTypes array with Out of Campus / In Campus)
// ─────────────────────────────────────────────────────────────────────────────
function MultiTypeHostelSection({ hostelFees }) {
  const [activeTab, setActiveTab] = useState(hostelFees.hostelTypes[0]?.type ?? "outCampus");
  const activeHostel = hostelFees.hostelTypes.find((h) => h.type === activeTab);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "16px", md: "24px" }, mt: { xs: "8px", md: 0 } }}>

      {/* Sub-tab: Out of Campus / In Campus */}
      <Box sx={{ display: "flex", gap: "24px", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
        {hostelFees.hostelTypes.map(({ type, label }) => (
          <Box
            key={type}
            onClick={() => setActiveTab(type)}
            sx={{
              pb: "10px", cursor: "pointer",
              borderBottom: activeTab === type ? "2px solid #6C10BC" : "2px solid transparent",
              fontFamily: "var(--font-inter), sans-serif", fontWeight: 600,
              fontSize: { xs: "12px", md: "15px" },
              color: activeTab === type ? "#6C10BC" : "#848484",
              transition: "color 0.2s",
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {activeHostel && (
        <>
          {/* Hostel title */}
          <Typography sx={{
            fontFamily: "var(--font-inter), sans-serif", fontWeight: 700,
            fontSize: { xs: "13px", md: "16px" }, color: "#6C10BC",
          }}>
            {activeHostel.title}
          </Typography>

          <RoomTypeCards roomTypes={activeHostel.roomTypes} notes={activeHostel.notes} />
        </>
      )}
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HostelFeeSection — router: detects shape and picks the right sub-component
// ─────────────────────────────────────────────────────────────────────────────
function HostelFeeSection({ hostelFees, hostelPlaceholder }) {
  if (!hostelFees) {
    return (
      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#848484", mt: "16px" }}>
        {hostelPlaceholder}
      </Typography>
    );
  }

  // Legacy shape (Gurugram): hostelFees.roomTypes is an array
  if (Array.isArray(hostelFees.roomTypes)) {
    return <LegacyHostelSection hostelFees={hostelFees} />;
  }

  // New shape (Pune): hostelFees.hostelTypes is an array
  if (Array.isArray(hostelFees.hostelTypes)) {
    return <MultiTypeHostelSection hostelFees={hostelFees} />;
  }

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main ProgramPage component — accepts a `config` prop
// ─────────────────────────────────────────────────────────────────────────────
export default function ProgramPage({ config }) {
  const [feeTab, setFeeTab] = useState("course");
  const [loanPartner, setLoanPartner] = useState("propelled");
  const [openSem, setOpenSem] = useState(0);

  const {
    hero,
    statsBar,
    citySection,
    campusSection,
    accreditations,
    scholarships,
    fees,
    financing,
    cta,
  } = config;

  return (
    <Box sx={{ bgcolor: "#fff", display: "flex", flexDirection: "column", width: "100%" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "319px", md: "600px", lg: "650px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "flex-end" },
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, #BA6BFF 0%, #933DDE 50%, #7F27CD 75%, #6C10BC 100%)" }} />
        <Box
          component="img"
          src={hero.bgImage}
          alt=""
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #1a0533 0%, #2F0E4B 30%, rgba(0,0,0,0) 70%)" }} />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)" }} />

        <Box
          sx={{
            position: "relative", zIndex: 1,
            px: { xs: "20px", md: "128px" },
            pb: { xs: "20px", md: "80px" },
            pt: { xs: "20px", md: "0" },
            display: "flex", flexDirection: "column",
            gap: { xs: "16px", md: "32px" },
          }}
        >
          {/* Co-brand logos */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "8px", md: "16px" } }}>
            <Box component="img" src={hero.partnerLogo} alt="Partner university" sx={{ height: { xs: "27px", md: "48px" }, width: { xs: "82px", md: "138px" } }} />
            <Typography sx={{ color: "white", fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: { xs: "18px", md: "28px" }, lineHeight: 1, mx: { xs: "2px", md: "4px" } }}>
              ×
            </Typography>
            <Box component="img" src="/img/Vedam_Final_Logo_White.png" alt="Vedam" sx={{ height: { xs: "36px", md: "76px" }, width: { xs: "79px", md: "138px" } }} />
          </Box>

          {/* Title block */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "16px" } }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "8px", md: "12px" }, color: "#F9F9F9" }}>
              <Typography sx={{
                fontFamily: "var(--font-inter), sans-serif", fontWeight: 700,
                fontSize: { xs: "16px", md: "32px" },
                letterSpacing: { xs: "-0.32px", md: "-2%" },
                lineHeight: { xs: 1.2, md: 1.1 },
                maxWidth: { xs: 280, md: 480 },
                color: "#FFFFFF",
              }}>
                {hero.title}
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "14px" }, color: "#F9F9F9", opacity: 0.9 }}>
                {hero.subtitle}
              </Typography>
            </Box>

            {/* Accreditation pill */}
            <Box
              sx={{
                display: "inline-flex", alignItems: "center",
                gap: { xs: "10px", md: "12px" },
                backdropFilter: "blur(14px)",
                bgcolor: "rgba(135,135,135,0.35)",
                borderRadius: "30px",
                px: { xs: "10px", md: "20px" },
                py: { xs: "10px", md: "16px" },
                width: "fit-content",
              }}
            >
              {hero.accreditationPill.map(({ src, alt, label, width }, i) => (
                <React.Fragment key={alt}>
                  {i > 0 && (
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: { xs: "10px", md: "14px" } }}>|</Typography>
                  )}
                  <Box component="img" src={src} alt={alt} sx={{ height: { xs: "16px", md: "26px" }, width: width ?? "auto" }} />
                  <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: { xs: "6px", md: "10px" }, color: "#F9F9F9", whiteSpace: "nowrap" }}>
                    {label}
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: "flex", gap: { xs: "10px", md: "16px" }, mt: { xs: "20px", md: "40px" }, alignItems: "center" }}>
            <Button
              component="a"
              href={hero.applyUrl}
              target="_blank"
              variant="contained"
              sx={{
                bgcolor: "#6C10BC", borderRadius: "8px",
                px: { xs: "16px", md: "28px" }, py: { xs: "8px", md: "14px" },
                fontFamily: "var(--font-inter), sans-serif", fontWeight: 600,
                fontSize: { xs: "11px", md: "15px" }, letterSpacing: "-0.28px",
                textTransform: "none", boxShadow: "none",
                "&:hover": { bgcolor: "#5a0ea0", boxShadow: "none" },
              }}
            >
              Apply Now
            </Button>
            <Button
              component="a"
              href={hero.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                bgcolor: "rgba(30,30,30,0.55)", borderRadius: "8px",
                px: { xs: "16px", md: "28px" }, py: { xs: "8px", md: "14px" },
                fontFamily: "var(--font-inter), sans-serif", fontWeight: 600,
                fontSize: { xs: "11px", md: "15px" }, letterSpacing: "-0.28px",
                textTransform: "none", boxShadow: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                "&:hover": { bgcolor: "rgba(30,30,30,0.75)", boxShadow: "none" },
              }}
            >
              Download Brochure
            </Button>
          </Box>
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
          {statsBar.tiles.map(({ title, body, highlight }, i) => (
            <Box
              key={i}
              sx={{
                flex: 1, display: "flex", flexDirection: "column", gap: "4px",
                px: { xs: "10px", md: "20px" },
                py: { xs: "10px", md: "20px" },
                bgcolor: highlight ? "rgba(186,107,255,0.08)" : "#FAFAFA",
              }}
            >
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "10px", md: "20px" }, whiteSpace: "nowrap" }}>
                {title}
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, color: "#1E1E1E", fontSize: { xs: "6px", md: "16px" }, whiteSpace: "pre-wrap", lineHeight: { xs: 1.3, md: 1.5 } }}>
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: { xs: "8px", md: "12px" }, color: "#848484", textAlign: "center", letterSpacing: "-0.16px", lineHeight: 1.5, px: "20px" }}>
          {statsBar.footnote}
        </Typography>
      </Box>

      {/* ── 3. CITY SECTION ─────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>{citySection.heading}</Typography>
          <Typography sx={{ ...sectionDescriptionText, maxWidth: 1024 }}>
            {citySection.description}
          </Typography>
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "4px" }}>
          <StatsTile stats={citySection.statsLeft} />
          <Box sx={{ display: "flex", gap: "4px", height: "111px" }}>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img1} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img2} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </Box>
          <StatsTile stats={citySection.statsRight} />
          <Box sx={{ display: "flex", gap: "4px", height: "111px" }}>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img4} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ flex: 1, borderRadius: "10px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img3} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </Box>
        </Box>

        {/* Desktop */}
        <Box sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "90px 90px 90px 90px", gap: "10px" }}>
            <Box sx={{ gridColumn: "1 / span 2", gridRow: "1" }}>
              <StatsTile stats={citySection.statsLeft} />
            </Box>
            <Box sx={{ gridColumn: "1", gridRow: "2 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img1} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "2", gridRow: "2 / span 3", borderRadius: "24px", overflow: "hidden", height: "290px" }}>
              <Box component="img" src={citySection.img3} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "3", gridRow: "1 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img4} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "4", gridRow: "1 / span 3", borderRadius: "24px", overflow: "hidden" }}>
              <Box component="img" src={citySection.img2} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ gridColumn: "3 / span 2", gridRow: "4" }}>
              <StatsTile stats={citySection.statsRight} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── 4. CAMPUS & AMENITIES ───────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Campus &amp; Amenities</Typography>
          <Typography sx={{ ...sectionDescriptionText, maxWidth: 1024 }}>
            {campusSection.description}
          </Typography>
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: "grid", md: "none" }, gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
          {campusSection.images.map((src, i) => (
            <Box key={i} sx={{ height: "115px", borderRadius: "4px", overflow: "hidden" }}>
              <Box component="img" src={src} alt={`Campus ${i + 1}`} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          ))}
        </Box>

        {/* Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", gap: "20px" }}>
          {[campusSection.images.slice(0, 3), campusSection.images.slice(3)].map((row, ri) => (
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
          <Typography sx={{ ...sectionDescriptionText, maxWidth: 1024 }}>
            {accreditations.description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "10px 20px", md: "40px" }, flexWrap: "wrap", justifyContent: "center" }}>
          {accreditations.logos.map(({ src, alt, height, width }) => (
            <Box key={alt} component="img" src={src} alt={alt} sx={{ height: { xs: height.xs, md: height.md }, width: width ? { xs: width.xs, md: width.md } : "auto" }} />
          ))}
        </Box>
      </Box>

      {/* ── 6. SCHOLARSHIP PROGRAM ──────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "20px", md: "20px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography sx={gradientText}>Scholarship Program</Typography>
          <Typography sx={sectionDescriptionText}>
            {scholarships.description}
          </Typography>
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "4px" }}>
          {scholarships.items.map(({ title, percent, desc, img }) => (
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
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "white", fontSize: "10px", letterSpacing: "-0.2px", lineHeight: 1.2, mb: "4px" }}>
                  {`${title} (${percent})`}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, color: "white", fontSize: "8px", letterSpacing: "-0.16px", lineHeight: 1.2 }}>
                  {desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "row", gap: "20px", justifyContent: "space-between" }}>
          {scholarships.items.map(({ title, percent, desc, img }) => (
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
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "white", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "4px" }}>{title}</Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, color: "#F97D03", fontSize: "18px", letterSpacing: "-0.36px", lineHeight: 1.2, mb: "8px" }}>{percent}</Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, color: "white", fontSize: "16px", letterSpacing: "-0.32px", lineHeight: 1.2 }}>{desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── 7. FEE STRUCTURE ────────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "0px", md: "20px" } }}>
        <Typography sx={{ ...gradientText, mb: { xs: "0px", md: "0px" } }}>Fee Structure</Typography>

        <Box sx={{ display: "flex", gap: "20px", borderBottom: "1px solid rgba(0,0,0,0.15)", mt: { xs: "10px", md: 0 } }}>
          {[{ id: "course", label: "Course Fees" }, { id: "hostel", label: "Hostel Fees" }].map(({ id, label }) => (
            <Box
              key={id}
              onClick={() => setFeeTab(id)}
              sx={{
                pb: "10px", cursor: "pointer",
                borderBottom: feeTab === id ? "2px solid #1E1E1E" : "2px solid transparent",
                fontFamily: "var(--font-inter), sans-serif", fontWeight: 700,
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
            {/* Mobile: accordion */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "8px", mt: "8px" }}>
              {fees.semesterFees.map((item, idx) => (
                <SemAccordion
                  key={item.sem}
                  item={item}
                  isOpen={openSem === idx}
                  onToggle={() => setOpenSem(openSem === idx ? -1 : idx)}
                />
              ))}
              <Box sx={{ bgcolor: "#FF9900", borderRadius: "8px", display: "flex", justifyContent: "space-between", px: "10px", py: "10px" }}>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "16px", color: "#1F1F1F", letterSpacing: "-0.32px", lineHeight: 1.5 }}>Total Course Fee</Typography>
                <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "16px", color: "#1E1E1E", letterSpacing: "-0.32px", lineHeight: 1.5 }}>{fees.totalCourseFee}</Typography>
              </Box>
            </Box>

            {/* Desktop: table */}
            <Box sx={{
              display: { xs: "none", md: "block" }, width: "100%", overflowX: "auto", scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}>
              <Box sx={{ minWidth: "900px", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: "24px", overflow: "hidden", bgcolor: "white" }}>
                {/* Headers */}
                <Box sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)" }}>
                  {fees.feeData.headers.map((h, i) => (
                    <Box key={i} sx={{ bgcolor: "#F4ECFA", p: "10px 20px", borderRight: i < fees.feeData.headers.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none", ...(i === 0 && { minWidth: "210px" }) }}>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{h}</Typography>
                    </Box>
                  ))}
                </Box>
                {/* Data rows */}
                {fees.feeData.rows.map(({ label, values, isSubTotal }, ri) => (
                  <Box
                    key={ri}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "2fr repeat(9, 1fr)",
                      borderTop: "0.5px solid rgba(30,30,30,0.2)",
                      bgcolor: isSubTotal ? "rgba(108,16,188,0.08)" : "transparent",
                    }}
                  >
                    <Box sx={{ p: "10px", pl: "20px", borderRight: "0.5px solid rgba(0,0,0,0.1)", minWidth: "210px" }}>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: isSubTotal ? "#6C10BC" : "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{label}</Typography>
                    </Box>
                    {values.map((v, ci) => (
                      <Box key={ci} sx={{ p: "10px", textAlign: "center", borderRight: ci < values.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                        <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: isSubTotal ? 700 : 500, fontSize: "12px", color: isSubTotal ? "#6C10BC" : "black", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{v}</Typography>
                      </Box>
                    ))}
                  </Box>
                ))}
                {/* Totals row */}
                <Box sx={{ display: "grid", gridTemplateColumns: "2fr repeat(9, 1fr)", borderTop: "0.5px solid rgba(30,30,30,0.2)" }}>
                  <Box sx={{ bgcolor: "#BA6BFF", p: "10px", pl: "20px", borderRight: "0.5px solid rgba(0,0,0,0.1)", minWidth: "210px" }}>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: "#1E1E1E", letterSpacing: "-0.24px" }}>Payable Course Fee</Typography>
                  </Box>
                  {fees.feeData.totals.map((v, i) => (
                    <Box key={i} sx={{ bgcolor: "#BA6BFF", p: "10px", textAlign: "center", borderRight: i < fees.feeData.totals.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none" }}>
                      <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: "#1E1E1E", letterSpacing: "-0.24px", whiteSpace: "nowrap" }}>{v}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Fee highlights */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: 742, mt: { xs: "8px", md: 0 } }}>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "12px", color: "#6C10BC", letterSpacing: "-0.24px", lineHeight: 1.5 }}>
                Important Fee Highlights
              </Typography>
              <Box component="ol" sx={{ m: 0, pl: "18px", "& li::marker": { fontSize: { xs: "10px", md: "13px" }, fontWeight: 500, color: "#1F1F1F" } }}>
                {fees.feeNotes.map((note, i) => (
                  <Box component="li" key={i}>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 2 }}>
                      {note}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <HostelFeeSection
            hostelFees={fees.hostelFees}
            hostelPlaceholder={fees.hostelPlaceholder}
          />
        )}
      </Box>

      {/* ── 8. FINANCING OPTIONS ────────────────────────────────────────────── */}
      <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "10px", md: "40px" } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" }, maxWidth: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography sx={gradientText}>Financing Options</Typography>
            <Typography sx={sectionDescriptionText}>
              {financing.description}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            <Box sx={{ flex: 1, bgcolor: "#F9F9F9", px: { xs: "20px", md: "40px" }, py: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.5 }}>
                {financing.zeroEmi.title}
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: { xs: 500, md: 600 }, color: "#1E1E1E", fontSize: { xs: "10px", md: "12px" }, lineHeight: 1.5 }}>
                {financing.zeroEmi.description}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "#fff", px: { xs: "20px", md: "40px" }, py: "20px", display: "flex", flexDirection: "column", gap: "10px", borderTop: { xs: "0.5px solid rgba(0,0,0,0.1)", md: "none" }, borderLeft: { xs: "none", md: "0.5px solid rgba(0,0,0,0.1)" } }}>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, color: "#6C10BC", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.5 }}>
                {financing.bankLoan.title}
              </Typography>
              <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: { xs: 500, md: 600 }, color: "#1E1E1E", fontSize: { xs: "10px", md: "12px" }, lineHeight: 1.5 }}>
                {financing.bankLoan.description}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Financing Partners */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "10px", md: "20px" } }}>
          <Typography sx={gradientText}>Financing Partners</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: "10px", md: "20px" } }}>
            <Box sx={{ display: "inline-flex", gap: "4px", alignItems: "center", border: "1px solid #6C10BC", borderRadius: "24px", p: "5px" }}>
              {financing.loanPartners.map(({ id, label }) => (
                <Box
                  key={id}
                  onClick={() => setLoanPartner(id)}
                  sx={{ px: "20px", py: "10px", cursor: "pointer", borderRadius: "14px", bgcolor: loanPartner === id ? "#6C10BC" : "transparent" }}
                >
                  <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: { xs: "8px", md: "14px" }, color: loanPartner === id ? "#F9F9F9" : "#6C10BC", letterSpacing: "-0.16px", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Loan table */}
            <Box sx={{ width: { xs: "100%", md: "512px" }, border: "0.5px solid #6C10BC", borderRadius: "12px", overflow: "hidden", bgcolor: "white" }}>
              {(financing.loanData[loanPartner] ?? financing.loanData[financing.loanPartners[0]?.id])?.rows.map(({ label, value }, i, arr) => (
                <Box
                  key={i}
                  sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < arr.length - 1 ? "0.5px solid rgba(30,30,30,0.2)" : "none" }}
                >
                  <Box sx={{ bgcolor: "#F4ECFA", p: "10px", borderRight: "0.5px solid rgba(30,30,30,0.2)" }}>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: { xs: "10px", md: "12px" }, color: "black", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 1.5 }}>
                      {label}
                    </Typography>
                  </Box>
                  <Box sx={{ p: "10px" }}>
                    <Typography sx={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: i === 0 ? 700 : 500, fontSize: { xs: "10px", md: "12px" }, color: "#1F1F1F", letterSpacing: { xs: "-0.2px", md: "-0.24px" }, lineHeight: 1.5 }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── 9. CTA ──────────────────────────────────────────────────────────── */}
      <Box
        component="a"
        href="https://apply.vedam.org"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ ...sectionPad, bgcolor: "white", display: "block", cursor: "pointer" }}
      >
        {/* Mobile image */}
        <Box
          component="img"
          src={cta.mobile}
          alt=""
          sx={{
            display: { xs: "block", md: "none" },
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        {/* Desktop image */}
        <Box
          component="img"
          src={cta.desktop}
          alt=""
          sx={{
            display: { xs: "none", md: "block" },
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>

    </Box>
  );
}
