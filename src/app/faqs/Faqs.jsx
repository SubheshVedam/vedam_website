"use client";

import React, { Fragment, useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { faqsScreenData } from "@/constants/data";
import { PageSection, SectionStack } from "@/components";

const Faqs = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleToggle = (buttonId) => {
    setExpandedButton(expandedButton === buttonId ? null : buttonId);
  };

  // Generate FAQPage schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsScreenData.flatMap((category) =>
      category.questions.map((question) => ({
        "@type": "Question",
        name: question.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: question.description,
        },
      }))
    ),
  };

  const sections = [
    {
      id: "faq-title",
      useCard: false,
      plainWrapperProps: { sx: { width: "100%", marginBottom: { xs: "2rem", md: "3rem" } } },
      render: () => (
        <Typography
          component="h1"
          variant="h1"
          fontFamily={"Inter"}
          sx={{
            fontWeight: "700",
            background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            textAlign: "center",
            lineHeight: "120%",
            letterSpacing: "-2%",
          }}
        >
          Frequently Asked Questions
        </Typography>
      ),
    },
    ...faqsScreenData.map((faqItem, idx) => ({
      id: `faqItem-${idx}`,
      useCard: false,
      plainWrapperProps: { sx: { width: "100%" } },
      render: () => (
        <>
          <Typography
            component="h2"
            variant="h2"
            fontFamily={"Inter"}
            sx={{
              fontWeight: "700",
              background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "clamp(1rem, 2.5vw, 2rem)",
              marginBottom: "1.5rem",
            }}
            lineHeight={"120%"}
            letterSpacing={"-2%"}
          >
            {faqItem.title}
          </Typography>
          <Box
            component="section"
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
              <Box
                component="section"
                key={`faq-item-${item.id}-${item.title}`}
                sx={{ width: "100%" }}
              >
                <Button
                  className="glass-light"
                  color="inherit"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255,255,255,0.28)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.24)",
                    padding: { xs: "10px 20px", md: "30px 40px" },
                    transition:
                      "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 24px rgba(42, 19, 91, 0.16)",
                      backgroundColor: "rgba(255,255,255,0.34)",
                    },
                  }}
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={expandedButton === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                      fontSize: "clamp(14px, 2vw, 20px)",
                      color: "#1B1332",
                      fontFamily: "Inter",
                      lineHeight: "120%",
                      textAlign: "left",
                      textTransform: "none",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <div
                    className={`plusminus ${
                      expandedButton === item.id ? "active" : ""
                    }  `}
                    aria-hidden="true"
                  ></div>
                </Button>
                <Collapse in={expandedButton === item.id}>
                  <Box
                    id={`faq-answer-${item.id}`}
                    component="div"
                    sx={{
                      padding: { xs: "10px 20px", md: "30px 40px" },
                      fontSize: { xs: 11, sm: 18 },
                      color: "#2F1B50",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="body1"
                      sx={{
                        fontSize: { xs: 11, sm: 18 },
                        fontFamily: "Inter",
                        lineHeight: 1.6,
                        color: "#1E1E1E",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            ))}
          </Box>
        </>
      ),
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageSection className="section-gradient">
        <SectionStack sections={sections} />
      </PageSection>
    </>
  );
};

export default Faqs;
