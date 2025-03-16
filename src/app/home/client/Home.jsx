import {
  AIFirstCurriculum,
  CardContainer,
  FeeStructure,
  ImageGrid,
  InCollaborationWith,
  InvestorWhoTrustUs,
  VedamVs,
  VideoWithText,
  WidthContainer,
} from "@/components";
import WhyVedam from "@/components/WhyVedam";
import { detailsData, homeScreenData, testimonialData } from "@/constants/data";
import { Box } from "@mui/material";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          paddingBottom: "16px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <VideoWithText />
        <WidthContainer
          childrenStyle={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <CardContainer
            title={homeScreenData.fromEducationToEntrance.title}
            subtitle={homeScreenData.fromEducationToEntrance.subtitle}
            linearGradientSubtitle="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
          >
            <ImageGrid />
          </CardContainer>
          <CardContainer
            title={homeScreenData.inCollaborationWith.title}
            subtitle={homeScreenData.inCollaborationWith.subtitle}
          >
            <InCollaborationWith />
          </CardContainer>
          <CardContainer
            title={homeScreenData.techTeam.title}
            subtitle={homeScreenData.techTeam.subtitle}
          >
            <img
              src={homeScreenData.techTeam.image}
              width={"100%"}
              height={200}
              style={{ objectFit: "fill" }}
              className="techTeamImage"
              loading="lazy"
            />
          </CardContainer>
          <CardContainer
            title={homeScreenData.whyVedam.title}
            subtitle={homeScreenData.whyVedam.subtitle}
          >
            <WhyVedam />
          </CardContainer>
          <CardContainer
            subtitle={homeScreenData.vedamVs.subtitle}
            linearGradientSubtitle="linear-gradient(90deg, #FB7F05 0%, #6C10BC 42.11%)"
          >
            <VedamVs />
          </CardContainer>
          <CardContainer subtitle={homeScreenData.FeeStructure.subtitle}>
            <FeeStructure />
          </CardContainer>
        </WidthContainer>
        {/* {detailsData.map((item, index) => (
        // <ExpertCard
        //   key={`expertsCard-${index}`}
        //   imageUrl={expert.imageUrl}
        //   name={expert.name}
        //   logo={expert.logo}
        //   designation={expert.designation}
        //   info={expert.info}
        //   rating={expert.rating}
        //   linkedIn={expert.linkedIn}
        // />
        //   <TestimonialCard
        //   key={`testimonial-${index}`}
        //   image={testimonial.image}
        //   text={testimonial.text}
        //   name={testimonial.name}
        //   designation={testimonial.designation}
        // />
      ))} */}
        {/* <WhyVedam /> */}
      </Box>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(74.32% 74.32% at 50% 100%, rgba(255, 152, 26, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          maxWidth: "1080px",
        }}
      >
        <CardContainer
          title={"Future proof learning"}
          subtitle={"AI First Curriculum"}
        >
          <AIFirstCurriculum />
        </CardContainer>
      </div> */}
    </Fragment>
  );
};

export default Home;
