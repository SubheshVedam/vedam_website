import React from "react";
import Admission from "./Admission";

export const metadata = {
  title: 'Admissions & Fees - Vedam School of Technology',
  description: 'Start your journey in Computer Science and AI at Vedam School of Technology. Explore our BTech programs, check eligibility, understand the admission process, and discover our affordable fee structure and scholarships.',
  keywords: ['vedam admissions', 'CS AI college admission', 'apply to vedam', 'affordable BTech programs', 'AI engineering admission', 'tech college application', 'scholarships for BTech', 'CS AI college fees'],
  openGraph: {
    title: 'Admissions - Vedam School of Technology',
    description: 'Apply to Vedam School of Technology - Learn about our Computer Science and AI programs, admission requirements, application process, and scholarship opportunities.',
    url: 'https://www.vedam.org/admission',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.png',
        width: 1200,
        height: 630,
        alt: 'Admissions & Fees - Vedam School of Technology',
      },
    ],
  },
};

const page = () => {
  return <Admission />;
};

export default page;
