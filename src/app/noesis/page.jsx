"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

// ─────────────────────────────────────────────────────────────────────────────
// Config — all asset paths live in /img/noesis/
// ─────────────────────────────────────────────────────────────────────────────
export const noesisConfig = {
    hero: {
        videoFrame: "/img/noesis/video_frame.webp",
        youtubeId: "gGndsY1Fpho",
    },
    stats: {
        desktopImage: "/img/noesis/3dayevents.webp",
        items: [
            { label: "3 DAYS", sub: "Event Duration" },
            { label: "40+ COLLEGES", sub: "Joined Us" },
            { label: "800+ STUDENTS", sub: "Registered" },
            { label: "157 TEAMS", sub: "Participated" },
            { label: "₹3,00,000", sub: "Prize Pool" },
        ],
    },
    about: {
        logo: "/img/noesis/noesis.webp",
        description:
            "NOESIS is Vedam's annual techno-cultural festival—a student-led event designed to bring together technology, competition, and creativity. From coding and robotics to esports, entrepreneurship, and performances, it creates a multi-disciplinary environment. NOESIS '26 saw participation from 43 institutions and industry leaders, setting the tone for future editions.",
        imagesDesktop: [
            "/img/noesis/img1.webp",
            "/img/noesis/img2.webp",
            "/img/noesis/img3.webp",
            "/img/noesis/img4.webp",
        ],
        imageMobile: "/img/noesis/img_mob.webp",
    },
    sponsors: {
        desktop: "/img/noesis/sponsors.webp",
        mobile: "/img/noesis/sponsors_mob.webp",
    },
    moments: {
        desktop: "/img/noesis/moments.webp",
        mobile: "/img/noesis/moments_mob.webp",
    },
    speakers: {
        desktop: [
            { img: "/img/noesis/mukesh.webp", name: "Mukesh Jain", role: "EVP & CTO, Capgemini" },
            { img: "/img/noesis/gaurav.webp", name: "Gaurav Tripathi", role: "Co-Founder & CTO, Partex.ai" },
            { img: "/img/noesis/saurabh.webp", name: "Saurabh Mangrulkar", role: "Founder, Beep | Shark Tank India" },
        ],
        mobileImage: "/img/noesis/all_three.webp",
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared tokens
// ─────────────────────────────────────────────────────────────────────────────
const sectionPad = {
    px: { xs: "20px", md: "128px" },
    py: { xs: "20px", md: "40px" },
};

// ─────────────────────────────────────────────────────────────────────────────
// MobileStatsMarquee — RAF-based infinite ticker for mobile
// ─────────────────────────────────────────────────────────────────────────────
function MobileStatsMarquee({ items }) {
    const trackRef = useRef(null);
    const posRef = useRef(0);
    const rafRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const speed = 0.5;
        const animate = () => {
            posRef.current -= speed;
            const half = track.scrollWidth / 2;
            if (Math.abs(posRef.current) >= half) posRef.current = 0;
            track.style.transform = `translateX(${posRef.current}px)`;
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const repeated = [...items, ...items, ...items];

    return (
        <Box
            sx={{
                display: { xs: "block", md: "none" },
                background: "linear-gradient(135deg, #1a0030 0%, #0d0018 60%, #1a0030 100%)",
                overflow: "hidden",
                py: "12px",
            }}
        >
            <Box
                ref={trackRef}
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                }}
            >
                {repeated.map((item, i) => (
                    <Box key={i} sx={{ display: "inline-flex", alignItems: "center" }}>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 800,
                                fontSize: "12px",
                                color: "#FF6B00",
                                letterSpacing: "0.04em",
                            }}
                        >
                            {item.label}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                fontSize: "12px",
                                color: "#aaa",
                                ml: "6px",
                            }}
                        >
                            {item.sub}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ color: "#FF6B00", mx: "16px", fontSize: "10px" }}
                        >
                            ◆
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// VideoThumbnail — shows thumbnail with chips + play button; swaps to iframe
// ─────────────────────────────────────────────────────────────────────────────
function VideoThumbnail({ videoFrame, youtubeId }) {
    const [playing, setPlaying] = useState(false);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                borderRadius: { xs: "14px", md: "20px" },
                overflow: "hidden",
                cursor: playing ? "default" : "pointer",
            }}
            onClick={() => !playing && setPlaying(true)}
        >
            {playing ? (
                <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                    <Box
                        component="iframe"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="NOESIS After Movie"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                    />
                </Box>
            ) : (
                <>
                    <Box
                        component="img"
                        src={videoFrame}
                        alt="NOESIS Official After Movie 2026"
                        sx={{ width: "100%", height: "auto", display: "block" }}
                    />

                    {/* ENJOY chip */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: { xs: "12px", md: "20px" },
                            left: { xs: "12px", md: "20px" },
                            bgcolor: "#8800FF",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "10px", md: "13px" },
                            letterSpacing: "0.1em",
                            px: "12px",
                            py: "4px",
                            borderRadius: "20px",
                        }}
                    >
                        ENJOY
                    </Box>

                    {/* COMPETE chip */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: { xs: "12px", md: "20px" },
                            right: { xs: "12px", md: "20px" },
                            bgcolor: "#FF6B00",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "10px", md: "13px" },
                            letterSpacing: "0.1em",
                            px: "12px",
                            py: "4px",
                            borderRadius: "20px",
                        }}
                    >
                        COMPETE
                    </Box>

                    {/* Play button */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "52px", md: "72px" },
                            height: { xs: "52px", md: "72px" },
                            borderRadius: "50%",
                            bgcolor: "rgba(255,255,255,0.92)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                            transition: "transform 0.2s, background 0.2s",
                            "&:hover": {
                                bgcolor: "#fff",
                                transform: "translate(-50%, -50%) scale(1.08)",
                            },
                        }}
                    >
                        <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            sx={{ width: { xs: "22px", md: "30px" }, height: { xs: "22px", md: "30px" } }}
                        >
                            <path d="M8 5.14v14l11-7-11-7z" fill="#1a0030" />
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SpeakerCard
// ─────────────────────────────────────────────────────────────────────────────
function SpeakerCard({ item }) {
    return (
        <Box
            sx={{
                borderRadius: { xs: "12px", md: "16px" },
                overflow: "hidden",
                bgcolor: "#111",
                border: "1px solid #2a2a2a",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                component="img"
                src={item.img}
                alt={item.name}
                sx={{
                    width: "100%",
                    aspectRatio: "1",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                }}
            />
            <Box sx={{ p: { xs: "14px", md: "20px" } }}>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "16px", md: "20px" },
                        color: "#fff",
                        lineHeight: 1.2,
                    }}
                >
                    {item.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "14px" },
                        color: "#888",
                        mt: "4px",
                    }}
                >
                    {item.role}
                </Typography>
            </Box>
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// NoesisPage
// ─────────────────────────────────────────────────────────────────────────────
export default function NoesisPage({ config = noesisConfig }) {
    const { hero, stats, about, sponsors, moments, speakers } = config;

    return (
        <Box sx={{ bgcolor: "#000", minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%" }}>

            {/* ── 1. HERO ── */}
            <Box
                sx={{
                    ...sectionPad,
                    pt: { xs: "20px", md: "80px" },
                    pb: { xs: "0px", md: "0px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: "14px", md: "24px" },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: "22px", md: "40px" },
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1.15,
                        letterSpacing: { xs: "-0.4px", md: "-0.8px" },
                    }}
                >
                    The Official{" "}
                    <Box component="span" sx={{ color: "#FF6B00" }}>
                        Techno-Cultural Fest
                    </Box>
                    <br />
                    of Vedam School of Technology
                </Typography>

                <Box sx={{ width: { xs: "245px", md: "60%" } }}>
                    <VideoThumbnail videoFrame={hero.videoFrame} youtubeId={hero.youtubeId} />
                </Box>
            </Box>

            {/* ── 2. STATS BAR ── */}
            {/* Desktop: pre-designed image */}
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    pt: "16px",
                }}
            >
                <Box
                    component="img"
                    src={stats.desktopImage}
                    alt="Event stats"
                    sx={{ width: "100%", height: "auto", display: "block" }}
                />
            </Box>

            {/* Mobile: RAF infinite marquee */}
            <MobileStatsMarquee items={stats.items} />

            {/* ── 3. ABOUT SECTION ── */}
            <Box
                sx={{
                    ...sectionPad,
                    pt: { xs: "24px", md: "40px" },
                    pb: { xs: "0px", md: "0px" },
                }}
            >
                {/* Desktop: text left, logo right */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "48px",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#ccc",
                            lineHeight: 1.75,
                            flex: 1,
                        }}
                    >
                        {about.description}
                    </Typography>
                    <Box
                        component="img"
                        src={about.logo}
                        alt="NOESIS"
                        sx={{ width: "220px", height: "auto", flexShrink: 0, objectFit: "contain" }}
                    />
                </Box>

                {/* Mobile: logo top, text below */}
                <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "12px" }}>
                    <Box
                        component="img"
                        src={about.logo}
                        alt="NOESIS"
                        sx={{ width: "120px", height: "auto", objectFit: "contain" }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            color: "#ccc",
                            lineHeight: 1.75,
                        }}
                    >
                        {about.description}
                    </Typography>
                </Box>
            </Box>

            {/* ── 4. IMAGE GRID ── */}
            <Box sx={{ ...sectionPad, pt: { xs: "20px", md: "28px" } }}>

                {/* ── Desktop: img1 left 2/3, img2+img3 stacked right 1/3, img4 circle on boundary ── */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "row",
                        gap: "12px",
                        position: "relative",
                        // Fix a shared height so left and right columns are equal
                        alignItems: "stretch",
                    }}
                >
                    {/* Left column — img1, 2/3 width */}
                    <Box
                        sx={{
                            flex: "0 0 calc(66.6667% - 6px)", // 2/3 minus half of 12px gap
                            position: "relative",
                        }}
                    >
                        <Box
                            component="img"
                            src={about.imagesDesktop[0]}
                            alt="NOESIS moment 1"
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "14px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>

                    {/* Right column — img2 and img3 stacked, 1/3 width */}
                    <Box
                        sx={{
                            flex: "0 0 calc(33.3333% - 6px)", // 1/3 minus half of 12px gap
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Box
                            component="img"
                            src={about.imagesDesktop[1]}
                            alt="NOESIS moment 2"
                            sx={{
                                width: "100%",
                                flex: 1,
                                borderRadius: "14px",
                                objectFit: "cover",
                                display: "block",
                                minHeight: 0, // allow flex shrink
                            }}
                        />
                        <Box
                            component="img"
                            src={about.imagesDesktop[2]}
                            alt="NOESIS moment 3"
                            sx={{
                                width: "100%",
                                flex: 1,
                                borderRadius: "14px",
                                objectFit: "cover",
                                display: "block",
                                minHeight: 0,
                            }}
                        />
                    </Box>

                    {/* img4 — circle centred on the column boundary (left: 66.67%), vertically centred */}
                    <Box
                        sx={{
                            position: "absolute",
                            // Place circle centre at the exact column dividing line
                            left: "66.6667%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={about.imagesDesktop[3]}
                            alt="NOESIS circle"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>
                </Box>

                {/* Mobile: single image */}
                <Box
                    component="img"
                    src={about.imageMobile}
                    alt="NOESIS moments"
                    sx={{
                        display: { xs: "block", md: "none" },
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                    }}
                />
            </Box>

            {/* ── 5. SPONSORS ── */}
            <Box sx={{ pt: { xs: "24px", md: "40px" } }}>
                <Box
                    component="img"
                    src={sponsors.desktop}
                    alt="Sponsors"
                    sx={{ display: { xs: "none", md: "block" }, width: "100%", height: "auto", borderRadius: "12px" }}
                />
                <Box
                    component="img"
                    src={sponsors.mobile}
                    alt="Sponsors"
                    sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", borderRadius: "10px" }}
                />
            </Box>

            {/* ── 6. MOMENTS ── */}
            <Box sx={{ ...sectionPad, pt: { xs: "24px", md: "40px" } }}>
                {/* Mobile heading */}
                <Typography
                    sx={{
                        display: { xs: "block", md: "none" },
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        color: "#fff",
                        mb: "12px",
                        letterSpacing: "-0.4px",
                    }}
                >
                    Moments from{" "}
                    <Box component="span" sx={{ color: "#FF6B00" }}>NOESIS'26</Box>
                </Typography>

                {/* Desktop: vertical label + image */}
                <Box
                    sx={{
                        position: "relative",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Box
                        component="img"
                        src={moments.desktop}
                        alt="Moments from NOESIS 26"
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    {/* Vertical Text Overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: "16px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            writingMode: "vertical-rl",
                            textOrientation: "upright",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 800,
                                fontSize: "36px",
                                lineHeight: 1.2,
                                letterSpacing: "0.1em",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <span style={{ color: "#fff", fontSize: "24px" }}>MOMENTS FROM </span>
                            <span style={{ color: "#FF6B00", fontSize: "24px" }}>NOESIS 26</span>
                        </Typography>
                    </Box>
                </Box>

                {/* Mobile: image */}
                <Box
                    component="img"
                    src={moments.mobile}
                    alt="Moments from NOESIS 26"
                    sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", borderRadius: "10px" }}
                />
            </Box>

            {/* ── 7. INDUSTRY LEADERS ── */}
            <Box sx={{ ...sectionPad, pt: { xs: "24px", md: "40px" }, pb: { xs: "40px", md: "80px" } }}>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "32px" },
                        color: "#fff",
                        letterSpacing: { xs: "-0.4px", md: "-0.64px" },
                        mb: { xs: "16px", md: "24px" },
                    }}
                >
                    Industry Leaders on Stage
                </Typography>

                {/* Desktop: 3 speaker cards */}
                <Box
                    sx={{
                        display: { xs: "none", md: "grid" },
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "16px",
                    }}
                >
                    {speakers.desktop.map((s) => (
                        <Box component="img" src={s.img} alt="Speaker" sx={{ width: "100%", height: "auto", borderRadius: "12px" }} />
                    ))}
                </Box>

                {/* Mobile: single combined image */}
                <Box
                    component="img"
                    src={speakers.mobileImage}
                    alt="Industry Leaders on Stage"
                    sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", borderRadius: "12px" }}
                />
            </Box>

        </Box>
    );
}