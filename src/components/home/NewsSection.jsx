import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { CardContainer, WidthContainer } from '@/components';

const NewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample news articles - replace with actual news articles
  const newsArticles = [
    {
      id: 1,
      image: '/img/inTheNews/vedam_in_the_news_1.jpeg',
      alt: 'News Article 1',
    },
    {
      id: 2,
      image: '/img/inTheNews/vedam_in_the_news_2.jpeg',
      alt: 'News Article 2',
    },
    {
      id: 3,
      image: '/img/inTheNews/vedam_in_the_news_3.jpeg',
      alt: 'News Article 3',
    },
    {
      id: 4,
      image: '/img/inTheNews/vedam_in_the_news_4.jpeg',
      alt: 'News Article 4',
    },
  ];

  return (
    <WidthContainer>
      <CardContainer
        subtitle="Hear Us in the News"
        linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 100%)"
      >
        {isMobile ? (
          // Mobile horizontal scroll view with consistent image display
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
              <Box
                key={article.id}
                sx={{
                  flex: '0 0 auto',
                  width: '70vw',
                  height: '100vw', // Maintain aspect ratio (adjust as needed)
                  minHeight: '200px', // Minimum height
                  maxHeight: '300px', // Maximum height
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
                  priority={article.id === 1} // Only prioritize first image
                  sizes="(max-width: 600px) 85vw"
                />
              </Box>
            ))}
          </Box>
        ) : (
          // Desktop grid view
          <Grid container spacing={{ xs: 2, sm: 3, md: 11 }}>
            {newsArticles.map((article) => (
              <Grid item xs={12} sm={6} md={3} key={article.id}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '140%',
                    height: { sm: '250px', md: '300px' },
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
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
                    sizes="(max-width: 960px) 50vw, 25vw"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContainer>
    </WidthContainer>
  );
};

export default NewsSection;