import React from "react";
import { Box, Typography } from "@mui/material";

const scholarships = {
  description: "Talent shouldn't wait on finances. Vedam rewards merit, achievement, and potential — with scholarships that make the best education accessible to the best students.",
  items: [
    { title: "Merit Based Scholarship", percent: "Upto 100%", desc: "Recognizes academic excellence, unique talent and leadership potential.", img: "/img/program/scholarship-merit.png" },
    { title: "Women in Tech Scholarship", percent: "Upto 20%", desc: "Empowering and supporting women in tech for growth and success.", img: "/img/program/scholarship-women.png" },
    { title: "Need Based Scholarship", percent: "Upto 30%", desc: "Focused on specific fields of study or demonstrating financial needs.", img: "/img/program/scholarship-need.png" },
  ],
};

export const ScholarshipProgram = () => {
  const { description, items } = scholarships;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "-32px",
        marginBottom: "-32px",
        padding: { xs: "24px 0", md: "32px 0" },
      }}
    >
      {/* Description */}
      <Typography
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          color: "#1E1E1E",
          fontFamily: "Inter",
          fontWeight: 400,
          lineHeight: "150%",
          marginBottom: { xs: "12px", md: "16px" },
        }}
      >
        {description}
      </Typography>

      {/* ── Mobile cards ── */}
      <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: "4px" }}>
        {items.map(({ title, percent, desc, img }) => (
          <Box
            key={title}
            sx={{
              bgcolor: "black",
              border: "0.216px solid rgba(132,132,132,0.5)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              gap: "17px",
              px: "10px",
              py: "8px",
            }}
          >
            <Box
              component="img"
              src={img}
              alt={title}
              sx={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0 }}
            />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  color: "white",
                  fontSize: "10px",
                  letterSpacing: "-0.2px",
                  lineHeight: 1.2,
                  mb: "4px",
                }}
              >
                {`${title} (${percent})`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "white",
                  fontSize: "8px",
                  letterSpacing: "-0.16px",
                  lineHeight: 1.2,
                }}
              >
                {desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Desktop cards ── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {items.map(({ title, percent, desc, img }) => (
          <Box
            key={title}
            sx={{
              flex: 1,
              bgcolor: "#0E020F",
              borderRadius: "20px",
              height: "365px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              p: "20px",
              gap: "12px",
            }}
          >
            <Box
              component="img"
              src={img}
              alt={title}
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "auto",
                objectFit: "contain",
                maxHeight: "260px",
              }}
            />
            <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  color: "white",
                  fontSize: "18px",
                  letterSpacing: "-0.36px",
                  lineHeight: 1.2,
                  mb: "4px",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  color: "#F97D03",
                  fontSize: "18px",
                  letterSpacing: "-0.36px",
                  lineHeight: 1.2,
                  mb: "8px",
                }}
              >
                {percent}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "white",
                  fontSize: "16px",
                  letterSpacing: "-0.32px",
                  lineHeight: 1.2,
                }}
              >
                {desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};