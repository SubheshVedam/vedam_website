"use client";

/**
 * About Us page — implements Figma design:
 * https://www.figma.com/design/ieqDb3rnKzrOG8QAxgVKy2/Vedam-website?node-id=1304-2
 * Sections: Our Source <Code>, About Our Co-founder
 */
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { PageSection, SectionStack } from "@/components";
import {
  aboutSourceCodeData,
  teamVedamScreenData,
} from "@/constants/data";

// Design tokens from Figma (Vedam website)
const SPACE = 8; // 8px grid
const colors = {
  purple: "#6C10BC",
  purpleLight: "#5B4B8A",
  purpleMuted: "#8B7A9E",
  orange: "#FB7F05",
  orangeDark: "#E85A00",
  green: "#22c55e",
  gold: "#D4A017",
  text: "#1F1F1F",
  textSecondary: "#444",
  bgCard: "#fff",
  bgMuted: "#E8E4ED",
};
const gradientPurple = `linear-gradient(90deg, ${colors.purple} 0%, ${colors.orange} 100%)`;

const figmaAssets = {
  landingVector: "/img/about/figma/landing-vector.svg",
  cardOutcomeIcon: "/img/about/figma/card-outcome-icon.png",
  cardMeritBadge: "/img/about/figma/card-merit-badge.png",
  cardIndustryIcon: "/img/about/figma/card-industry-icon.png",
  checkmark: "/img/about/figma/checkmark.png",
  techMindsPhoto: "/img/about/figma/tech-minds-photo.png",
  cofoundenVector: "/img/about/figma/cofounder-vector.svg",
  pillIconTechLeader: "/img/about/figma/pill-icon-vector.svg",
  pillIconInnerTechLeader: "/img/about/figma/pill-apple-intelligence.png",
  pillBgScalable: "/img/about/figma/pill-bg-scalable.svg",
  pillBgEntrepreneur: "/img/about/figma/pill-bg-entrepreneur.svg",
  pillIconScalable: "/img/about/figma/pill-icon-scalable.png",
  pillIconEntrepreneur: "/img/about/figma/pill-icon-entrepreneur.png",
};

// Value prop icons for "Our Source <Code>"
const valuePropIcons = {
  merit: EmojiEventsOutlinedIcon,
  outcome: TrendingUpOutlinedIcon,
  industry: SendOutlinedIcon,
};

// Attribute icons for Co-founder pills
const attributeIcons = {
  tech: SettingsOutlinedIcon,
  impact: LightbulbOutlinedIcon,
  entrepreneur: ScheduleOutlinedIcon,
};

