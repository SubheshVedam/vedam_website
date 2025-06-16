import React from "react";
import { Backdrop, Box } from "@mui/material";
import { detailsData } from "@/constants/data";
import DetailsCard from "./atoms/DetailsCard";

const Clubs = ({ data }) => {
    console.log(data);
    const dataArr = data ? data : detailsData;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
            }}>
            {/* First row with 3 items */}
            {dataArr.slice(0, 3).map((item, index) => (
                <Box
                    key={`testimonial-${index}`}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", sm: "calc(33.33% - 1rem)" },
                        position: "relative",
                    }}>
                    <Backdrop
                        open={true}
                        sx={{
                            position: "absolute",
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            borderRadius: "16px",
                        }}
                    />
                    <DetailsCard
                        image={item.image}
                        bgImage={item.bgImage}
                        description={item.description}
                        title={item.title}
                        sx={{ position: "relative", zIndex: 2 }}
                    />
                </Box>
            ))}
            {/* Second row with 3 items (changed from 50% to 33.33%) */}
            {dataArr.slice(3).map((item, index) => (
                <Box
                    key={`testimonial-${index + 3}`}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", sm: "calc(33.33% - 1rem)" }, // Changed from 50% to 33.33%
                        position: "relative",
                    }}>
                    <Backdrop
                        open={true}
                        sx={{
                            position: "absolute",
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            borderRadius: "16px",
                        }}
                    />
                    <DetailsCard
                        image={item.image}
                        bgImage={item.bgImage}
                        description={item.description}
                        title={item.title}
                        isFeatured={item.isFeatured}
                        sx={{ position: "relative", zIndex: 2 }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default Clubs;