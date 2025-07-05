import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { homeScreenData } from "@/constants/data";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import FeesToggleButton from "./ToggleButton";

const SingleTableCell = ({
  text,
  isHead = false,
  isFirst = false,
  isFirstColumn = false,
  isLastColumn = false,
  isFirstRow = false,
  isLastRow = false,
}) => {
  return (
    <TableCell
      align="center"
      sx={{
        whiteSpace: "nowrap",
        border: "1px solid rgba(186, 107, 255, 0.3)",
        paddingY: "16px",
        fontWeight: "400",
        color: isHead ? "white" : "rgba(30, 30, 30, 1)",
        borderTopLeftRadius: isFirstRow && isFirstColumn ? "12px" : "0px",
        borderTopRightRadius: isFirstRow && isLastColumn ? "12px" : "0px",
        borderBottomLeftRadius: isLastRow && isFirstColumn ? "12px" : "0px",
        borderBottomRightRadius: isLastRow && isLastColumn ? "12px" : "0px",
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
      <Box
        sx={{
          backgroundColor: "rgba(186, 107, 255, 1)",
          width: 28,
          height: 28,
          borderRadius: "50%",
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
              href="https://drive.google.com/file/d/1zJzM9ZOPsJzP5bhZsCRB5xWlho3iAGwt/view?usp=sharing"
              target="_blank"
            >
              <CallMadeIcon sx={{ height: "100%", width: "12px" }} /> here
            </Link>
          )}
          .
        </Typography>
      </Box>
    </Box>
  );
};

export const FeeStructure = () => {
  const createTableRows = () => {
    const data = homeScreenData.FeeStructure.leftSideYearTable.filter(
      (row) => row.id !== "8"
    );

    const yearGroups = {
      "Year 1": [],
      "Year 2": [],
      "Year 3": [],
      "Year 4": [],
    };

    data.forEach((row) => {
      if (row.year1) {
        yearGroups[row.year1].push(row);
      } else {
        const lastYear = Object.keys(yearGroups)
          .reverse()
          .find((year) => yearGroups[year].length > 0);
        if (lastYear) {
          yearGroups[lastYear].push(row);
        }
      }
    });

    return yearGroups;
  };

  const yearGroups = createTableRows();

  const div1 = (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
        padding: { xs: "20px 10px", md: "40px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "800px",
      }}
    >
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Box
          sx={{
            width: "100%",
            overflowX: { xs: "auto", md: "visible" },
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": { display: "none" },
            borderRadius: "22px",
            p: "2px",
            background: "linear-gradient(90deg, #6513AC 0%, #FF7829 100%)",
            mb: 2,
          }}
        >
          <Table
            sx={{
              minWidth: "100%",
              borderRadius: "21px",
              padding: "10px",
              borderCollapse: "separate",
              borderSpacing: 0,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <TableHead>
              <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                <SingleTableCell text="Year" isHead isFirstColumn isFirstRow />
                <SingleTableCell text="Semester" isHead isFirstRow />
                <SingleTableCell text="Tuition Fees" isHead isFirstRow />
                <SingleTableCell text="Upskilling Fees" isHead isFirstRow />
                <SingleTableCell text="Total" isHead isLastColumn isFirstRow />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(yearGroups).map(([year, rows], yearIndex) =>
                rows.map((row, rowIndex) => {
                  const isLastRow =
                    year === "Year 4" && rowIndex === rows.length - 1;
                  const isFirstRowOfYear = rowIndex === 0;
                  const isVeryFirstYear = year === "Year 1";
                  const isVeryLastYear = year === "Year 4";

                  return (
                    <TableRow key={row.id}>
                      {isFirstRowOfYear && (
                        <TableCell
                          align="center"
                          rowSpan={rows.length}
                          sx={{
                            whiteSpace: "nowrap",
                            border: "1px solid rgba(186, 107, 255, 0.3)",
                            paddingY: "16px",
                            fontWeight: "400",
                            color: "rgba(30, 30, 30, 1)",
                            verticalAlign: "middle",
                            borderBottomLeftRadius: isVeryLastYear
                              ? "12px"
                              : "0px",
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }}
                        >
                          {year}
                        </TableCell>
                      )}
                      <SingleTableCell
                        isFirst={true}
                        text={row.semester}
                        isLastRow={isLastRow}
                      />
                      <SingleTableCell
                        text={row.amount1}
                        isLastRow={isLastRow}
                      />
                      <SingleTableCell
                        text={row.amount2}
                        isLastRow={isLastRow}
                      />
                      <SingleTableCell
                        text={"₹" + row.total}
                        isFirst={true}
                        isLastColumn
                        isLastRow={isLastRow}
                      />
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "60px",
          marginBottom: "20px",
          borderRadius: "12px",
          background: "linear-gradient(90deg, #FF7829 0%, #7B2CBF 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "40px",
        }}
      >
        <Box>
          {homeScreenData.FeeStructure.leftSideYearTable
            .filter((item) => item.id === "8")
            .map((item) => (
              <Typography
                key={item.year1}
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "24px",
                }}
              >
                {item.year1}
              </Typography>
            ))}
        </Box>
        <Box>
          {homeScreenData.FeeStructure.leftSideYearTable
            .filter((item) => item.id === "8")
            .map((item) => (
              <Typography
                key={item.total}
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "24px",
                }}
              >
                ₹ {item.total}
              </Typography>
            ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(186, 107, 255, 0.08)",
          borderRadius: "12px",
          padding: "3rem",
          flex: 1,
        }}
      >
        {homeScreenData.FeeStructure.rightSideText &&
          homeScreenData.FeeStructure.rightSideText.map((item) => (
            <SingleCountText
              key={item.id}
              count={item.id}
              text={item.text}
              isHref={item.id === 4}
            />
          ))}
      </Box>
    </Box>
  );

  const mdiv1 = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "16px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          overflowX: { xs: "auto", md: "visible" },
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {homeScreenData.FeeStructure.leftSideYearTableMobile.map((row, idx) => (
          <Accordion
            key={row.id}
            sx={{
              borderRadius: "16px",
              boxShadow: "none",
              border: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{
                boxShadow: "none",
                borderWidth: "0px",
                backgroundColor: "#E4C5FF",
                borderRadius: "8px 8px 0 0",
                color: "#1C1C1C",
                fontWeight: "bold",
                fontSize: "1rem",
                textAlign: "center",
                padding: "8px 16px",
              }}
            >
              {row.year1}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 20px 20px",
                padding: 0,
              }}
            >
              <Table sx={{ width: "100%" }}>
                <TableBody>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        border: "1px solid #E0E0E0",
                      },
                    }}
                  >
                    <SingleTableCell isFirst text="Tution Fees" />
                    <SingleTableCell text={row.amount1} />
                  </TableRow>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        border: "1px solid #E0E0E0",
                      },
                    }}
                  >
                    <SingleTableCell isFirst text="Upskilling Fees" />
                    <SingleTableCell text={row.amount2} />
                  </TableRow>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        border: "1px solid #E0E0E0",
                      },
                    }}
                  >
                    <SingleTableCell isFirst text="Total" />
                    <SingleTableCell text={row.total} />
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          paddingY: "16px",
          paddingX: "24px",
          marginBottom: "20px",
          borderRadius: "12px",
          background: "linear-gradient(90deg, #FF7829 0%, #7B2CBF 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {homeScreenData.FeeStructure.leftSideYearTable
            .filter((item) => item.id === "8")
            .map((item) => (
              <Typography
                key={item.year1}
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "18px",
                }}
              >
                {item.year1}
              </Typography>
            ))}
        </Box>
        <Typography sx={{ fontSize: 40, color: "white" }}></Typography>
        <Box>
          {homeScreenData.FeeStructure.leftSideYearTable
            .filter((item) => item.id === "8")
            .map((item) => (
              <Typography
                key={item.total}
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "18px",
                }}
              >
                ₹ {item.total}
              </Typography>
            ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
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
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "stretch",
      }}
    >
      <FeesToggleButton div1={div1} mdiv1={mdiv1} />
    </Box>
  );
};