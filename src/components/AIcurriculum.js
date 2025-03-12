import React from "react";
import { Box, Typography } from "@mui/material";
import CurriculumDetail from "./CurriculumDetail";
import { curriculumData } from "@/constants/data";

const AIcurriculum = () => {
  return (
    <Box>
      <Box>
        <Typography color="#1E1E1E" fontWeight={600}>
          Future proof learning
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, display: "inline-block" }}>
          <Box
            component="span"
            sx={{
              backgroundImage:
                "linear-gradient(90deg, #FB7F05 2%, #6C10BC 98%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            AI First
          </Box>{" "}
          <Box component="span" sx={{ color: "#6C10BC" }}>
            Curriculum
          </Box>
        </Typography>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        
      }}>
        <Box>left side</Box>
        <Box>
          {curriculumData.map((yearData, index) => (
            <CurriculumDetail key={index} data={yearData} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AIcurriculum;
