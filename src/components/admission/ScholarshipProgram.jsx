import React from "react";
import { Box, Typography } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import DetailsCard from "../atoms/DetailsCard";

export const ScholarshipProgram = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundImage: {
          xs: "url('/img/scholarship/bg_mob.webp')",
          md: "url('/img/scholarship/bg_web.webp')",
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: "24px 0", md: "32px 0" },
      }}
    >
      {/* Bookmark Ribbon */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: { xs: '20px', sm: '40px', md: '80px', lg: '120px' },
          width: { xs: '45px', md: '60px' },
          height: { xs: '50px', md: '85px' },
          backgroundColor: 'white',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
          zIndex: 10,
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", md: "1024px", xl: "1280px" },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '0 10px', sm: '0 0' },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            color: "white",
            fontFamily: "Inter",
            fontWeight: "700",
            marginBottom: { xs: "12px", md: "16px" },
          }}
        >
          Scholarship Program
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            color: "white",
            fontFamily: "Inter",
            lineHeight: "150%",
            fontWeight: "400",
            marginBottom: { xs: "24px", md: "32px" },
            maxWidth: { md: "600px" },
          }}
        >
          {admissionScreenData.scholarshipProgram.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "16px", md: "20px" },
            overflowX: { xs: "visible", md: "visible" },
          }}
        >
          {admissionScreenData.scholarshipProgram.data.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1", md: "1" },
              }}
            >
              <DetailsCard
                isScholarshipCard={true}
                description={item.description}
                title={item.title}
                bgImage={item.bgImage}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};