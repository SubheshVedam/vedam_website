"use client";

import React, { Fragment, useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { faqsScreenData } from "@/constants/data";
import { WidthContainer } from "@/components";

const Faqs = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleToggle = (buttonId) => {
    setExpandedButton(expandedButton === buttonId ? null : buttonId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: { xs: "2rem", md: "10rem" },
        paddingBottom: "3rem",
      }}
    >
      {faqsScreenData.map((faqItem, idx) => {
        return (
          <WidthContainer key={`faqItem-${idx}`}>
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
              {faqItem.title}
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
              {faqItem.questions.map((item) => (
                <Fragment key={`faq-item-${item.id}-${item.title}`}>
                  <Button
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
                        textTransform: "none",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <div
                      className={`plusminus ${
                        expandedButton === item.id ? "active" : ""
                      }  `}
                    ></div>
                  </Button>
                  <Collapse in={expandedButton === item.id}>
                    <Box
                      sx={{
                        padding: { xs: "10px 20px", md: "30px 40px" },
                        fontSize: { xs: 11, sm: 18 },
                      }}
                    >
                      {item.description}
                    </Box>
                  </Collapse>
                </Fragment>
              ))}
            </Box>
          </WidthContainer>
        );
      })}
    </Box>
  );
};

export default Faqs;
