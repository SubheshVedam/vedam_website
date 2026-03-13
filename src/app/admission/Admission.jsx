import React from "react";
import { admissionScreenData, homeScreenData } from "@/constants/data";
import { Box } from "@mui/material";
import {
  AdmissionAndFees,
  AdmissionProcess,
  FacilityAndAmenities,
  FeeStructure,
  FinancingOptions,
  KeyDates,
  ScholarshipProgram,
  PageSection,
  SectionStack,
  VideoWithText,
} from "@/components";

const Admission = ({ showHostelFees = true }) => {
  const linearGradient = "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)";
  const sections = [
    {
      id: "admission-and-fees",
      subtitle: admissionScreenData.admissionAndFees.subtitle,
      render: () => <AdmissionAndFees />,
      cardProps: { showSubtitleBottomBorder: true },
    },
    {
      id: "key-dates",
      subtitle: admissionScreenData.keyDates.subtitle,
      render: () => <KeyDates />,
    },
    {
      id: "admission-process",
      subtitle: admissionScreenData.admissionProcess.subtitle,
      render: () => <AdmissionProcess />,
    },
    {
      id: "scholarship",
      subtitle: '',
      render: () => <ScholarshipProgram />,
    },
    {
      id: "fee-structure",
      subtitle: admissionScreenData.feeStructure.subtitle,
      render: () => <FeeStructure showHostelFees={showHostelFees} />,
      cardProps: { id: "fees-toggle" },
    },
    {
      id: "financing",
      subtitle: admissionScreenData.financingOption.subtitle,
      render: () => <FinancingOptions />,
    },
    {
      id: "facilities",
      subtitle: "",
      render: () => <Box sx={{ mb: { xs: '-40px', md: '-80px' } }}>
        <FacilityAndAmenities />
      </Box>
    },
  ];

  return (
    <PageSection
      paddingTop={0}
      // paddingBottom="-86px"
      sx={{
        gap: { xs: "1rem", md: "1.5rem" },
      }}
    >
      <VideoWithText
        title={admissionScreenData.hero.title}
        subtitle={admissionScreenData.hero.subtitle}
        videoUrl={homeScreenData.hero.background_video}
      />
      <SectionStack
        cardDefaults={{}}
        widthContainerProps={{
          childrenStyle: {
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          },
        }}
        sections={sections}
      />
    </PageSection>
  );
};

export default Admission;
