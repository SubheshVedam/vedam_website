"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const posterBackground = "#0C092F";

const outcomeSlides = [
    {
        desktopSrc: "/img/studentSuccess/outcome_home_desktop_1.webp",
        mobileSrc: "/img/studentSuccess/outcome_home_mobile_1.webp",
        alt: "Vedam student outcome highlight",
        desktopHeight: 1386,
    },
    {
        desktopSrc: "/img/studentSuccess/outcome_home_desktop_2.webp",
        mobileSrc: "/img/studentSuccess/outcome_home_mobile_2.webp",
        alt: "Vedam student success highlight",
        desktopHeight: 1383,
    },
];

const videoThumbnail = {
    desktopSrc: "/img/studentSuccess/outcome_home_desktop_3.webp",
    mobileSrc: "/img/studentSuccess/outcome_home_mobile_3.webp",
    alt: "Students at Vedam video thumbnail",
};

export const StudentsAtVedam = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const videoSlideIndex = outcomeSlides.length;
    const totalSlides = outcomeSlides.length + 1;

    useEffect(() => {
        if (playVideo) {
            return undefined;
        }

        const interval = window.setInterval(() => {
            setActiveSlide((currentSlide) => (currentSlide + 1) % totalSlides);
        }, 4000);

        return () => window.clearInterval(interval);
    }, [playVideo, totalSlides]);

    const handleSlideChange = (nextSlide) => {
        setActiveSlide(nextSlide);

        if (nextSlide !== videoSlideIndex) {
            setPlayVideo(false);
        }
    };

    return (
        <Box
            sx={{
                width: "100vw",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: posterBackground,
                py: { xs: "20px", md: "44px" },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1280px",
                    width: { xs: "100%", md: "1024px", xl: "1280px" },
                    mx: "auto",
                    px: "10px",
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                    width: "100%",
                    position: "relative",
                    borderRadius: { xs: "0px", md: "16px" },
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        transform: `translateX(-${activeSlide * 100}%)`,
                        transition: "transform 0.45s ease",
                    }}
                >
                    {outcomeSlides.map((slide) => (
                        <Box
                            key={slide.desktopSrc}
                            sx={{
                                flex: "0 0 100%",
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    width: "100%",
                                }}
                            >
                                <Image
                                    src={slide.desktopSrc}
                                    alt={slide.alt}
                                    width={3114}
                                    height={slide.desktopHeight}
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    width: "100%",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={slide.mobileSrc}
                                    alt={slide.alt}
                                    width={1800}
                                    height={1674}
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </Box>
                        </Box>
                    ))}

                    <Box
                        onClick={() => setPlayVideo(true)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setPlayVideo(true);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Play Students at Vedam video"
                        sx={{
                            flex: "0 0 100%",
                            width: "100%",
                            position: "relative",
                            cursor: playVideo ? "default" : "pointer",
                            outline: "none",
                        }}
                    >
                        {playVideo ? (
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: "220px", md: "420px" },
                                    position: "relative",
                                }}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/XvTqUQL1JIY?autoplay=1&start=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </Box>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "block" },
                                        width: "100%",
                                    }}
                                >
                                    <Image
                                        src={videoThumbnail.desktopSrc}
                                        alt={videoThumbnail.alt}
                                        width={3114}
                                        height={1383}
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                        width: "100%",
                                    }}
                                >
                                    <Image
                                        src={videoThumbnail.mobileSrc}
                                        alt={videoThumbnail.alt}
                                        width={1800}
                                        height={1674}
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                    />
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    mt: { xs: "10px", md: "16px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 1.5, md: 2 },
                }}
            >
                <IconButton
                    onClick={() =>
                        handleSlideChange((activeSlide - 1 + totalSlides) % totalSlides)
                    }
                    aria-label="Previous slide"
                    size="small"
                    sx={{
                        border: "1px solid #D9D9D9",
                        width: 34,
                        height: 34,
                        color: "#1C1C1C",
                    }}
                >
                    <KeyboardArrowLeftRoundedIcon />
                </IconButton>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <Box
                            key={slideIndex}
                            component="button"
                            type="button"
                            onClick={() => handleSlideChange(slideIndex)}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                backgroundColor:
                                    activeSlide === slideIndex ? "#FB7F05" : "#D0D0D0",
                            }}
                        />
                    ))}
                </Box>

                <IconButton
                    onClick={() => handleSlideChange((activeSlide + 1) % totalSlides)}
                    aria-label="Next slide"
                    size="small"
                    sx={{
                        border: "1px solid #D9D9D9",
                        width: 34,
                        height: 34,
                        color: "#1C1C1C",
                    }}
                >
                    <KeyboardArrowRightRoundedIcon />
                </IconButton>
            </Box>
            </Box>
        </Box>
    );
};
