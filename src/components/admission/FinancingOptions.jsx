import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import { VST_FinancingOptions } from "@/constants/data";

export const FinancingOptions = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      {/* Heading */}
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#2B217F",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.1,
          }}>
          Financing
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FF9000",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.1,
            mb: 2,
          }}>
          Options
        </Typography>
      </Box>
      {/* Description */}
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "left",
          fontFamily: "Inter",
          fontSize: "clamp(12px, 2vw, 20px)",
          color: "rgba(31, 31, 31, 1)",
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
            <span
              role="img"
              aria-label="emi"
              style={{ fontSize: 28, marginRight: 8 }}>
              💸
            </span>
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
            <span
              role="img"
              aria-label="bank"
              style={{ fontSize: 28, marginRight: 8 }}>
              🏦
            </span>
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
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h6"
          sx={{ color: "#FF9000", fontWeight: 700, mb: 2 }}>
          Our Financing Partners
        </Typography>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
          }}>
          <img
            src="/img/finance.webp"
            alt="ICICI"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          <img
            src="/img/jodo.png"
            alt="Jodo"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          <img
            src="/img/propelld.png"
            alt="Propelld"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        </Box> */}
      </Box>
    </Box>
  );
};
