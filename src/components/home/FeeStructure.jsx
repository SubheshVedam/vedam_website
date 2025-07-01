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
      }}>
      {/* Main Fee Table */}
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
          }}>
          <Table
            sx={{
              minWidth: "100%",
              borderRadius: "21px",
              padding: "10px",
              borderCollapse: "separate",
              borderSpacing: 0,
              overflow: "hidden",
              backgroundColor: "#fff",
              // border: "2px solid red",
            }}>
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
                          }}>
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
        }}>
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
                }}>
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
                }}>
                ₹ {item.total}
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
        }}>
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

  {
    /* Second Outer Box - Hostel Fees */
  }
  const div2 = (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "30px",
        padding: { xs: "20px 10px", md: "40px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      {/* Hostel Fees Section */}



      <Typography sx={{
        fontSize: {
          xs: "1rem",
          md: "1.2rem",
        }, color: 'rgba(146, 62, 218, 1)',
        mb: 2
      }}>YourSpace Hostel [Out of Campus]</Typography>
      {/* Out Hostel Fees Section */}
      <Box
        sx={{
          width: "100%",
          overflowX: { xs: "visible", md: "visible" },
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          borderRadius: "23px",
          p: "2px",
          background: "linear-gradient(90deg, #6513AC 0%, #FF7829 100%)",
          mb: 2,
        }}>
        {/* Desktop Hostel Table */}
        <Box
          sx={{
            padding: "10px",
            borderRadius: "22px",
            backgroundColor: "#fff",
          }}>
          <Box
            sx={{
              display: "block",
              overflowX: 'auto', borderRadius: "22px",
              border: "1px solid rgba(186, 107, 255, 0.3)",
            }}>
            <Table
              sx={{
                width: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderCollapse: "separate",
                borderSpacing: 0,
                borderRadius: "22px",
              }}>
              <TableHead>
                <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Room Type
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    3 Sharing Room
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Hostel Fee per Year
                    [Accomodation + Mess + Laundry Charges]
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    ₹2,24,000/-
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Security Deposit (Refundable)
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    ₹10,000/-
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Room Features
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    Attached Washroom, AC, high speed WiFi
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Applicable for
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    Boys and Girls
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>

      {/* out Hostel Fee Notes */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(186, 107, 255, 0.08)",
          borderRadius: "12px",
          padding: "1rem",
          marginBottom: "20px",
        }}>
        <Box
          sx={{
            backgroundColor: "rgba(186, 107, 255, 0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            width: "fit-content",
            mb: 1,
          }}>
          <Typography
            sx={{
              color: "#7C3AED",
              fontWeight: 600,
              fontSize: "14px",
            }}>
            Note
          </Typography>
        </Box>
        <Box component="ol" sx={{ pl: 2, mt: 1, mb: 0 }}>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            There will be a free transportation service provided to Vedam students in the morning and evening for traveling between hostel and university
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            Hostel fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year. The payment happens semester wise
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            Electricity charges on actuals are applicable
          </Typography>

          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            You can find more details about your space Hostel for Vedam Students
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "inherit",
                fontFamily: "Inter",
                lineHeight: "150%",
                marginLeft: "4px",
              }}
              href="https://drive.google.com/file/d/12PNSdWpV5CB3699kUTadut_8j4Y62T64/view?usp=drive_link"
              target="_blank">
              here
            </Link>
            .
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
            }}>
            Should you wish to book, please contact Vedam team at{" "}
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "inherit",
                fontFamily: "Inter",
                lineHeight: "150%",
              }}
              href="mailto:connect@vedam.org">
              connect@vedam.org
            </Link>
            .
          </Typography>
        </Box>
      </Box>


      <Typography sx={{
        fontSize: {
          xs: "1rem",
          md: "1.2rem",
        }, color: 'rgba(146, 62, 218, 1)',
        mb: 2
      }}>ADYPU Hostel [In Campus]</Typography>
      <Box
        sx={{
          width: "100%",
          overflowX: { xs: "auto", md: "visible" },
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          borderRadius: "23px",
          p: "2px",
          background: "linear-gradient(90deg, #6513AC 0%, #FF7829 100%)",
          mb: 2,
        }}>
        {/* Desktop Hostel Table */}

        <Box
          sx={{
            padding: "10px",
            borderRadius: "22px",
            // border: "2px solid red",
            backgroundColor: "#fff",
          }}>

          <Box
            sx={{
              display: "block",
              overflowX: 'auto',
              borderRadius: "22px",
              border: "1px solid rgba(186, 107, 255, 0.3)",
            }}>
            <Table
              sx={{
                width: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderCollapse: "separate",
                borderSpacing: 0,
                borderRadius: "22px",
              }}>
              <TableHead>
                <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Room Type
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    4 Sharing Room
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    3 Sharing Room
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    5 Sharing Room
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Hostel Fee per Year
                    [Accomodation + Mess + Laundry Charges]


                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    ₹1,62,000/-
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    ₹1,82,000/-
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    ₹2,22,000/-
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    Security Deposit (Refundable)


                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    ₹10,000/-
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                    }}>
                    ₹20,000/-
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}>
                    ₹20,000/-
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
        }}>
        <Box
          sx={{
            backgroundColor: "rgba(186, 107, 255, 0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            width: "fit-content",
            mb: 1,
          }}>
          <Typography
            sx={{
              color: "#7C3AED",
              fontWeight: 600,
              fontSize: "14px",
            }}>
            Note
          </Typography>
        </Box>

        <Box component="ol" sx={{ pl: 2, mt: 1, mb: 0, listStyleType: 'decimal' }}>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> There are very few beds left in ADYPU hostel, which are getting allocated on a first come first serve basis
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> The 4 sharing and 3 Sharing rooms have common washroom and are non AC. Applicable for both boys and girls
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> The 5 Sharing room comes with attached washroom and are having AC. Applicable only for boys
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> Hostel accomodation fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year. This fee component has to be paid for the entire year for room booking
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment.
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
              mb: 1,
            }}>
            You can find more details about In-Campus Hostel
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "inherit",
                fontFamily: "Inter",
                lineHeight: "150%",
                marginLeft: "4px",
              }}
              href="https://drive.google.com/file/d/1kskrsGu2yfH3zlrxjMPVeVut4R72ACKQ/view?usp=sharing"
              target="_blank">
              here
            </Link>
            .
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            sx={{
              fontSize: { xs: 12, sm: 14 },
              color: "#374151",
              lineHeight: 1.6,
            }}>
            <Box component="span" sx={{ fontWeight: 600 }}></Box> Should you wish to book, please contact Vedam team at{" "}
            <Link
              style={{
                color: "#FFA41A",
                fontSize: "inherit",
                fontFamily: "Inter",
                lineHeight: "150%",
              }}
              href="mailto:connect@vedam.org">
              connect@vedam.org
            </Link>{" "}
            to check availability and proceed with booking
          </Typography>
        </Box>


      </Box>

      {/* Empty Space to Match Height */}
      <Box
        sx={{
          flex: 1,
          display: "block",
        }}
      />
    </Box>
  );

  {
    /* Content Section mobile */
  }

  {
    /* /* First Row - Table and Text */
  }
  const mdiv1 = (
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

      {/* Total Price */}
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
  );

  {
    /* Second Row - Additional Table (2x4) */
  }
  const mdiv2 = (
    <Box
      sx={{
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >

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
                  width: "40%",
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

                  width: "25%",
                }}
              >
                ₹90,00/-*
              </TableCell>
              <TableCell
                sx={{
                  color: "#6D6D6D",
                  borderRadius: "0 22px 0 0",
                  width: "25%",
                }}
              >
                ₹90,00/-
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
            textAlign: "center",
            padding: "8px",
            maxWidth: "80px",
            backgroundColor: "#D8BBF0",
            color: "#FFFFFF",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: "Inter",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: "12px",
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
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: 12, sm: 14 },
            color: "#000000",
            fontWeight: "400",
            fontFamily: "Inter",
          }}
        >
          ***Download the complete details of hostel rooms and charges{" "}
          <Link
            style={{
              color: "#FFA41A",
              fontSize: "12px",
              fontFamily: "Inter",
              lineHeight: "100%",
              marginLeft: "4px",
            }}
            href="https://drive.google.com/file/d/1zJzM9ZOPsJzP5bhZsCRB5xWlho3iAGwt/view?usp=sharing"
            target="_blank"
          >
            <CallMadeIcon sx={{ height: "100%", width: "12px" }} /> here
          </Link>
          .{" "}
        </Typography>
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
      <FeesToggleButton div1={div1} div2={div2} mdiv1={mdiv1} mdiv2={div2} />
    </Box>
  );
};
