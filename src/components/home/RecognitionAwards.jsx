import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const awards = [
    { img: "/img/rewards/img1.png" },
    { img: "/img/rewards/img2.png" },
    { img: "/img/rewards/img3.png" },
    { img: "/img/rewards/img4.png" },
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
                    p: { xs: 3, md: '27px' },
                    display: "flex",
                    flexDirection: { xs: "row", md: "row" },
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: { xs: 2, md: '10px' },
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
                            borderRadius: '24px',
                            backgroundColor: 'white',
                            px: '7px',
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
            <Box
                sx={{
                    width: { xs: '100%', md: '800px' },
                    margin: '24px auto 0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        fontSize: '6px',
                        lineHeight: '120%',
                        letterSpacing: '-2%',
                        color: '#1E1E1E',
                        textAlign: 'center',
                        width: '100%',
                        display: 'block',
                    }}
                >
                    *Recognitions Earned by SET Education's Parent Organization
                </span>
            </Box>
        </Box>
    );
};

export default RecognitionAwards;