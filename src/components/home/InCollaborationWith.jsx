"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { homeScreenData } from "@/constants/data";
import Image from "next/image";

const SingleIconText = ({
  icon,
  text,
  flexDirection = "row",
  textColor = "rgba(30, 30, 30, 1)",
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: flexDirection, gap: "12px" }}>
      <Image
        src={icon}
        alt="svg"
        width={20}
        height={20}
        className="iconStyle"
      />
      <Typography
        variant="subtitle2"
        color={textColor}
        fontWeight={"500"}
        sx={{ fontSize: "clamp(12px, 2vw 1rem)" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const InCollaborationWith = () => {
  const data = homeScreenData.inCollaborationWith;
  const [showVideo, setShowVideo] = useState(false);
  const [showBrochureWidget, setShowBrochureWidget] = useState(false);
  const [widgetInstance, setWidgetInstance] = useState(0);
  const YOUTUBE_URL = "https://www.youtube.com/embed/3PCRxHdf--g?autoplay=1";
  const WIDGET_SCRIPT_ID = "npf-widget-script";
  const WIDGET_SRC = "https://widgets.in6.nopaperforms.com/emwgts.js";

  // Load and (re)initialise the NoPaperForms widget whenever the modal opens.
  useEffect(() => {
    if (!showBrochureWidget) return;

    const initWidget = () => {
      if (window?.npfWgts && typeof window.npfWgts.init === "function") {
        window.npfWgts.init();
      }
    };

    const existingScript = document.getElementById(WIDGET_SCRIPT_ID);
    if (existingScript) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = WIDGET_SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.src = WIDGET_SRC;
    script.onload = initWidget;
    document.body.appendChild(script);
  }, [showBrochureWidget, widgetInstance]);

  return (
    <Box
      sx={{
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderStyle: "solid",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        justifyContent: "space-between",
        padding: { xs: "20px", md: "40px" },
        width: "100%",
      }}
    >
      <Box sx={{
        width: { xs: "100%", md: "55%" },
        position: "relative",
        aspectRatio: "2.07/1",
        height: "auto",
        minHeight: { xs: 120, sm: 160, md: 220 },
        maxHeight: { xs: 180, sm: 220, md: 260 },
        borderRadius: "16px",
        overflow: "hidden",
      }}>
        {showVideo ? (
          <iframe
            width="100%"
            height="100%"
            style={{
              borderRadius: "16px",
              border: "none",
              width: "100%",
              height: "100%",
              aspectRatio: "2.07/1",
            }}
            src={YOUTUBE_URL}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box
            onClick={() => setShowVideo(true)}
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="/img/thumbnailADYPU.webp"
              width={"100%"}
              height="100%"
              style={{ objectFit: "cover", width: "100%", height: "100%", aspectRatio: "2.07/1" }}
              alt="Collaboration Thumbnail"
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.6)",
                padding: { xs: "6px 8px", sm: "10px 12px", md: "12px 16px" },
                borderRadius: "100px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                style={{ width: "2.5em", height: "2.5em", minWidth: 24, minHeight: 24, maxWidth: 40, maxHeight: 40 }}
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "43%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontSize: "clamp(1.2rem, 2vw, 2rem)",
            lineHeight: "120%",
            letterSpacing: "-2%",
            fontWeight: "700",
            marginBottom: 8,
          }}
        >
          {data.rightSideText1}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {data.data.map((item) => (
            <SingleIconText key={item.id} icon={item.image} text={item.text} />
          ))}
        </Box>
        <Button
          style={{
            marginTop: "1.2rem",
            backgroundColor: "rgba(251, 127, 5, 1)",
            padding: "15px 20px",
            borderRadius: "8px",
          }}
          sx={{
            width: { xs: "100%", md: "auto" },
            transition: "background-color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(220, 110, 5, 1)",
              transform: "scale(1.05)",
            },
          }}
          onClick={() => {
            setWidgetInstance((count) => count + 1);
            setShowBrochureWidget(true);
          }}
        >
          <SingleIconText
            icon={data.buttonIcon}
            text={data.buttonText}
            flexDirection="row-reverse"
            textColor={"#F9F9F9"}
          />
        </Button>
      </Box>
      {showBrochureWidget && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1300,
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "16px", sm: "24px" },
          }}
          display="flex"
          role="dialog"
          aria-modal="true"
          aria-label="Download brochure form"
          onClick={() => setShowBrochureWidget(false)}
        >
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: { xs: "96vw", sm: "700px" },
              borderRadius: "16px",
              padding: { xs: "12px", sm: "16px" },
              maxHeight: "90vh",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={() => setShowBrochureWidget(false)}
              sx={{
                alignSelf: "flex-end",
                minWidth: "auto",
                padding: "6px 12px",
              }}
            >
              Close
            </Button>
            <Box
              sx={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              key={widgetInstance}
            >
              <div
                className="npf_wgts"
                data-height="340px"
                data-w="a7933df0565e4ea9a0414057c751118c"
                style={{ width: "100%" }}
              ></div>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
