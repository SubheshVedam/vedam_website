import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Star, StarBorder } from "@mui/icons-material";

export default function ExpertCard({
  imageUrl,
  name,
  logo,
  designation,
  info,
  rating,
  linkedIn,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: { xs: 280, sm: 426 },
        maxWidth: "100%",
        height: { xs: 436, sm: "auto" },
        maxHeight: 436,
        minWidth: { xs: 280, sm: 426 },
        borderRadius: "16px",
        padding: "20px",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "0.5px solid rgba(132, 132, 132, 0.2)",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 150 },
          height: { xs: 200, sm: 200 },
          objectFit: "cover",
          borderRadius: "8px",
        }}
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent
        sx={{
          height: { xs: "100%", sm: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: { xs: "8px 0 0 0", sm: "0 0 0 16px" },
          width: "100%",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "text.primary", fontWeight: "bold", fontSize: {xs:'17px',sm:'20px'} }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {designation}
          </Typography>
        </Box>
        <Box sx={{ width: 80, height: 30, position: "relative" }}>
          <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontSize: 12 }}
        >
          {info}{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              borderRadius: "100px",
              position: "relative",
              width: "140px",
              padding: "8px",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#6C10BC",
                opacity: 0.08,
                borderRadius: "100px",
                zIndex: 1,
              },
            }}
          >
            {/* <Rating
              name="size-medium"
              value={rating}
              defaultValue={4.5}
              precision={0.1}
              readOnly
              emptyIcon={
                <StarBorder fontSize="16px" sx={{ color: "#6C10BC" }} />
              }
              icon={<Star fontSize="16px" sx={{ color: "#6C10BC" }} />}
              sx={{
                position: "relative",
                zIndex: 100,
                fontSize: "16px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            /> */}
            <>  </>
          </Box>
          <Box sx={{ width: 32, height: 32, position: "relative" }}>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/img/linkedInIcon.png"}
                layout="fill"
                sizes="32"
                objectFit="contain"
                alt="icon"
              />
            </a>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
