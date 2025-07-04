"use client";
import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { HostelFees } from "./HostelFee";

const ToggleButton = ({ selectedFee, setSelectedFee }) => {
  return (
    <Box display="flex" justifyContent="center" mb={2} px={{ xs: 2, sm: 0 }}>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          borderRadius: { xs: 3, sm: 4.4 },
          padding: { xs: "0.4rem", sm: "0.5rem" },
          display: "flex",
          position: "relative",
          width: "21rem",
          maxWidth: "21rem",
          height: { xs: "3.5rem", sm: "4.1rem" },
          mx: "auto",
          boxShadow:
            "0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03)",
          backdropFilter: "blur(8px)",
          border: "1px solid #E5E2E2",
        }}
      >
        {/* Sliding Highlight */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "0.4rem", sm: "0.485rem" },
            left:
              selectedFee === "tuition"
                ? { xs: "0.6rem", sm: "0.8rem" }
                : { xs: "calc(50% + 0.2rem)", sm: "calc(50% + 0.3rem)" },
            width: { xs: "calc(50% - 0.6rem)", sm: "calc(50% - 0.8rem)" },
            height: { xs: "calc(100% - 0.8rem)", sm: "calc(100% - 1rem)" },
            background: "#6513AC",
            borderRadius: { xs: 2, sm: 2.7 },
            transition: "left 0.4s ease",
            zIndex: 1,
          }}
        />
        {["tuition", "hostel"].map((type) => (
          <Box
            key={type}
            onClick={() => setSelectedFee(type)}
            sx={{
              flex: 1,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: selectedFee === type ? "#fff" : "#6513AC",
              fontWeight: 600,
              height: "100%",
              fontSize: {
                xs: "0.85rem",
                sm: "0.9rem",
                md: "0.95rem",
              },
              px: { xs: 1, sm: 0 },
              textAlign: "center",
              whiteSpace: { xs: "nowrap", sm: "normal" },
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {type === "tuition" ? "Course Fees" : "Hostel/Mess Fees"}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const FeesToggleButton = ({ div1, mdiv1 }) => {
  const [selectedFee, setSelectedFee] = useState("tuition");
  const isMobile = useMediaQuery("(max-width:600px)");

  const getContent = () => {
    if (selectedFee === "tuition") {
      return isMobile ? mdiv1 : div1;
    } else {
      return <HostelFees />;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ToggleButton
        selectedFee={selectedFee}
        setSelectedFee={setSelectedFee}
      />

      <Box mt={2}>{getContent()}</Box>
    </Box>
  );
};

export default FeesToggleButton;