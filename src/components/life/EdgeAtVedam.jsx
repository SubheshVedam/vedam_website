import React from "react";
import { Box, Typography } from "@mui/material";
import { lifeAtVedam } from "@/constants/data";
import Image from "next/image";

export const EdgeAtVedam = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
        flexDirection: {xs:"column",sm:"row"},
        gap: { xs: "10px", md: "50px" },
      }}
    >
      {lifeAtVedam.edgeAtVedam.data.map((item) => (
       <Box
       key={item.id}
       sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-start",
         width: '100%',
       }}
     >
       <Image
         src={item.image}
         className="edgeAtVedamImage"
         width={0} // Let the width be determined by the container
         height={0} // Height will be calculated based on aspect ratio
         sizes="100vw" // Tell browser image will be full viewport width
         style={{ 
           width: '100%', // Take up full width of parent
           height: 'auto', // Maintain aspect ratio
           objectFit: "contain" 
         }}
         alt="edgeAtVedamImage"
       />
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              marginBottom: "8px",
              fontFamily: "Inter",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "120%",
              color: "#6C10BC",
              fontWeight: "700",
              fontFamily: "Inter",
              width:'100%',

            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              fontSize: "clamp(12px, 2vw, 14px)",
              lineHeight: "120%",
              color: "#1F1F1F",
              fontWeight: "500",
              fontFamily: "Inter",
              width:'100%',

            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
