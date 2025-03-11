import ExpertCard from "@/components/atoms/ExpertCard";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  const expertsData = [
    {
      imageUrl: "https://placehold.co/245x203", // Example image URL
      name: "John Doe",
      logo: "/next.svg",
      designation: "Software Engineer",
      info: "Specializes in front-end development and UI/UX design.Specializes in front-end development and UI/UX design.",
      rating: 4.5,
      linkedIn: "/img/linkedInIcon.png",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Jane Smith",
      logo: "/next.svg",
      designation: "Data Scientist",
      info: "Expert in machine learning and data analysis.",
      rating: 3.7,
      linkedIn: "/img/linkedInIcon.png",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Alice Johnson",
      logo: "/next.svg",
      designation: "DevOps Engineer",
      info: "Focuses on CI/CD pipelines and cloud infrastructure.",
      rating: 4.2,
      linkedIn: "/img/linkedInIcon.png",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Bob Brown",
      logo: "/next.svg",
      designation: "Backend Developer",
      info: "Experienced in building scalable APIs and databases.",
      rating: 4.9,
      linkedIn: "/img/linkedInIcon.png",
    },
  ];
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

export default Home;
