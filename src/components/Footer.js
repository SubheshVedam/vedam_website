import * as React from "react";
import { Box, Typography, Link, Stack, Grid } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

// Dummy data for footer columns
const FOOTER_LINKS = [
  {
    title: "Quick Links",
    links: [
      { label: "Terms of use", href: "/terms-of-use" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "connect@vedam.org", href: "mailto:connect@vedam.org" },
      { label: "+91 92010 10176", href: "tel:9201010176" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@VedamSchoolofTech_Official",
    icon: <YouTubeIcon sx={{ color: "white" }} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vedamschooloftech_official/?igsh=MTRscTNtdGxnNG1yMQ%3D%3D#",
    icon: <InstagramIcon sx={{ color: "white" }} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/vedam-school-of-technology/",
    icon: <LinkedInIcon sx={{ color: "white" }} />,
  },
  {
    name: "Telegram",
    url: "https://t.me/vedamschooloftechnology",
    icon: <TelegramIcon sx={{ color: "white" }} />,
  },
  {
    name: "Twitter",
    url: "https://x.com/vedamschooltech",
    icon: <XIcon sx={{ color: "white" }} />,
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #6C10BC, #FB7F05)", // Linear gradient from purple to lighter purple
        paddingX: "1rem",
        paddingY: { xs: 0, sm: "20px" },
        pb: { xs: "8px", sm: 0 },
      }}
    >
      <Box
        sx={{
          paddingX: "10px",
          width: { xs: "100%", md: "1024px", xl: "1280px" },
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Main Footer Columns */}
        <Grid container spacing={{ xs: 1, sm: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack sx={{p:0,m:0}}>
              <Box
                sx={{
                  width: "75%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ width: { xs: 130, sm: 200 }, ml: "-10px" }}>
                  <Image
                    src="/img/Vedam_Final_Logo_White.png"
                    alt="Navbar Logo"
                    width={200}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </Grid>
          {FOOTER_LINKS.map((column) => (
            <Grid item xs={6} sm={6} md={3} key={column.title}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: { xs: "8px", sm: "16px" },
                    fontSize: ["Quick Links", "Contact"].includes(column.title)
                    ? { xs: 14, sm: 20 }
                    : "inherit",
                }}
              >
                {column.title}
              </Typography>
              <Stack spacing={{ xs: '8px', sm: 1 }}>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: { xs: 11, sm: 16 },
                      "&:hover": {
                        color: "#FFA41A",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Social Links Column */}
          <Grid item xs={12} sm={6} md={3} sx={{ mt: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mb: { xs: "8px", sm: "16px" },
                fontSize: { xs: 14, sm: 20 },
              }}
            >
              Follow Us
            </Typography>
            <Stack direction={{ xs: "row", sm: "column" }} spacing={2}>
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  gap={"6px"}
                  color="#FFFFFF"
                  alignItems="center"
                  underline="hover"
                >
                  {/* <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    style={{
                      filter: "brightness(20) invert(1)",
                      transition: "transform 0.3s",
                    }}
                    className="hover:scale-110"
                  /> */}
                  {social.icon}
                  <Typography
                    fontSize={{ xs: 0, sm: 16 }}
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {social.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.27)",
            paddingTop: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { xs: 10, sm: 14 } }}>
            Copyright © SET Education Technology Pvt. Ltd. 2025
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
