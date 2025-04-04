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
import Link from "next/link";
import CallMadeIcon from '@mui/icons-material/CallMade';

const SingleTableCell = ({ text, isHead = false, isFirst = false }) => {
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
      {isFirst || isHead ? text : "₹" + text}
    </TableCell>
  );
};

const SingleCountText = ({ count, text, isHref }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        width: "100%",
      }}
    >
      <Box sx={{ width: { xs: "10%", xl: "7%" } }}>
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
          {isHref && (
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "12px",
                fontFamily: "Inter",
                lineHeight: "150%",
                marginLeft: "4px",
              }}
              href={
                "https://drive.google.com/file/d/1ZH3snXOpdKxTdClmm-OWHo4bbc8zk61-/view?usp=drive_link"
              }
              target="_blank"
            >
            <CallMadeIcon sx={{height:'100%',width:'12px'}}/>  here
            </Link>
          )}.
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
      {/* Header Section - unchanged from original */}
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
            style={{ width: "20px", height: "20px" }}
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

      {/* Content Section - modified to keep desktop layout identical */}
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
          {/* Table Container - scrollable only on mobile */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              overflowX: { xs: "auto", md: "visible" },
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "2px",
              },
            }}
          >
            <Table
              sx={{
                minWidth:  "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderRadius: "12px",
                paddingBottom: "40px",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <SingleTableCell text="Year" isHead />
                  <SingleTableCell text="Sem 1" isHead />
                  <SingleTableCell text="Sem 2" isHead />
                  <SingleTableCell text="Total" isHead />
                </TableRow>
              </TableHead>
              <TableBody>
                {homeScreenData.FeeStructure.leftSideYearTable.map(
                  (row, idx) => (
                    <TableRow key={row.id}>
                      <SingleTableCell isFirst={true} text={row.year1} />
                      <SingleTableCell
                        text={row.amount1}
                        isFirst={
                          idx ===
                          homeScreenData.FeeStructure.leftSideYearTable.length -
                            1
                        }
                      />
                      <SingleTableCell
                        text={row.amount2}
                        isFirst={
                          idx ===
                          homeScreenData.FeeStructure.leftSideYearTable.length -
                            1
                        }
                      />
                      <SingleTableCell text={row.total} />
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Box>

          {/* Right Side Text - unchanged from original */}
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
              <SingleCountText
                key={item.id}
                count={item.id}
                text={item.text}
                isHref={item.id === 4}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
