import React from "react";
import { admissionScreenData, homeScreenData } from "@/constants/data";
import { Box } from "@mui/material";
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
  vsatIntake = null,
}) => {
  const linearGradient = "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)";
  const defaultKeyDatesRow = admissionScreenData.keyDates.secondArray;
  const keyDatesSecondRow = vsatIntake
    ? [
        vsatIntake.vstDateDisplay,
        vsatIntake.applicationClosingDisplay,
        ...defaultKeyDatesRow.slice(2),
      ]
    : undefined;

  const rightSideSteps = vsatIntake
    ? admissionScreenData.admissionProcess.rightSideArray.map((step) => {
        if (step.id === 0) {
          return {
            ...step,
            subtitle1: `Last date to apply for this intake is ${vsatIntake.applicationClosingDisplay}`,
          };
        }
        if (step.id === 1) {
          return {
            ...step,
            subtitle1: `The next VSAT is on ${vsatIntake.vstDateDisplay}`,
          };
        }
        return step;
      })
    : undefined;

  const normalizedTopSections = Array.isArray(topSections)
    ? topSections.filter(Boolean)
    : topSections
      ? [topSections]
      : [];
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
      render: () => <KeyDates secondRowValues={keyDatesSecondRow} />,
    },
    {
      id: "admission-process",
      subtitle: admissionScreenData.admissionProcess.subtitle,
      render: () => (
        <AdmissionProcess rightSideSteps={rightSideSteps} />
      ),
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
