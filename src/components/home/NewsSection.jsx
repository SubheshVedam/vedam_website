'use client'
import React from 'react';
import Link from 'next/link';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { CardContainer, WidthContainer } from '@/components';

const NewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
  ];

  return (
    <WidthContainer>
      <CardContainer
        subtitle="In the Headlines"
        linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 100%)"
      >
        {isMobile ? (
          // Mobile horizontal scroll view
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: '16px',
              padding: '8px 16px 24px',
              scrollSnapType: 'x mandatory',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
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
                    width: '70vw',
                    height: '100vw',
                    minHeight: '200px',
                    maxHeight: '300px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    scrollSnapAlign: 'start',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes="(max-width: 600px) 85vw"
                  />
                </Box>
              </Link>
            ))}
          </Box>
        ) : (
          // Desktop grid view
          <Grid container spacing={2}>
            {newsArticles.map((article) => (
              <Grid item xs={12} sm={3} md={3} key={article.id}>
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { sm: '250px', md: '260px', xl: '330px' },
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContainer>
    </WidthContainer>
  );
};

export default NewsSection;
