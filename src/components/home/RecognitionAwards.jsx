import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { homeScreenData } from "@/constants/data";

const awards = [
    { img: "/img/rewards/Image1.webp" },
    { img: "/img/rewards/Image2.webp" },
    { img: "/img/rewards/Image3.webp" },
    { img: "/img/rewards/Image4.webp" },
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
                    backgroundImage: {
                        xs: "url(/img/awards/img1.webp)",
                        md: "url(/img/awards/img2.webp)",
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: { sx: "0px", md: '32px' },
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.07)",
                    p: { xs: 3, md: '27px' },
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
                            height: { xs: 160, md: 250 },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: { xs: '10px', md: '22px' },
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                padding: { xs: 1, md: 2 },
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
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography
                    variant={"subtitle1"}
                    textAlign={"center"}
                    sx={{
                        marginTop: { xs: "16px", md: "32px" },
                        fontSize: { xs: "6px", md: "8px" },
                        fontFamily: "Inter",
                        color: "#1E1E1E",
                        lineHeight: "150%",
                    }}
                >
                    {homeScreenData.Recognitionawards.bottomText}
                </Typography>
            </Box>

        </Box>
    );
};

export default RecognitionAwards;