"use client";
import { Box, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export default function AnnouncementBanner() {
  const targetDate = new Date("2025-04-18T01:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: String(
        Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))
      ).padStart(2, "0"),
      hours: String(
        Math.max(
          0,
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        )
      ).padStart(2, "0"),
      minutes: String(
        Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
      ).padStart(2, "0"),
      seconds: String(
        Math.max(0, Math.floor((difference % (1000 * 60)) / 1000))
      ).padStart(2, "0"),
      expired: difference < 0,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
        color: "white",
        opacity: 0.95,
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 11000,
        boxShadow: 1,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 0.5, sm: 2 }}
        sx={{ px: 2 }}
      >
        <Typography
          variant="body2"
          component="span"
          sx={{ fontSize: { xs: 11, sm: 16 } }}
        >
          ⏳ Hurry up! Applications for April intake are closing in
        </Typography>

        {!timeLeft.expired ? (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 16 } }}
          >
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s left
          </Typography>
        ) : (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 16 } }}
          >
            Applications Closed !!!
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
