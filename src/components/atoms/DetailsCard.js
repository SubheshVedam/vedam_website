"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function DetailsCard({
  image,
  title,
  isScholarshipCard,
  description,
  bgImage,
  isFeatured,
  height = 300,
}) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        position: "relative", // Required for absolute positioning
        backgroundColor: isFeatured ? "#6C10BC" : "#FFFFFF",
        maxWidth: "100%",
        height: { xs: "auto", md: height },
        maxHeight: {
          xs: isFeatured ? 220 : isScholarshipCard ? 200 : 150,
          md: height,
        },
        width: "100%",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "none",
        overflow: "hidden", // Keeps everything contained within border radius

        // Background image with dark overlay (only if bgImage exists)
        ...(bgImage && {
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // Dark overlay (70% opacity)
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 0,
          },
        }),

        // Gradient overlay (only for featured cards)
        ...(isFeatured && {
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
            zIndex: 1, // Above the dark overlay but below content
            mixBlendMode: isFeatured ? "normal" : undefined,
          },
        }),

        // Content stays on top
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: 0,
          minHeight: { xs: 150, sm: isScholarshipCard ? 200 : 280 },
          height: "100%",
          justifyContent: "space-between",
          alignItems: isFeatured ? "center" : "normal",
          "&:last-child": {
            paddingBottom: "20px",
          },
        }}
      >
        {isFeatured ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/img/macBook.png"}
              alt="profile icon"
              width={260}
              height={100}
              style={{ objectFit: "contain" }}
              className="macbookStyle"
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: isMobile ? "32px" : "42px",
              height: isMobile ? "32px" : "42px",
              borderRadius: 100,
              marginBottom: { xs: "2rem", md: "20px" },
            }}
          >
            <Image
              src={image}
              alt="profile icon"
              width={isMobile ? 38 : 42}
              height={isMobile ? 38 : 42}
            />
          </Box>
        )}
        <Box sx={{ textAlign: isFeatured ? "center" : "left" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: isFeatured ? { xs: 22, sm: 32 } : { xs: 18, sm: 20 },
              marginBottom: isFeatured ? 0 : { xs: "8px", sm: "16px" },
            }}
          >
            {title}{" "}
          </Typography>
          {isFeatured || isScholarshipCard ? (
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: 10, sm: 14 },
                fontSize: isFeatured ? 14 : { xs: 11, sm: 14 },
              }}
            >
              {description}
            </Typography>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}
