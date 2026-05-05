"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const noesisConfig = {
    hero: {
        videoFrame: "/img/noesis/video_frame.webp",
        youtubeId: "gGndsY1Fpho",
        enjoyChip: "/img/noesis/enjoy.webp",
        competeChip: "/img/noesis/complete.webp",
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

const sectionPad = {
    maxWidth: "1280px",
    width: { xs: "100%", md: "1024px", xl: "1280px" },
    mx: "auto",
    px: "10px",
    py: { xs: "20px", md: "40px" },
};

// ─────────────────────────────────────────────────────────────────────────────
// StatsMarquee — RAF-based infinite marquee for both mobile AND desktop
// ─────────────────────────────────────────────────────────────────────────────
function StatsMarquee({ items }) {
    const trackRef = useRef(null);
    const animIdRef = useRef(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track || items.length === 0) return;

        const speed = 0.5;

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
    }, [items]);

    const repeated = [...items, ...items, ...items];

    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #000000 0%, #8800FF 100%)",
                overflow: "hidden",
                py: { xs: "8px", md: "20px" },
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
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
                                fontSize: { xs: "12px", md: "19px" },
                                color: "#FFF",
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
                                fontSize: { xs: "12px", md: "14px" },
                                color: "#FFF",
                                ml: "6px",
                            }}
                        >
                            {item.sub}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ color: "#FF9900", mx: { xs: "12px", md: "24px" }, fontSize: "10px" }}
                        >

                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// VideoThumbnail
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
// HeroSection
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection({ hero }) {
    return (
        <Box
            sx={{
                ...sectionPad,
                pt: { xs: "20px", md: "0px" },
                pb: { xs: "0px", md: "0px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "14px", md: "48px" },
                height: { xs: "240px", md: "100vh" },
                backgroundImage: 'url(/img/noesis/hero-bg.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "16px", md: "40px" },
                    color: "#fff",
                    textAlign: "center",
                    lineHeight: 1.15,
                    letterSpacing: { xs: "-0.4px", md: "-0.8px" },
                }}
            >
                The Official{" "}
                <Box component="span" sx={{ color: "#FF9900" }}>
                    Techno-Cultural Fest
                </Box>
                <br />
                of Vedam School of Technology
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "70%" },
                    px: { xs: "32px", md: "48px" },
                }}
            >
                <Box
                    component="img"
                    src={hero.enjoyChip}
                    alt="ENJOY"
                    sx={{
                        position: "absolute",
                        top: { xs: "-8px", md: "-12px" },
                        left: { xs: "0px", md: "8px" },
                        width: { xs: "72px", md: "100px" },
                        height: "auto",
                        zIndex: 10,
                        pointerEvents: "none",
                    }}
                />
                <VideoThumbnail videoFrame={hero.videoFrame} youtubeId={hero.youtubeId} />
                <Box
                    component="img"
                    src={hero.competeChip}
                    alt="COMPETE"
                    sx={{
                        position: "absolute",
                        bottom: { xs: "-8px", md: "-12px" },
                        right: { xs: "0px", md: "8px" },
                        width: { xs: "88px", md: "120px" },
                        height: "auto",
                        zIndex: 10,
                        pointerEvents: "none",
                    }}
                />
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
            <HeroSection hero={hero} />

            {/* ── 2. STATS BAR — infinite marquee for both desktop and mobile ── */}
            <Box sx={{ pt: "16px", pb: "16px" }}>
                <StatsMarquee items={stats.items} />
            </Box>

            {/* ── 3. ABOUT SECTION ── */}
            <Box sx={{ ...sectionPad, pt: { xs: "24px", md: "40px" }, pb: { xs: "0px", md: "0px" } }}>
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
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "row",
                        gap: "12px",
                        position: "relative",
                        alignItems: "stretch",
                    }}
                >
                    <Box sx={{ flex: "0 0 calc(66.6667% - 6px)", position: "relative" }}>
                        <Box
                            component="img"
                            src={about.imagesDesktop[0]}
                            alt="NOESIS moment 1"
                            sx={{ width: "100%", height: "100%", borderRadius: "14px", objectFit: "cover", display: "block" }}
                        />
                    </Box>
                    <Box sx={{ flex: "0 0 calc(33.3333% - 6px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Box
                            component="img"
                            src={about.imagesDesktop[1]}
                            alt="NOESIS moment 2"
                            sx={{ width: "100%", flex: 1, borderRadius: "14px", objectFit: "cover", display: "block", minHeight: 0 }}
                        />
                        <Box
                            component="img"
                            src={about.imagesDesktop[2]}
                            alt="NOESIS moment 3"
                            sx={{ width: "100%", flex: 1, borderRadius: "14px", objectFit: "cover", display: "block", minHeight: 0 }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
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

                <Box
                    component="img"
                    src={about.imageMobile}
                    alt="NOESIS moments"
                    sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", borderRadius: "12px" }}
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
                    <Box component="span" sx={{ color: "#FF9900" }}>NOESIS'26</Box>
                </Typography>

                <Box sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
                    <Box
                        component="img"
                        src={moments.desktop}
                        alt="Moments from NOESIS 26"
                        sx={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover", display: "block" }}
                    />
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
                            <span style={{ color: "#FF9900", fontSize: "24px" }}>NOESIS 26</span>
                        </Typography>
                    </Box>
                </Box>

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

                <Box
                    sx={{
                        display: { xs: "none", md: "grid" },
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "16px",
                    }}
                >
                    {speakers.desktop.map((s) => (
                        <Box
                            key={s.name}
                            component="img"
                            src={s.img}
                            alt={s.name}
                            sx={{ width: "100%", height: "auto", borderRadius: "12px" }}
                        />
                    ))}
                </Box>

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
