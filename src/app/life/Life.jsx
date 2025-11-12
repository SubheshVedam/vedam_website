'use client'
import { Box } from "@mui/material";
import React from "react";
import { EdgeAtVedam, VedamInovationLab, VideoWithText, SectionStack } from "@/components";
import { lifeAtVedam } from "@/constants/data";
import { ScrollComponent } from "@/components/life/ScrollComponent/ScrollComponent";
import Clubs from "@/components/Clubs"

const clubsatVST = lifeAtVedam.clubsatVedam.data;

const Life = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: { xs: "2rem", lg: "3rem" },
        alignItems: "center",
        // minHeight: "100vh",
      }}
    >
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
            "linear-gradient(180deg, #155A5D 0.06%, #ADF0F7 33.99%, #E2FDFF 65.97%, #FFF 98.95%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: { xs: 2, sm: 7 },
        }}
      >
        <SectionStack
          widthContainerProps={{
            childrenStyle: {
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1rem", md: "2rem", lg: "3rem" },
              marginBottom: "0px",
              paddingY: 0,
            },
          }}
          sections={[
            {
              id: "innovation-lab",
              subtitle2: lifeAtVedam.vedamLab.subtitle,
              render: () => (
                <>
                  <VedamInovationLab />
                  <ScrollComponent />
                </>
              ),
              cardProps: { containerStyle: { marginBottom: "0px" } },
            },
          ]}
        />
      </Box>

      <SectionStack
        widthContainerProps={{
          childrenStyle: {
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1rem", md: "2rem", lg: "3rem" },
          },
        }}
        sections={[
          {
            id: "edge-at-vedam",
            subtitle: lifeAtVedam.edgeAtVedam.subtitle,
            render: () => <EdgeAtVedam />,
          },
          {
            id: "clubs-at-vedam",
            subtitle: lifeAtVedam.clubsatVedam.subtitle,
            render: () => <Clubs data={clubsatVST} />,
          },
        ]}
      />
    </Box>
  );
};

export default Life;
