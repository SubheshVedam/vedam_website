import React from "react";
import { Box } from "@mui/material";
import { admissionScreenData } from "@/constants/data";
import {
  AdmissionAndFees,
  AdmissionProcess,
  CardContainer,
  FacilityAndAmenities,
  FeeStructure,
  FinancingOptions,
  KeyDates,
  ScholarshipProgram,
  VideoWithText,
  WidthContainer,
} from "@/components";

const Admission = () => {
  const linearGradient = "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)";
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
          linearGradientSubtitle={linearGradient}
          showSubtitleBottomBorder
        >
          <AdmissionAndFees />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.keyDates.subtitle}
          linearGradientSubtitle={linearGradient}
        >
          <KeyDates />
        </CardContainer>
        <CardContainer subtitle={admissionScreenData.admissionProcess.subtitle}>
          <AdmissionProcess />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.facilityAndAmenities.subtitle}
          linearGradientSubtitle={linearGradient}
        >
          <FacilityAndAmenities />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.feeStructure.subtitle}
          linearGradientSubtitle={linearGradient}
        >
          <FeeStructure />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.scholarshipProgram.subtitle}
          linearGradientSubtitle={linearGradient}
        >
          <ScholarshipProgram />
        </CardContainer>
        <CardContainer
          subtitle={admissionScreenData.financingOption.subtitle}
          linearGradientSubtitle={linearGradient}
        >
          <FinancingOptions />
        </CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default Admission;
