"use client";

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CardContainer, WidthContainer } from "@/components";
import { teamVedamScreenData } from "@/constants/data";

const TeamVedam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9",
        paddingTop: { xs: "2rem", md: "10rem" },
        paddingBottom: "3rem",
      }}
    >
      <WidthContainer>
        <CardContainer
          subtitle={teamVedamScreenData.subtitle}
          linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        >
          <Box
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
              paddingBottom: { xs: "1rem", md: "2rem", lg: "2.5rem" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "400",
                fontSize: "clmap(16px. 2vw, 20px)",
                lineHeight: "150%",
                fontFamily: "Inter",
              }}
            >
              {teamVedamScreenData.description}
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: "1rem",
                md: "2rem",
              },
              marginBottom: { xs: "2rem", md: "3rem" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1rem", md: "2rem" },
            }}
          >
            {teamVedamScreenData.data.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  // gap: { xs: "1rem", md: "2rem" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    flex: "0 0 40%",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    height: {
                      xs: "250px",
                      md: "324px",
                      xl: "380px",
                    },
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt="founder-image"
                    style={{ objectFit: "fill",aspectRatio:'1.17/1',height:'100%' }}
                    className="founderImage"
                  />
                </Box>
                <Box
                  sx={{
                    flex: "0 0 60%",
                    height: {
                      xs: "250px",
                      md: "324px",
                      xl: "380px",
                    },
                    width: "98%",
                    position: "relative",
                    display: "flex",
                    gap: 0,
                  }}
                  id="praz"
                >
                  <Box
                    sx={{
                      flex: "0 0 99%",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      position: "relative",
                      paddingLeft: { xs: 0, sm: "20px" },
                      zIndex: 1,
                      height: {
                        xs: "250px",
                        md: "324px",
                        xl: "380px",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#FFA41A",
                        fontSize: { xs: "1rem", md: "2rem" },
                        lineHeight: "150%",
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#1F1F1F",
                        fontSize: { xs: "12px", md: "1rem" },
                        lineHeight: "150%",
                        fontFamily: "Inter",
                      }}
                    >
                      {item.designation}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: { xs: "1rem", md: "1.4rem" },
                        color: "#1F1F1F",
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "170%",
                        fontWeight:'350',
                        fontFamily: "Inter",
                        paddingBottom: { xs: "10px", md: "0px" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  {!isMobile && (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        height: {
                          xs: "250px",
                          md: "324px",
                          xl: "380px",
                        },
                        backgroundColor: "#6C10BC",
                        borderTopRightRadius: "15px",
                        borderBottomRightRadius: "15px",
                      }}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default TeamVedam;
