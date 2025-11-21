"use client";
import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { expertsData } from "@/constants/data";
import ExpertCard from "../atoms/ExpertCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Speaker = () => {
    const scrollContainerRef = useRef(null);
    const carouselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const currentTranslateRef = useRef(0);
    const animationIdRef = useRef(null);

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

        const speed = 0.8; // pixels per frame
        const itemWidth = 280 + 24; // width + gap
        const totalItems = speakerImages.length;
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
            {/* Expert Cards Section with Manual Scroll */}
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
                    {expertsData.map((expert, index) => (
                        <ExpertCard
                            key={`expertsCard-${index}`}
                            imageUrl={expert.imageUrl}
                            name={expert.name}
                            logo={expert.logo}
                            designation={expert.designation}
                            info={expert.info}
                            rating={expert.rating}
                            linkedIn={expert.linkedIn}
                        />
                    ))}
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
                    {/* Triple the images for seamless loop */}
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