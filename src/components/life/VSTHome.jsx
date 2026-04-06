"use client";
import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export const VSTHome = () => {
    const [showIframe, setShowIframe] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

    // Carousel refs and state
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const currentTranslateRef = useRef(0);
    const animationIdRef = useRef(null);

    const innovationImages = [
        "/img/vst_home/Image_1.jpg",
        "/img/vst_home/Image_2.jpg",
        "/img/vst_home/Image_3.jpg",
        "/img/vst_home/Image_4.jpg",
    ];

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const speed = 0.8; // pixels per frame
        const itemWidth = 280 + 24; // width + gap
        const totalItems = innovationImages.length;
        const resetPoint = -(itemWidth * totalItems);

        const animate = () => {
            if (!isPaused) {
                currentTranslateRef.current -= speed;

                // Reset position when we've moved exactly one set of images
                if (currentTranslateRef.current <= resetPoint) {
                    currentTranslateRef.current = 0;
                }
            }

            // Always update the transform, whether paused or not
            carousel.style.transform = `translateX(${currentTranslateRef.current}px)`;
            animationIdRef.current = requestAnimationFrame(animate);
        };

        // Cancel any existing animation before starting a new one
        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
        }

        animationIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [isPaused, innovationImages.length]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", m: 0 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mb: { xs: 0, sm: 2 }
                }}>
                <Typography
                    sx={{
                        color: "#000",
                        textAlign: "left",
                        fontFamily: "Inter",
                        fontSize: {
                            xs: "12px", // 0px and up
                            sm: "18px", // 600px and up
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        letterSpacing: "-0.72px",
                    }}>
                    Your right Computer Science [AI] program that delivers an AI-first curriculum with industry projects, Innovation Labs, advanced tools, and real-world engineering exposure.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    // position: "relative",
                    width: "auto",
                    // height: isMobile ? "220px" : isLarge ? "680px" : "580px",
                    // height: "auto",
                    height: isMobile ? "220px" : isLarge ? "565px" : "580px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    borderRadius: "16px",
                }}>
                {showIframe ? (
                    <iframe
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: "16px",
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
                        onClick={() => {
                            setVideoUrl(
                                "https://www.youtube.com/embed/uxcx-c8Cxaw?autoplay=1&si=0"

                            );
                            setShowIframe(true);
                        }}
                        sx={{
                            cursor: "pointer",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            // borderRadius: "16px",
                        }}>
                        <Image
                            src="/img/vst_home/thumbnail.jpg"
                            alt="Video thumbnail"
                            width={2000}
                            height={1200}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "16px",
                            }}
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
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                fill="#fff"
                                viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Infinite Carousel Section */}
            <Box
                sx={{
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                    position: "relative",
                    marginTop: "33px",
                    height: "200px",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <Box
                    ref={carouselRef}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "24px",
                        flexWrap: "nowrap",
                        willChange: "transform",
                    }}>
                    {/* Triple the images for seamless loop */}
                    {[...innovationImages, ...innovationImages, ...innovationImages].map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "280px",
                                height: "200px",
                                borderRadius: "20px",
                                overflow: "hidden",
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};