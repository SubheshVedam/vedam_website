"use client";
import { Box, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export default function AnnouncementBanner() {
  const targetDate = new Date("2026-03-16T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(null);

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
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerSegments =
    timeLeft && !timeLeft.expired
      ? [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ]
      : null;

  const timerItems = timerSegments
    ? timerSegments.flatMap(({ label, value }, index) => {
      const content = (
        <Stack
          key={`segment-${label}`}
          spacing={0.25}
          alignItems="center"
          sx={{
            textAlign: "center",
            minWidth: { xs: 42, sm: 52 },
            lineHeight: 1.1,
          }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, fontSize: { xs: 13, sm: 16 }, lineHeight: 1 }}>
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: { xs: 10, sm: 11 }, lineHeight: 1 }}>
            {label}
          </Typography>
        </Stack>
      );
      if (index === timerSegments.length - 1) {
        return [content];
      }
      return [
        content,
        <Typography
          key={`separator-${label}`}
          variant="body2"
          component="span"
          sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 20 } }}>
          :
        </Typography>,
      ];
    })
    : null;

  return (
    <Box
      className="glass-dark"
      sx={{
        borderRadius: 0,
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        background:
          "linear-gradient(95deg, rgba(251, 127, 5, 0.92) 2.91%, rgba(108, 16, 188, 0.9) 99.18%)",
        color: "white",
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 11000,
        boxShadow: "0 6px 18px rgba(28, 14, 58, 0.25)",
      }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 0.5, sm: 2 }}
        sx={{ px: 2 }}>
        <Typography
          variant="body2"
          component="span"
          sx={{ fontSize: { xs: 11, sm: 16 } }}>
          <strong>Admissions for March Intake closes in</strong>
        </Typography>
        {timerItems ? (
          <Stack
            direction="row"
            spacing={{ xs: 0.4, sm: 0.6 }}
            alignItems="center"
            justifyContent="center"
            sx={{ flexWrap: { xs: "wrap", sm: "nowrap" }, rowGap: 0.5 }}>
            {timerItems}
          </Stack>
        ) : timeLeft?.expired ? (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 16 } }}>
            Admissions window closed
          </Typography>
        ) : null}
      </Stack>
    </Box>
  );
}
