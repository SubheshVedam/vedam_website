"use client";
import React, { useState } from "react";
import Divider from '@mui/material/Divider';

import { Box, Typography, Link, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export const HostelTypeToggle = ({ selectedHostelType, setSelectedHostelType }) => {
    return (
        <Box
            display="flex"
            gap={3}
            mb={2}
            borderBottom="2px solid #D9CFE2"
            pb={1}
        >
            <Box
                onClick={() => setSelectedHostelType("outCampus")}
                sx={{
                    position: "relative",
                    mx: 2,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    color: selectedHostelType === "outCampus" ? "#6513AC" : "#7B7B7B",
                    cursor: "pointer",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10, // adjust as needed
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: selectedHostelType === "outCampus" ? "#6513AC" : "transparent",
                    },
                }}
            >
                Out of Campus
            </Box>

            <Box
                onClick={() => setSelectedHostelType("inCampus")}
                sx={{
                    position: "relative",
                    mx: 2,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    color: selectedHostelType === "inCampus" ? "#6513AC" : "#7B7B7B",
                    cursor: "pointer",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: selectedHostelType === "inCampus" ? "#6513AC" : "transparent",
                    },
                }}
            >
                In Campus
            </Box>
        </Box>

    );
};

export const HostelContent = ({ selectedHostelType }) => {
    if (selectedHostelType === "outCampus") {
        return (
            <>
                {/* Out Campus Hostel Table */}
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
                    }}
                >
                    <Box
                        sx={{
                            padding: "10px",
                            borderRadius: "22px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                display: "block",
                                overflowX: 'auto',
                                borderRadius: "22px",
                                border: "1px solid rgba(186, 107, 255, 0.3)",
                            }}
                        >
                            <Table
                                sx={{
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderCollapse: "separate",
                                    borderSpacing: 0,
                                    borderRadius: "22px",
                                }}
                            >
                                <TableHead>
                                    <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                                        <TableCell
                                            sx={{
                                                // color: "#1C1C1C",
                                                color: {
                                                    xs: "#fff",
                                                    md: "#1C1C1C"
                                                },
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                                // backgroundColor: '#D6A6FF'
                                                backgroundColor: {
                                                    sx: '#A75EE7', md: '#D6A6FF'
                                                }
                                            }}
                                        >
                                            Room Type
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                // color: "white",
                                                color: {
                                                    xs: "#667085",
                                                    md: "white"
                                                },
                                                backgroundColor: {
                                                    xs: "white",
                                                    md: "#923EDA"
                                                },
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            3 Sharing Room
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Hostel Fee per Semester
                                            <br />
                                            [Accomodation + Mess + Laundry Charges]
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹1,12,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Hostel Fee per Year
                                            <br />
                                            [Accomodation + Mess + Laundry Charges]
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹2,24,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                // color: '#1C1C1C',
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Security Deposite (Refundable)
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Room Features
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            Attached Washroom, AC, high speed WiFi
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Applicable for
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            Boys and Girls
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            NOTE
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            Electricity to be charged on actuals
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>

                {/* Out Hostel Fee Notes */}
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
                            mb: 1,
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
                    <Box component="ol" sx={{ pl: 2, mt: 1, mb: 0 }}>
                        {[
                            "There will be a free transportation service provided to Vedam students in the morning and evening for traveling between hostel and university",
                            "Students need to pay 1 semester fee to book a bed",
                            "Hostel fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year.",
                            "Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment",
                            <>
                                You can find more details about your space Hostel for Vedam Students
                                <Link
                                    style={{
                                        color: "#000000",
                                        fontSize: "inherit",
                                        fontFamily: "Inter",
                                        lineHeight: "150%",
                                        marginLeft: "4px",
                                    }}
                                    href="https://drive.google.com/file/d/1EaLAx0kR71ALaqtlVPs4-UroJXlJIQAx/view?usp=sharing"
                                    target="_blank"
                                >
                                    here
                                </Link>
                                .
                            </>,
                            <>
                                Should you wish to book, please contact Vedam team at{" "}
                                <Link
                                    style={{
                                        color: "#000000",
                                        fontSize: "inherit",
                                        fontFamily: "Inter",
                                        lineHeight: "150%",
                                    }}
                                    href="mailto:connect@vedam.org"
                                >
                                    connect@vedam.org
                                </Link>
                                .
                            </>,
                        ].map((text, index) => (
                            <Box key={index} display="flex" alignItems="flex-start" mb={1}>
                                <Box
                                    sx={{
                                        minWidth: 24,
                                        height: 24,
                                        backgroundColor: "#7B2CBF",
                                        color: "#fff",
                                        fontSize: 12,
                                        fontWeight: 600,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: "2px",
                                        mr: 1.5,
                                        flexShrink: 0,
                                    }}
                                >
                                    {index + 1}
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: { xs: 12, sm: 14 },
                                        color: "#000",
                                        lineHeight: 1.6,
                                        fontFamily: "Inter",
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </>
        );
    } else {
        return (
            <>
                {/* In Campus Hostel Table */}
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
                    }}
                >
                    <Box
                        sx={{
                            padding: "10px",
                            borderRadius: "22px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                display: "block",
                                overflowX: 'auto',
                                borderRadius: "22px",
                                border: "1px solid rgba(186, 107, 255, 0.3)",
                            }}
                        >
                            <Table
                                sx={{
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderCollapse: "separate",
                                    borderSpacing: 0,
                                    borderRadius: "22px",
                                }}
                            >
                                <TableHead>
                                    <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                                        <TableCell
                                            sx={{
                                                // color: "#1C1C1C",
                                                color: {
                                                    xs: "#fff",
                                                    md: "#1C1C1C"
                                                },
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                                // backgroundColor: '#D6A6FF'
                                                backgroundColor: {
                                                    sx: '#A75EE7', md: '#D6A6FF'
                                                }
                                            }}
                                        >
                                            Room Type
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                // color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#667085",
                                                    md: "white"
                                                },
                                                backgroundColor: {
                                                    xs: "white",
                                                    md: "#923EDA"
                                                },
                                            }}
                                        >
                                            4 Sharing Room
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                // color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#667085",
                                                    md: "white"
                                                },
                                                backgroundColor: {
                                                    xs: "white",
                                                    md: "#923EDA"
                                                },
                                            }}
                                        >
                                            3 Sharing Room
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                // color: "white",
                                                textAlign: "left",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#667085",
                                                    md: "white"
                                                },
                                                backgroundColor: {
                                                    xs: "white",
                                                    md: "#923EDA"
                                                },
                                            }}
                                        >
                                            5 Sharing Room
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Accommodation Cost per Year
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹90,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹1,10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹1,50,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Mess Charges per Month
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹5,500/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹5,500/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹5,500/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Laundry Charges per Year
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹6,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹6,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹6,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Hostel Fee per Year
                                            <br />
                                            [Accomodation + Mess + Laundry Charges]
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹1,62,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹1,82,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹2,22,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Security Deposit (Refundable)
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Room Features
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            Common Washroom,
                                            Non AC
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            Common Washroom,
                                            Non AC
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            Attached Washroom, AC
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            Applicable for
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            Boys & Girls
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            Boys & Girls
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                color: '#667085'
                                            }}
                                        >
                                            Boys
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: {
                                                    xs: "#FFFFFF",
                                                    md: "#1C1C1C"
                                                },
                                                backgroundColor: {
                                                    xs: "#A75EE7",
                                                    md: "#FFFFFF"
                                                }
                                            }}
                                        >
                                            NOTE
                                        </TableCell>
                                        <TableCell colSpan={3}
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                color: '#667085'
                                            }}
                                        >
                                            Electricity to be charged on actuals
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>

                {/* In Campus Hostel Fee Notes */}
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
                            mb: 1,
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
                    <Box component="ol" sx={{ pl: 2, mt: 1, mb: 0 }}>
                        {[
                            "Students need to pay accommodation cost for the entire year to book a bed. Mess and laundry charges will have to be paid at the time of moving in",
                            "There are very few beds left in ADYPU hostel for girls, which are getting allocated on a first cum first basis",
                            "There are no more beds left in the ADYPU hostel for boys",
                            "Hostel accommodation fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year",
                            "Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment",
                            <>
                                Should you wish to book, please contact Vedam team at{" "}
                                <Link
                                    style={{
                                        color: "#000000",
                                        fontSize: "inherit",
                                        fontFamily: "Inter",
                                        lineHeight: "150%",
                                    }}
                                    href="mailto:connect@vedam.org"
                                >
                                    connect@vedam.org
                                </Link>{" "}
                                to check availability and proceed accordingly.
                            </>,
                        ].map((text, index) => (
                            <Box key={index} display="flex" alignItems="flex-start" mb={1}>
                                <Box
                                    sx={{
                                        minWidth: 24,
                                        height: 24,
                                        backgroundColor: "#7B2CBF",
                                        color: "#fff",
                                        fontSize: 12,
                                        fontWeight: 600,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: "2px",
                                        mr: 1.5,
                                        flexShrink: 0,
                                    }}
                                >
                                    {index + 1}
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: { xs: 12, sm: 14 },
                                        color: "#000",
                                        lineHeight: 1.6,
                                        fontFamily: "Inter",
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </>
        );
    }
};

export const HostelFees = () => {
    const [selectedHostelType, setSelectedHostelType] = useState("outCampus");

    return (
        <Box
            sx={{
                background: "rgba(255, 255, 255, 1)",
                borderRadius: "30px",
                padding: { xs: "20px 10px", md: "40px" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <HostelTypeToggle
                selectedHostelType={selectedHostelType}
                setSelectedHostelType={setSelectedHostelType}
            />
            <HostelContent selectedHostelType={selectedHostelType} />
        </Box>
    );
};