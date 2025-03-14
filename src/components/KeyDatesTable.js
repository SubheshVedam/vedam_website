"use client";
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";

const KeyDatesTable = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const tableData = [
    { label: "VSAT Test", value: "21 March 2025" },
    { label: "Last Date to Apply", value: "20 March 2025" },
    { label: "VSAT Result", value: "Immediately After Exam" },
    { label: "Personal Interview", value: "Within 10 Days of the Exam" },
    { label: "Final Offer", value: "To be Announced" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      {/* Heading */}
      <Typography
        variant={isMobile ? "h5" : "h3"}
        sx={{ fontWeight: 700, display: "inline-block", mb: 2 }}>
        <Box
          component="span"
          sx={{
            backgroundImage: "linear-gradient(90deg, #FB7F05 2%, #6C10BC 98%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Key Dates
        </Box>
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
          border: "2px solid #FB7F05",
          width: "100%",
          maxWidth: "100vw",
          margin: "0 auto",
          alignSelf: "start",
        }}>
        <Table sx={{ width: "100%", tableLayout: "fixed" }}>
          {/* Header Row */}
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={isMobile ? 2 : 5}
                sx={{
                  color: "#FB7F05",
                  fontWeight: "bold",
                  textAlign: "start",
                  fontSize: "1.2rem",
                  border: "none",
                }}>
                March Intake Dates
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isMobile ? (
              tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      backgroundColor: "#fad4b0",
                      color: "#1E1E1E",
                      fontWeight: "bold",
                      border: "none",
                    }}>
                    {row.label}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#333",
                      fontWeight: "500",
                      border: "none",
                    }}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {/* Desktop View */}
                <TableRow sx={{ backgroundColor: "#fad4b0" }}>
                  {tableData.map((row, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "bold",
                        textAlign: "start",
                        border: "none",
                      }}>
                      {row.label}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {tableData.map((row, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        textAlign: "start",
                        border: "none",
                      }}>
                      {row.value}
                    </TableCell>
                  ))}
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default KeyDatesTable;
