import React, { useState } from "react";
import { CardContainer } from "@/components";
import { lifeAtVedam } from "@/constants/data";
import { Box, Button, Collapse, Paper, Typography } from "@mui/material";

const SingleCard = ({ data, onClick, expandIn }) => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.625rem",
          boxShadow: "none",
          width: "100%",
          textTransform: "none",
          borderRadius: "0.75rem",
          border: "1px solid #4ED0DD",
          backgroundColor: "#E7FDFF",
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
            variant="subtitle1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: "1.3",
              fontFamily: "Inter",
              color: "#1B9BA7",
              textAlign: "left",
              backgroundClip: expandIn ? "text" : "unset",
              WebkitBackgroundClip: expandIn ? "text" : "unset",
              WebkitTextFillColor: "#1B9BA7",
              textFillColor: "#1B9BA7",
              letterSpacing: "-0.02em",
            }}
          >
            {data.title}
          </Typography>
        </Box>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25rem"
          height="1.25rem"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433284 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9972 7.34869 18.9427 4.80678 17.068 2.93202C15.1932 1.05727 12.6513 0.00279983 10 0ZM10 18.4615C8.32647 18.4615 6.69052 17.9653 5.29902 17.0355C3.90753 16.1057 2.823 14.7842 2.18256 13.2381C1.54213 11.6919 1.37456 9.99061 1.70105 8.34923C2.02754 6.70786 2.83343 5.20016 4.01679 4.01679C5.20016 2.83342 6.70786 2.02754 8.34924 1.70105C9.99062 1.37456 11.6919 1.54212 13.2381 2.18256C14.7842 2.82299 16.1057 3.90753 17.0355 5.29902C17.9653 6.69051 18.4615 8.32646 18.4615 10C18.459 12.2434 17.5667 14.3941 15.9804 15.9804C14.3941 17.5667 12.2434 18.459 10 18.4615ZM14.3904 7.91731C14.4619 7.98875 14.5186 8.07358 14.5574 8.16697C14.5961 8.26035 14.616 8.36045 14.616 8.46154C14.616 8.56263 14.5961 8.66272 14.5574 8.75611C14.5186 8.84949 14.4619 8.93433 14.3904 9.00577L10.5442 12.8519C10.4728 12.9234 10.388 12.9802 10.2946 13.0189C10.2012 13.0576 10.1011 13.0775 10 13.0775C9.89891 13.0775 9.79882 13.0576 9.70543 13.0189C9.61205 12.9802 9.52721 12.9234 9.45577 12.8519L5.60962 9.00577C5.46528 8.86143 5.38419 8.66566 5.38419 8.46154C5.38419 8.25741 5.46528 8.06164 5.60962 7.91731C5.75396 7.77297 5.94972 7.69188 6.15385 7.69188C6.35798 7.69188 6.55374 7.77297 6.69808 7.91731L10 11.2202L13.3019 7.91731C13.3734 7.84579 13.4582 7.78905 13.5516 7.75034C13.645 7.71163 13.7451 7.6917 13.8462 7.6917C13.9472 7.6917 14.0473 7.71163 14.1407 7.75034C14.2341 7.78905 14.3189 7.84579 14.3904 7.91731Z"
            fill="#1B9BA7"
          />
        </svg>
      </Button>

      <Collapse in={expandIn}>
        <Box
          sx={{
            paddingY: "1rem",
            borderRadius: "0.375rem",
            marginTop: "0.5rem",
          }}
        >
          {data.content || (
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: "1.4",
                fontFamily: "Inter",
                color: "#666",
              }}
            >
              Content for {data.title}
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export const ScrollComponentMobile = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const sectionData = lifeAtVedam.aiFirst.data;
  const { title: cardTitle, subtitle: cardSubtitle } = lifeAtVedam.AI;

  const handleToggle = (buttonId) => {
    setExpandedButton(expandedButton === buttonId ? null : buttonId);
  };

  return (
    <Box sx={{ padding: "0.625rem ", width: "100%" }}>
      <CardContainer>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          {sectionData.map((item) => (
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
