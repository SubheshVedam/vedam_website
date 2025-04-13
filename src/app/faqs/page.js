import React from "react";
import Faqs from "./Faqs";

export const metadata = {
  title: 'FAQs - Vedam School of Technology',
  description: 'Got questions about Vedam School of Technology? Explore answers related to our BTech programs in Computer Science & AI, admission process, campus life, fees, and placements.',
  keywords: ['Vedam FAQs', 'Vedam tech college questions', 'CS AI program queries', 'Vedam admission faq', 'Vedam placements', 'tech college fees', 'computer science faq', 'AI college in India'],
  openGraph: {
    title: 'FAQs - Vedam School of Technology',
    description: 'Find answers to frequently asked questions about Vedam School of Technology - Our Computer Science and AI programs, admission process, curriculum, campus life, and more.',
    url: 'https://www.vedam.org/faqs',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.png',
        width: 1200,
        height: 630,
        alt: 'FAQs - Vedam School of Technology | CS & AI Admissions, Placements, Campus Life',
      },
    ],
  },
};

const page = () => {
  return <Faqs />;
};

export default page;
