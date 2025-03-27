import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";

export default function TestimonialCard({ image, text, name, designation }) {
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: { xs: 340, sm: 392 },
        width: { xs: 274, sm: 333 },
        maxWidth: "100%",
        minWidth: { xs: 274, sm: 333 },
        borderRadius: "16px",
        padding: " 20px 20px 0 20px",
        boxShadow: "none",
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: { xs: "40px", sm: "60px" },
              height: { xs: "40px", sm: "60px" },
              mb: "16px",
              borderRadius: 100,
            }}
          >
            <Image
              src={image}
              objectFit="cover"
              alt="profile icon"
              width={100}
              height={100}
              style={{ borderRadius: 100, width: "100%", height: "100%" }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              marginBottom: "16px",
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Inter",
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#6C10BC",
              fontWeight: "bold",
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Inter",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 10, sm: 12 },
              fontFamily: "Inter",
            }}
          >
            {designation}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
