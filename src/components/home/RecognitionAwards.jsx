import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const awards = [
    { img: "/img/rewards/rewards1.png" },
    { img: "/img/rewards/rewards2.png" },
    { img: "/img/rewards/rewards3.png" },
    { img: "/img/rewards/rewards4.png" },
];

const RecognitionAwards = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                py: { xs: 4, md: 6 },
                px: { xs: 2, md: 6 }, // Add padding for left alignment
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    textAlign: "left",
                    textTransform: "capitalize",
                    background: "linear-gradient(90deg,  #FB7F05 0%, #6C10BC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Recognition & Awards
            </Typography>

            {/* Crown Graphic */}
            <Box sx={{ mb: 3 }}></Box>

            {/* Awards Card */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1200,
                    background: "linear-gradient(180deg, #CCA866 0%, #FFFFFF 100%)",
                    borderRadius: "32px",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.07)",
                    p: { xs: 3, md: 5 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 4,
                    mx: "auto", // Center the card itself even if the heading is left-aligned
                }}
            >
                {awards.map((award, idx) => {
                    const isCustomSize = idx === 2 || idx === 3;
                    const imageWidth = 400;
                    const imageHeight = 180;
                    const imageStyle = {
                        objectFit: "contain",
                        width: isCustomSize ? "170%" : "180%",
                        height: isCustomSize ? "6500%" : "125%",
                    };

                    return (
                        <Box
                            key={idx}
                            sx={{
                                width: 300,
                                height: 180,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src={award.img}
                                alt={`award-${idx}`}
                                width={imageWidth}
                                height={imageHeight}
                                style={imageStyle}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default RecognitionAwards;
