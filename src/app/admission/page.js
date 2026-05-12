import React from "react";
import Admission from "./Admission";
import { adypuPuneFeeStructureData } from "@/constants/admissionFeeData";
import { getVsatIntakeFromSheet } from "@/lib/vsatSheet";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = 3600;

export const metadata = {
  title: 'New Age College for BTech in CS & AI  Admission | Vedam',
  description: 'Apply for BTech in CS & AI at Vedam. New age private CS college with simple admission process, scholarships up to 100%, and direct admission.',
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
    title: 'New Age College for BTech in CS & AI  Admission | Vedam',
    description: 'Apply for BTech in CS & AI at Vedam. New age private CS college with simple admission process, scholarships up to 100%, and direct admission.',
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
    <>
      <BreadcrumbSchema />
      <Admission feeStructureData={adypuPuneFeeStructureData} vsatIntake={vsatIntake} />
    </>
  );
}
