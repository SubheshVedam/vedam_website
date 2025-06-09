import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";
import Image from "next/image";

export const EdgeAtVedam = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)"
        },
        gap: { xs: "1.875rem", md: "2.5rem" },
        // padding: { xs: "1.25rem", md: " 2.5 rem" },
        maxWidth: "87.5rem",
        margin: "0 auto"
      }}
    >
      {lifeAtVedam.edgeAtVedam.data.map((item) => (
        <Card
          key={item.id}
          sx={{
            position: "relative",
            borderRadius: "1rem",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: '0px 0px 30px 1px rgba(0, 0, 0, 0.15)',

          }}
        >
          <Box
            className="holographic-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              zIndex: 1,
              pointerEvents: "none"
            }}
          />
          <Box
            sx={{
              position: "relative",
              height: "12.5rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={item.image}
              className="card-image"
              fill
              sizes="(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              alt={item.title}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                zIndex: 1
              }}
            />
          </Box>
          <CardContent
            sx={{
              padding: "1.5rem",
              position: "relative",
              zIndex: 2
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                fontWeight: 700,
                color: "#000",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: 400,
                color: "#000",
                lineHeight: 1.6,
                letterSpacing: "0.025em"
              }}
            >
              {item.subtitle}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};  