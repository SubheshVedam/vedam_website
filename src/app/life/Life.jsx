import { Box } from "@mui/material";
import React from "react";
import {
  CardContainer,
  // ClubsAtVst,
  EdgeAtVedam,
  VedamInovationLab,
  VideoWithText,
  WidthContainer,
} from "@/components";
import { lifeAtVedam } from "@/constants/data";
import { ScrollComponent } from "@/components/life/ScrollComponent/ScrollComponent";

const Life = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: { xs: "2rem", lg: "3rem" },
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <VideoWithText
        title={lifeAtVedam.hero.title}
        titleLinearGradient="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        subtitle={lifeAtVedam.hero.subtitle}
        showApplyNowButton={false}
        isImg={true}
      />

      <Box sx={{ background: "linear-gradient(180deg, #155A5D 0.06%, #ADF0F7 57.18%, #FFF 98.95%)", width: '100%', display: 'flex', justifyContent: 'center' }}>
        <WidthContainer
          childrenStyle={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1rem", md: "2rem", lg: "3rem" },

          }}
        >
          {/* <ClubsAtVst /> */}
          <CardContainer
            subtitle2={lifeAtVedam.vedamLab.subtitle}
          >
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
        }}
      >
        <CardContainer subtitle={lifeAtVedam.edgeAtVedam.subtitle}>
          <EdgeAtVedam />
        </CardContainer>
      </WidthContainer>
    </Box>
  );
};

export default Life;
