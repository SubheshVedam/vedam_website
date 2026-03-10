import { admissionScreenData } from "@/constants/data";
import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Eligibility } from "../svg/Eligibility";

export const AdmissionAndFees = () => {
  return (
    <Fragment>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "14px", md: "1rem" },
          fontFamily: "Inter",
          fontWeight: "400",
          lineHeight: "150%",
          color: "rgba(30, 30, 30, 1)",
        }}
      >
        {admissionScreenData.admissionAndFees.description}
      </Typography>
      <Box
        className="glass"
        sx={{
          padding: { xs: "25px 14px", md: "30px 20px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-start" },
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.24)",
          borderRadius: "20px",
          marginTop: "1rem",
          gap: "1rem",
          boxShadow: "0 14px 30px rgba(42, 19, 91, 0.13)",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(1.4rem, 2vw, 40px)",
              color: "#2A135B",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            {admissionScreenData.admissionAndFees.applyNow}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: { xs: "1rem", md: "2rem" },
            }}
          >
            <Eligibility />
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "300",
                  fontFamily: "Inter",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                <strong
                  style={{
                    fontWeight: "450",
                    fontFamily: "Inter",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    lineHeight: "150%",
                  }}
                >
                  {admissionScreenData.admissionAndFees.eligibilityStrong}
                </strong>
                {admissionScreenData.admissionAndFees.eligibilityText}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button
          color="inherit"
          className="liquid-cta"
          sx={{
            background:
              "linear-gradient(124deg, #6C10BC 0%, #2F1B50 44%, #FB7F05 100%)",
            borderRadius: "12px",
            padding: { xs: "10px 20px", md: "15px 25px" },
            boxShadow: "0 14px 30px rgba(42, 19, 91, 0.24)",
            "&:hover": {
              background:
                "linear-gradient(124deg, #6C10BC 0%, #2F1B50 44%, #FB7F05 100%)",
            },
          }}
          href="https://apply.vedam.org/"
          target="_blank"
        >
          <Typography
            variant="button"
            sx={{
              fontSize: "clamp(12px, 2vw, 16px)",
              color: "#FFFFFF",
              fontFamily: "Inter",
              lineHeight: "100%",
              textTransform: "none",
            }}
          >
            Apply Now
          </Typography>
        </Button>
      </Box>
    </Fragment>
  );
};
