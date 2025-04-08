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
import CallMadeIcon from "@mui/icons-material/CallMade";

const SingleTableCell = ({ text, isHead = false, isFirst = false }) => {
  return (
    <TableCell
      align="right"
      sx={{
        whiteSpace: "nowrap",
        textAlign: "center",
        borderWidth: 0,
        paddingBottom: "20px",
        paddingTop: isHead ? "16px" : "0px",
        paddingBottom: "16px",
        fontWeight: "400",
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
          alignItems: { xs: "flex-start", md: "center" },
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

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* First Row - Table and Text */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
          }}
        >
          {/* Table Container */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              overflowX: { xs: "auto", md: "visible" },
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Table
              sx={{
                minWidth: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderRadius: "12px",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <SingleTableCell text="Year" isHead />
                  <SingleTableCell text="Odd Sem" isHead />
                  <SingleTableCell text="Even Sem" isHead />
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

        {/* Second Row - Additional Table (2x4) */}
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
                  <SingleTableCell text="85,000/-*" />
                  <SingleTableCell text="1,00,000/-*" />
                  <SingleTableCell text="1,30,000/-*" />
                  <SingleTableCell text="1,50,000/-*" />
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          {/* Additional Table - Vertical layout for mobile */}
          <Box
            sx={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
              display: { xs: "block", md: "none" },
              marginTop: "20px",
            }}
          >
            <Table
              sx={{
                minWidth: "100%",
                backgroundColor: "rgba(186, 107, 255, 0.08)",
                borderRadius: "12px",
                borderCollapse: "separate",
                borderSpacing: 0,
                "& .MuiTableCell-root": {
                  border: "none",
                  padding: "12px 16px",
                },
              }}
            >
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "rgba(108, 16, 188, 1)" }}>
                    Standard Room
                  </TableCell>
                  <TableCell>85,000/-*</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "rgba(108, 16, 188, 1)" }}>
                    Premium Room
                  </TableCell>
                  <TableCell>1,00,000/-*</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "rgba(108, 16, 188, 1)" }}>
                    Premium Plus Room
                  </TableCell>
                  <TableCell>1,30,000/-*</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "rgba(108, 16, 188, 1)" }}>
                    Supreme Room (Only Boys)
                  </TableCell>
                  <TableCell>1,50,000/-*</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
