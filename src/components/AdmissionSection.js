"use client";
import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
const AdmissionSection = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Title */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        sx={{
          display: "inline-block",
          background: "linear-gradient(90deg, #6C10BC 10%, #FB7F05 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}>
        Admission & Fees
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
        We look forward to welcoming students who value a talented peer group.
        Only the top 5% will make it to the Vedam batch. The group study and
        peer-to-peer learning increase greatly in such a batch.
      </Typography>

      {/* Card Section */}
      <Box
        sx={{
          backgroundColor: "#ebe2f3",
          color: "#1E1E1E",
          padding: isMobile ? "20px" : "30px",
          borderRadius: "16px",
          border: "solid 1px #6C10BC",
          maxWidth: isMobile ? "100%" : "65%",
          position: "relative",
          textAlign: "start",
        }}>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          fontWeight="bold"
          sx={{ color: "#6C10BC", mb: 2 }}>
          Apply Now for 2025 Admission
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ mb: 2, flexWrap: "nowrap" }}>
          <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
            <strong>Eligibility Criteria:</strong>
            <span style={{ whiteSpace: "normal" }}>
              {" "}
              2024, 2025 12th student with PCM (&gt; 50% in PCM & 12th boards
              Overall)
            </span>
          </Typography>
        </Box>

        {/* Apply Button */}
        <Button
          variant="contained"
          component="a"
          href="https://google.com"
          target="_blank"
          sx={{
            backgroundColor: "white",
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#6C10BC",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#6C10BC" },
          }}>
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default AdmissionSection;
