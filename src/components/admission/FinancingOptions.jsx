import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import { VST_FinancingOptions } from "@/constants/data";
import { FinancingPartners } from './FinancingPartners'

export const FinancingOptions = () => {
  return (
    <Box sx={{ pt: { xs: 0, md: 0 } }}>
      {/* Description */}
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "left",
          color: "rgba(31, 31, 31, 1)",
          fontFamily: "Inter",
          fontSize: "clamp(14px, 2vw, 20px)",
          fontWeight: "500",
          lineHeight: "150%",
          mb: 4,
        }}>
        {VST_FinancingOptions.descriptionMain}
      </Typography>
      {/* Financing Options Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mb: 5,
        }}>
        {/* Card 1 */}
        <Box
          className="glass-light glass-hover-lift"
          sx={{
            flex: 1,
            bgcolor: "rgba(255,255,255,0.3)",
            borderRadius: "20px",
            boxShadow: "0 12px 30px rgba(36, 19, 72, 0.12)",
            p: 3,
            mb: { xs: 2, md: 0 },
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img
              src="/img/financingOptions/loanIcon.png"
              alt="Loan Icon"
              width={28}
              height={28}
              style={{ marginRight: 8 }}
            />
            <Typography component="h4" variant="h4" sx={{ color: "#FF9000", fontWeight: 700 }}>
              Loan at Zero Cost EMI
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1F1F1F",
              fontFamily: "Inter",
              fontSize: 16,
            }}>
            {VST_FinancingOptions.body.card1.description}
          </Typography>
        </Box>
        {/* Card 2 */}
        <Box
          className="glass-light glass-hover-lift"
          sx={{
            flex: 1,
            bgcolor: "rgba(255,255,255,0.3)",
            borderRadius: "20px",
            boxShadow: "0 12px 30px rgba(36, 19, 72, 0.12)",
            p: 3,
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img
              src="/img/financingOptions/eduLoanIcon.png"
              alt="Loan Icon"
              width={28}
              height={28}
              style={{ marginRight: 8 }}
            />
            <Typography component="h4" variant="h4" sx={{ color: "#FF9000", fontWeight: 700 }}>
              Education Loan from a Bank
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1F1F1F",
              fontFamily: "Inter",
              fontSize: 16,
            }}>
            {VST_FinancingOptions.body.card2.description}
          </Typography>
        </Box>
      </Box>
      {/* Financing Partners */}
      <FinancingPartners />

    </Box>
  );
};
