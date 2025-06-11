"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export const VedamInovationLab = () => {
  const [open, setOpen] = useState(false);
  const [showIframe1, setShowIframe1] = useState(false);
  const [videoUrl1, setVideoUrl1] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const handleCloseModal = () => setOpen(false);

  const innovationImages = [
    "/img/innovation_lab/image4.jpg",
    "/img/innovation_lab/image2.jpg",
    "/img/innovation_lab/innovation_lab_7.jpeg",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: {
              xs: "12px", // 0px and up
              sm: "24px", // 600px and up
            },
            fontStyle: "normal",
            fontWeight: 400,
            letterSpacing: "-0.72px",
          }}>
          Vedam Innovation Lab is a cutting-edge incubator driving innovation in
          AR/VR, AI & ML, IoT, Robotics and Drones.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          // position: "relative",
          width: "auto",
          // height: isMobile ? "220px" : isLarge ? "680px" : "580px",
          // height: "auto",
          height: isMobile ? "220px" : isLarge ? "565px" : "580px",

          borderRadius: "16px",
          overflow: "hidden",
          borderRadius: "16px",
        }}>
        {showIframe1 ? (
          <iframe
            width="100%"
            height="100%"
            style={{
              borderRadius: "16px",
              border: "none",
            }}
            src={videoUrl1}
            title="YouTube video player"
            loading="lazy"
            className="techTeamImage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box
            onClick={() => {
              setVideoUrl1(
                "https://www.youtube.com/embed/eq8HnUDuN0E?autoplay=1&si=0"
              );
              setShowIframe1(true);
            }}
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              // borderRadius: "16px",
            }}>
            <Image
              src="/img/VideothumbnaillifeVST.jpg"
              alt="Video thumbnail"
              width={800}
              height={800}
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

      {/* <Box
        sx={{
          height: "464px",
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          overflow: "hidden",
        }}>
        <Box
          component="video"
          src="/vid/InnovationLab.mp4"
          alt="innovation"
          autoPlay
          muted
          loop
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />
      </Box> */}

      {/* Infinite Carousel Section */}
      <Box
        sx={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          position: "relative",
          "&:hover div": { animationPlayState: "paused" },
          marginTop: "33px",
          height: "200px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            flexWrap: "nowrap",
            animation: "scroll 15s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}>
          {[...innovationImages, ...innovationImages].map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "280px",
                height: "200px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: 2,
            // color: '#5E00AF',
            color: {
              xs: "white",
              sm: "#5E00AF",
            },
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: {
              xs: "18px", // 0px and up
              sm: "24px", // 600px and up
            },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "31px",
            letterSpacing: "-0.72px",
          }}
          className="text-trim" // optional, for unsupported properties
        >
          Vedam Innovation Zone: Engineering Tomorrow’s Tech Today
        </Typography>
      </Box>

      {/* PDF Modal */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "1000px",
            height: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <iframe
            src="https://drive.google.com/file/d/1lRieByQU9y267-hCOJi2R8eJROpwHEGQ/preview"
            title="Vedam Lab PDF"
            style={{ flexGrow: 1, border: "none", borderRadius: "10px" }}
            allow="autoplay"
          />
        </Box>
      </Modal>
    </Box>
  );
};
