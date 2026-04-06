import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Star, StarBorder } from "@mui/icons-material";

export default function ExpertCard({
  imageUrl,
  name,
  logo,
  designation,
  info,
  rating,
  linkedIn,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: { xs: 300, sm: 426 },
        maxWidth: "100%",
        height: { xs: "auto", sm: "auto" },
        maxHeight: { xs: "none", sm: 436 },
        minWidth: { xs: 300, sm: 426 },
        borderRadius: "16px",
        padding: { xs: "10px", sm: "20px" },
        overflow: "hidden",
        boxSizing: "border-box",
        border: "0.5px solid rgba(132, 132, 132, 0.2)",
        boxShadow: "none",
      }}
    >
      {/* Top section: image + content side by side on mobile too */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: { xs: "8px", sm: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: 136, sm: 150 },
            height: { xs: 200, sm: 200 },
            borderRadius: "8px",
            backgroundColor: "#F98317",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 600px) 136px, 150px"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            gap: { xs: 0, sm: 0 },
            padding: { xs: "0 0 0 8px", sm: "0 0 0 16px" },
            width: "100%",
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <Box>
            <Typography
              component="div"
              variant="body1"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: { xs: "17px", sm: "20px" },
                lineHeight: { xs: "22px" },
                mt: { xs: "10px", sm: 0 },
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: 12,
                mt: { xs: "4px", sm: 0 },
              }}
            >
              {designation}
            </Typography>
          </Box>

          <Box sx={{
            width: 80,
            height: 30,
            position: "relative",
            mt: { xs: "12px", sm: 0 },
          }}>
            <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              fontSize: 12,
              mt: { xs: "12px", sm: 0 },
            }}
          >
            {info}
          </Typography>

          {/* Desktop only: stars + linkedin inline */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                borderRadius: "100px",
                position: "relative",
                width: "140px",
                height: "32px",
                padding: "8px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#6C10BC",
                  opacity: 0.08,
                  borderRadius: "100px",
                  zIndex: 1,
                },
              }}
            >
              <> </>
            </Box>

            {/* LinkedIn pill — same as mobile */}
            {linkedIn && (
              <Box
                sx={{
                  borderRadius: "100px",
                  position: "relative",
                  width: "60px",
                  height: "40px",
                  flexShrink: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#6C10BC",
                    opacity: 0.08,
                    borderRadius: "100px",
                    zIndex: 1,
                  },
                }}
              >
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name}'s LinkedIn profile`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M0.473381 2.63518C0.157227 2.34173 0 1.97849 0 1.5463C0 1.11411 0.158067 0.73489 0.473381 0.440597C0.789535 0.147146 1.1965 0 1.69512 0C2.19373 0 2.58473 0.147146 2.90004 0.440597C3.2162 0.734049 3.37342 1.10318 3.37342 1.5463C3.37342 1.98942 3.21536 2.34173 2.90004 2.63518C2.58389 2.92863 2.1828 3.07578 1.69512 3.07578C1.20743 3.07578 0.789535 2.92863 0.473381 2.63518ZM3.10773 4.31853V13.3155H0.264855V4.31853H3.10773Z" fill="#6C10BC" />
                    <path d="M12.5715 5.20725C13.1912 5.87991 13.5006 6.80316 13.5006 7.97865V13.1565H10.8007V8.34357C10.8007 7.75078 10.6468 7.29 10.3399 6.96207C10.033 6.63414 9.61934 6.46934 9.10139 6.46934C8.58343 6.46934 8.16972 6.6333 7.86282 6.96207C7.55591 7.29 7.40204 7.75078 7.40204 8.34357V13.1565H4.68616V4.29326H7.40204V5.46874C7.677 5.07692 8.04782 4.76749 8.51365 4.53963C8.97947 4.31176 9.50331 4.19824 10.086 4.19824C11.1236 4.19824 11.9526 4.53458 12.5715 5.2064V5.20725Z" fill="#6C10BC" />
                  </svg>
                </a>
              </Box>
            )}
          </Box>
        </CardContent>
      </Box>

      {/* Mobile only: full-width bottom row */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: "15px",
        }}
      >
        {/* Stars pill — grows to fill available space */}
        <Box
          sx={{
            borderRadius: "100px",
            height: "32px",
            position: "relative",
            flex: 1,
            padding: "8px",
            mr: "8px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#6C10BC",
              opacity: 0.08,
              borderRadius: "100px",
              zIndex: 1,
            },
          }}
        >
          {/* <Rating ... /> */}
          <> </>
        </Box>

        {/* LinkedIn pill — fixed width, same height */}
        {linkedIn && (
          <Box
            sx={{
              borderRadius: "100px",
              position: "relative",
              width: "60px",
              height: "40px",
              flexShrink: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#6C10BC",
                opacity: 0.08,
                borderRadius: "100px",
                zIndex: 1,
              },
            }}
          >
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name}'s LinkedIn profile`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M0.473381 2.63518C0.157227 2.34173 0 1.97849 0 1.5463C0 1.11411 0.158067 0.73489 0.473381 0.440597C0.789535 0.147146 1.1965 0 1.69512 0C2.19373 0 2.58473 0.147146 2.90004 0.440597C3.2162 0.734049 3.37342 1.10318 3.37342 1.5463C3.37342 1.98942 3.21536 2.34173 2.90004 2.63518C2.58389 2.92863 2.1828 3.07578 1.69512 3.07578C1.20743 3.07578 0.789535 2.92863 0.473381 2.63518ZM3.10773 4.31853V13.3155H0.264855V4.31853H3.10773Z" fill="#6C10BC" />
                <path d="M12.5715 5.20725C13.1912 5.87991 13.5006 6.80316 13.5006 7.97865V13.1565H10.8007V8.34357C10.8007 7.75078 10.6468 7.29 10.3399 6.96207C10.033 6.63414 9.61934 6.46934 9.10139 6.46934C8.58343 6.46934 8.16972 6.6333 7.86282 6.96207C7.55591 7.29 7.40204 7.75078 7.40204 8.34357V13.1565H4.68616V4.29326H7.40204V5.46874C7.677 5.07692 8.04782 4.76749 8.51365 4.53963C8.97947 4.31176 9.50331 4.19824 10.086 4.19824C11.1236 4.19824 11.9526 4.53458 12.5715 5.2064V5.20725Z" fill="#6C10BC" />
              </svg>
            </a>
          </Box>
        )}
      </Box>
    </Card>
  );
}
