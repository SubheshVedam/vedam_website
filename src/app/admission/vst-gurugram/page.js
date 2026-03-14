import React from "react";
import Admission from "../Admission";
import { gurugramFeeStructureData } from "@/constants/admissionFeeData";
import { GurugramBrochureImageSection } from "@/components/admission/GurugramBrochureImageSection";

const gurugramFacilityImages = [
  { imageUrl: "/img/amenities/campus/gurugram_campus_1.webp", alt: "VST Gurugram facility 1" },
  { imageUrl: "/img/amenities/campus/gurugram_campus_2.webp", alt: "VST Gurugram facility 2" },
  { imageUrl: "/img/amenities/campus/gurugram_campus_3.webp", alt: "VST Gurugram facility 3" },
  { imageUrl: "/img/amenities/campus/gurugram_campus_4.webp", alt: "VST Gurugram facility 4" },
  { imageUrl: "/img/amenities/campus/gurugram_campus_5.webp", alt: "VST Gurugram facility 5" },
  { imageUrl: "/img/amenities/campus/gurugram_campus_6.webp", alt: "VST Gurugram facility 6" },
];

export const metadata = {
  title: "Admissions & Fees - VST Gurugram | Vedam School of Technology",
  description:
    "Admissions and fee details for the VST Gurugram campus. Explore eligibility, admission process, scholarships, financing options, and fee structure.",
  keywords: [
    "Vedam Gurugram admission",
    "VST Gurugram fees",
    "CS AI college Gurugram admission",
    "Vedam Gurugram campus",
  ],
  openGraph: {
    title: "Admissions & Fees - VST Gurugram",
    description:
      "Apply to Vedam School of Technology at VST Gurugram. Review admissions, fees, scholarships, and process details.",
    url: "https://www.vedam.org/admission/vst-gurugram",
    siteName: "Vedam School of Technology",
    type: "website",
    images: [
      {
        url: "/img/Vedam_Final_Logo_White.webp",
        width: 1200,
        height: 630,
        alt: "Admissions & Fees - VST Gurugram",
      },
    ],
  },
};

const page = () => {
  return (
    <Admission
      showHostelFees={false}
      feeStructureData={gurugramFeeStructureData}
      topSections={[
        {
          id: "gurugram-collaboration-brochure",
          subtitle: "In Collaboration with",
          render: () => <GurugramBrochureImageSection />,
        },
      ]}
      facilityAndAmenitiesProps={{ flatImages: gurugramFacilityImages }}
    />
  );
};

export default page;
