"use client";
import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Speaker = () => {
    const scrollContainerRef = useRef(null);
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const currentTranslateRef = useRef(0);
    const animationIdRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Helper function to extract YouTube video ID from various URL formats
    const getYouTubeVideoId = (url) => {
        // Handle different YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\?\/]+)/,
            /youtube\.com\/embed\/([^&\?\/]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }

        // If it's already just an ID (no URL), return it
        if (url && !url.includes('/') && !url.includes('http')) {
            return url;
        }

        return null;
    };

    // Helper function to get Google Drive embed URL
    const getGoogleDriveEmbedUrl = (url) => {
        const fileIdMatch = url.match(/\/d\/([^\/]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
        }
        return null;
    };

    // Helper function to determine video type and get embed URL
    const getEmbedUrl = (url) => {
        if (url.includes('drive.google.com')) {
            return getGoogleDriveEmbedUrl(url);
        } else {
            const videoId = getYouTubeVideoId(url);
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            }
        }
        return null;
    };

    // YouTube video data
    const speakerVideos = [
        {
            id: 1,
            thumbnail: isMobile ? "/img/speaker/speaker1_mob.png" : "/img/speaker/speaker1.png",
            videoUrl: "https://youtu.be/C1WADUPpx98?si=obOLIeGiFlo4KG6n"
        },
        {
            id: 2,
            thumbnail: isMobile ? "/img/speaker/speaker2_mob.png" : "/img/speaker/speaker2.png",
            videoUrl: "https://www.youtube.com/watch?v=RRnFQXXoAzw"
        },
        {
            id: 3,
            thumbnail: isMobile ? "/img/speaker/speaker3_mob.png" : "/img/speaker/speaker3.png",
            videoUrl: "https://www.youtube.com/watch?v=0Pp7yhV1-1g"
        },
        {
            id: 4,
            thumbnail: isMobile ? "/img/speaker/speaker4_mob.png" : "/img/speaker/speaker4.png",
            videoUrl: "https://youtu.be/Ffd_UBBWrMU"
        },
        {
            id: 5,
            thumbnail: isMobile ? "/img/speaker/speaker5_mob.png" : "/img/speaker/speaker5.png",
            videoUrl: "https://youtu.be/mkRGpgc__xw?si=HYHMvO0RWDB0Pavj"
        },
    ];

    // Speaker images for infinite carousel
    const speakerImages = [
        "/img/speaker/img1.png",
        "/img/speaker/img2.png",
        "/img/speaker/img3.png",
        "/img/speaker/img4.png",
        "/img/speaker/img5.png",
        "/img/speaker/img6.png",
        "/img/speaker/img7.png",
        "/img/speaker/img8.png",
    ];

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const speed = 0.8;
        const itemWidth = 280 + 24;
        const totalItems = speakerImages.length;
        const resetPoint = -(itemWidth * totalItems);

        const animate = () => {
            if (!isPaused) {
                currentTranslateRef.current -= speed;

                if (currentTranslateRef.current <= resetPoint) {
                    currentTranslateRef.current = 0;
                }
            }

            carousel.style.transform = `translateX(${currentTranslateRef.current}px)`;
            animationIdRef.current = requestAnimationFrame(animate);
        };

        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
        }

        animationIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [isPaused, speakerImages.length]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Video Thumbnails Section with Manual Scroll */}
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={scrollLeft}
                    sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 100,
                        opacity: 0.8,
                        backgroundColor: "background.paper",
                        "&:hover": {
                            backgroundColor: "background.paper",
                        },
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>

                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "1.2rem",
                        overflowX: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                        padding: "0 40px",
                    }}
                >
                    {speakerVideos.map((video) => {
                        const embedUrl = getEmbedUrl(video.videoUrl);

                        return (
                            <Box
                                key={video.id}
                                sx={{
                                    minWidth: isMobile ? "280px" : "420px",
                                    height: isMobile ? "210px" : "300px",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    position: "relative",
                                    cursor: "pointer",
                                    flexShrink: 0,
                                }}
                            >
                                {activeVideo === video.id ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        style={{
                                            borderRadius: "16px",
                                            border: "none",
                                        }}
                                        src={embedUrl}
                                        title="Video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <Box
                                        onClick={() => setActiveVideo(video.id)}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            position: "relative",
                                            backgroundImage: `url(${video.thumbnail})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                background: "rgba(0,0,0,0.6)",
                                                padding: "12px 16px",
                                                borderRadius: "100px",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    background: "rgba(0,0,0,0.8)",
                                                    transform: "translate(-50%, -50%) scale(1.1)",
                                                },
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={40}
                                                height={40}
                                                fill="#fff"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        );
                    })}
                </Box>

                <IconButton
                    onClick={scrollRight}
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 100,
                        opacity: 0.8,
                        backgroundColor: "background.paper",
                        "&:hover": {
                            backgroundColor: "background.paper",
                        },
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Box>

            {/* Infinite Carousel Section for Speaker Images */}
            <Box
                sx={{
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                    position: "relative",
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
                    }}
                >
                    {[...speakerImages, ...speakerImages, ...speakerImages].map((image, index) => (
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