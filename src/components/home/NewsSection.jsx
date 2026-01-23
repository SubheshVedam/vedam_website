'use client'
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { WidthContainer } from '@/components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { homeScreenData } from '@/constants/data';

const NewsSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { intheHeadlines } = homeScreenData;

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const scrollAmount = cardWidth + 20; // card width + gap

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!intheHeadlines?.data?.length) return null;

  return (
    <WidthContainer>
      <Box sx={{ position: 'relative' }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          sx={{
            position: 'absolute',
            left: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            opacity: canScrollLeft ? 0.9 : 0.3,
            backgroundColor: 'background.paper',
            boxShadow: 2,
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            gap: '1.25rem',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            pl: { xs: '1rem', md: '2rem', lg: '2.5rem' },
            pr: { xs: '1rem', md: '2rem', lg: '2.5rem' },
            py: 1,
          }}
        >
          {intheHeadlines.data.map((headline, index) => (
            <Link
              key={headline.id || index}
              href={headline.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', flexShrink: 0 }}
            >
              <Box
                sx={{
                  width: { xs: '75vw', sm: '18.75rem' },
                  height: '19rem',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 4px rgba(149, 157, 165, 0.2)',
                  position: 'relative',
                }}
              >
                <Image
                  src={headline.image}
                  alt={headline.alt || `News ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: headline.objectPosition || 'center',
                  }}
                  sizes="(max-width: 600px) 75vw, 300px"
                />
              </Box>
            </Link>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          sx={{
            position: 'absolute',
            right: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            opacity: canScrollRight ? 0.9 : 0.3,
            backgroundColor: 'background.paper',
            boxShadow: 2,
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </WidthContainer>
  );
};

export default NewsSection;
