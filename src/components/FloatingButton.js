'use client'
import { Box, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { keyframes } from '@emotion/react';

const TELEGRAM_URL = "https://t.me/vedamschooloftechnology?utm_source=codesprint&utm_medium=homepage&utm_campaign=june_july";

const pulse = keyframes`
  0% { transform: scale(0.7); }
  50% { transform: scale(0.8); }
  100% { transform: scale(0.7); }
`;

const FloatingButton = () => {
  return (
    <>
      <Box
        component="aside"
        sx={{
          position: "fixed",
          right: 0,
          top: { xs: "62%", sm: "50%" },
          transform: "translateY(-50%)",
          zIndex: 1200,
        }}
      >
        <Box
          component="a"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Vedam on Telegram"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: { xs: "104px", md: "120px" },
            maxWidth: "calc(100vw - 16px)",
            color: "#229ED9",
            bgcolor: "#fff",
            border: "1px solid rgba(34, 158, 217, 0.22)",
            borderRight: 0,
            borderRadius: "16px 0 0 16px",
            p: { xs: "10px", md: "12px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "12px", md: "14px" },
            lineHeight: 1,
            letterSpacing: "0px",
            textTransform: "none",
            textDecoration: "none",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.16)",
            transition: "width 0.24s ease, transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
            "&:hover, &:focus-visible": {
              width: { xs: "220px", sm: "280px" },
              bgcolor: "#F4FBFF",
              boxShadow: "0 14px 36px rgba(34, 158, 217, 0.22)",
              transform: "translateX(-4px)",
            },
            "&:hover .telegram-image, &:focus-visible .telegram-image": {
              maxHeight: { xs: "260px", sm: "320px" },
              mt: "10px",
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              whiteSpace: "nowrap",
            }}
          >
            <TelegramIcon sx={{ fontSize: { xs: "20px", md: "24px" }, flexShrink: 0 }} />
            Telegram
          </Box>
          <Box
            className="telegram-image"
            component="img"
            src="/img/vst_home/telegram_sidebar_home.webp"
            alt="Join Vedam Telegram Community"
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: 0,
              opacity: 0,
              transform: "translateY(8px)",
              transition: "max-height 0.24s ease, margin-top 0.24s ease, opacity 0.2s ease, transform 0.2s ease",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "24px", sm: "70px" },
          right: "20px",
          zIndex: 1100,
          animation: `${pulse} 3s ease-in-out infinite`,
        }}
      >
        <Button
          component="a"
          href="https://apply.vedam.org/"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon sx={{ color: "white", transform: "scale(0.9)" }} />}
          sx={{
            fontSize: "clamp(12px, 2.5vw, 20px)",
            color: "#F9F9F9",
            background: "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
            borderRadius: "8px",
            padding: "12px 24px",
            boxShadow: "0px 0px 11.2px rgba(255, 255, 255, 0.25)",
            textTransform: "none",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              background: "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
              boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.5)",
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </>
  );
};

export default FloatingButton;
