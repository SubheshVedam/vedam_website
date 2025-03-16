import React from "react";
import Image from "next/image";
import { homeScreenData } from "@/constants/data";
import { Box, Typography } from "@mui/material";

const Card = ({
  width,
  data,
  containerStyle = {},
  showBorder = false,
  textArrayStyle = {},
  headerTextStyle = {},
  textArrayContainer = {},
  textArrayTextStyle = {},
}) => {
  return (
    <Box
      sx={{
        width: width,
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "465px",
        ...containerStyle,
      }}
    >
      <Box style={{ height: "30px" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
            fontSize: "clamp(14px, 2vw, 1.5rem)",
            fontWeight: "700",
            lineHeight: "120%",
            fontFamily: "Inter, sans-serif",
            ...headerTextStyle,
          }}
        >
          {data.headerText}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          ...textArrayContainer,
        }}
      >
        {data.textArray.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: showBorder
                ? "1px solid rgba(132, 132, 132, 0.2)"
                : "",
              height: { xs: "48px", md: "70px" },
              "&:last-child": {
                borderWidth: 0,
              },
              ...textArrayStyle,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              {item.icon && (
                <Image src={item.icon} width={20} height={20} alt="icon" />
              )}
              <Typography
                sx={{
                  textAlign: "center",
                  lineHeight: "120%",
                  fontSize: "clamp(12px, 2vw, 16px)",
                  fontWeight: "500",
                  ...textArrayTextStyle,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const VedamVs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Card
        width={"30%"}
        data={homeScreenData.vedamVs.leftSideData}
        containerStyle={{
          dispaly: "flex",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
        showBorder
        textArrayStyle={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        textArrayContainer={{ width: "100%" }}
        textArrayTextStyle={{ fontWeight: "700", color: "rgba(30, 30, 30, 1)" }}
      />
      <Box
        sx={{
          width: "45%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background:
            "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
          borderRadius: "20px",
        }}
      >
        <Card
          width="100%"
          data={homeScreenData.vedamVs.middleSideData}
          containerStyle={{
            paddingLeft: { xs: "28px", md: "40px" },
            paddingRight: { xs: "28px", md: "40px" },
            background:
              "linear-gradient(160.16deg, #BA6BFF -29.47%, #6C10BC 39.76%, #1E1E1E 101.6%)",
            borderRadius: "20px",
          }}
          textArrayTextStyle={{
            color: "rgba(255, 255, 255, 1)",
            textAlign: "left",
          }}
        />
      </Box>
      <Card
        width="35%"
        data={homeScreenData.vedamVs.rightSideData}
        containerStyle={{
          borderTop: "1px solid rgba(108, 16, 188, 1)",
          borderRight: "1px solid rgba(108, 16, 188, 1)",
          borderBottom: "1px solid rgba(108, 16, 188, 1)",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "1rem",
        }}
        textArrayStyle={{
          width: "100%",
          paddingLeft: { sm: "10px", md: "40px" },
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        headerTextStyle={{ color: "rgba(12, 38, 81, 1)" }}
        textArrayTextStyle={{
          color: "rgba(132, 132, 132, 1)",
        }}
      />
    </Box>
  );
};
