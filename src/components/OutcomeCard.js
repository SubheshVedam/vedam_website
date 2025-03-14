import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const OutcomeCard = ({ image, title }) => {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "200px" },
        borderRadius: 2,
        border: "solid 1px #0C265133",
        p: 1,
        flexShrink: 0,
        height: "200px", // Ensure all cards have the same height
        display: "flex",
        flexDirection: "column",
      }}>
      <Box
        sx={{
          height: "120px", // Fixed height for images
          display: "flex",
          padding: "0px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CardMedia
          component="img"
          image={image}
          alt="project img"
          sx={{
            maxHeight: "100%", // Prevents stretching
            maxWidth: "100%", // Ensures it scales within the box
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Card Content with fixed starting position */}
      <CardContent
        sx={{
          flexGrow: 1,
          minHeight: "70px", // Ensures all content starts at the same place
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "start",
          overflow: "hidden",
        }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "14px", sm: "12px" },
            whiteSpace: "normal",
            wordWrap: "break-word",
            maxWidth: "100%",
          }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OutcomeCard;
