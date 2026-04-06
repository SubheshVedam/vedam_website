import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { detailsData } from "@/constants/data";

const WhyVedam = ({ data }) => {
  const dataArr = data ? data : detailsData;

  const gridItems = dataArr.slice(0, 4);
  const featuredItem = dataArr[4];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "16px",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      {/* ── Left: 2×2 grid of small cards ── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "1fr 1fr",
          },
          gap: "16px",
          flex: { xs: "unset", md: "0 0 416px" },
          width: { xs: "100%", md: "416px" },
        }}
      >
        {gridItems.map((item, index) => (
          <Box
            key={`grid-${index}`}
            sx={{
              position: "relative",
              height: { xs: "240px", md: "200px" },
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#1a0533",
              cursor: "pointer",
              "&:hover .whyvedam-desc": {
                opacity: 1,
                maxHeight: "200px",
                marginTop: "8px",
              },
            }}
          >
            <Image
              src={item.bgImage}
              alt=""
              fill
              sizes="(max-width: 900px) 50vw, 208px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Title + description pinned to bottom */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                borderRadius: "0 0 16px 16px",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.85) -50.79%, rgba(12, 9, 49, 0.85) 69.78%)",
                padding: "16px",
                transition: "all 0.3s ease",
              }}
            >
              <Box
                component="div"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 18, md: 18 },
                  lineHeight: "130%",
                  margin: 0,
                }}
              >
                {item.title}
              </Box>

              <Box
                className="whyvedam-desc"
                sx={{
                  color: "white",
                  fontSize: { xs: 11, sm: 13 },
                  opacity: 0,
                  maxHeight: 0,
                  marginTop: 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {item.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Right: featured / instructors card ── */}
      {featuredItem && (
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "auto" },
            height: { xs: "auto", md: "416px" },
            minHeight: { xs: "240px", md: "416px" },
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#1a0533",
            cursor: "pointer",
            "&:hover .whyvedam-feat-desc": {
              opacity: 1,
              maxHeight: "200px",
              marginTop: "8px",
            },
          }}
        >
          <Image
            src={featuredItem.bgImage}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 640px"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />

          {/* Title pinned to bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
              borderRadius: "0 0 16px 16px",
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.85) -50.79%, rgba(12, 9, 49, 0.85) 69.78%)",
              padding: "16px",
              transition: "all 0.3s ease",
            }}
          >
            <Box
              component="div"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: 14, sm: 20 },
                lineHeight: "130%",
                margin: 0,
              }}
            >
              {featuredItem.title}
            </Box>

            <Box
              className="whyvedam-feat-desc"
              sx={{
                color: "white",
                fontSize: { xs: 11, sm: 14 },
                opacity: 0,
                maxHeight: 0,
                marginTop: 0,
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {featuredItem.description}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WhyVedam;
