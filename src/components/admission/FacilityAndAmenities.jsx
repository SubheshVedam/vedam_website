'use client'
import { Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
  { name: "Campus", folder: "campus", count: 6 },
  { name: "Classrooms", folder: "classroom", count: 5 },
  { name: "Hive", folder: "hive", count: 5 },
  { name: "Common Area", folder: "common_area", count: 7 },
];

const CategoryCarousel = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 2;
  const maxIndex = Math.ceil(category.count / imagesPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const startImg = currentIndex * imagesPerView + 1;
  const endImg = Math.min(startImg + imagesPerView - 1, category.count);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: '10px', md: '18px' } }}>
        <Typography
          sx={{
            color: '#8A18FF',
            fontWeight: 600,
            fontSize: { xs: '20px', md: '30px' },
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {category.name}
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              opacity: 0.8,
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'background.paper',
              },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            sx={{
              opacity: 0.8,
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'background.paper',
              },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Desktop: Grid with controlled navigation */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          position: 'relative',
        }}
      >
        {Array.from({ length: endImg - startImg + 1 }, (_, i) => startImg + i).map((imgNum) => (
          <Box
            key={imgNum}
            sx={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '16px',
              overflow: 'hidden',
              bgcolor: '#2D1B4E',
            }}
          >
            <img
              src={`/img/amenities/${category.folder}/img${imgNum}.png`}
              alt={`${category.name} ${imgNum}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Mobile: Scrollable carousel */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          overflowX: 'auto',
          gap: '16px',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          pb: 1,
        }}
      >
        {Array.from({ length: category.count }, (_, i) => i + 1).map((imgNum) => (
          <Box
            key={imgNum}
            sx={{
              minWidth: '85%',
              aspectRatio: '16/9',
              borderRadius: '16px',
              overflow: 'hidden',
              bgcolor: '#2D1B4E',
              scrollSnapAlign: 'center',
            }}
          >
            <img
              src={`/img/amenities/${category.folder}/img${imgNum}.png`}
              alt={`${category.name} ${imgNum}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FacilityAndAmenities = ({ isV2 }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundImage: {
          xs: 'url(/img/amenities/bg/bg_mob.png)',
          md: 'url(/img/amenities/bg/bg_web.png)',
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '18px 0', md: '40px 0' },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "1024px", xl: "1280px" },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: { xs: '0 10px', sm: '0 0' },
          gap: { xs: '16px', md: '45px' },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            background: 'linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            fontSize: { xs: "24px", sm: "36px" },
            display: "inline-block",
            mb: { xs: '-10px', md: '-30px' }
          }}
        >
          Facilities & Amenities
        </Typography>

        {categories.map((category) => (
          <CategoryCarousel key={category.folder} category={category} />
        ))}
      </Box>
    </Box>
  );
};