const TeamVedam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sourceCodeSection = {
    id: "our-source-code",
    useCard: false,
    render: () => (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "auto", lg: 380 },
        }}
      >
        {/* Left: Copy — takes up ~55% width on desktop, full width on mobile */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.25, md: 1.75 },
            width: { xs: "100%", md: "45%", lg: "55%" },
          }}
        >
          {/* Unified gradient title — matches Co-founder heading style */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "2rem" },
                background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: { xs: "-0.48px", md: "-0.72px" },
                lineHeight: 1,
              }}
            >
              Our Source &lt;Code&gt;
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", md: "1.125rem" },
              color: "#1F1F1F",
              lineHeight: 1.5,
            }}
          >
            {aboutSourceCodeData.problemStatement}
          </Typography>

          {/* Mobile-only hero image — natural aspect ratio */}
          <Box
            component="img"
            src={aboutSourceCodeData.heroImage}
            alt=""
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "auto",
              borderTopRightRadius: "22px",
              borderBottomLeftRadius: "22px",
            }}
          />

          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: { xs: "0.8125rem", md: "1.0625rem" },
              color: "#1F1F1F",
              lineHeight: 1.5,
            }}
          >
            {aboutSourceCodeData.whyHeading}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: { xs: "0.75rem", md: "1rem" },
              color: "#444",
              lineHeight: 1.65,
            }}
          >
            {aboutSourceCodeData.whyBody}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: { xs: "0.75rem", md: "1rem" },
              color: "#444",
              lineHeight: 1.65,
            }}
          >
            {aboutSourceCodeData.solutionIntro.split("Vedam School of Technology")[0]}
            <Box component="span" sx={{ color: colors.purple, fontWeight: 600 }}>
              Vedam School of Technology
            </Box>
            {aboutSourceCodeData.solutionIntro.split("Vedam School of Technology")[1] ?? ""}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "7px 13px", md: 3 },
              mt: { xs: 0.5, md: 1.5 },
              flexWrap: "wrap",
            }}
          >
            {aboutSourceCodeData.highlights.map((text, i) => (
              <Box
                key={i}
                sx={{ display: "flex", alignItems: "center", gap: { xs: "2px", md: 1 } }}
              >
                <Box
                  component="img"
                  src={figmaAssets.checkmark}
                  alt=""
                  sx={{ width: { xs: 12, md: 19 }, height: { xs: 13, md: 20 } }}
                />
                <Typography
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.75rem", md: 16 },
                    fontWeight: 400,
                    color: colors.text,
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Mobile-only value prop cards row */}
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
            }}
          >
            {/* Merit Driven card */}
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 80, height: 80,
                  borderRadius: "14px",
                  bgcolor: "#fff",
                  borderLeft: "2px solid #F97D03",
                  overflow: "hidden",
                  display: "flex", alignItems: "flex-end", justifyContent: "center",
                  pb: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <Typography sx={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 10, color: "#1E1E1E", textAlign: "center", lineHeight: 1.2 }}>
                  Merit<br />Driven
                </Typography>
              </Box>
              <Box
                component="img"
                src={figmaAssets.cardMeritBadge}
                alt=""
                sx={{ position: "absolute", top: "3px", left: "21px", width: 37, height: 36, borderRadius: "14px", pointerEvents: "none" }}
              />
            </Box>
            {/* Outcome Focused card */}
            <Box
              sx={{
                width: 80, height: 80,
                borderRadius: "14px",
                bgcolor: "#fff",
                borderLeft: "2px solid #8A18FF",
                position: "relative",
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                pb: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src={figmaAssets.cardOutcomeIcon}
                alt=""
                sx={{ position: "absolute", top: -8, left: "24px", width: 27, height: 42, pointerEvents: "none" }}
              />
              <Typography sx={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 10, color: "#1E1E1E", textAlign: "center", lineHeight: 1.2 }}>
                Outcome<br />Focused
              </Typography>
            </Box>
            {/* Industry Relevant card */}
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 80, height: 80,
                  borderRadius: "14px",
                  bgcolor: "#fff",
                  borderLeft: "2px solid #F97D03",
                  overflow: "hidden",
                  display: "flex", alignItems: "flex-end", justifyContent: "center",
                  pb: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <Typography sx={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 10, color: "#1E1E1E", textAlign: "center", lineHeight: 1.2 }}>
                  Industry<br />Relevant
                </Typography>
              </Box>
              <Box
                component="img"
                src={figmaAssets.cardIndustryIcon}
                alt=""
                sx={{ position: "absolute", top: 10, left: "22px", width: 36, height: 23, borderRadius: "14px", pointerEvents: "none" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Right: Landing vector + cards — absolutely positioned on desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: -22,
            right: { md: -50, lg: -150 },
            width: 596,
            height: 596,
            pointerEvents: "none",
            transform: "scale(0.9)",
            transformOrigin: "top left",
          }}
        >
          {/* Vector background: fills the container */}
          <Box
            component="img"
            src={figmaAssets.landingVector}
            alt=""
            sx={{
              position: "absolute",
              top: 22,
              left: 16,
              width: 565,
              height: 565,
              pointerEvents: "none",
            }}
          />

          {/* Robo station circle — right side of vector */}
          <Box
            sx={{
              position: "absolute",
              top: 146,
              left: 140,
              width: 317,
              height: 317,
              borderRadius: "50%",
              clipPath: "circle(50% at 50% 50%)",
              overflow: "hidden",
              opacity: 1,
            }}
          >
            <Box
              component="img"
              src={aboutSourceCodeData.heroImage}
              alt=""
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </Box>

          {/* Outcome Focused card */}
          <Box
            sx={{
              position: "absolute",
              top: 72,
              left: 9,
              width: 136,
              height: 136,
              borderRadius: "30px",
              backgroundColor: "#fff",
              borderLeft: "6px solid #8A18FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              overflow: "visible",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              component="img"
              src={figmaAssets.cardOutcomeIcon}
              alt=""
              sx={{ position: "absolute", top: -12, left: 44, width: 47, height: 73 }}
            />
            <Typography
              sx={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 16,
                color: "#1E1E1E",
                textAlign: "center",
                lineHeight: 1.1,
                mt: 5,
              }}
            >
              Outcome<br />Focused
            </Typography>
          </Box>

          {/* Merit Driven card */}
          <Box
            sx={{
              position: "absolute",
              top: 54,
              right: 44,
              width: 108,
              height: 108,
              borderRadius: "30px",
              overflow: "hidden",
              backgroundColor: "#fff",
              borderLeft: "6px solid #F97D03",
              boxSizing: "border-box",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: 50,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 16,
                color: "#1E1E1E",
                textAlign: "center",
                lineHeight: "normal",
                whiteSpace: "nowrap",
              }}
            >
              Merit<br />Driven
            </Typography>
          </Box>

          {/* Merit badge — centered horizontally over the card */}
          <Box
            component="img"
            src={figmaAssets.cardMeritBadge}
            alt=""
            sx={{
              position: "absolute",
              top: 45,
              right: 75,
              width: 46,
              height: 45,
              borderRadius: "30px",
              pointerEvents: "none",
            }}
          />

          {/* Industry Relevant card */}
          <Box
            sx={{
              position: "absolute",
              top: 271,
              left: 0,
              width: 89,
              height: 89,
              borderRadius: "20px",
              backgroundColor: "#fff",
              borderLeft: "3px solid #F97D03",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              component="img"
              src={figmaAssets.cardIndustryIcon}
              alt=""
              sx={{ width: 36, height: 23 }}
            />
            <Typography
              sx={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 16,
                color: "#1E1E1E",
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              Industry<br />Relevant
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
  };

  const cofounderSection = teamVedamScreenData.map((section, index) => ({
    id: `co-founder-${index}`,
    useCard: false,
    plainWrapperProps: {
      sx: { marginBottom: { xs: "2rem", md: "3rem" } },
    },
    render: () => (
      <Box
        sx={{
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          backgroundColor: colors.bgCard,
          padding: { xs: "14px", md: 3 },
        }}
      >
        {/* Section heading */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 400,
              fontSize: { xs: "0.75rem", md: "1rem" },
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.24px",
              lineHeight: 1,
            }}
          >
            {section.subtitle}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: "2rem" },
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: { xs: "-0.48px", md: "-0.72px" },
              lineHeight: 1,
            }}
          >
            {section.subtitle2}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2.5, md: 3 },
            width: "100%",
          }}
        >
          {section.data?.map((item) => (
            <React.Fragment key={item.id}>
              {/* ── Image block (order-1 on mobile, order-2 on desktop) ── */}
              <Box
                sx={{
                  order: { xs: 1, md: 2 },
                  flex: { xs: "0 0 auto", md: "0 0 auto" },
                  width: { xs: "100%", md: "auto" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                  gap: 1,
                  minWidth: 0,
                }}
              >
                {/* Mobile: pre-composed card image (orange bg + decoration + name pill all baked in) */}
                <Box
                  component="img"
                  src="/img/about/piyush-nangru-cofounder-card.webp"
                  alt={item.name}
                  sx={{
                    display: { xs: "block", md: "none" },
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />

                {/* Desktop image layout — same pre-composed card */}
                <Box
                  component="img"
                  src="/img/about/piyush-nangru-cofounder-card.webp"
                  alt={item.name}
                  sx={{
                    display: { xs: "none", md: "block" },
                    width: 300,
                    maxWidth: "40vw",
                    height: "auto",
                    borderRadius: "16px",
                    flexShrink: 0,
                  }}
                />
              </Box>

              {/* ── Text block (order-2 on mobile, order-1 on desktop) ── */}
              <Box
                sx={{
                  order: { xs: 2, md: 1 },
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1, md: 1.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    color: "#2B135C",
                    lineHeight: 1.55,
                  }}
                >
                  {section.intro}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    color: "#1E1E1E",
                    lineHeight: 1.55,
                  }}
                >
                  {section.description}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {section.bullets?.map((bullet, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: { xs: "0.75rem", md: "1rem" },
                        color: "#1E1E1E",
                        lineHeight: 1.55,
                      }}
                    >
                      {bullet}
                    </Typography>
                  ))}
                </Box>

                {/* Mobile cards — no icon, 84×37, border-left 1px, justify-between (Figma 1304:627) */}
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "space-between",
                    width: "100%",
                    mt: 0.5,
                  }}
                >
                  {item.attributes?.map((attr, i) => {
                    const borderColors = ["#C200DB", "#F97D03", "#8A18FF"];
                    return (
                      <Box
                        key={i}
                        sx={{
                          width: 84,
                          height: 37,
                          borderRadius: "6px",
                          bgcolor: "#fff",
                          borderLeft: `1px solid ${borderColors[i]}`,
                          boxShadow: "0px 0px 6px 0px rgba(138,24,255,0.27)",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: 10,
                            fontWeight: 400,
                            color: "#000",
                            textAlign: "center",
                            lineHeight: "normal",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {attr.label.replace(" ", "\n")}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                {/* Desktop cards — with unique icons, 200×64, border-left 3px (Figma 1304:1029) */}
                {(() => {
                  const borderColors = ["#C200DB", "#F97D03", "#8A18FF"];
                  const cardIcons = [
                    <Box key="icon-0" sx={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
                      <Box component="img" src={figmaAssets.pillIconTechLeader} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                      <Box component="img" src={figmaAssets.pillIconInnerTechLeader} alt="" sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 27, height: 32, objectFit: "contain" }} />
                    </Box>,
                    <Box key="icon-1" sx={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
                      <Box component="img" src={figmaAssets.pillBgScalable} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                      <Box component="img" src={figmaAssets.pillIconScalable} alt="" sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 22, height: 22, objectFit: "contain" }} />
                    </Box>,
                    <Box key="icon-2" sx={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
                      <Box component="img" src={figmaAssets.pillBgEntrepreneur} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                      <Box component="img" src={figmaAssets.pillIconEntrepreneur} alt="" sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 22, height: 22, objectFit: "contain" }} />
                    </Box>,
                  ];
                  return (
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "22px", mt: 1.5, alignItems: "center" }}>
                      {item.attributes?.map((attr, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "7px",
                            width: 200,
                            height: 64,
                            px: "9px",
                            borderRadius: "18px",
                            bgcolor: "#fff",
                            borderLeft: `3px solid ${borderColors[i]}`,
                            boxShadow: "0px 0px 15px 0px rgba(116,30,205,0.2)",
                            overflow: "hidden",
                          }}
                        >
                          {cardIcons[i]}
                          <Typography
                            sx={{
                              fontFamily: "var(--font-outfit), sans-serif",
                              fontSize: "1rem",
                              fontWeight: 500,
                              color: "#000",
                              lineHeight: 1.3,
                              whiteSpace: "pre-line",
                            }}
                          >
                            {attr.label.replace(" ", "\n")}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  );
                })()}
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    ),
  }));

  const sections = [
    {
      ...sourceCodeSection,
      plainWrapperProps: {
        sx: { marginBottom: { xs: "2.5rem", md: "3.5rem" } },
      },
    },
    ...cofounderSection,
    {
      id: "about-divider",
      useCard: false,
      render: () => (
        <Box
          sx={{
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            background: "linear-gradient(90deg, #8A18FF 0%, #F97D03 100%)",
            py: "17px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 500,
              fontSize: { xs: "0.75rem", md: 16 },
              color: "#fff",
              textAlign: "center",
            }}
          >
            Vedam is built by tech professionals who have lived the tech journey first hand.
          </Typography>
        </Box>
      ),
      plainWrapperProps: { sx: { marginBottom: { xs: "2rem", md: "3rem" } } },
    },
    {
      id: "tech-minds",
      useCard: false,
      render: () => (
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: { xs: "0.75rem", md: 16 },
              fontWeight: 400,
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 0,
              lineHeight: 1,
            }}
          >
            Meet the
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: 36 },
              lineHeight: 1,
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.72px",
              mb: { xs: 2, md: 2.5 },
            }}
          >
            Tech Minds Behind Vedam
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 2.25 },
              alignItems: { xs: "flex-start", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={figmaAssets.techMindsPhoto}
              alt=""
              sx={{
                width: { xs: "100%", md: 510 },
                maxWidth: "100%",
                height: { xs: 180, md: "auto" },
                aspectRatio: { xs: "auto", md: "510 / 305" },
                width: { xs: "100%", md: "45%" },
                maxWidth: { md: 510 },
                height: { xs: 180, md: 305 },
                borderTopRightRadius: { xs: "22px", md: "36px" },
                borderBottomLeftRadius: { xs: "22px", md: "36px" },
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Box sx={{ flex: 1, minWidth: 0, height: { xs: "auto", md: 305 }, overflow: "hidden" }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "0.75rem", md: 15 },
                  color: "#2B135C",
                }}
              >
                The Academic Vision at Vedam
              </Typography>
              <Box sx={{ height: { xs: 8, md: 12 } }} />
              <Typography
                sx={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: { xs: "0.75rem", md: 15 },
                  color: "#1E1E1E",
                  lineHeight: 1.55,
                }}
              >
                The academic vision at Vedam is led by{" "}
                <Box component="span" sx={{ fontWeight: 700 }}>
                  Subhesh Kumar
                </Box>
                <br />
                (Academic Head & DVP at Vedam | Ex- Google | 5 Star Coder)
                <br />
                <br />
                Subhesh is working alongside a team of experienced engineers, product builders and industry practitioners from leading technology companies. Together, they have designed a Computer Science & AI program grounded in how technology is actually built and used today.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1.5 }}>
                <Typography sx={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: { xs: "0.75rem", md: 15 }, color: "#1E1E1E", lineHeight: 1.55 }}>
                  Rather than treating industry exposure as an add-on, Vedam integrates it directly into the curriculum from how concepts are taught to how students practice and apply them.
                  This collective approach ensures that learning is hands-on, current and aligned with real engineering expectations from Day 1.
                </Typography>

              </Box>
            </Box>
          </Box>
        </Box>
      ),
    },
  ].map((s, i) => ({
    ...s,
    id: s.id ?? `about-section-${i}`,
    linearGradientSubtitle: s.linearGradientSubtitle ?? gradientPurple,
  }));

  return (
    <PageSection
      paddingTop={{ xs: "0.75rem", md: "10rem" }}
      sx={{
        backgroundImage:
          "linear-gradient(180deg, rgba(138, 24, 255, 0.08) 18.819%, rgba(255, 255, 255, 0.08) 50%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
      }}
    >
      <SectionStack sections={sections} />
    </PageSection>
  );
};

export default TeamVedam;
