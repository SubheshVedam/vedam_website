"use client";

import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ─────────────────────────────────────────────────────────────────────────────
// Shared design tokens
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

const bodyText = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: { xs: "12px", md: "16px" },
    color: "#1E1E1E",
    lineHeight: 1.6,
    letterSpacing: { xs: "-0.2px", md: "-0.32px" },
};

// Every section gets this — nothing bleeds edge-to-edge
const sectionPad = {
    px: { xs: "20px", md: "128px" },
    py: { xs: "20px", md: "40px" },
};

// ─────────────────────────────────────────────────────────────────────────────
// StatCards — reusable for both placement and tech expertise sections
// ─────────────────────────────────────────────────────────────────────────────

function StatCards1({ stats }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: { xs: "10px", md: "16px" },
            }}
        >
            {stats.map((s, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: 1,
                        p: { xs: "10px", md: "20px" },
                        bgcolor: "#F9F2FF",
                        borderRadius: { xs: "10px", md: "14px" },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 800,
                            color: "#6C10BC",
                            fontSize: { xs: "16px", md: "32px" },
                            lineHeight: 1.3,
                            mb: "6px",
                        }}
                    >
                        {s.num}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#838383",
                            fontSize: { xs: "10px", md: "20px" },
                            lineHeight: 1.5,
                        }}
                    >
                        {s.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

function StatCards({ stats }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "10px", md: "16px" },
            }}
        >
            {stats.map((s, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: 1,
                        px: { xs: "14px", md: "20px" },
                        py: { xs: "12px", md: "24px" },
                        bgcolor: "#F6F6F6",
                        borderRadius: { xs: "10px", md: "14px" },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 800,
                            color: "#8800FF",
                            fontSize: { xs: "16px", md: "24px" },
                            lineHeight: 1.3,
                            mb: "6px",
                        }}
                    >
                        {s.num}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#838383",
                            fontSize: { xs: "12px", md: "20px" },
                            lineHeight: 1.5,
                        }}
                    >
                        {s.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// TestimonialCard
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialCard({ item }) {
    return (
        <Box
            sx={{
                flexShrink: 0,
                width: { xs: "281px", md: "330px" },
                height: { xs: "286px", md: "348px" },
                border: "1px solid #00000033",
                borderRadius: { xs: "12px", md: "16px" },
                p: { xs: "20px", md: "20px" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: "10px", md: "14px" },
                bgcolor: "#fff",
                boxShadow: "0 2px 12px rgba(108,16,188,0.06)",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box
                    component="img"
                    src={item.photo}
                    alt={item.name}
                    sx={{
                        width: { xs: "60px", md: "60px" },
                        height: { xs: "60px", md: "60px" },
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                        bgcolor: "rgba(108,16,188,0.1)",
                    }}
                />
                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "18px", md: "18px" },
                            color: "#1E1E1E",
                            lineHeight: "22px",
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: { xs: "16px", md: "16px" },
                            color: "#838383",
                            lineHeight: "24px",
                        }}
                    >
                        {item.role}
                    </Typography>
                </Box>
            </Box>

            <Typography
                sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#838383",
                    flex: 1,
                }}
            >
                {item.quote}
            </Typography>

            <Box
                component="img"
                src={item.companyLogo}
                alt={item.company}
                sx={{
                    height: { xs: "22px", md: "28px" },
                    width: "auto",
                    objectFit: "contain",
                    alignSelf: "flex-start",
                }}
            />
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PlacementsPage
// ─────────────────────────────────────────────────────────────────────────────
export default function PlacementsPage({ config }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const { hero, placementExpertise, techExpertise, testimonials, globalOutcomes, internships } = config;

    const handleScroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
        setTimeout(() => {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 4);
        }, 350);
    };

    return (
        <Box sx={{ bgcolor: "#fff", display: "flex", flexDirection: "column", width: "100%" }}>

            {/* ── 1. HERO ───────────────────────────────────────────────────── */}
            <Box sx={{ ...sectionPad, pt: { xs: "12px", md: "124px" }, pb: { xs: "12px", md: "24px" } }}>
                <Box
                    component="img"
                    src={hero.bgDesktop}
                    alt="Your Tech Journey, Powered by Vedam"
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "100%",
                        height: "auto",
                        borderRadius: "24px",
                        objectFit: "cover",
                    }}
                />
                <Box
                    component="img"
                    src={hero.bgMobile}
                    alt="Your Tech Journey, Powered by Vedam"
                    sx={{
                        display: { xs: "block", md: "none" },
                        width: "100%",
                        height: "auto",
                        borderRadius: "14px",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* ── 2. PROVEN PLACEMENT EXPERTISE ───────────────────────────── */}
            <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "12px", md: "20px" } }}>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Typography sx={gradientText}>{placementExpertise.heading}</Typography>
                    <Typography sx={{ ...bodyText, maxWidth: 840 }}>{placementExpertise.description}</Typography>
                </Box>

                {/* ── Stat cards ── */}
                <StatCards1 stats={placementExpertise.stats} />

                {/* Pre-designed image */}
                <Box
                    component="img"
                    src={placementExpertise.imageDesktop}
                    alt="Placement expertise"
                    sx={{ display: { xs: "none", md: "block" }, width: "100%", height: "auto", borderRadius: "16px" }}
                />
                <Box
                    component="img"
                    src={placementExpertise.imageMobile}
                    alt="Placement expertise"
                    sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", borderRadius: "10px" }}
                />

                {/* Placement Partners */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "14px", md: "20px" }, mt: "40px" }}>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "16px", md: "24px" },
                            color: "#6C10BC",
                        }}
                    >
                        {placementExpertise.partners.heading}
                    </Typography>

                    {/* Desktop — static row */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexWrap: "wrap",
                            gap: "40px",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {placementExpertise.partners.logos.map(({ src, alt }) => (
                            <Box
                                key={alt}
                                component="img"
                                src={src}
                                alt={alt}
                                sx={{
                                    height: "32px",
                                    width: "auto",
                                    objectFit: "contain",
                                    opacity: 0.85,
                                    transition: "opacity 0.2s",
                                    "&:hover": { opacity: 1 },
                                }}
                            />
                        ))}
                    </Box>

                    {/* Mobile — infinite marquee */}
                    <Box
                        sx={{
                            display: { xs: "block", md: "none" },
                            overflow: "hidden",
                            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            "@keyframes marquee": {
                                "0%": { transform: "translateX(0)" },
                                "100%": { transform: "translateX(-50%)" },
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                width: "max-content",
                                animation: "marquee 18s linear infinite",
                                gap: "36px",
                                alignItems: "center",
                                "&:hover": { animationPlayState: "paused" },
                            }}
                        >
                            {[...placementExpertise.partners.logos, ...placementExpertise.partners.logos].map(({ src, alt }, i) => (
                                <Box
                                    key={`${alt}-${i}`}
                                    component="img"
                                    src={src}
                                    alt={alt}
                                    sx={{ height: "16px", width: "auto", objectFit: "contain", flexShrink: 0, opacity: 0.85 }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ── 3. PROVEN TECH EXPERTISE ─────────────────────────────────── */}
            <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "12px", md: "24px" } }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Typography sx={gradientText}>{techExpertise.heading}</Typography>
                    <Typography sx={{ ...bodyText, maxWidth: 840 }}>{techExpertise.description}</Typography>
                </Box>

                {/* ── Stat cards ── */}
                <StatCards stats={techExpertise.stats} />
            </Box>

            {/* ── 4. TESTIMONIALS ──────────────────────────────────────────── */}
            <Box sx={{ px: { xs: "20px", md: "128px" }, display: "flex", flexDirection: "column", gap: { xs: "20px", md: "20px" } }}>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "24px" },
                        color: "#6C10BC",
                        letterSpacing: { xs: "-0.32px", md: "-0.48px" },
                    }}
                >
                    {testimonials.heading}
                </Typography>

                <Box sx={{ position: "relative" }}>
                    {canScrollLeft && (
                        <Box
                            onClick={() => handleScroll("left")}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)",
                                zIndex: 2, width: 40, height: 40, borderRadius: "50%",
                                bgcolor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                                alignItems: "center", justifyContent: "center", cursor: "pointer",
                                border: "1px solid rgba(108,16,188,0.2)",
                            }}
                        >
                            <ChevronLeftIcon sx={{ color: "#6C10BC" }} />
                        </Box>
                    )}
                    {canScrollRight && (
                        <Box
                            onClick={() => handleScroll("right")}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
                                zIndex: 2, width: 40, height: 40, borderRadius: "50%",
                                bgcolor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                                alignItems: "center", justifyContent: "center", cursor: "pointer",
                                border: "1px solid rgba(108,16,188,0.2)",
                            }}
                        >
                            <ChevronRightIcon sx={{ color: "#6C10BC" }} />
                        </Box>
                    )}

                    <Box
                        ref={scrollRef}
                        onScroll={(e) => {
                            const el = e.currentTarget;
                            setCanScrollLeft(el.scrollLeft > 0);
                            setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 4);
                        }}
                        sx={{
                            display: "flex",
                            gap: { xs: "10px", md: "16px" },
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            "&::-webkit-scrollbar": { display: "none" },
                            pb: "4px",
                        }}
                    >
                        {testimonials.items.map((item) => (
                            <TestimonialCard key={item.name} item={item} />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── 5. GLOBAL OUTCOMES ───────────────────────────────────────── */}
            <Box sx={{ ...sectionPad, display: "flex", flexDirection: "column", gap: { xs: "12px", md: "24px" } }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Typography sx={gradientText}>{globalOutcomes.heading}</Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs: "12px", md: "16px" },
                            color: "#1E1E1E",
                        }}
                    >
                        {globalOutcomes.subheading}
                    </Typography>
                </Box>

                {/* Desktop: side by side */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "16px" }}>
                    {globalOutcomes.cards.map((card, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={card.desktop}
                            alt={card.alt}
                            sx={{ flex: 1, width: 0, height: "auto", borderRadius: "20px", objectFit: "cover" }}
                        />
                    ))}
                </Box>

                {/* Mobile: stacked */}
                <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "10px" }}>
                    {globalOutcomes.cards.map((card, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={card.mobile}
                            alt={card.alt}
                            sx={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
                        />
                    ))}
                </Box>
            </Box>

            {/* ── 6. INTERNSHIPS IN FIRST YEAR ─────────────────────────────── */}
            <Box sx={{
                px: { xs: "20px", md: "128px" },
                pb: { xs: "20px", md: "40px" }, display: "flex", flexDirection: "column", gap: { xs: "12px", md: "24px" }
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Typography sx={gradientText}>{internships.heading}</Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs: "12px", md: "16px" },
                            color: "#1E1E1E",
                        }}
                    >
                        {internships.subheading}
                    </Typography>
                </Box>

                {/* Desktop: 2 per row */}
                <Box
                    sx={{
                        display: { xs: "none", md: "grid" },
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                    }}
                >
                    {internships.items.map((item, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={item.desktop}
                            alt={item.alt}
                            sx={{ width: "100%", height: "auto", borderRadius: "14px", objectFit: "cover", display: "block" }}
                        />
                    ))}
                </Box>

                {/* Mobile: 1 per row stacked */}
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {internships.items.map((item, i) => (
                        <Box
                            key={i}
                            component="img"
                            src={item.mobile}
                            alt={item.alt}
                            sx={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "cover", display: "block" }}
                        />
                    ))}
                </Box>
            </Box>

        </Box>
    );
}