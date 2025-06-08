'use client'
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
// import Image from "next/image";
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
        // Rounded corners only for corner cells
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
  // Create a simplified table structure that matches the design
  const createTableRows = () => {
    const data = homeScreenData.FeeStructure.leftSideYearTable.filter(
      (row) => row.id !== "8"
    );

    // Group data by year
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
        // Find the last year that has data and add this row to it
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

  {
    /* First Outer Box - Tuition Fees */
  }
  const div1 =
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
      {/* Main Fee Table */}
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Box
          sx={{
            width: "100%",
            overflowX: { xs: "auto", md: "visible" },
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Table
            sx={{
              minWidth: "100%",
              borderRadius: "12px",
              padding: "10px",
              borderCollapse: "separate",
              borderSpacing: 0,
              overflow: "hidden",
              border: "2px solid red",
            }}
          >
            <TableHead>
              <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                <SingleTableCell text="Year" isHead isFirstColumn isFirstRow />
                <SingleTableCell text="Semester" isHead isFirstRow />
                <SingleTableCell text=" " isHead isFirstRow />
                <SingleTableCell text=" " isHead isFirstRow />
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
                        text={row.total}
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

      {/* Total Price */}
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
                {item.total}
              </Typography>
            ))}
        </Box>
      </Box>

      {/* Additional Information */}
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


  {
    /* Second Outer Box - Hostel Fees */
  }
  const div2 =
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
      {/* Hostel Fees Section */}
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        {/* Desktop Hostel Table */}
        <Box
          sx={{
            padding: "10px",
            borderRadius: "12px",
            border: "2px solid red",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(186, 107, 255, 0.3)",
            }}
          >
            <Table
              sx={{
                width: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderCollapse: "separate",
                borderSpacing: 0,
                borderRadius: "12px",
              }}
            >
              <TableHead>
                <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    Standard Room
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    Premium Room
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    Premium Plus Room
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    Supreme Room (Only Boys)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    ₹90,000/-*
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    ₹1,10,000/-*
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}
                  >
                    ₹1,40,000/-*
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    ₹1,80,000/-*
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>

      {/* Hostel Fee Notes */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(186, 107, 255, 0.08)",
          borderRadius: "12px",
          padding: "1rem",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(186, 107, 255, 0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            width: "fit-content",
          }}
        >
          <Typography
            sx={{
              color: "#7C3AED",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Note
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 1,
            fontSize: { xs: 12, sm: 14 },
            color: "#374151",
            lineHeight: 1.6,
          }}
        >
          *The hostel fees mentioned above is per student per year.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 1,
            fontSize: { xs: 12, sm: 14 },
            color: "#374151",
            lineHeight: 1.6,
          }}
        >
          **Additional mess charge of ₹5,500 / month applicable.
        </Typography>
      </Box>

      {/* Empty Space to Match Height */}
      <Box
        sx={{
          flex: 1,
          display: "block",
        }}
      />
    </Box>


  {
    /* Content Section mobile */
  }

  {
    /* /* First Row - Table and Text */
  }
  const mdiv1 =

    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "16px",
      }}
    >
      {/* Accordion Container */}
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
              boxShadow: "none", // Remove default shadow
              border: "none",
              "&:before": {
                display: "none", // ✨ This removes the default top divider line
              },
            }}
          >

            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{
                boxShadow: "none", // Remove default shadow
                borderWidth: "0px", // Remove border
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
              <Table sx={{ width: "100%"}}>
                <TableBody>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        border: "1px solid #E0E0E0",
                      },
                    }}
                  >
                    <SingleTableCell isFirst text="upskilling" />
                    <SingleTableCell text={row.amount1} />
                  </TableRow>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        border: "1px solid #E0E0E0",
                      },
                    }}
                  >
                    <SingleTableCell isFirst text="coolege 2" />
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

    {/* Total Price */}
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
          {homeScreenData.FeeStructure.leftSideYearTableMobile
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
          {homeScreenData.FeeStructure.leftSideYearTableMobile
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
                {item.total}
              </Typography>
            ))}
        </Box>
      </Box>
      {/* Right Side Text */}
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



  {
    /* Second Row - Additional Table (2x4) */
  }
  const mdiv2 =
    <Box
      sx={{
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Inter",
          fontWeight: { xs: "400", md: "700" },
          my: { xs: "8px", md: "8px" },
        }}
      >
        Hostel Fees{" "}
      </Typography>
      {/* Additional Table - Horizontal layout for desktop */}
      <Box
        sx={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          display: { xs: "none", md: "block" },
          marginTop: "20px",
        }}
      >
        <Table
          sx={{
            minWidth: "100%",
            backgroundColor: "rgba(186, 107, 255, 0.08)",
            borderRadius: "12px",
          }}
        >
          <TableHead>
            <TableRow>
              <SingleTableCell text="Standard Room" isHead />
              <SingleTableCell text="Premium Room" isHead />
              <SingleTableCell text="Premium Plus Room" isHead />
              <SingleTableCell text="Supreme Room (Only Boys)" isHead />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <SingleTableCell text="90,000/-*" />
              <SingleTableCell text="1,10,000/-*" />
              <SingleTableCell text="1,40,000/-*" />
              <SingleTableCell text="1,80,000/-*" />
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* Additional Table - Vertical layout for mobile */}

      <Box
        sx={{
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          display: { xs: "block", md: "none" },
          marginTop: "20px",
          borderRadius: "22px",
        }}
      >
        <Table
          sx={{
            minWidth: "100%",
            backgroundColor: "#F9F9F9",
            borderRadius: "20px",
            borderCollapse: "separate",
            borderSpacing: 0,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            "& .MuiTableCell-root": {
              border: "1px solid #DBDBDB",
              padding: "16px 12px",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "center",
            },
          }}
        >
          <TableBody>
            <TableRow
              sx={{
                borderRadius: "20px 20px 0 0",
              }}
            >
              <TableCell
                sx={{
                  width: "50%",
                  color: "#FFFFFF",
                  borderRadius: "22px 0 0 0",
                  backgroundColor: "#A75EE7",
                }}
              >
                Standard Room
              </TableCell>
              <TableCell
                sx={{
                  color: "#6D6D6D",
                  borderRadius: "0 22px 0 0",
                  width: "50%",
                }}
              >
                ₹90,000/-*
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: " #FFFFFF",
                  backgroundColor: " #A75EE7",
                  width: "50%",
                }}
              >
                Premium Room
              </TableCell>
              <TableCell
                sx={{
                  color: "#6D6D6D",
                }}
              >
                ₹1,10,000/-*
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#A75EE7",
                  width: "50%",
                }}
              >
                Premium Plus Room
              </TableCell>
              <TableCell
                sx={{
                  color: "#6D6D6D",
                }}
              >
                ₹1,40,000/-*
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#A75EE7",
                  width: "50%",
                  borderRadius: "0 0 0 22px",
                }}
              >
                Supreme Room (Only Boys)
              </TableCell>
              <TableCell
                sx={{
                  color: "#6D6D6D",
                  borderRadius: "0 0 22px 0",
                }}
              >
                ₹1,80,000/-*
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F3E8FF",
          borderRadius: "22px",
          padding: "16px",
          marginTop: "20px",
          border: "1px solid #E3C2FF ",

          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            // position: "absolute",
            // top: "-12px",
            // left: "16px",
            textAlign: "center",
            // padding: "10px",
            width: "102px",
            height: "34px",
            backgroundColor: "#D8BBF0",
            color: "#FFFFFF",
            borderRadius: "12px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: "Inter",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
            }}
          >
            Note
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: 12, sm: 14 },
            color: "#000000",
            fontWeight: "400",
            marginBottom: "8px",
            fontFamily: "Inter",
          }}
        >
          *The hostel fees mentioned above is per student per year.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: 12, sm: 14 },
            color: "#000000",
            fontWeight: "400",
            fontFamily: "Inter",
          }}
        >
          **Additional mess charge of ₹5,500 / month applicable.
        </Typography>
      </Box>
    </Box>


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "stretch",
      }}
    >
      <FeesToggleButton div1={div1} div2={div2} mdiv1={mdiv1} mdiv2={mdiv2} />
    </Box>
  );
};
