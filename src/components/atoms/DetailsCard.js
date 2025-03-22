import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";

export default function DetailsCard({
  image,
  title,
  description,
  isFeatured,
  height = 300,
}) {
  return (
    <Card
      sx={{
        background: isFeatured
          ? "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%), #6C10BC"
          : "#FFFFFF",
        maxWidth:  "100%" ,
        height: { xs: "auto", md: height },
        maxHeight: { xs: 220, md: height },
        width: "100%",
        borderRadius: "16px",
        padding: "20px",
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
          minHeight: { xs: 200, sm: 280 },
          height: "100%",
          justifyContent:'space-between',
          alignItems: isFeatured ? "center" : "normal",
          "&:last-child": {
            paddingBottom:  "20px" ,
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
              width: "42px",
              height: "42px",
              borderRadius: 100,
              marginBottom: { xs: "2rem", md: "80px" },
            }}
          >
            <Image src={image} alt="profile icon" width={42} height={42} />
          </Box>
        )}
        <Box sx={{ textAlign: isFeatured ? "center" : "left" }}>
          <Typography
            variant="h6"
            sx={{
              color: isFeatured ? "white" : "text.primary",
              fontWeight: "bold",
              fontSize: isFeatured ? { xs: 20, sm: 32 } : { xs: 14, sm: 20 },
              marginBottom: isFeatured ? 0 : { xs: "8px", sm: "16px" },
            }}
          >
            {title}{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isFeatured ? "white" : "text.primary",
              fontSize: { xs: 10, sm: 14 },
              fontSize: isFeatured ? 14 : { xs: 10, sm: 14 },
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
