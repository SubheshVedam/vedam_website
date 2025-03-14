import * as React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6C10BC",
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: "1rem",
        paddingY: "40px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Contact Section */}
        <Box
          sx={{
            textAlign: "start",
            marginBottom: { xs: "40px", sm: "60px" },
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, fontSize: { xs: "14px", sm: "16px" } }}
          >
            Contact us
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "64px" },
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 25%, #FFA41A 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            connect@vedam.org
          </Typography>
        </Box>

        {/* Middle Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: "100%",
            textAlign: { xs: "center", sm: "start" },
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 700,
              whiteSpace: "nowrap", // Ensures text stays in one line
            }}
          >
            Get latest updates here
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              width: { xs: "100%", sm: "auto" }, // Full width on xs, auto on sm+
              maxWidth: "79%",
              height: "1px",
              backgroundColor: "white",
            }}
          />

          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit">
              <Image
                src="/img/Frame.png"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" color="inherit">
              <Image
                src="/img/Frame (1).png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" color="inherit">
              <Image
                src="/img/Frame (2).png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </Stack>
        </Stack>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: { xs: "12px", sm: "14px" },
            textAlign: "center",
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
    </Box>
  );
}
