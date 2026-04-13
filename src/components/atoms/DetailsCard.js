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
  heights = 400
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: isFeatured ? "#6C10BC" : "#FFFFFF",
        maxWidth: "100%",
        height: { xs: isScholarshipCard ? 350 : "auto", md: height, xl: heights },
        maxHeight: {
          xs: isFeatured ? 220 : isScholarshipCard ? 350 : 220,
          md: height,
          xl: heights
        },
        width: "100%",
        borderRadius: "16px",
        padding: 0,
        boxShadow: "none",
        justifyContent: "flex-end",
        overflow: "hidden",
        ...(!isScholarshipCard
          ? {
            "&:hover": {
              backgroundColor: isFeatured ? "#7C20CC" : "#f5f5f5",
              transition: "background-color 0.3s ease",
              "& .description-text": {
                opacity: 1,
                maxHeight: "200px",
                marginTop: "8px",
              },
            },
          }
          : {
            "&:hover": {
              backgroundColor: isFeatured ? "#7C20CC" : "#f5f5f5",
              transition: "background-color 0.3s ease",
              "& .description-text": {
                opacity: 1,
                maxHeight: "200px",
                marginTop: "8px",
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
            paddingBottom: 0,
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
              // src={"/img/macBook.webp"}
              // src={"/img/whyvedam/img1.webp"}
              alt="profile icon"
              width={260}
              height={100}
              style={{ objectFit: "contain" }}
            // className="macbookStyle"
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: isMobile ? "32px" : "42px",
              height: isMobile ? "32px" : "42px",
              borderRadius: 100,
              marginBottom: { xs: "2rem", md: "20px" },
              marginLeft: "6px",
              marginTop: "6px",
            }}
          >
            {image && (
              <Image
                src={image}
                alt="profile icon"
                width={isMobile ? 38 : 42}
                height={isMobile ? 38 : 42}
              />
            )}
          </Box>
        )}

        {!isScholarshipCard && (
          <Box
            sx={{
              textAlign: "left",
              overflow: "visible",
              width: "100%",
            }}
          >
            <Box
              className="title-box"
              sx={{
                borderRadius: "0 0 10px 10px",
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) -50.79%, rgba(12, 9, 49, 0.85) 69.78%)',
                padding: "16px",
                transition: "all 0.3s ease",
                overflow: "visible",
              }}
            >
              <Typography
                component="h4"
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 20 },
                  lineHeight: { xs: "130%", sm: "150%" },
                  marginBottom: 0,
                }}
              >
                {title}
              </Typography>

              {/* Description text */}
              <Typography
                className="description-text"
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: isFeatured ? 14 : { xs: 11, sm: 14 },
                  opacity: 0,
                  maxHeight: 0,
                  marginTop: 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}