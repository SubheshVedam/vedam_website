"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { lifeAtVedam } from "@/constants/data";

export const VedamInovationLab = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const innovationImages = [
    "/img/innovation_lab/image3.jpg",
    "/img/innovation_lab/image4.jpg",
    "/img/innovation_lab/image2.jpg",
    "/img/innovation_lab/innovation_lab_7.jpeg",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
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
          }}
        >
          Vedam Innovation Lab is a cutting-edge incubator driving innovation in
          AR/VR, AI & ML, IoT, Robotics and Drones.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "464px",
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          overflow: "hidden",
        }}
      >
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
      </Box>

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
        }}
      >
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
          }}
        >
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
          Vedam Innovation Lab is a cutting-edge incubator driving innovation in
          AR/VR, AI & ML, IoT, Robotics, and Drones.
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
          }}
        >
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
