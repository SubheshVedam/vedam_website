'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { CardContainer, WidthContainer } from '@/components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NewsSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const newsArticles = [
    {
      id: 1,
      image: "/img/inTheNews/vedam_in_the_news_5.jpeg",
      alt: "News Article 1",
      link: "https://timesofindia.indiatimes.com/spotlight/leading-ai-focused-computer-science-programme-in-india-inside-vedams-4-year-computer-science-undergraduate-program/articleshow/121819349.cms",
    },
    {
      id: 2,
      image: "/img/inTheNews/vedam_in_the_news_2.webp",
      alt: "News Article 2",
      link: "https://www.edtechreview.in/news/vedam-school-of-technology-aims-to-transform-computer-science-education-in-india/",
    },
    {
      id: 3,
      image: "/img/inTheNews/vedam_in_the_news_3.webp",
      alt: "News Article 3",
      link: "https://educationmatters.in/2025/02/vedam-school-of-technology-set-to-revolutionize-computer-science-education-in-india/",
    },
    {
      id: 4,
      image: "/img/inTheNews/vedam_in_the_news_4.webp",
      alt: "News Article 4",
      link: "https://government.economictimes.indiatimes.com/news/education/vedam-school-of-technology-acquires-algoprep-to-build-indias-first-ai-native-tech-curriculum/120303273?utm_source=latest_news&utm_medium=homepage",
    },
    {
      id: 5,
      image: "/img/inTheNews/vedam_in_the_news_5.jpeg",
      alt: "News Article 5",
      link: "https://timesofindia.indiatimes.com/spotlight/leading-ai-focused-computer-science-programme-in-india-inside-vedams-4-year-computer-science-undergraduate-program/articleshow/121819349.cms",
    },
    {
      id: 6,
      image: "/img/inTheNews/vedam_in_the_news_2.webp",
      alt: "News Article 6",
      link: "https://www.edtechreview.in/news/vedam-school-of-technology-aims-to-transform-computer-science-education-in-india/",
    },
    {
      id: 7,
      image: "/img/inTheNews/vedam_in_the_news_3.webp",
      alt: "News Article 7",
      link: "https://educationmatters.in/2025/02/vedam-school-of-technology-set-to-revolutionize-computer-science-education-in-india/",
    },
    {
      id: 8,
      image: "/img/inTheNews/vedam_in_the_news_4.webp",
      alt: "News Article 8",
      link: "https://government.economictimes.indiatimes.com/news/education/vedam-school-of-technology-acquires-algoprep-to-build-indias-first-ai-native-tech-curriculum/120303273?utm_source=latest_news&utm_medium=homepage",
    },
  ];

  return (
    // <WidthContainer sx={{
    //   // padding: '0px'
    // }}>
    <CardContainer
      sx={{
        // padding: "0px"
      }}
      subtitle="In the Headlines"
      linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 100%)"
    >
      <Box sx={{
        position: 'relative',
        // padding: "0px" 
      }}>
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            // padding: "0px",
            transform: 'translateY(-50%)',
            zIndex: 100,
            opacity: 0.8,
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'background.paper',
              opacity: 1,
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '1.2rem',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            paddingLeft: '40px', // Reduced left padding
            paddingRight: '50px',
          }}
        >
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: '300px', // Slightly increased width
                  height: '350px', // Increased height significantly
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  sizes="300px"
                />
              </Box>
            </Link>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            opacity: 0.8,
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'background.paper',
              opacity: 1,
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </CardContainer>
    // </WidthContainer>
  );
};

export default NewsSection;