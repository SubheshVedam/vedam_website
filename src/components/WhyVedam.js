import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { detailsData } from "@/constants/data";
import DetailsCard from "./atoms/DetailsCard";

const WhyVedam = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 card per row in xs view
            sm: "repeat(3, 1fr)", // 3 cards per row in sm view
          },
          gap: 2,
        }}
      >
        {detailsData.slice(0, 3).map((item, index) => (
          <Box key={`testimonial-${index}`}>
            <DetailsCard
              image={item.image}
              description={item.description}
              title={item.title}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 card per row in xs view
            sm: "repeat(2, 1fr)", // 2 cards per row in sm view
          },
          gap: 2, // Add spacing between cards
          mt: 2, // Add margin-top to separate the two rows
        }}
      >
        {detailsData.slice(3).map((item, index) => (
          <Box key={`testimonial-${index + 3}`}>
            <DetailsCard
              image={item.image}
              description={item.description}
              title={item.title}
              isFeatured={item.isFeatured}
            />
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

export default WhyVedam;
