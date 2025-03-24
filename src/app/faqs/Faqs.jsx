"use client";

import React, { Fragment, useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { faqsScreenData } from "@/constants/data";
import { WidthContainer } from "@/components";
import Image from "next/image";

const Faqs = () => {
  const [expandedButton, setExpandedButton] = useState(0);

  const handleToggle = (buttonId) => {
    setExpandedButton(expandedButton === buttonId ? null : buttonId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: { xs: "2rem", md: "10rem" },
        paddingBottom: "3rem",
      }}
    >
      <WidthContainer>
        <Typography
          variant="h4"
          fontFamily={"Inter"}
          style={{
            fontWeight: "700",
            background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
          }}
          lineHeight={"120%"}
          letterSpacing={"-2%"}
        >
          {faqsScreenData.title}
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          {faqsScreenData.questions.map((item) => (
            <Fragment>
              <Button
                key={item.id}
                color="inherit"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: { xs: "10px 20px", md: "30px 40px" },
                }}
                onClick={() => handleToggle(item.id)}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontSize: "clamp(14px, 2vw, 20px)",
                    color: "#1E1E1E",
                    fontFamily: "Inter",
                    lineHeight: "120%",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <div
                  class={`plusminus ${
                    expandedButton === item.id ? "active" : ""
                  }  `}
                ></div>
              </Button>
              <Collapse in={expandedButton === item.id}>
                <Box sx={{ padding: { xs: "10px 20px", md: "30px 40px" } }}>
                  {item.description}
                </Box>
              </Collapse>
            </Fragment>
          ))}
        </Box>
      </WidthContainer>
    </Box>
  );
};

export default Faqs;
