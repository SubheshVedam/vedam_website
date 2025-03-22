import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { detailsData } from "@/constants/data";
import DetailsCard from "./atoms/DetailsCard";

const WhyVedam = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {/* First row with 3 items */}
      {detailsData.slice(0, 3).map((item, index) => (
        <Box
          key={`testimonial-${index}`}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", sm: "calc(33.33% - 1rem)" },
          }}
        >
          <DetailsCard
            image={item.image}
            description={item.description}
            title={item.title}
          />
        </Box>
      ))}

      {/* Second row with 2 items */}
      {detailsData.slice(3).map((item, index) => (
        <Box
          key={`testimonial-${index + 3}`}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", sm: "calc(50% - 1rem)" },
          }}
        >
          <DetailsCard
            image={item.image}
            description={item.description}
            title={item.title}
            isFeatured={item.isFeatured}
          />
        </Box>
      ))}
    </Box>
  );
};

export default WhyVedam;
