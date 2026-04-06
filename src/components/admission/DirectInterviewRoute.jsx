"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const PURPLE = "#6C10BC";
const ORANGE = "#FB7F05";
const BLUE = "#4F8DF7";

const evaluationCards = [
  {
    title: "Academic Evaluation",
    Icon: SchoolOutlinedIcon,
    bullets: [
      "JEE / national-level entrance scores",
      "Strong Class 12 performance",
    ],
    footer: "Shortlisted candidates will be contacted directly - no email needed.",
  },
  {
    title: "Technical Evaluation",
    Icon: CodeOutlinedIcon,
    bullets: [
      "Coding profiles (Codeforces, CodeChef, LeetCode)",
      "National-level coding/tech competition rankings",
      "Olympiad qualifications (RMO, INMO, IOI - post Class 8)",
      "International/National Hackathon winners/finalists",
    ],
    footerPrefix: "To apply via this route:",
    footerLinkLabel: "Email your details to connect@vedam.org after submitting the form",
    footerLinkHref: "mailto:connect@vedam.org",
  },
];

const nodeBaseSx = {
  position: "absolute",
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  px: 1,
  py: 0.65,
  borderRadius: "10px",
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 700,
  fontSize: "10px",
  lineHeight: 1,
  boxShadow: "0 10px 24px rgba(17, 24, 39, 0.08)",
  whiteSpace: "nowrap",
  transform: "translate(-50%, -50%)",
};

export const DirectInterviewRoute = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: { xs: "24px", md: "32px" },
        border: "1px solid rgba(108, 16, 188, 0.08)",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, #FFFFFF 100%)",
        boxShadow: "0 18px 44px rgba(17, 24, 39, 0.06)",
        px: { xs: "20px", md: "40px" },
        py: { xs: "24px", md: "40px" },
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
          lineHeight: "120%",
          letterSpacing: "-2%",
          maxWidth: { md: "780px" },
          textAlign: "left",
          alignSelf: "flex-start",
          background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Skip VSAT. Go Straight to the Interview
      </Typography>

      <Typography
        sx={{
          mt: 1.5,
          maxWidth: "760px",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: { xs: "14px", md: "19px" },
          lineHeight: 1.5,
          color: "#3A3A3A",
        }}
      >
        Strong academic or technical profiles can fast-track directly to the
        Interview Round - no VSAT required.
      </Typography>

      <Box
        sx={{
          mt: { xs: 3, md: 4.5 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Box>
          <StepHeader step={1} title="Apply" />
          <Typography
            sx={{
              mt: 1.5,
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: { xs: "14px", md: "18px" },
              lineHeight: 1.55,
              color: "#6A6A6A",
            }}
          >
            Complete the application form &{" "}
            <Box
              component="span"
              sx={{ color: ORANGE, fontWeight: 700 }}
            >
              Upload all required academic documents
            </Box>
          </Typography>

          <Button
            href="https://apply.vedam.org/"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 2.25,
              px: 2.5,
              py: 1.1,
              borderRadius: "999px",
              textTransform: "none",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: { xs: "14px", md: "16px" },
              background: "linear-gradient(90deg, #6C10BC 0%, #7B2CBF 100%)",
              color: "#FFFFFF",
              boxShadow: "0 14px 28px rgba(108, 16, 188, 0.2)",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #5F0FA7 0%, #6C10BC 100%)",
              },
            }}
          >
            Start Your Application
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.1fr) 360px" },
            gap: { xs: 2.5, md: 3, lg: 5 },
            alignItems: "stretch",
          }}
        >
          <Box>
            <StepHeader step={2} title="Get Evaluated" />

            <Box
              sx={{
                mt: 2,
                display: "grid",
                gap: 2,
                maxWidth: { lg: "560px" },
              }}
            >
              {evaluationCards.map((card) => (
                <EvaluationCard key={card.title} {...card} />
              ))}
            </Box>
          </Box>

          <FlowDiagram />
        </Box>

        <SimpleStep
          step={3}
          title="Shortlist Notification"
          description="If selected, you'll receive interview details on your registered email."
        />

        <SimpleStep
          step={4}
          title="Next Steps"
          description="Post-interview, the admission process continues just like the standard VSAT route."
        />
      </Box>
    </Box>
  );
};

function StepHeader({ step, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          px: 1.25,
          py: 0.55,
          borderRadius: "999px",
          backgroundColor: "rgba(108, 16, 188, 0.08)",
          border: "1px solid rgba(108, 16, 188, 0.08)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: 1,
            color: "#505050",
          }}
        >
          {`Step ${step}`}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 800,
          fontSize: { xs: "22px", md: "28px" },
          lineHeight: 1.1,
          color: PURPLE,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

