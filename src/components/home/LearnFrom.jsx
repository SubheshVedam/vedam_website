import React from "react";
import { Box } from "@mui/material";
import { expertsData } from "@/constants/data";
import ExpertCard from "../atoms/ExpertCard";

export const LearnFrom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.2rem",
        overflowX: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
      }}
    >
      {expertsData.map((expert, index) => (
        <ExpertCard
          key={`expertsCard-${index}`}
          imageUrl={expert.imageUrl}
          name={expert.name}
          logo={expert.logo}
          designation={expert.designation}
          info={expert.info}
          rating={expert.rating}
          linkedIn={expert.linkedIn}
        />
      ))}
    </Box>
  );
};
