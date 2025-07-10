import React from "react";
import { Box } from "@mui/material";
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
            }}
        >
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
                    gap: { xs: 4, md: 0 }, // Add gap in mobile, no gap in desktop
                    mx: "auto",
                }}
            >
                {awards.map((award, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: 300,
                            height: 180,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                transform: idx >= 2 ? "scale(2)" : "scale(1.5)",
                                transition: "transform 0.3s ease",
                            }}
                        >
                            <Image
                                src={award.img}
                                alt={`award-${idx}`}
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RecognitionAwards;
