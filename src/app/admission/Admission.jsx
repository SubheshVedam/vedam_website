import React from "react";
import { Box } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import {
  AdmissionAndFees,
  CardContainer,
  VideoWithText,
  WidthContainer,
} from "@/components";

const Admission = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "1rem", md: "1.5rem" },
        alignItems: "center",
        paddingBottom: "16px",
        backgroundColor: "#F9F9F9",
      }}
    >
      <VideoWithText
        title={admissionScreenData.hero.title}
        subtitle={admissionScreenData.hero.subtitle}
      />
      <WidthContainer
        childrenStyle={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <CardContainer
          subtitle={admissionScreenData.admissionAndFees.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
          showSubtitleBottomBorder
        >
          <AdmissionAndFees />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.keyDates.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>
        <CardContainer
          subtitle={admissionScreenData.admissionProcess.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>
        <CardContainer
          subtitle={admissionScreenData.facilityAndAmenities.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>
        <CardContainer
          subtitle={admissionScreenData.feeStructure.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>
        <CardContainer
          subtitle={admissionScreenData.scholarshipProgram.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>{" "}
        <CardContainer
          subtitle={admissionScreenData.financingOption.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        ></CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default Admission;
