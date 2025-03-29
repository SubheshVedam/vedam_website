import * as React from "react";
import { Box, Typography, Link, Stack, Grid } from "@mui/material";
import Image from "next/image";

// Dummy data for footer columns
const FOOTER_LINKS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/home" },
      { label: "Admission", href: "/admission" },
      { label: "Life@VST", href: "/life" },
      { label: "Team", href: "/about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "connect@vedam.org", href:"mailto:connect@vedam.org"  },
      { label: "+91 92010 10176", href: "tel:9201010176" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@VedamSchoolofTech_Official",
    icon: "/img/Frame.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vedamschooloftech_official/?igsh=MTRscTNtdGxnNG1yMQ%3D%3D#",
    icon: "/img/Frame (1).png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/vedam-school-of-technology/",
    icon: "/img/Frame (2).png",
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
        backgroundColor: "#6C10BC",
        paddingX: "1rem",
        paddingY: "40px",
      }}
    >
      <Box
        sx={{
          paddingX: "10px",
          width: { xs: "100%", md: "1024px", xl: "1280px" },
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/* Main Footer Columns */}
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={1}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ width: { xs: 170, sm: 200 }, ml: "-10px" }}>
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
                sx={{ fontWeight: 700, mb: { xs: 1, sm: 2 } }}
              >
                {column.title}
              </Typography>
              <Stack spacing={{ xs: 1, sm: 2 }}>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="inherit"
                    underline="hover"
                    sx={{
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
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
                  gap="10px"
                  color="#FFA41A"
                  alignItems="center"
                  underline="hover"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    style={{
                      filter: "brightness(0) invert(1)",
                      transition: "transform 0.3s",
                    }}
                    className="hover:scale-110"
                  />
                  <Typography
                    fontSize={{ xs: 0, sm: 16 }}
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#FFA41A",
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
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: 3,
          }}
        >
          <Typography variant="body2">
            Copyright © SET Education Technology Pvt. Ltd. 2025
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" underline="hover">
              Terms of use
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
