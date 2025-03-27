import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { homeScreenData } from "@/constants/data";

export const InvestorWhoTrustUs = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        position: "relative",
        "&:hover div": { animationPlayState: "paused" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          flexWrap: "nowrap",
          animation: "scroll 15s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {...homeScreenData.investorWhoTrustUs.data.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={"image"}
            loading="lazy"
            style={{ objectFit: "contain",width:'30%' }}
            className="investorsImage"
          />
        ))}
      </Box>
    </Box>
  );
};

export default InvestorWhoTrustUs;
