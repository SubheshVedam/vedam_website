import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";

export const KeyDates = () => {
  return (
    <Box>
      {/* Header Box */}
      <Box
        sx={{
          border: "1px solid #FB7F05",
          borderBottom: "none",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          padding: "20px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "clamp(14px, 2vw, 20px)",
            lineHeight: "100%",
            color: "rgba(251, 127, 5, 1)",
          }}
        >
          {admissionScreenData.keyDates.headerText}
        </Typography>
      </Box>

      {/* Desktop View */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {/* First Row - Header */}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "rgba(251, 127, 5, 0.3)",
            padding: "20px",
            borderLeft: "1px solid #FB7F05",
            borderRight: "1px solid #FB7F05",
          }}
        >
          {admissionScreenData.keyDates.firstArray.map((item, index) => (
            <Box
              key={`desktop-header-${index}`}
              sx={{
                flex: 1,
                textAlign: "center",
                paddingLeft: index !== 0 ? "12px" : 0,
                paddingRight: "12px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  lineHeight: "100%",
                  color: "#1E1E1E",
                  fontFamily: "Inter",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Second Row - Content */}
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            border: "1px solid #FB7F05",
            borderTop: "none",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          {admissionScreenData.keyDates.secondArray.map((item, index) => (
            <Box
              key={`desktop-content-${index}`}
              sx={{
                flex: 1,
                textAlign: "center",
                paddingLeft: index !== 0 ? "12px" : 0,
                paddingRight: "12px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#1E1E1E",
                  fontFamily: "Inter",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mobile View - Tabular Layout */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            borderTop: "1px solid #FB7F05",
            borderRight: "1px solid #FB7F05",
            borderBottom: "1px solid #FB7F05",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            overflow: "hidden",
          }}
        >
          {admissionScreenData.keyDates.firstArray.map((header, index) => (
            <Box
              key={`mobile-row-${index}`}
              sx={{
                display: "flex",
                // borderBottom: index === 4 ? "none" : "1px solid #FB7F05",
              }}
            >
              {/* Header Cell */}
              <Box
                sx={{
                  flex: 1,
                  padding: "16px",
                  backgroundColor: "rgba(251, 127, 5, 0.3)",
                  // borderRight: "1px solid #FB7F05",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    lineHeight: "150%",
                    color: "#1E1E1E",
                    fontFamily: "Inter",
                    textAlign: "center",
                  }}
                >
                  {header}
                </Typography>
              </Box>

              {/* Value Cell */}
              <Box
                sx={{
                  flex: 1,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    lineHeight: "150%",
                    color: "#1E1E1E",
                    fontFamily: "Inter",
                  }}
                >
                  {admissionScreenData.keyDates.secondArray[index]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};