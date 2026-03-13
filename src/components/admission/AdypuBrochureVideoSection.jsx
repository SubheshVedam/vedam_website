"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { homeScreenData } from "@/constants/data";

const YOUTUBE_URL = "https://www.youtube.com/embed/3PCRxHdf--g?autoplay=1";
const BROCHURE_WIDGET_HTML = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <base target="_blank" />
      <style>body{margin:0;padding:0;}</style>
    </head>
    <body>
      <div class="npf_wgts" data-height="360px" data-w="a7933df0565e4ea9a0414057c751118c" style="width:100%"></div>
      <script type="text/javascript">
        var s=document.createElement("script");
        s.type="text/javascript";
        s.async=true;
        s.src="https://widgets.in6.nopaperforms.com/emwgts.js";
        document.body.appendChild(s);
      </script>
    </body>
  </html>
`;

const IconText = ({
  icon,
  text,
  flexDirection = "row",
  textColor = "rgba(30, 30, 30, 1)",
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection,
      alignItems: "center",
      gap: "12px",
    }}
  >
    <Image src={icon} alt="" width={20} height={20} />
    <Typography
      variant="subtitle2"
      color={textColor}
      fontWeight="500"
      sx={{ fontSize: "clamp(12px, 2vw, 1rem)" }}
    >
      {text}
    </Typography>
  </Box>
);

export const AdypuBrochureVideoSection = () => {
  const data = homeScreenData.inCollaborationWith;
  const [showVideo, setShowVideo] = useState(false);
  const [showBrochureWidget, setShowBrochureWidget] = useState(false);
  const [widgetInstance, setWidgetInstance] = useState(0);

  return (
    <>
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          justifyContent: "space-between",
          padding: { xs: "20px", md: "40px" },
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            position: "relative",
            aspectRatio: "2.07 / 1",
            minHeight: { xs: 120, sm: 160, md: 220 },
            maxHeight: { xs: 180, sm: 220, md: 260 },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {showVideo ? (
            <iframe
              width="100%"
              height="100%"
              style={{
                borderRadius: "16px",
                border: "none",
                width: "100%",
                height: "100%",
              }}
              src={YOUTUBE_URL}
              title="ADYPU campus video"
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
              <Image
                src="/img/thumbnailADYPU.webp"
                alt="ADYPU campus video thumbnail"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0, 0, 0, 0.6)",
                  padding: { xs: "6px 8px", sm: "10px 12px", md: "12px 16px" },
                  borderRadius: "100px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    minWidth: 24,
                    minHeight: 24,
                    maxWidth: 40,
                    maxHeight: 40,
                  }}
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
            sx={{
              fontSize: "clamp(1.2rem, 2vw, 2rem)",
              lineHeight: "120%",
              letterSpacing: "-2%",
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            {data.rightSideText1}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {data.data.map((item) => (
              <IconText key={item.id} icon={item.image} text={item.text} />
            ))}
          </Box>

          <Button
            sx={{
              marginTop: "1.2rem",
              backgroundColor: "rgba(251, 127, 5, 1)",
              padding: "15px 20px",
              borderRadius: "8px",
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
            <IconText
              icon={data.buttonIcon}
              text={data.buttonText}
              flexDirection="row-reverse"
              textColor="#F9F9F9"
            />
          </Button>
        </Box>
      </Box>

      {showBrochureWidget && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "16px", sm: "24px" },
          }}
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
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onClick={(event) => event.stopPropagation()}
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
              <iframe
                title="Download brochure form"
                srcDoc={BROCHURE_WIDGET_HTML}
                style={{ width: "100%", height: "360px", border: "none" }}
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation allow-downloads"
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