function SimpleStep({ step, title, description }) {
  return (
    <Box>
      <StepHeader step={step} title={title} />
      <Typography
        sx={{
          mt: 1.25,
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: 1.55,
          color: "#7A7A7A",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

function EvaluationCard({
  title,
  Icon,
  bullets,
  footer,
  footerPrefix,
  footerLinkLabel,
  footerLinkHref,
}) {
  return (
    <Box
      sx={{
        borderRadius: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(108, 16, 188, 0.06)",
        boxShadow: "0 18px 38px rgba(17, 24, 39, 0.05)",
        px: { xs: 2, md: 2.5 },
        py: { xs: 2, md: 2.5 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(108, 16, 188, 0.08)",
            color: PURPLE,
          }}
        >
          <Icon sx={{ fontSize: 16 }} />
        </Box>

        <Typography
          sx={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.2,
            color: PURPLE,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{
          mt: 1.75,
          mb: 0,
          pl: 2.25,
          display: "grid",
          gap: 1,
          color: "#8A8A8A",
        }}
      >
        {bullets.map((bullet) => (
          <Typography
            key={bullet}
            component="li"
            sx={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: { xs: "13px", md: "15px" },
              lineHeight: 1.45,
              color: "#8A8A8A",
            }}
          >
            {bullet}
          </Typography>
        ))}
      </Box>

      {(footer || footerPrefix || footerLinkLabel) && (
        <Box sx={{ mt: 1.75 }}>
          {footer && (
            <Typography
              sx={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: 1.45,
                color: BLUE,
              }}
            >
              {footer}
            </Typography>
          )}

          {(footerPrefix || footerLinkLabel) && (
            <Box sx={{ display: "grid", gap: 0.2 }}>
              {footerPrefix && (
                <Typography
                  sx={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: 1.45,
                    color: BLUE,
                  }}
                >
                  {footerPrefix}
                </Typography>
              )}
              {footerLinkLabel && (
                <Typography
                  component="a"
                  href={footerLinkHref}
                  sx={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: 1.45,
                    color: BLUE,
                    textDecoration: "none",
                  }}
                >
                  {footerLinkLabel}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

function FlowDiagram() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: "360px" },
        mx: "auto",
        height: { xs: "380px", md: "440px", lg: "100%" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: "26px",
          p: "2px",
          background:
            "linear-gradient(180deg, rgba(108, 16, 188, 1) 0%, rgba(122, 44, 191, 1) 58%, rgba(251, 127, 5, 1) 100%)",
          boxShadow: "0 18px 40px rgba(108, 16, 188, 0.16)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: "24px",
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <defs>
              <marker
                id="diagram-arrow-purple"
                viewBox="0 0 8 8"
                refX="6.5"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                markerUnits="strokeWidth"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 Z" fill="#9A6EFF" />
              </marker>
              <marker
                id="diagram-arrow-grey"
                viewBox="0 0 8 8"
                refX="6.5"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                markerUnits="strokeWidth"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 Z" fill="#E5E7EB" />
              </marker>
            </defs>
            <path
              d="M50 11.5 V18.5 Q50 22 46.5 22 H32 Q28 22 28 26 V31"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#diagram-arrow-purple)"
            />
            <path
              d="M50 11.5 V18.5 Q50 22 53.5 22 H79 Q82.5 22 82.5 26 V52"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#diagram-arrow-grey)"
            />
            <path
              d="M28 35.5 V46"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
            />
            <path
              d="M28 46 H16 Q12 46 12 50 V55"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 46 H40 Q44 46 44 50 V55"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M82.5 57.5 V82 Q82.5 84 80.5 84 H54 Q50 84 50 88"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#diagram-arrow-grey)"
            />
            <path
              d="M12 59.5 V68 Q12 72 16 72 H24 Q28 72 28 76 V81 Q28 84 31.5 84 H50 V88"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#diagram-arrow-purple)"
            />
            <path
              d="M44 59.5 V68 Q44 72 40 72 H32 Q28 72 28 76"
              fill="none"
              stroke="#9A6EFF"
              strokeWidth="0.42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Box>

          <FlowNode
            label="Submit VSAT Application"
            Icon={DescriptionOutlinedIcon}
            sx={{ top: "11.5%", left: "50%" }}
          />
          <FlowNode
            label="Profile Evaluation"
            Icon={TuneOutlinedIcon}
            sx={{ top: "31%", left: "28%" }}
          />
          <FlowNode
            label="Academic"
            Icon={SchoolOutlinedIcon}
            sx={{ top: "56%", left: "12%" }}
          />
          <FlowNode
            label="Technical"
            Icon={CodeOutlinedIcon}
            sx={{ top: "56%", left: "44%" }}
          />
          <FlowNode
            label="VSAT Assessment"
            Icon={ChecklistRtlOutlinedIcon}
            variant="neutral"
            sx={{ top: "52%", left: "82.5%" }}
          />
          <FlowNode
            label="Shortlist for Interview"
            Icon={AssignmentTurnedInOutlinedIcon}
            variant="highlight"
            sx={{ top: "88%", left: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function FlowNode({ label, Icon, variant = "accent", sx = {} }) {
  const isHighlight = variant === "highlight";
  const isNeutral = variant === "neutral";

  return (
    <Box
      sx={{
        ...nodeBaseSx,
        color: isHighlight ? "#FFFFFF" : isNeutral ? "#323232" : PURPLE,
        backgroundColor: isHighlight
          ? PURPLE
          : isNeutral
            ? "#EAEAEA"
            : "#F2EBFA",
        boxShadow: isHighlight
          ? "0 12px 28px rgba(108, 16, 188, 0.2)"
          : "0 10px 24px rgba(17, 24, 39, 0.08)",
        ...sx,
      }}
    >
      <Icon sx={{ fontSize: 12 }} />
      <Box component="span">{label}</Box>
    </Box>
  );
}
