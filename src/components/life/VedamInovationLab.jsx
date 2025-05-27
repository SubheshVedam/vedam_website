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
        sx={{
          border: "0.5px solid rgba(0, 0, 0, 0.2)",
          padding: { xs: "20px", md: "30px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "1rem", md: "2.5rem" },
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "clamp(12px, 2vw, 16px)",
              lineHeight: "150%",
              fontWeight: "350",
              fontFamily: "Inter",
            }}
          >
            {lifeAtVedam.vedamLab.description}
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              background: "linear-gradient(90deg, #FB7F05 0%, #6C10BC 50%, #FB7F05 100%)",
              backgroundSize: "200% 100%",
              animation: "gradientMove 3s linear infinite",
              color: "white",
              borderRadius: "30px",
              padding: "10px 30px",
              textTransform: "none",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              fontWeight: "500",
              "@keyframes gradientMove": {
                "0%": {
                  backgroundPosition: "0% 50%",
                },
                "100%": {
                  backgroundPosition: "200% 50%",
                },
              },
              "&:hover": {
                background: "linear-gradient(90deg, #5A0D9E 0%, #E06A00 100%)",
              },
            }}
          >
            Explore More
          </Button>
        </Box>

        <img
          src="/img/innovation_lab/image1.jpg"
          alt="innovation"
          className="innovationImageStyle"
        />
      </Box>

      {/* Image Grid Section */}
      <Grid container spacing={2}>
        {innovationImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        ))}
      </Grid>

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
