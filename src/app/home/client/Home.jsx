import {
  AIFirstCurriculum,
  CardContainer,
  ImageGrid,
  InCollaborationWith,
  InvestorWhoTrustUs,
  VideoWithText,
  WidthContainer,
} from "@/components";
import WhyVedam from "@/components/WhyVedam";
import { detailsData, homeScreenData, testimonialData } from "@/constants/data";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        paddingBottom: "16px",
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
        {/* <CardContainer
          title={"Future proof learning"}
          subtitle={"AI First Curriculum"}
        >
          <AIFirstCurriculum />
        </CardContainer> */}
        {/* <CardContainer subtitle={"Investor who trust us"}>
          <InvestorWhoTrustUs />
        </CardContainer> */}
      </WidthContainer>
      <Box>
        <CardContainer
          title={"Future proof learning"}
          subtitle={"AI First Curriculum"}
        >
          <AIFirstCurriculum />
        </CardContainer>
      </Box>
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
  );
};

export default Home;
