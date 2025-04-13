import React from "react";
import Life from "./Life";

export const metadata = {
  title: 'Life @ VST – Campus Life at Vedam School of Technology',
  description: 'Explore life at Vedam School of Technology – A thriving tech campus where Computer Science & AI students collaborate, build, and grow. From coding clubs and hackathons to cultural events and peer learning – discover it all.',
  keywords: [
    'Vedam School of Technology campus',
    'Life at VST',
    'engineering college campus life',
    'AI student community',
    'coding clubs and tech events',
    'college hackathons',
    'student life in tech college',
    'peer learning in CS college',
    'college life for BTech students'
  ],
  openGraph: {
    title: 'Life @ VST – Campus Life at Vedam School of Technology',
    description: 'See what life’s like at Vedam – A new-age tech campus filled with innovation, collaboration, and community. Explore student clubs, tech events, and more.',
    url: 'https://www.vedam.org/life',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.png',
        width: 1200,
        height: 630,
        alt: 'Vedam School of Technology Campus Life – Clubs, Events & Tech Culture',
      },
    ],
  },
};

const page = () => {
  return <Life />;
};

export default page;
