import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { detailsData } from "@/constants/data";
import DetailsCard from "./atoms/DetailsCard";

const WhyVedam = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 2,
          overflowX: { xs: "auto", md: "hidden" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {detailsData.slice(0, 3).map((item, index) => (
          <Box
            sx={{ flex: { xs: "0 0 60%", md: "0 0 30%" } }}
            key={`testimonial-${index}`}
          >
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
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          },
          gap: 2,
          mt: 2,
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
