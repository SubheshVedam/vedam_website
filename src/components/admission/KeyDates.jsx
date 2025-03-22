import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";

export const KeyDates = () => {
  return (
    <Box>
      <Box
        sx={{
          borderTop: "1px solid #FB7F05",
          borderRight: "1px solid #FB7F05",
          borderLeft: "1px solid #FB7F05",
          borderBottom: { xs: "1px solid #FB7F05", md: "none" },
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          padding: "20px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: " 700",
            fontSize: "clamp(14px, 2vw, 20px)",
            lineHeight: "100%",
            color: "rgba(251, 127, 5, 1)",
          }}
        >
          {admissionScreenData.keyDates.headerText}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" } }}>
        <Box
          sx={{
            width: "100%",
            padding: "20px 0px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "rgba(251, 127, 5, 0.3)",
            gap: { xs: "2rem", md: "0" },
            borderBottomLeftRadius: { xs: "16px", md: 0 },
          }}
        >
          {admissionScreenData.keyDates.firstArray.map((item, index) => (
            <Box key={index} sx={{ flex: { md: "0 0 20%" } }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  lineHeight: "100%",
                  color: "#1E1E1E",
                  textAlign: "center",
                  fontFamily: "Inter",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "20px 0px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderLeft: { xs: "none", md: "1px solid #FB7F05" },
            borderRight: "1px solid #FB7F05",
            borderBottom: "1px solid #FB7F05",
            padding: "20px",
            borderBottomRightRadius: "16px",
            borderBottomLeftRadius: { xs: "0", md: "16px" },
            gap: { xs: "2rem", md: "0" },
          }}
        >
          {admissionScreenData.keyDates.secondArray.map((item, index) => (
            <Box key={index} sx={{ flex: { md: "0 0 20%" } }}>
              <Typography
                sx={{
                  fontWeight: "500",
                  lineHeight: "100%",
                  color: "#1E1E1E",
                  textAlign: "center",
                  fontFamily: "Inter",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
