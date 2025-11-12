import React from "react";
import { Box } from "@mui/material";
import { WidthContainer } from "@/components/home/WidthContainer";
import { CardContainer } from "@/components/atoms/CardContainer";

export const SectionStack = ({
  sections = [],
  widthContainerProps = {},
  cardDefaults = {},
  plainWrapperDefaults = {},
}) => {
  return (
    <WidthContainer {...widthContainerProps}>
      {sections.map((section, index) => {
        const {
          id,
          component: Component,
          componentProps = {},
          render,
          useCard = true,
          cardProps = {},
          plainWrapperProps = {},
          key: providedKey,
          ...restCardProps
        } = section;

        const key = providedKey ?? id ?? restCardProps.subtitle ?? index;
        const content = render
          ? render(section, index)
          : Component
          ? <Component {...componentProps} />
          : null;

        if (!content) {
          return null;
        }

        if (!useCard) {
          const { sx: defaultPlainSx = {}, ...restPlainDefaults } =
            plainWrapperDefaults;
          const { sx: plainSx = {}, ...restPlainProps } = plainWrapperProps;

          return (
            <Box
              key={key}
              sx={{
                width: "100%",
                marginBottom: { xs: "1rem", md: "2rem", lg: "3rem" },
                ...defaultPlainSx,
                ...plainSx,
              }}
              {...restPlainDefaults}
              {...restPlainProps}
            >
              {content}
            </Box>
          );
        }

        return (
          <CardContainer
            key={key}
            {...cardDefaults}
            {...restCardProps}
            {...cardProps}
          >
            {content}
          </CardContainer>
        );
      })}
    </WidthContainer>
  );
};
