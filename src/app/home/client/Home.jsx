import ExpertCard from "@/components/atoms/ExpertCard";
import TestimonialCard from "@/components/atoms/TestimonialCard";
import { testimonialData } from "@/constants/data";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        alignItems: "center",
        width: "100%",
        overflow: "auto", // Enable horizontal scrolling
        paddingBottom: "16px", // Add padding to prevent scrollbar overlap
      }}
    >
      {testimonialData.map((testimonial, index) => (
        // <ExpertCard
        //   key={`expertsCard-${index}`}
        //   imageUrl={expert.imageUrl}
        //   name={expert.name}
        //   logo={expert.logo}
        //   designation={expert.designation}
        //   info={expert.info}
        //   rating={expert.rating}
        //   linkedIn={expert.linkedIn}
        // />
        <TestimonialCard
        key={`testimonial-${index}`}
        image={testimonial.image}
        text={testimonial.text}
        name={testimonial.name}
        designation={testimonial.designation}
      />      ))}
    </Box>
  );
};

export default Home;
