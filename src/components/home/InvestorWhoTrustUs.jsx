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
          display: "flex",
          alignItems: "center",
          gap: "20px",
          minWidth: "200%",
          animation: "scroll 15s linear infinite",
          "@keyframes scroll": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {...homeScreenData.investorWhoTrustUs.data.map((item) => (
          <Image
            key={item.id}
            src={item.img}
            alt={"image"}
            width={135}
            height={60}
            loading="lazy"
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InvestorWhoTrustUs;
