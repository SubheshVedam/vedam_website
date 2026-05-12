import React from 'react'
import Home from '../app/home/client/Home'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Vedam School of Technology",
  alternateName: "Vedam School",
  url: "https://www.vedam.org/",
  logo: "https://www.vedam.org/_next/image?url=%2Fimg%2Fvedam_logo.webp&w=256&q=75",
  sameAs: [
    "https://www.instagram.com/vedamschooloftechnology",
    "https://www.youtube.com/@vedamschooloftechnology",
  ],
};

export const metadata = {
  title: 'New Age College for B.Tech Degree in CS & AI | Vedam school of Technology',
  description: "Earn a B.Tech degree in CS & AI by UGC-approved universities through Vedam's 4-year New Age program in CS and AI.",
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Vedam School of Technology',
    'BTech in Computer Science',
    'AI engineering college in India',
    'best tech college in India',
    'computer science and AI education',
    'data science and machine learning degree',
    'top CS college with placements',
    'new age engineering college',
    'industry-aligned tech programs',
    'AI and machine learning BTech'
  ],
  openGraph: {
    title: 'New Age College for B.Tech Degree in CS & AI | Vedam school of Technology',
    description: "Earn a B.Tech degree in CS & AI by UGC-approved universities through Vedam's 4-year New Age program in CS and AI.",
    url: 'https://www.vedam.org/',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.webp',
        width: 1200,
        height: 630,
        alt: 'Vedam School of Technology - Computer Science & AI Education',
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Home />
    </>
  )
}

export default page
