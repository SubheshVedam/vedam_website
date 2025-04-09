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
  height = 320,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: isFeatured ? "#6C10BC" : "#FFFFFF",
        maxWidth: "100%",
        height: { xs: "auto", md: height },
        maxHeight: {
          xs: isFeatured ? 220 : isScholarshipCard ? 220 : 220,
          md: height,
        },
        width: "100%",
        borderRadius: "16px",
        padding: "20px 20px 0 20px",
        boxShadow: "none",
        overflow: "hidden",
        ...(!isScholarshipCard
          ? {
              "&:hover": {
                backgroundColor: isFeatured ? "#7C20CC" : "#f5f5f5",
                transition: "background-color 0.3s ease",
                "& .description-text": {
                  // Target the description text on card hover
                  transform: "translateY(-10px)",
                  opacity: 1,
                  height: "auto",
                  marginTop: "0px",
                },
                "& .title-box": {
                  // Target the title box on card hover
                  transform: "translateY(-10px)",
                },
              },
            }
          : {
              "&:hover": {
                backgroundColor: isFeatured ? "#7C20CC" : "#f5f5f5",
                transition: "background-color 0.3s ease",
                "& .description-text": {
                  // Target the description text on card hover
                  transform: "translateY(0)",
                  opacity: 1,
                  height: "auto",
                  marginTop: "10px",
                },
                "& .title-box": {
                  // Target the title box on card hover
                  transform: "translateY(-10px)",
                },
              },
            }),

        // Background image with dark overlay
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
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 0,
          },
        }),

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
            zIndex: 1,
            mixBlendMode: isFeatured ? "normal" : undefined,
          },
        }),

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
          minHeight: {
            xs: isScholarshipCard ? 220 : 220,
            sm: isScholarshipCard ? 220 : 280,
          },
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
        <Box
          sx={{
            textAlign: "left",
            overflow: "hidden",
            paddingY: isScholarshipCard ? "10px" : "10px",
          }}
        >
          <Box
            className="title-box"
            sx={{
              transition: "transform 0.3s ease",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: 18, sm: 20 },
                marginBottom: { xs: "8px", sm: "16px" },
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Description text */}

          <Typography
            className="description-text"
            variant="body2"
            sx={{
              color: "white",
              fontSize: isFeatured ? 14 : { xs: 12, sm: 14 },
              transform: "translateY(100%)",
              opacity: 0,
              height: 0,
              transition: "all 0.3s ease",
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
