import React from "react";
import { admissionScreenData } from "@/constants/data";
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

const Admission = () => {
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
      id: "facilities",
      subtitle: "",
      render: () => <FacilityAndAmenities />,
    },
    {
      id: "fee-structure",
      subtitle: admissionScreenData.feeStructure.subtitle,
      render: () => <FeeStructure />,
      cardProps: { id: "fees-toggle" },
    },
    {
      id: "scholarship",
      subtitle: admissionScreenData.scholarshipProgram.subtitle,
      render: () => <ScholarshipProgram />,
    },
    {
      id: "financing",
      subtitle: admissionScreenData.financingOption.subtitle,
      render: () => <FinancingOptions />,
    },
  ];

  return (
    <PageSection
      paddingTop={0}
      paddingBottom="16px"
      sx={{
        gap: { xs: "1rem", md: "1.5rem" },
      }}
    >
      <VideoWithText
        title={admissionScreenData.hero.title}
        subtitle={admissionScreenData.hero.subtitle}
      />
      <SectionStack
        cardDefaults={{ linearGradientSubtitle: linearGradient }}
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
