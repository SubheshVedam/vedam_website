import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import Image from "next/image";

export const FinancingOptions = () => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "left",
          fontFamily: "Inter",
          fontSize: "clamp(12px, 2vw, 20px)",
          color: "rgba(31, 31, 31, 1)",
          lineHeight: "150%",
        }}
      >
        {admissionScreenData.financingOption.description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "center" },
          marginTop: "1rem",
          gap: { xs: "10px", md: "1rem" },
        }}
      >
        {admissionScreenData.financingOption.imageArray.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt="finance"
            width={70}
            height={30}
            className="financeImage"
          />
        ))}
      </Box>
    </Box>
  );
};
