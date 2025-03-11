import * as React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: { xs: "284px", sm: "410px" }, // Added 'px' unit
        width: "100%", // Changed from '100vw' to '100%'
        backgroundColor: "#6C10BC",
        color: "white",
        textAlign: { xs: "center", sm: "left" },
        paddingX: "1rem", // Added horizontal padding
        boxSizing: "border-box", // Include padding in width calculation
        overflowX: "hidden", // Hide horizontal overflow
      }}
    >
      <Box
        sx={{
          backgroundColor: "#6C10BC",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "auto",
          boxSizing: "border-box", // Include padding in width calculation
        }}
      >
        <Stack spacing={3} sx={{ width: "100%", textAlign: "center" }}>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: { xs: "14px", sm: "16px" } }}
            >
              Contact us
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "28px" },
              }}
            >
              connect
              <Box component="span" sx={{ color: "#FB7F05" }}>
                @vedam.org
              </Box>
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "14px", sm: "16px" } }}
              >
                Get latest updates here
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                height: "1px",
                backgroundColor: "white",
              }}
            />
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                <YouTubeIcon />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit">
                <LinkedInIcon />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          fontSize: { xs: "12px", sm: "14px" },
          paddingX: "1rem", // Added horizontal padding
          boxSizing: "border-box", // Include padding in width calculation
        }}
      >
        <Typography variant="caption">
          Copyright © SET Education Technology Pvt. Ltd. 2025
        </Typography>
        <Typography variant="caption">
          <Link href="#" color="inherit" underline="hover">
            Terms of use
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}