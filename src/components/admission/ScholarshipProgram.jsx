import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import DetailsCard from "../atoms/DetailsCard";

export const ScholarshipProgram = () => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "clamp(14px, 2vw, 20px)",
          color: "rgba(31, 31, 31, 1)",
          fontFamily: "Inter",
          lineHeight: "150%",
          fontWeight: "500",
        }}
      >
        {admissionScreenData.scholarshipProgram.description}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 2,
          overflowX: { xs: "auto", md: "hidden" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        {admissionScreenData.scholarshipProgram.data.map((item, index) => (
          <Box
            sx={{ flex: { xs: "0 0 60%", md: "0 0 30%" } }}
            key={`testimonial-${index}`}
          >
            <DetailsCard
              image={item.image}
              description={item.description}
              title={item.title}
              height={260}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
