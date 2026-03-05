"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export const StudentsAtVedam = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const totalSlides = 2;

    const videoSlideIndex = 1;

    const handleSlideChange = (nextSlide) => {
        setActiveSlide(nextSlide);

        if (nextSlide !== videoSlideIndex) {
            setPlayVideo(false);
        }
    };

    return (
        <Box sx={{ width: "100%" }}>
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
                    <Box sx={{ flex: "0 0 100%", width: "100%" }}>
                        <Box
                            sx={{
                                display: { xs: "none", md: "block" },
                                width: "100%",
                            }}
                        >
                            <Image
                                src="/img/studentSuccess/krishiv_lfx_desktop_2.webp"
                                alt="Student success story at Vedam"
                                width={2560}
                                height={846}
                                style={{ width: "100%", height: "auto" }}
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
                                src="/img/studentSuccess/krishiv%20lfx%20mob.webp"
                                alt="Student success story at Vedam"
                                width={1991}
                                height={2560}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ flex: "0 0 100%", width: "100%", position: "relative" }}>
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
                                        src="/img/studentsAtVedam/img.webp"
                                        alt="Students at Vedam"
                                        width={1200}
                                        height={400}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                        width: "100%",
                                    }}
                                >
                                    <Image
                                        src="/img/studentsAtVedam/imgMob.png"
                                        alt="Students at Vedam"
                                        width={400}
                                        height={600}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Box>

                                <Button
                                    onClick={() => setPlayVideo(true)}
                                    sx={{
                                        position: "absolute",
                                        bottom: { xs: "20px", md: "60px" },
                                        left: { xs: "50%", md: "82px" },
                                        transform: { xs: "translateX(-50%)", md: "none" },
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        fontWeight: 600,
                                        fontSize: { xs: "14px", md: "16px" },
                                        px: { xs: 2, md: 3 },
                                        py: { xs: 1, md: 1.5 },
                                        borderRadius: "10px",
                                        textTransform: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    Watch Video
                                    <Image
                                        src="/img/studentsAtVedam/youtube.png"
                                        alt="YouTube"
                                        width={20}
                                        height={20}
                                    />
                                </Button>
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
                    {[0, 1].map((slideIndex) => (
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
    );
};
