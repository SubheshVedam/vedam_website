"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";

export const StudentsAtVedam = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                    borderRadius: { xs: "0px", md: "16px" },
                    overflow: "hidden",
                }}
            >
                {/* If playVideo = true → show YouTube video */}
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
                            src="https://www.youtube.com/embed/eq8HnUDuN0E?autoplay=1&si=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </Box>
                ) : (
                    <>
                        {/* Desktop Image */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "block" },
                                width: "100%",
                            }}
                        >
                            <Image
                                src="/img/studentsAtVedam/img1.png"
                                alt="Students at Vedam"
                                width={1200}
                                height={400}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>

                        {/* Mobile Image */}
                        <Box
                            sx={{
                                display: { xs: "block", md: "none" },
                                width: "100%",
                            }}
                        >
                            <Image
                                src="/img/studentsAtVedam/imgMobile.png"
                                alt="Students at Vedam"
                                width={400}
                                height={600}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>

                        {/* Watch Video Button */}
                        <Button
                            onClick={() => setPlayVideo(true)}
                            sx={{
                                position: "absolute",
                                bottom: { xs: "20px", md: "80px" },
                                left: { xs: "50%", md: "112px" },
                                transform: { xs: "translateX(-50%)", md: "none" },
                                backgroundColor: "#FFFFFF",
                                color: "#000000",
                                fontWeight: 600,
                                fontSize: { xs: "14px", md: "16px" },
                                px: { xs: 2, md: 3 },
                                py: { xs: 1, md: 1.5 },
                                borderRadius: "8px",
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
    );
};
