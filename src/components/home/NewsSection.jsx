'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { WidthContainer } from '@/components';
import { homeScreenData } from '@/constants/data';

const ACTIVE_H = 400;
const INACTIVE_H = 213;

const NewsSection = () => {
  const { intheHeadlines } = homeScreenData;
  const items = intheHeadlines?.data || [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  const inactiveItems = [
    ...items.slice(activeIndex + 1),
    ...items.slice(0, activeIndex),
  ];

  const activeItem = items[activeIndex];

  return (
    <WidthContainer>
      <Box sx={{ position: 'relative' }}>

        {/* DESKTOP arrows — top-right corner of the section */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '8px',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <NavButton onClick={prev} icon={<ChevronLeftIcon />} variant="outline" />
          <NavButton onClick={next} icon={<ChevronRightIcon />} variant="outline" />
        </Box>

        {/* Cards row — overflow hidden prevents cards spilling outside screen */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '10px', md: '14px' },
            alignItems: 'flex-end',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {/* ACTIVE CARD */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: '100%', md: '400px' },
              height: { xs: '420px', md: `${ACTIVE_H}px` },
              borderRadius: { xs: '12px', md: '16px' },
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(108,16,188,0.12)',
              border: '1.5px solid rgba(108,16,188,0.15)',
            }}
          >
            <Image
              src={activeItem.image}
              alt={activeItem.alt || 'News'}
              fill
              style={{ objectFit: 'cover', objectPosition: activeItem.objectPosition || 'center top' }}
              sizes="(max-width: 600px) 100vw, 420px"
            />

            {/* Bottom gradient */}
            <Box
              sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0) 52%)',
              }}
            />

            {/* Bottom pill */}
            <Box
              sx={{
                position: 'absolute', bottom: '14px', left: '14px', right: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
                borderRadius: '100px', pl: '8px', pr: '8px', py: '8px', gap: '10px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                <Box
                  sx={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0, position: 'relative',
                    border: '1px solid rgba(0,0,0,0.08)', bgcolor: '#f4f4f4',
                  }}
                >
                  {activeItem.sourceLogo ? (
                    <Image src={activeItem.sourceLogo} alt={activeItem.sourceName || 'Source'} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#6C10BC' }}>
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
                        {(activeItem.sourceName || 'N')[0].toUpperCase()}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: { xs: '12px', md: '13px' }, color: '#1E1E1E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {activeItem.sourceName || 'Read Article'}
                </Typography>
              </Box>

              <Box
                component="a"
                href={activeItem.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: '36px', height: '36px', borderRadius: '50%', bgcolor: '#6C10BC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, cursor: 'pointer', transition: 'background 0.2s',
                  textDecoration: 'none', '&:hover': { bgcolor: '#5a0ea0' },
                }}
              >
                <ArrowOutwardIcon sx={{ color: '#fff', fontSize: '18px' }} />
              </Box>
            </Box>
          </Box>

          {/* INACTIVE CARDS — desktop only */}
          {inactiveItems.map((item, idx) => (
            <Box
              key={item.id ?? idx}
              sx={{
                flexShrink: 0, width: '243px', height: `${INACTIVE_H}px`,
                borderRadius: '16px', overflow: 'hidden', position: 'relative',
                boxShadow: '0 2px 10px rgba(149,157,165,0.15)',
                border: '1px solid rgba(0,0,0,0.06)',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Image
                src={item.image}
                alt={item.alt || `News ${idx + 2}`}
                fill
                style={{ objectFit: 'cover', objectPosition: item.objectPosition || 'center top' }}
                sizes="200px"
              />
            </Box>
          ))}
        </Box>

        {/* MOBILE arrows — on the left/right boundary of the card */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            justifyContent: 'space-between',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <Box sx={{ pointerEvents: 'all', transform: 'translateX(-50%)' }}>
            <NavButton onClick={prev} icon={<ChevronLeftIcon />} variant="frosted" />
          </Box>
          <Box sx={{ pointerEvents: 'all', transform: 'translateX(50%)' }}>
            <NavButton onClick={next} icon={<ChevronRightIcon />} variant="frosted" />
          </Box>
        </Box>

      </Box>
    </WidthContainer>
  );
};

function NavButton({ onClick, icon, variant = 'frosted' }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: '40px', height: '40px', borderRadius: '50%',
        color: '#6C10BC',
        bgcolor: '#fff',
        border: '1.5px solid rgba(108,16,188,0.25)',
        '&:hover': {
          bgcolor: 'rgba(108,16,188,0.06)',
          borderColor: '#6C10BC',
        },
        transition: 'all 0.2s',
      }}
    >
      {icon}
    </IconButton>
  );
}

export default NewsSection;