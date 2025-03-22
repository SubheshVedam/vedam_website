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
          fontWeight: "500",
          lineHeight: "150%",
          color: "rgba(30, 30, 30, 1)",
        }}
      >
        {admissionScreenData.admissionAndFees.description}
      </Typography>
      <Box
        sx={{
          padding: { xs: "25px 14px", md: "30px 20px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-start" },
          justifyContent: "space-between",
          border: "1px solid rgba(108, 16, 188, 0.6)",
          background: "rgba(108, 16, 188, 0.1)",
          borderRadius: "16px",
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(1.4rem, 2vw, 40px)",
              color: "rgba(108, 16, 188, 1)",
              fontWeight: "700",
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
                  fontWeight: "500",
                  fontFamily: "Inter",
                  fontSize: "clamp(14px, 2vw, 16px)",
                }}
              >
                <strong
                  style={{
                    fontWeight: "700",
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
          sx={{
            backgroundColor: "#6C10BC",
            borderRadius: "8px",
            padding: { xs: "10px 20px", md: "15px 25px" },
          }}
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
