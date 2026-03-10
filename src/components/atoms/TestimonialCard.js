import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";

export default function TestimonialCard({ image, text, name, designation, linkedInUrl }) {
  return (
    <Card
      className="glass-light glass-hover-lift"
      sx={{
        width: "100%",
        minHeight: { xs: 340, sm: 392 },
        width: { xs: 274, sm: 333 },
        maxWidth: "100%",
        minWidth: { xs: 274, sm: 333 },
        borderRadius: "20px",
        padding: "20px 20px 0 20px",
        border: "1px solid rgba(255,255,255,0.28)",
        boxShadow: "0 12px 32px rgba(36, 19, 72, 0.12)",
        cursor: "pointer",
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: 0,
          minHeight: { xs: 340, sm: 392 },
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Top Section: Profile Image, Name, and LinkedIn */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "16px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Box
                sx={{
                  width: { xs: "40px", sm: "60px" },
                  height: { xs: "40px", sm: "60px" },
                  borderRadius: 100,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt="profile icon"
                  width={60}
                  height={60}
                  style={{ borderRadius: 100, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography
                  component="div"
                  variant="body1"
                sx={{
                  color: "#2A135B",
                  fontWeight: 700,
                  fontSize: { xs: 14, sm: 16 },
                  fontFamily: "Inter",
                }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontSize: { xs: 10, sm: 12 },
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  {designation}
                </Typography>
              </Box>
            </Box>

            {/* LinkedIn Icon */}
            {linkedInUrl && (
              <IconButton
                onClick={() => window.open(linkedInUrl, "_blank")}
                sx={{
                  padding: 0,
                  width: '24px',
                  height: '24px',
                }}
              >
                <Image
                  src="/img/testimonials/LinkedIn.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </IconButton>
            )}
          </Box>

          {/* Testimonial Text */}
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Inter",
            }}
          >
            {text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
