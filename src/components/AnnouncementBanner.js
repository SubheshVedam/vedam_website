"use client";
import { Box, Typography, Stack } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

/** Used only when the sheet is missing or the closing date is not parseable. */
const FALLBACK_CLOSING_END_MS = new Date("2026-05-10T23:59:59").getTime();

export default function AnnouncementBanner({ applicationClosingEndMs }) {
  const targetDate = useMemo(() => {
    if (
      typeof applicationClosingEndMs === "number" &&
      !Number.isNaN(applicationClosingEndMs)
    ) {
      return applicationClosingEndMs;
    }
    return FALLBACK_CLOSING_END_MS;
  }, [applicationClosingEndMs]);

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
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

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerSegments =
    timeLeft && !timeLeft.expired
      ? [
        { label: "Days", shortLabel: "days", value: timeLeft.days },
        { label: "Hours", shortLabel: "hrs", value: timeLeft.hours },
        { label: "Minutes", shortLabel: "mins", value: timeLeft.minutes },
        { label: "Seconds", shortLabel: "secs", value: timeLeft.seconds },
      ]
      : null;

  const timerItems = timerSegments
    ? timerSegments.flatMap(({ label, shortLabel, value }, index) => {
      const content = (
        <Stack
          key={`segment-${label}`}
          direction="row"
          spacing={0.5}
          alignItems="baseline"
          sx={{
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, fontSize: { xs: 13, sm: 16 }, lineHeight: 1 }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: { xs: 10, sm: 11 }, lineHeight: 1, fontWeight: 500 }}
          >
            {/* Full label on sm+, abbreviated on xs */}
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              {label}
            </Box>
            <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
              {shortLabel}
            </Box>
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
          sx={{ fontWeight: 700, fontSize: { xs: 13, sm: 16 } }}
        >
          :
        </Typography>,
      ];
    })
    : null;

  return (
    <Box
      sx={{
        background: "linear-gradient(95.22deg, #FB7F05 2.91%, #6C10BC 99.18%)",
        color: "white",
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 11000,
        boxShadow: 1,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1, sm: 2 }}
        sx={{ px: 2, flexWrap: "nowrap" }}
      >
        <Typography
          variant="body2"
          component="span"
          sx={{ fontSize: { xs: 11, sm: 16 }, whiteSpace: "nowrap" }}
        >
          <strong>Admissions close in</strong>
        </Typography>
        {timerItems ? (
          <Stack
            direction="row"
            spacing={{ xs: 0.5, sm: 1 }}
            alignItems="center"
            justifyContent="center"
            sx={{ flexWrap: "nowrap" }}
          >
            {timerItems}
          </Stack>
        ) : timeLeft?.expired ? (
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600, fontSize: { xs: 11, sm: 16 } }}
          >
            Admissions window closed
          </Typography>
        ) : null}
      </Stack>
    </Box>
  );
}