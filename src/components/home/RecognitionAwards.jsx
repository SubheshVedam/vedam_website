import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const awards = [
    { img: "/img/rewards/Image1.png" },
    { img: "/img/rewards/Image2.png" },
    { img: "/img/rewards/Image3.png" },
    { img: "/img/rewards/Image4.png" },
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
                    backgroundImage: {
                        xs: "url(/img/awards/img1.png)",
                        md: "url(/img/awards/img2.png)",
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "32px",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.07)",
                    p: { xs: 3, md: 5 },
                    display: "flex",
                    flexDirection: { xs: "row", md: "row" },
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: { xs: 2, md: '35px' },
                    mx: "auto",
                }}
            >
                {awards.map((award, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: { xs: "calc(50% - 8px)", md: 300 },
                            height: { xs: 150, md: 180 },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "22px",
                            border: "4px solid #FFF",
                            background: "#FFF",
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
            <Box
                sx={{
                    width: { xs: '100%', md: '800px' },
                    margin: '24px auto 0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
            </Box>
        </Box>
    );
};

export default RecognitionAwards;