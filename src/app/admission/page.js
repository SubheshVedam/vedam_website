import React from "react";
import Admission from "./Admission";
import { adypuPuneFeeStructureData } from "@/constants/admissionFeeData";
import { getVsatIntakeFromSheet } from "@/lib/vsatSheet";

export const revalidate = 3600;

export const metadata = {
  title: 'Admissions & Fees - Vedam School of Technology',
  description: 'Start your journey in Computer Science and AI at Vedam School of Technology. Explore our BTech programs, check eligibility, understand the admission process, and discover our affordable fee structure and scholarships.',
  keywords: [
    'Vedam School of Technology admissions',
    'Vedam admissions 2026',
    'BTech Computer Science and AI admission',
    'CS AI college admission India',
    'AI engineering college admission',
    'BTech AI admission',
    'Vedam application form',
    'Vedam eligibility criteria',
    'Vedam fee structure',
    'Vedam scholarships',
    'BTech scholarships India',
    'Computer Science AI college fees',
    'Vedam ADYPU Pune admission',
    'Vedam Gurugram admission',
    'VST Pune admission',
    'VST Gurugram admission',
  ],
  openGraph: {
    title: 'Admissions - Vedam School of Technology',
    description: 'Apply to Vedam School of Technology - Learn about our Computer Science and AI programs, admission requirements, application process, and scholarship opportunities.',
    url: 'https://www.vedam.org/admission',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.webp',
        width: 1200,
        height: 630,
        alt: 'Admissions & Fees - Vedam School of Technology',
      },
    ],
  },
};

export default async function Page() {
  const vsatIntake = await getVsatIntakeFromSheet();
  return (
    <Admission feeStructureData={adypuPuneFeeStructureData} vsatIntake={vsatIntake} />
  );
}
