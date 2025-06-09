import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import {
  CardContainer,
  // ClubsAtVst,
  EdgeAtVedam,
  VedamInovationLab,
  VideoWithText,
  WidthContainer,
} from "@/components";
import { lifeAtVedam, whyVedam } from "@/constants/data";
import { ScrollComponent } from "@/components/life/ScrollComponent/ScrollComponent";
import WhyVedam from "@/components/WhyVedam";


const whyVdata = lifeAtVedam.whyVedam.data;

const Life = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: { xs: "2rem", lg: "3rem" },
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <VideoWithText
        title={lifeAtVedam.hero.title}
        titleLinearGradient="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        subtitle={lifeAtVedam.hero.subtitle}
        showApplyNowButton={false}
        isImg={true}
      />

      <Box
        sx={{
          background:
            "linear-gradient(180deg, #155A5D 0.06%, #ADF0F7 57.18%, #FFF 98.95%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <WidthContainer
          childrenStyle={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1rem", md: "2rem", lg: "3rem" },
          }}>
          {/* <ClubsAtVst /> */}
          <CardContainer subtitle2={lifeAtVedam.vedamLab.subtitle}>
            <VedamInovationLab />
            <ScrollComponent />
          </CardContainer>
        </WidthContainer>
      </Box>

      <WidthContainer
        childrenStyle={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "2rem", lg: "3rem" },
        }}>
        <CardContainer subtitle={lifeAtVedam.edgeAtVedam.subtitle}>
          <EdgeAtVedam />
        </CardContainer>
        <CardContainer subtitle={lifeAtVedam.whyVedam.subtitle}>
          <WhyVedam data={whyVdata} />
        </CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default Life;
