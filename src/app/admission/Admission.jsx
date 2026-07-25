import React from "react";
import { admissionScreenData, homeScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";
import {
  AdmissionAndFees,
  AdmissionProcess,
  DirectInterviewRoute,
  FacilityAndAmenities,
  FeeStructure,
  FinancingOptions,
  KeyDates,
  ScholarshipProgram,
  PageSection,
  SectionStack,
  VideoWithText,
} from "@/components";

const Admission = ({
  showHostelFees = true,
  feeStructureData = undefined,
  topSections = [],
  facilityAndAmenitiesProps = {},
}) => {
  const linearGradient = "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)";
  const normalizedTopSections = Array.isArray(topSections)
    ? topSections.filter(Boolean)
    : topSections
      ? [topSections]
      : [];
  const sections = [
    {
      id: "apply-now-2026",
      useCard: false,
      plainWrapperProps: {
        sx: {
          width: "100%",
          textAlign: "center",
          marginBottom: { xs: "1rem", md: "1.5rem" },
        },
      },
      render: () => (
        <Typography
          component="h2"
          variant="h2"
          fontFamily="Inter"
          sx={{
            display: "inline-block",
            fontWeight: "700",
            background: linearGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
            lineHeight: "120%",
          }}
        >
          Apply Now for the 2026 Intake
        </Typography>
      ),
    },
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
      id: "direct-interview-route",
      useCard: false,
      render: () => <DirectInterviewRoute />,
    },
    {
      id: "scholarship",
      subtitle: 'Scholarship Program',
      render: () => <ScholarshipProgram />,
    },
    // {
    //   id: "fee-structure",
    //   subtitle: admissionScreenData.feeStructure.subtitle,
    //   render: () => (
    //     <FeeStructure
    //       showHostelFees={showHostelFees}
    //       feeStructureData={feeStructureData}
    //     />
    //   ),
    //   cardProps: { id: "fees-toggle" },
    // },
    // {
    //   id: "financing",
    //   subtitle: admissionScreenData.financingOption.subtitle,
    //   render: () => <FinancingOptions />,
    // },
    // {
    //   id: "facilities",
    //   subtitle: "",
    //   render: () => <Box sx={{ mb: { xs: '-40px', md: '-80px' } }}>
    //     <FacilityAndAmenities {...facilityAndAmenitiesProps} />
    //   </Box>
    // },
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
        sections={[...normalizedTopSections, ...sections]}
      />
    </PageSection>
  );
};

export default Admission;
