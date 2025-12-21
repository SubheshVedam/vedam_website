"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Collapse,
} from "@mui/material";
import { lifeAtVedam } from "@/constants/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const clubImageMap = {
  "Open Source Club": "open_source",
  "Competitive Coding Club": "coding",
  "Entrepreneurship Club": "entrepreneurship",
  "Cultural Club": "cultural",
  "Sports Club": "sports",
  "ESports Club": "esports",
};



const clubVideoMap = {
  "Open Source Club": "https://www.youtube.com/embed/35z2mEceFqk?autoplay=1&si=0",
  "Competitive Coding Club": "https://www.youtube.com/embed/kr8Wus11B8s?autoplay=1&si=0",
  "Entrepreneurship Club": "https://www.youtube.com/embed/0Pp7yhV1-1g?autoplay=1&si=0",
  "Cultural Club": "https://www.youtube.com/embed/qV7SaAdMabw?autoplay=1&si=0",
  "Sports Club": "https://www.youtube.com/embed/G58ZWe5eLZA?autoplay=1&si=0",
  "ESports Club": "https://www.youtube.com/embed/IzUII8tUUHc?autoplay=1&si=0",
};

// Separate component for club images
const ClubImages = ({ clubName, getImagePath, resetKey }) => {
  const [showIframe, setShowIframe] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [mobileShowIframe, setMobileShowIframe] = useState(false);
  const [mobileVideoUrl, setMobileVideoUrl] = useState("");

  // Reset video when club changes
  React.useEffect(() => {
    setShowIframe(false);
    setVideoUrl("");
    setMobileShowIframe(false);
    setMobileVideoUrl("");
  }, [resetKey, clubName]);

  return (
    <>
      {/* Desktop View - Custom Grid Layout */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(2, 220px)",
          gap: "18px",
          maxHeight: "578px",
        }}
      >
        {/* Row 1: img1 (2 cols), img2 (2 cols), img3 (1 col) */}
        <Box
          sx={{
            gridColumn: "span 2",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          {showIframe ? (
            <iframe
              width="100%"
              height="100%"
              style={{
                borderRadius: "16px",
                border: "none",
              }}
              src={videoUrl}
              title="YouTube video player"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Box
              onClick={() => {
                setVideoUrl(clubVideoMap[clubName]);
                setShowIframe(true);
              }}
              sx={{
                cursor: "pointer",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={getImagePath(clubName, 1)}
                alt="Club image 1"
                style={{
                  width: "100%",
                  height: "100%",
                  // objectFit: "cover",
                  backgroundSize: "contain",       // 🔥 makes whole image visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
              <Box
                className="play-button"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(108, 16, 188, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                  "&::after": {
                    content: '""',
                    width: 0,
                    height: 0,
                    borderLeft: "16px solid white",
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    marginLeft: "3px",
                  },
                }}
              />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            gridColumn: "span 2",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={getImagePath(clubName, 2)}
            alt="Club image 2"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",       // 🔥 makes whole image visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 1",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={getImagePath(clubName, 3)}
            alt="Club image 3"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",       // 🔥 makes whole image visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>

        {/* Row 2: img4 (1 col), img5 (2 cols), img6 (2 cols) */}
        <Box
          sx={{
            gridColumn: "span 1",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={getImagePath(clubName, 4)}
            alt="Club image 4"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",       // 🔥 makes whole image visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 2",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={getImagePath(clubName, 5)}
            alt="Club image 5"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",       // 🔥 makes whole image visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 2",
            position: "relative",
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={getImagePath(clubName, 6)}
            alt="Club image 6"
            style={{
              width: "100%",
              height: "100%",
              // backgroundSize: "contain",       // 🔥 makes whole image visible
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>

      {/* Mobile View - Horizontal Scroll */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          overflowX: "auto",
          gap: "10px",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          pb: 1,
          mt: 2,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((imgNum) => (
          <Box
            key={imgNum}
            sx={{
              minWidth: "85%",
              aspectRatio: "1.5/1",
              borderRadius: "16px",
              overflow: "hidden",
              scrollSnapAlign: "center",
              position: "relative",
            }}
          >
            {imgNum === 1 ? (
              mobileShowIframe ? (
                <iframe
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "16px",
                    border: "none",
                  }}
                  src={mobileVideoUrl}
                  title="YouTube video player"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Box
                  onClick={() => {
                    setMobileVideoUrl(clubVideoMap[clubName] || "https://www.youtube.com/embed/RRnFQXXoAzw?autoplay=1&si=0");
                    setMobileShowIframe(true);
                  }}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={getImagePath(clubName, imgNum)}
                    alt={`Club image ${imgNum}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    className="play-button"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(108, 16, 188, 0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&::after": {
                        content: '""',
                        width: 0,
                        height: 0,
                        borderLeft: "16px solid white",
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        marginLeft: "3px",
                      },
                    }}
                  />
                </Box>
              )
            ) : (
              <img
                src={getImagePath(clubName, imgNum)}
                alt={`Club image ${imgNum}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export const ClubsAtVst = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clubs = lifeAtVedam.clubsAtVst;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClubClick = (index) => {
    setActiveIndex(index);
  };

  const getImagePath = (clubName, imageIndex) => {
    const clubFolder = clubImageMap[clubName];
    return `/img/clubsatVedam/${clubFolder}/img${imageIndex}.webp`;
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "1.5rem", md: "18px" },
        }}
      >
        {/* Left Side - Club List (Desktop Only) */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {clubs.map((club, index) => (
            <Box
              key={index}
              onClick={() => handleClubClick(index)}
              sx={{
                padding: "16px",
                borderRadius: "16px",
                backgroundColor:
                  activeIndex === index
                    ? "rgba(108, 16, 188, 0.1)"
                    : "#ffffff",
                border:
                  activeIndex === index
                    ? "1px solid #E8D1FF"
                    : "1px solid #e0e0e0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(108, 16, 188, 0.05)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // marginBottom: activeIndex === index ? "0" : 0,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: activeIndex === index ? "#6C10BC" : "#000",
                  }}
                >
                  {club.rightSideText || `Club ${index + 1}`}
                </Typography>
                <ArrowForwardIosIcon
                  sx={{
                    color: activeIndex === index ? "#6C10BC" : "#666",
                    fontSize: "1.2rem",
                    transform:
                      activeIndex === index ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              <Collapse in={activeIndex === index}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "150%",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "#555",
                  }}
                >
                  {club.description}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </Box>

        {/* Mobile View - Club List with Images Below Each */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          {clubs.map((club, index) => (
            <Box key={index}>
              <Box
                onClick={() => handleClubClick(index)}
                sx={{
                  padding: "20px",
                  borderRadius: "16px",
                  backgroundColor:
                    activeIndex === index
                      ? "rgba(108, 16, 188, 0.1)"
                      : "#ffffff",
                  border:
                    activeIndex === index
                      ? "1px solid #E8D1FF"
                      : "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(108, 16, 188, 0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: activeIndex === index ? "1rem" : 0,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      fontFamily: "Inter",
                      color: activeIndex === index ? "#6C10BC" : "#000",
                    }}
                  >
                    {club.rightSideText || `Club ${index + 1}`}
                  </Typography>
                  <ArrowForwardIosIcon
                    sx={{
                      color: activeIndex === index ? "#6C10BC" : "#666",
                      fontSize: "1.2rem",
                      transform:
                        activeIndex === index ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>

                <Collapse in={activeIndex === index}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      lineHeight: "150%",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#555",
                    }}
                  >
                    {club.description}
                  </Typography>
                </Collapse>
              </Box>

              {/* Images immediately below this club in mobile view */}
              <Collapse in={activeIndex === index}>
                <ClubImages
                  clubName={club.rightSideText}
                  getImagePath={getImagePath}
                  resetKey={`mobile-${index}`}
                />
              </Collapse>
            </Box>
          ))}
        </Box>

        {/* Right Side - Images (Desktop Only) */}
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <ClubImages
            clubName={clubs[activeIndex].rightSideText}
            getImagePath={getImagePath}
            resetKey={activeIndex}
          />
        </Box>
      </Box>
    </Box>
  );
};