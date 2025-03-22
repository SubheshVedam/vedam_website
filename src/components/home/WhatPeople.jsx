import React from "react";
import { Box } from "@mui/material";
import { testimonialData } from "@/constants/data";
import TestimonialCard from "../atoms/TestimonialCard";

export const WhatPeople = () => {
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
      {testimonialData.map((testimonial, index) => (
        <TestimonialCard
          key={`testimonial-${index}`}
          image={testimonial.image}
          text={testimonial.text}
          name={testimonial.name}
          designation={testimonial.designation}
        />
      ))}
    </Box>
  );
};
