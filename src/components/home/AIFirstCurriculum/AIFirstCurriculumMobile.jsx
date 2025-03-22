import React, { Fragment, useState } from "react";
import { CardContainer } from "@/components";
import { homeScreenData } from "@/constants/data";
import { Box, Button, Collapse, Paper, Typography } from "@mui/material";
import Arrow from "@/components/svg/Arrow";

const SingleCard = ({ data, onClick, expandIn }) => {
  return (
    <Fragment>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          border: expandIn ? "none" : "0.5px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "6px",
          backgroundColor: expandIn ? "rgba(108, 16, 188, 0.2)" : "transparent",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "10px",
              fontWeight: "500",
              lineHeight: "100%",
              fontFamily: "Inter",
              marginBottom: "0.3rem",
              color: "#1E1E1E",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "100%",
              fontFamily: "Inter",
              color: "#1E1E1E",
            }}
          >
            {data.title}
          </Typography>
        </Box>
        <Arrow color={expandIn ? "#F9F9F9" : "#6C10BC"} />
      </Button>
      <Collapse in={expandIn}>{data.content}</Collapse>
    </Fragment>
  );
};

export const AIFirstCurriculumMobile = () => {
  const [expandedButton, setExpandedButton] = useState(1);

  const handleToggle = (buttonId) => {
    if (expandedButton === buttonId) {
      setExpandedButton(null);
    } else {
      setExpandedButton(buttonId);
    }
  };

  return (
    <Box sx={{ padding: "10px 20px", width: "100%" }}>
      <CardContainer
        title={homeScreenData.aiFirst.title}
        subtitle={homeScreenData.aiFirst.subtitle}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "none",
          }}
        >
          {homeScreenData.aiFirst.data.map((item) => (
            <SingleCard
              key={item.id}
              data={item}
              onClick={() => handleToggle(item.id)}
              expandIn={expandedButton === item.id}
            />
          ))}
        </Paper>
      </CardContainer>
    </Box>
  );
};
