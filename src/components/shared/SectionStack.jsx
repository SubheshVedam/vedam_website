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
          useGlass = undefined,
          glassVariant = undefined,
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
          const {
            sx: plainSx = {},
            className: plainWrapperClassName = "",
            ...restPlainProps
          } = plainWrapperProps;
          const plainUseGlass = useGlass ?? false;
          const plainGlassClass = plainUseGlass
            ? `${glassVariant ?? "glass"} glass-hover-lift`
            : "";

          return (
            <Box
              key={key}
              className={`${plainGlassClass} ${plainWrapperClassName}`.trim()}
              sx={{
                width: "100%",
                marginBottom: { xs: "1rem", md: "2rem", lg: "3rem" },
                borderRadius: plainUseGlass ? "22px" : undefined,
                padding: plainUseGlass ? { xs: "0.85rem", md: "1rem" } : undefined,
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
            useGlass={useGlass ?? cardProps.useGlass ?? cardDefaults.useGlass ?? true}
            glassVariant={
              glassVariant ??
              cardProps.glassVariant ??
              cardDefaults.glassVariant ??
              "glass"
            }
          >
            {content}
          </CardContainer>
        );
      })}
    </WidthContainer>
  );
};
