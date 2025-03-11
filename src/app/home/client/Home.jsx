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
      info: "Specializes in front-end development and UI/UX design.",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Jane Smith",
      logo: "/next.svg",
      designation: "Data Scientist",
      info: "Expert in machine learning and data analysis.",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Alice Johnson",
      logo: "/next.svg",
      designation: "DevOps Engineer",
      info: "Focuses on CI/CD pipelines and cloud infrastructure.",
    },
    {
      imageUrl: "https://placehold.co/245x203",
      name: "Bob Brown",
      logo: "/next.svg",
      designation: "Backend Developer",
      info: "Experienced in building scalable APIs and databases.",
    },
  ];
  return (
    <>
      <div>Home</div>
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},gap:'20px'}}>
        {expertsData.map((expert, index) => (
          <ExpertCard
            key={`expertsCard-${index}`}
            imageUrl={expert.imageUrl}
            name={expert.name}
            logo={expert.logo}
            designation={expert.designation}
            info={expert.info}
          />
        ))}
      </Box>{" "}
    </>
  );
};

export default Home;
