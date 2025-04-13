import React from "react";
import TeamVedam from "./TeamVedam";

export const metadata = {
  title: 'About Us - Vedam School of Technology',
  description: 'Learn about Vedam School of Technology - Our mission to revolutionize Computer Science and AI education. Meet our expert faculty and discover our innovative approach to tech education.',
  keywords: ['Vedam founders', 'tech education founders', 'AI college founders', 'Vedam leadership', 'startup founders education', 'computer science college founders', 'CS education visionaries'],
  openGraph: {
    title: 'About Us - Vedam School of Technology',
    description: 'Learn about Vedam School of Technology - Our mission to revolutionize Computer Science and AI education. Meet our founders, expert faculty and discover our innovative approach to tech education.',
    url: 'https://www.vedam.org/about',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.png',
        width: 1200,
        height: 630,
        alt: 'About Vedam School of Technology - Computer Science & AI Education',
      },
    ],
  },
};

const page = () => {
  return <TeamVedam />;
};

export default page;
