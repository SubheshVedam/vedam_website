import { Box } from "@mui/material";
import React, { Fragment } from "react";
import {
  CardContainer,
  ClubsAtVst,
  EdgeAtVedam,
  VedamInovationLab,
  VideoWithText,
  WidthContainer,
} from "@/components";
import { lifeAtVedam } from "@/constants/data";
import WhyVedam from "@/components/WhyVedam";


//temporary data for Life@Vedam

const whyVdata = [
  {
    image: "/img/whyvedam/first.webp",
    bgImage: "/img/whyvedam/Code_From_Day_1_N.jpeg",
    title: "Code From Day 10",
    description:
      "From Day 1, you'll be writing real code, building projects, and solving industry-relevant problems.",
  },
  {
    image: "/img/whyvedam/second.webp",
    bgImage: "/img/whyvedam/AI_First_Curriculum_N.jpeg",
    title: "AI First Curriculum",
    description:
      "Our AI-First Curriculum is designed to equip students with the skills, tools, and mindset needed to thrive in an AI-powered world.",
  },
  {
    image: "/img/whyvedam/fourth.webp",
    bgImage: "/img/whyvedam/Top_5_Makes_it_N.jpeg",
    title: "Only top 5% get through",
    description:
      "Merit based selection to attract the top talent. Learn with and co-create best codes.",
  },
  {
    image: "/img/whyvedam/third.webp",
    bgImage: "/img/whyvedam/Top_Instructors_N.jpeg",
    title: "Top Instructors",
    description:
      "At Vedam, you’ll learn from the best minds in tech—engineers, researchers, and industry leaders from Google, Microsoft, Amazon, and top startups.",
  },
  {
    image: "/img/whyvedam/fifth.webp",
    title: "Personal Macbook ",
    description:
      "A MacBook Air M4(2025) for your hands‑on, immersive and collaborative learning experience in CS and AI ",
    isFeatured: true,
  },
];





const Life = () => {
  const linearGradient = "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "2rem", lg: "3rem" },
        alignItems: "center",
        backgroundColor: "#F9F9F9",
      }}>
      <VideoWithText
        title={lifeAtVedam.hero.title}
        titleLinearGradient="linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)"
        subtitle={lifeAtVedam.hero.subtitle}
        showApplyNowButton={false}
        isImg={true}
      />
      <WidthContainer
        childrenStyle={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", md: "2rem", lg: "3rem" },
        }}>
        <ClubsAtVst />
        <CardContainer subtitle={lifeAtVedam.vedamLab.subtitle}>
          <VedamInovationLab />
        </CardContainer>

        <CardContainer subtitle={lifeAtVedam.edgeAtVedam.subtitle}>
          <EdgeAtVedam />
        </CardContainer>
        <WhyVedam data={whyVdata} />
      </WidthContainer>
    </Box>
  );
};

export default Life;
