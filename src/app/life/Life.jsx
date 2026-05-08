'use client'
import { Box } from "@mui/material";
import React from "react";
import { EdgeAtVedam, VedamInovationLab, VideoWithText, SectionStack, ClubsAtVst } from "@/components";
import { FunAtVedam } from "@/components/life/FunAtVedam";
import { lifeAtVedam } from "@/constants/data";
import { ScrollComponent } from "@/components/life/ScrollComponent/ScrollComponent";
import Clubs from "@/components/Clubs"
import NoesisPage from "@/app/noesis/page";

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
        videoUrl={lifeAtVedam.hero.background_video}
        subtitle={lifeAtVedam.hero.subtitle}
        showApplyNowButton={false}
      // isImg={true}
      />

      <Box
        sx={{
          backgroundImage: {
            xs: "url(/img/innovation_lab/bg_mob.png)",
            sm: "url(/img/innovation_lab/bg_web.png)",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: { xs: 2, sm: '70px' },
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
                  {/* <ScrollComponent /> */}
                </>
              ),
              cardProps: { containerStyle: { marginBottom: "0px" } },
            },
          ]}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <NoesisPage titleComponent="h2" />
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
          // {
          //   id: "edge-at-vedam",
          //   subtitle: lifeAtVedam.edgeAtVedam.subtitle,
          //   render: () => <EdgeAtVedam />,
          // },
          {
            id: "clubs-at-vedam",
            subtitle: lifeAtVedam.clubsatVedam.subtitle,
            render: () => <ClubsAtVst />,
          },
          {
            id: "fun-at-vedam",
            subtitle: "Fun@Vedam",
            render: () => <FunAtVedam />,
          },
        ]}
      />
    </Box>
  );
};

export default Life;
