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
        minHeight: 392,
        width: { xs: 274, sm: 333 },
        maxWidth: "100%",
        minWidth: { xs: 274, sm: 333 },
        borderRadius: "16px",
        padding: " 20px 20px 0 20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: 0,
          minHeight: 392,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              mb: "16px",
              border: "1px solid",
              borderRadius: 100,
            }}
          >
            <Image
              src={image}
              objectFit="cover"
              alt="profile icon"
              width={60}
              height={60}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              marginBottom: "16px",
              fontSize: { xs: 14, sm: 16 },
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
            }}
          >
            {name}{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: { xs: 10, sm: 12 } }}
          >
            {designation}{" "}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
