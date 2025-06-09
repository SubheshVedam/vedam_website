"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Button from "@mui/material/Button";

export const VideoWithText = ({ title, subtitle, isImg }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />
      
      {/* Background Media */}
      {!isImg ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          className="responsive-video"
        >
          <source src={homeScreenData.hero.background_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={"/img/life_vedam_bg.jpeg"}
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          className="responsive-image"
        />
      )}
      
      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
          padding: { xs: "20px", md: "40px" },
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Title with Animation */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            whiteSpace: "pre-line",
            fontFamily: "Inter",
            fontSize: { 
              xs: "1.75rem", 
              sm: "2.25rem", 
              md: "2.75rem", 
              lg: "3.5rem" 
            },
            lineHeight: { 
              xs: "2rem", 
              sm: "2.5rem", 
              md: "3rem", 
              lg: "3.75rem" 
            },
            marginBottom: { xs: "1rem", md: "1.5rem" },
            textAlign: "center",
            maxWidth: "100%",
            animation: "slideDownFadeIn 1.2s ease-out forwards",
            opacity: 0,
            transform: "translateY(-50px)",
            "@keyframes slideDownFadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(-100px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: { xs: "1.5rem", md: "2rem" },
            fontFamily: "Inter",
            fontSize: { 
              xs: "1rem", 
              sm: "1.125rem", 
              md: "1.25rem", 
              lg: "1.5rem" 
            },
            fontWeight: 400,
            textAlign: "center",
            maxWidth: "100%",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </Typography>
        
        <Box 
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "1rem", sm: "1.5rem" },
            width: "100%",
            maxWidth: "500px",
          }}
        >

          <Button
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "#F9F9F9",
              borderRadius: "1rem",
              padding: { xs: "12px 24px", sm: "12px 30px" },
              border: "1px solid #FFF",
              backgroundColor: "transparent",
              display: "flex",
              order: { xs: 2, sm: 1 },
              alignItems: "center",
              gap: "0.5rem",
              minWidth: { xs: "200px", sm: "auto" },
              justifyContent: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateY(-2px)",
              },
            }}
            href="https://apply.vedam.org/"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M0.469558 12.469L11.1899 1.74958H3.25018C3.05127 1.74958 2.86051 1.67057 2.71985 1.52991C2.5792 1.38926 2.50018 1.19849 2.50018 0.999582C2.50018 0.80067 2.5792 0.609904 2.71985 0.469252C2.86051 0.328599 3.05127 0.249582 3.25018 0.249582H13.0002C13.1991 0.249582 13.3899 0.328599 13.5305 0.469252C13.6712 0.609904 13.7502 0.80067 13.7502 0.999582V10.7496C13.7502 10.9485 13.6712 11.1393 13.5305 11.2799C13.3899 11.4206 13.1991 11.4996 13.0002 11.4996C12.8013 11.4996 12.6105 11.4206 12.4699 11.2799C12.3292 11.1393 12.2502 10.9485 12.2502 10.7496V2.8099L1.53081 13.5302C1.46113 13.5999 1.3784 13.6552 1.28736 13.6929C1.19631 13.7306 1.09873 13.75 1.00018 13.75C0.901637 13.75 0.804055 13.7306 0.713011 13.6929C0.621966 13.6552 0.539241 13.5999 0.469558 13.5302C0.399875 13.4605 0.344601 13.3778 0.306889 13.2868C0.269176 13.1957 0.249765 13.0981 0.249765 12.9996C0.249765 12.901 0.269176 12.8035 0.306889 12.7124C0.344601 12.6214 0.399875 12.5386 0.469558 12.469Z" fill="white" />
            </svg>
            Book Campus Visit
          </Button>
          
   
          <Button
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "#F9F9F9",
              order: { xs: 1, sm: 2 },
              backgroundColor: "#FF7829",
              borderRadius: "1rem",
              padding: { xs: "12px 24px", sm: "12px 35px" },
              minWidth: { xs: "175px", sm: "auto" },
              justifyContent: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#e66820",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 20px rgba(255, 120, 41, 0.3)",
              },
            }}
            href="https://apply.vedam.org/"
            target="_blank"
          >
            Apply Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};