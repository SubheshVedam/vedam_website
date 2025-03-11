import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ExpertCard({ imageUrl,name, logo, designation, info }) {
  return (
    <Card
      sx={{ width: { xs: 120, sm: 245 }, height: 385, borderRadius: "16px" }}
    >
      <CardMedia
        component="img"
        height="203"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent sx={{ position: "relative", bottom: 0, height: "100%" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "text.primary", fontWeight: "bold", fontSize: 20 }}
        >
          {name}
        </Typography>
        <Image src={logo} width={80} height={30} alt="logo" />
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: 16 }}
        >
          {designation}{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontSize: 14 }}
        >
          {info}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
