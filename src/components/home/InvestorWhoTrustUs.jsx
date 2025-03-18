import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const InvestorWhoTrustUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        overflowX: "auto",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        position: "relative",
        "&:hover div": { animationPlayState: "paused" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {...homeScreenData.investorWhoTrustUs.data.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={"image"}
            loading="lazy"
            style={{ objectFit: "contain" }}
            className="investorsImage"
          />
        ))}
      </Box>
    </Box>
  );
};

export default InvestorWhoTrustUs;
