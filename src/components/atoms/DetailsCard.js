import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";

export default function DetailsCard({ image, title, description, isFeatured }) {
  return (
    <Card
      sx={{
        backgroundColor: isFeatured ? "#6C10BC" : "none",
        width: "100%",
        minHeight: { xs: 200, sm: 300 },
        maxHeight: { xs: "auto", sm: 300 },
        width: "100%",
        maxWidth: { xs: 280, sm: "none" },
        borderRadius: "16px",
        padding: " 20px 20px 20px 20px",
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
          minHeight: { xs: 200, sm: 280 },
          height: "100%",
          justifyContent: "space-between",
          alignItems: isFeatured ?"center" : 'normal',
          "&:last-child": {
            paddingBottom: { xs: 0, sm: "20px" }, // Remove padding for the last child
          },
        }}
      >
        {isFeatured ? (
          <Box sx={{maxHeight:169,width:'100%'}}>
          <Image
            src={"/img/macBook.png"}
            alt="profile icon"
            fill={true}
            
          />
          </Box>
        ) : (
          <Box
            sx={{
              width: "42px",
              height: "42px",
              mb:"16px",
              border: "1px solid",
              borderRadius: 100,
            }}
          >
            <Image
              src={image}
              objectFit="cover"
              alt="profile icon"
              width={42}
              height={42}
            />
          </Box>
        )}
        <Box sx={{ textAlign: isFeatured ? "center" : "left" }}>
          <Typography
            variant="h6"
            sx={{
              color: isFeatured ? "white" : "text.primary",
              fontWeight: "bold",
              fontSize: isFeatured ? { xs: 20, sm: 32 } : { xs: 14, sm: 20 },
              marginBottom: isFeatured ? 0 :{ xs: "8px", sm: "16px" },
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
