import React from "react";
import Admission from "../Admission";
import { adypuPuneFeeStructureData } from "@/constants/admissionFeeData";
import { getVsatIntakeFromSheet } from "@/lib/vsatSheet";

export const revalidate = 3600;
import { AdypuBrochureVideoSection } from "@/components/admission/AdypuBrochureVideoSection";

export const metadata = {
  title: "Admissions & Fees - VST ADYPU Pune | Vedam School of Technology",
  description:
    "Admissions and fee details for the VST ADYPU Pune campus. Explore eligibility, admission process, scholarships, financing options, and fee structure.",
  keywords: [
    "Vedam ADYPU Pune admission",
    "VST ADYPU Pune fees",
    "CS AI college Pune admission",
    "Vedam Pune campus",
  ],
  openGraph: {
    title: "Admissions & Fees - VST ADYPU Pune",
    description:
      "Apply to Vedam School of Technology at VST ADYPU Pune. Review admissions, fees, scholarships, and process details.",
    url: "https://www.vedam.org/admission/vst-adypu-pune",
    siteName: "Vedam School of Technology",
    type: "website",
    images: [
      {
        url: "/img/Vedam_Final_Logo_White.webp",
        width: 1200,
        height: 630,
        alt: "Admissions & Fees - VST ADYPU Pune",
      },
    ],
  },
};

export default async function Page() {
  const vsatIntake = await getVsatIntakeFromSheet();
  return (
    <Admission
      feeStructureData={adypuPuneFeeStructureData}
      vsatIntake={vsatIntake}
      topSections={[
        {
          id: "adypu-video-brochure",
          subtitle: "In Collaboration with",
          render: () => <AdypuBrochureVideoSection />,
        },
      ]}
    />
  );
}
