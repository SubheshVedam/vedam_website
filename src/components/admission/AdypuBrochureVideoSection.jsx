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

const InfoRow = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      borderRadius: "12px",
      padding: "12px 14px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 100%)",
      border: "1px solid rgba(108, 16, 188, 0.12)",
    }}
  >
    <Image src={icon} alt="" width={20} height={20} />
    <Typography
      variant="subtitle2"
      color="rgba(42, 19, 91, 0.9)"
      fontWeight="500"
      sx={{ fontSize: "clamp(12px, 2vw, 0.95rem)" }}
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
          position: "relative",
          border: "1px solid rgba(108, 16, 188, 0.15)",
          borderRadius: "28px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "1rem", md: "1.25rem" },
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: { xs: "20px", md: "28px" },
          width: "100%",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #FFF6EE 56%, #F7EEFF 100%)",
          boxShadow: "0 16px 30px rgba(42, 19, 91, 0.09)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: { xs: 180, md: 230 },
            height: { xs: 180, md: 230 },
            right: { xs: -80, md: -100 },
            top: { xs: -80, md: -100 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,16,188,0.16) 0%, rgba(108,16,188,0) 70%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: 200, md: 280 },
            height: { xs: 200, md: 280 },
            left: { xs: -120, md: -140 },
            bottom: { xs: -120, md: -150 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,127,5,0.16) 0%, rgba(251,127,5,0) 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            position: "relative",
            aspectRatio: "2.07 / 1",
            minHeight: { xs: 120, sm: 160, md: 220 },
            maxHeight: { xs: 180, sm: 220, md: 260 },
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.72)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.8), 0 12px 24px rgba(42,19,91,0.16)",
            zIndex: 1,
          }}
        >
          {showVideo ? (
            <iframe
              width="100%"
              height="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
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
                borderRadius: "inherit",
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
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(42, 19, 91, 0.06) 0%, rgba(42, 19, 91, 0.36) 100%)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(42, 19, 91, 0.62)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: {
                    xs: "6px 8px",
                    sm: "10px 12px",
                    md: "12px 16px",
                  },
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
              <Typography
                sx={{
                  position: "absolute",
                  left: 14,
                  bottom: 14,
                  px: 1.3,
                  py: 0.6,
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "rgba(42, 19, 91, 0.45)",
                  backdropFilter: "blur(3px)",
                }}
              >
                VST PUNE
              </Typography>
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
            gap: "10px",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "rgba(108, 16, 188, 0.9)",
              textTransform: "uppercase",
            }}
          >
            Partner University
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "clamp(1.35rem, 2vw, 2rem)",
              lineHeight: "118%",
              letterSpacing: "-0.02em",
              fontWeight: 800,
              color: "#2A135B",
              marginBottom: 0.5,
            }}
          >
            {data.rightSideText1}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            {data.data.map((item) => (
              <InfoRow key={item.id} icon={item.image} text={item.text} />
            ))}
          </Box>

          <Typography
            sx={{
              mt: 0.5,
              fontSize: "0.86rem",
              lineHeight: 1.45,
              color: "rgba(42, 19, 91, 0.75)",
            }}
          >
            Learn in an industry-integrated environment designed for hands-on AI
            and computer science education.
          </Typography>

          <Button
            sx={{
              marginTop: "0.65rem",
              padding: "12px 18px",
              borderRadius: "10px",
              width: { xs: "100%", md: "auto" },
              background: "linear-gradient(90deg, #FB7F05 0%, #FFA41A 100%)",
              boxShadow: "0 10px 18px rgba(251, 127, 5, 0.28)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #FB7F05 0%, #FFA41A 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 14px 22px rgba(251, 127, 5, 0.34)",
              },
            }}
            onClick={() => {
              setWidgetInstance((count) => count + 1);
              setShowBrochureWidget(true);
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                {data.buttonText}
              </Typography>
              <Image src={data.buttonIcon} alt="" width={18} height={18} />
            </Box>
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
