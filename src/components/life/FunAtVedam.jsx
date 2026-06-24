"use client";
import React, { useRef, useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const FunAtVedam = () => {
    const scrollContainerRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Helper function to extract YouTube video ID from various URL formats
    const getYouTubeVideoId = (url) => {
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
                return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;
            }
        }
        return null;
    };


    const funVideos = [
        {
            id: "mtw",
            title: "Mumbai Tech Week",
            thumbnail: "https://img.youtube.com/vi/ihSGWbEOVaI/maxresdefault.jpg",
            videoUrl: "https://youtu.be/ihSGWbEOVaI?si=WgbF5wJpz254vzPj"
        },
        {
            id: "24-hour-coding",
            title: "24 Hours Coding",
            thumbnail: "/img/funAtVedam/img4.webp",
            videoUrl: "https://www.youtube.com/watch?v=C5j43mSP2mc"
        },
        {
            id: "3d-printing",
            title: "3D Printing",
            thumbnail: "https://img.youtube.com/vi/IGAGN9f2g9A/maxresdefault.jpg",
            videoUrl: "https://youtu.be/IGAGN9f2g9A?si=ysupbAHGIzAD2ldd"
        },
        {
            id: "vedotsav",
            title: "Vedotsav",
            thumbnail: "/img/funAtVedam/img2.webp",
            videoUrl: "https://www.youtube.com/watch?v=qV7SaAdMabw"
        },
        {
            id: "teachers-day",
            title: "Teachers' Day",
            thumbnail: "/img/funAtVedam/img1.webp",
            videoUrl: "https://www.youtube.com/watch?v=geINf3vdK5k"
        },
    ];

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
        <Box sx={{ position: "relative", width: "100%" }}>
            {/* Desktop Scroll Buttons */}
            {!isMobile && (
                <>
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
                </>
            )}

            {/* Video Thumbnails Section */}
            <Box
                ref={scrollContainerRef}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile ? "flex-start" : "flex-start",
                    gap: isMobile ? "1rem" : "1.2rem",
                    overflowX: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                    padding: isMobile ? "0 0" : "0 40px",
                }}
            >

                {funVideos.map((video) => {
                    const embedUrl = getEmbedUrl(video.videoUrl);

                    return (
                        <Box
                            key={video.id}
                            sx={{
                                minWidth: isMobile ? "100%" : "420px",
                                height: isMobile ? "200px" : "240px",
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
                                    title={video.title}
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
        </Box>
    );
};
