import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const OutcomeCard = ({ image, title }) => {
  return (
    <Card sx={{ width: 250, borderRadius: 2, boxShadow: 2, p: 2 }}>
      <Box
        component="img"
        src={image}
        alt="project img"
        sx={{
          width: "100%",
          height: "80px",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OutcomeCard;
