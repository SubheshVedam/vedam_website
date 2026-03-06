"use client";

/**
 * About Us page — implements Figma design:
 * https://www.figma.com/design/ieqDb3rnKzrOG8QAxgVKy2/Vedam-website?node-id=1304-2
 * Sections: Our Source <Code>, About Our Co-founder
 */
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
            width: { xs: "100%", lg: "55%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: colors.purpleMuted,
              fontWeight: 600,
              fontFamily: "Inter",
              letterSpacing: "0.02em",
            }}
          >
            {aboutSourceCodeData.label}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.75 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", md: "2.25rem", lg: "2.5rem" },
                color: "#2D1B4E",
                lineHeight: 1.2,
              }}
            >
              Our Source{" "}
              <Box
                component="span"
                sx={{
                  color: colors.purpleLight,
                  fontWeight: 700,
                }}
              >
                &lt;Code&gt;
              </Box>
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: "0.65rem",
                color: "#666",
                alignSelf: "flex-start",
                mt: 0.5,
              }}
            >
              ®
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: { xs: "1.0625rem", md: "1.125rem" },
              color: "#1F1F1F",
              lineHeight: 1.5,
            }}
          >
            {aboutSourceCodeData.problemStatement}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: { xs: "1rem", md: "1.0625rem" },
              color: "#1F1F1F",
              lineHeight: 1.5,
            }}
          >
            {aboutSourceCodeData.whyHeading}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.9375rem", md: "1rem" },
              color: "#444",
              lineHeight: 1.65,
            }}
          >
            {aboutSourceCodeData.whyBody}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "#444",
              lineHeight: 1.6,
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
              gap: { xs: 2, md: 3 },
              mt: 1.5,
              flexWrap: "wrap",
            }}
          >
            {aboutSourceCodeData.highlights.map((text, i) => (
              <Box
                key={i}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Box
                  component="img"
                  src={figmaAssets.checkmark}
                  alt=""
                  sx={{ width: 19, height: 20 }}
                />
                <Typography
                  sx={{
                    fontFamily: "Outfit, Inter, sans-serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: colors.text,
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right: Landing vector + cards — absolutely positioned on desktop */}
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: -22,
            right: -80,
            width: 596,
            height: 596,
            pointerEvents: "none",
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
              top: 149,
              right: 0,
              width: 317,
              height: 305,
              borderRadius: "1000px",
              overflow: "hidden",
              opacity: 0.7,
            }}
          >
            <Box
              component="img"
              src={aboutSourceCodeData.heroImage}
              alt=""
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                fontFamily: "Outfit, Inter, sans-serif",
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
              top: 9,
              right: 0,
              width: 108,
              height: 108,
              borderRadius: "30px",
              overflow: "hidden",
              backgroundColor: "#fff",
              borderLeft: "6px solid #F97D03",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit, Inter, sans-serif",
                fontSize: 16,
                color: "#1E1E1E",
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              Merit<br />Driven
            </Typography>
          </Box>

          {/* Merit badge floating above the card */}
          <Box
            component="img"
            src={figmaAssets.cardMeritBadge}
            alt=""
            sx={{
              position: "absolute",
              top: 0,
              right: 31,
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
                fontFamily: "Outfit, Inter, sans-serif",
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
          padding: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: colors.orangeDark,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {section.subtitle}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: colors.orangeDark,
                lineHeight: 1.2,
              }}
            >
              {section.subtitle2}
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "0.6rem", color: "#999", mt: 0.3 }}
            >
              ®
            </Typography>
          </Box>
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
              <Box
                sx={{
                  flex: { xs: "1 1 auto", md: "1 1 56%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    color: "#1F1F1F",
                    lineHeight: 1.65,
                  }}
                >
                  {section.intro}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "#444",
                    lineHeight: 1.65,
                  }}
                >
                  {section.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{ m: 0, pl: 2.5, "& li": { mb: 0.75 } }}
                >
                  {section.bullets?.map((bullet, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#444",
                        lineHeight: 1.65,
                      }}
                    >
                      {bullet}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mt: 1.5,
                  }}
                >
                  {item.attributes?.map((attr, i) => {
                    const Icon = attributeIcons[attr.icon];
                    return (
                      <Box
                        key={i}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.75,
                          px: 1.75,
                          py: 0.875,
                          borderRadius: "999px",
                          bgcolor: "#fff",
                          border: "1px solid #EDEDED",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        }}
                      >
                        {Icon && (
                          <Icon
                            sx={{
                              fontSize: 20,
                              color: i === 1 ? colors.orange : colors.purple,
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "#333",
                          }}
                        >
                          {attr.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box
                sx={{
                  flex: { xs: "0 0 auto", md: "0 0 36%" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-end" },
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 260, md: 280 },
                    borderRadius: "12px",
                    overflow: "hidden",
                    bgcolor: colors.orange,
                    aspectRatio: "3/4",
                    boxShadow: "0 4px 20px rgba(251,127,5,0.25)",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    color: "#1F1F1F",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "0.9375rem",
                    color: colors.orange,
                    fontWeight: 600,
                  }}
                >
                  {item.designation}
                </Typography>
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
              fontFamily: "Outfit, Inter, sans-serif",
              fontWeight: 500,
              fontSize: 16,
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
              fontFamily: "Outfit, Inter, sans-serif",
              fontSize: 16,
              color: "#8A18FF",
              mb: 0.5,
            }}
          >
            Meet the
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Outfit, Inter, sans-serif",
              fontWeight: 600,
              fontSize: 36,
              lineHeight: 1.2,
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.108%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.72px",
              mb: 2.5,
            }}
          >
            Tech Minds Behind Vedam
          </Typography>

          <Box sx={{ display: "flex", gap: 2.25, alignItems: "center" }}>
            <Box
              component="img"
              src={figmaAssets.techMindsPhoto}
              alt=""
              sx={{
                width: 510,
                height: 305,
                borderTopRightRadius: "36px",
                borderBottomLeftRadius: "36px",
                objectFit: "cover",
              }}
            />
            <Box sx={{ width: 511, height: 305 }}>
              <Typography
                sx={{
                  fontFamily: "Outfit, Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#2B135C",
                }}
              >
                The Academic Vision at Vedam
              </Typography>
              <Box sx={{ height: 12 }} />
              <Typography
                sx={{
                  fontFamily: "Outfit, Inter, sans-serif",
                  fontSize: 16,
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
              <Box component="ul" sx={{ mt: 1.5, pl: 2.5, mb: 0 }}>
                <Typography component="li" sx={{ fontFamily: "Outfit, Inter, sans-serif", fontSize: 16, color: "#1E1E1E", lineHeight: 1.55 }}>
                  Rather than treating industry exposure as an add-on, Vedam integrates it directly into the curriculum from how concepts are taught to how students practice and apply them.
                </Typography>
                <Typography component="li" sx={{ fontFamily: "Outfit, Inter, sans-serif", fontSize: 16, color: "#1E1E1E", lineHeight: 1.55 }}>
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
