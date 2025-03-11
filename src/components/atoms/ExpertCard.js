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
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        minWidth: { xs: "100%", sm: 426 },
        maxHeight: 240,
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <CardMedia
        component="img"
        height={200}
        width={150}
        image={imageUrl}
        alt="green iguana"
      />
      <Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 0 0 16px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "text.primary", fontWeight: "bold", fontSize: 20 }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {designation}{" "}
          </Typography>
          <Image src={logo} width={80} height={30} alt="logo" />

          <Typography
            variant="body2"
            sx={{ color: "text.primary", fontSize: 12 }}
          >
            {info}{" "}
          </Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Rating
            name="size-medium"
            value={4.5}
            precision={0.1}
            readOnly
            emptyIcon={<StarBorder fontSize="16px" sx={{color:'#6C10BC'}}/>}
            icon={<Star fontSize="16px"  sx={{color:'#6C10BC'}}/>}
          />
          <Image src="/img/linkedInIcon.png" alt="icon" width={32} height={32}/>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
