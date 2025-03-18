import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Image from "next/image";

const SingleTableCell = ({ text, isHead = false }) => {
  return (
    <TableCell
      align="right"
      sx={{
        whiteSpace: "nowrap",
        textAlign: "left",
        borderWidth: 0,
        paddingBottom: "20px",
        paddingTop: isHead ? "16px" : "0px",
        paddingBottom: "16px",
        fontWeight: "600",
        color: isHead ? "rgba(108, 16, 188, 1)" : "rgba(30, 30, 30, 1)",
      }}
    >
      {text}
    </TableCell>
  );
};

const SingleCountText = ({ count, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "100%",
      }}
    >
      <Box sx={{ width: "10%" }}>
        <Box
          sx={{
            backgroundColor: "rgba(186, 107, 255, 1)",
            width: 28,
            height: 28,
            borderRadius: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#F9F9F9",
              fontSize: "14px",
              fontFamily: "Inter",
            }}
          >
            {count}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "80%" }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "rgba(30, 30, 30, 1)",
            fontSize: "12px",
            fontFamily: "Inter",
            lineHeight: "150%",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export const FeeStructure = () => {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
        padding: { xs: "20px 10px", md: "40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: { xs: "flex-end", md: "center" },
          justifyContent: "space-between",
          marginBottom: { xs: "1rem", md: "2rem" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter",
            fontWeight: { xs: "400", md: "700" },
            marginTop: { xs: "8px", md: 0 },
          }}
        >
          {homeScreenData.FeeStructure.headerLeftTitle}
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(108, 16, 188, 1)",
            paddingX: { xs: "10px", md: "20px" },
            paddingY: { xs: "8px", md: "10px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            borderRadius: 12,
          }}
        >
          <Image
            width={20}
            height={20}
            src={"/img/location2.webp"}
            sx={{ width: "20px", height: "20px" }}
            alt="location"
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "12px",
                md: "1rem",
                color: "rgba(108, 16, 188, 1)",
                whiteSpace: "nowrap",
              },
            }}
          >
            {homeScreenData.FeeStructure.headerRightLocation}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            marginTop: { xs: "8px", md: 0 },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Table
              sx={{
                width: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderRadius: "12px",
                paddingBottom: "40px",
              }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  width: "100%",
                }}
              >
                <TableRow>
                  <SingleTableCell text="Year" isHead />
                  <SingleTableCell text="Sem 1" isHead />
                  <SingleTableCell text="Sem 2" isHead />
                </TableRow>
              </TableHead>
              <TableBody>
                {homeScreenData.FeeStructure.leftSideYearTable.map((row) => (
                  <TableRow key={row.id}>
                    <SingleTableCell text={row.year1} />
                    <SingleTableCell text={row.amount1} />
                    <SingleTableCell text={row.amount2} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingBottom: { md: "16px" },
            }}
          >
            {homeScreenData.FeeStructure.rightSideText.map((item) => (
              <SingleCountText key={item.id} count={item.id} text={item.text} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
