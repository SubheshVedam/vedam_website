import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import { VST_FinancingOptions } from "@/constants/data";

export const FinancingOptions = () => {
  return (
    <Box sx={{ pt: { xs: 2, md: 4 } }}>
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
        {admissionScreenData.financingOption.description}
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
          sx={{
            flex: 1,
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            p: 3,
            mb: { xs: 2, md: 0 },
            border: "1px solid #eee",
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
            <Typography variant="h6" sx={{ color: "#FF9000", fontWeight: 700 }}>
              Loan at Zero Cost EMI
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1F1F1F",
              fontFamily: "Inter",
              fontSize: 16,
            }}>
            You can pay your annual course fee in monthly installments with no
            interest, no processing fee, and no hidden charges.
            <br /> We’ve partnered trusted fintech company working with over
            2,500 institutions, to offer this option.
          </Typography>
        </Box>
        {/* Card 2 */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            p: 3,
            border: "1px solid #eee",
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
            <Typography variant="h6" sx={{ color: "#FF9000", fontWeight: 700 }}>
              Education Loan from a Bank
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1F1F1F",
              fontFamily: "Inter",
              fontSize: 16,
            }}>
            You can also access education loans through our trusted banking
            partners, making it easier for you to finance your education with
            flexible repayment options and competitive interest rates.
          </Typography>
        </Box>
      </Box>
      {/* Financing Partners */}
      <Box sx={{ textAlign: "center", mb: 0 }}>
        <Typography
          variant="h6"
          sx={{ color: "#FF9000", fontWeight: 700, mb: 1 }}>
          Our Financing Partners
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}>
          <img
            src="/img/financingOptions/icici-bank.svg"
            alt="Icici Bank"
            width={58}
            height={58}
          />
          <img
            src="/img/financingOptions/jodo-logo-v2.svg"
            alt="Jodo"
            width={58}
            height={58}
          />
          <img
            src="/img/financingOptions/propelledLoan.png"
            alt="Propelled"
            width={58}
            height={58}
          />
        </Box>
      </Box>
    </Box>
  );
};
