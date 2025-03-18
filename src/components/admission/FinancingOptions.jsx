import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";

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
      <img src="/img/finance.webp" alt="finance" className="financeStyle" />
    </Box>
  );
};
