"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export const VedamInovationLab = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedZone, setSelectedZone] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const zones = [
    { name: "AI + Mac Zone", images: ["/img/innovation_lab/img01.png", "/img/innovation_lab/img02.png"] },
    { name: "Robotics Zone", images: ["/img/innovation_lab/img03.png", "/img/innovation_lab/img04.png"] },
    { name: "Drone Zone", images: ["/img/innovation_lab/img05.png", "/img/innovation_lab/img06.png"] },
    { name: "VC Fund Linkage", images: ["/img/innovation_lab/img07.png", "/img/innovation_lab/img08.png"] },
    { name: "Projects you'll Build", images: ["/img/innovation_lab/img09.png", "/img/innovation_lab/img10.png"] },
  ];

  const handlePrevZone = () => {
    setSelectedZone((prev) => (prev === 0 ? zones.length - 1 : prev - 1));
  };

  const handleNextZone = () => {
    setSelectedZone((prev) => (prev === zones.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "12px", sm: "34px" },
        // p: isMobile ? "2rem 1rem" : "3rem 2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            color: "#1E1E1E",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: { xs: "12px", sm: "24px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: { xs: "21px", sm: "31px" },
            mb: { sm: '34px' }
            // maxWidth: "900px",
          }}
        >
          {isMobile ? (
            <>
              <span style={{ fontSize: '16px' }}>
                Vedam Innovation Lab </span><br />
              is a cutting-edge incubator driving{" "}
              <span style={{ fontWeight: 600 }}>
                innovation in AR/VR, AI & ML, IoT, Robotics, and Drones.
              </span>
            </>
          ) : (
            <>
              Vedam Innovation Lab is a cutting-edge incubator driving{" "}
              <span style={{ fontWeight: 600 }}>
                innovation in AR/VR, AI & ML, IoT, Robotics, and Drones.
              </span>
            </>
          )}
        </Typography>

      </Box>

      {/* Video Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: { sx: '11px', md: '23px' },
          width: "100%",
          margin: "0 auto",
          mb: { sm: '34px' }
        }}>
        <Box
          sx={{
            flex: 1,
            height: isMobile ? "168px" : "282px",
            borderRadius: "16px",
            overflow: "hidden",
          }}>
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
                setVideoUrl(
                  "https://www.youtube.com/embed/eq8HnUDuN0E?autoplay=1&si=0"
                );
                setShowIframe(true);
              }}
              sx={{
                cursor: "pointer",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}>
              <Image
                src="/img/VideothumbnaillifeVST.jpg"
                alt="Video thumbnail"
                width={2000}
                height={1200}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0,0,0,0.6)",
                  padding: "12px 16px",
                  borderRadius: "100px",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="#fff"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Box>
            </Box>
          )}
        </Box>

        {!isMobile && (
          <Box
            sx={{
              flex: 1,
              height: "282x",
              borderRadius: "16px",
              overflow: "hidden",
            }}>
            <Image
              src="/img/innovation_lab/image2.jpg"
              alt="Innovation Lab"
              width={600}
              height={282}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        )}
      </Box>

      {isMobile && (
        <Box
          sx={{
            width: "100%",
            height: "214px",
            borderRadius: "16px",
            overflow: "hidden",
          }}>
          <Image
            src="/img/innovation_lab/image2.jpg"
            alt="Innovation Lab"
            width={600}
            height={214}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </Box>
      )}

      {/* Title */}
      <Box>
        <Typography
          sx={{
            color: "#5E00AF",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: {
              xs: "16px",
              sm: "24px",
            },
            fontStyle: "normal",
            fontWeight: { xs: 700, sm: 600 },
            lineHeight: { xs: "21px", sm: "31px" },
            mt: { xs: "10px" }
          }}
          className="text-trim"
        >
          Vedam Innovation Zone: Engineering Tomorrow's Tech Today
        </Typography>
      </Box>

      {/* Zone Buttons - Desktop */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          {zones.map((zone, index) => (
            <Button
              key={index}
              onClick={() => setSelectedZone(index)}
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 500,
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
                background: selectedZone === index ? "linear-gradient(0deg, rgba(249, 125, 3, 0.15) 0%, rgba(249, 125, 3, 0.15) 100%), #FFF" : "linear-gradient(90deg, rgba(255, 255, 255, 0.70) 62.13%, rgba(177, 240, 247, 0.49) 101.82%, rgba(82, 222, 237, 0.41) 124.5%, rgba(0, 207, 229, 0.28) 175.53%), #FFF",
                color: "#000",
                border: selectedZone === index ? "1px solid #F97D03" : "1px solid rgba(249, 125, 3, 0.00)",
              }}
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              }>
              {zone.name}
            </Button>
          ))}
        </Box>
      )}

      {/* Zone Navigation - Mobile */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "10px",
          }}>
          <IconButton
            onClick={handlePrevZone}
            sx={{
              backgroundColor: "#FFF",
              border: "1px solid #E0E0E0",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </IconButton>

          <Button
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.70) 62.13%, rgba(177, 240, 247, 0.49) 101.82%, rgba(82, 222, 237, 0.41) 124.5%, rgba(0, 207, 229, 0.28) 175.53%), #FFF",
              color: "#000",
              border: "1px solid rgba(249, 125, 3, 0.00)",
              minWidth: "200px",
            }}
            endIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            }>
            {zones[selectedZone].name}
          </Button>

          <IconButton
            onClick={handleNextZone}
            sx={{
              backgroundColor: "#FFF",
              border: "1px solid #E0E0E0",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </IconButton>
        </Box>
      )}

      {/* Zone Images */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "16px",
          width: "100%",
          margin: "0 auto",
          marginTop: { xs: "10px", sm: "20px" },
          marginBottom: { xs: "30px", sm: "60px" }
        }}>
        {zones[selectedZone].images.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: isMobile ? "220px" : "300px",
              borderRadius: "16px",
              overflow: "hidden",
            }}>
            <Image
              src={image}
              alt={`${zones[selectedZone].name} ${index + 1}`}
              width={600}
              height={300}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};