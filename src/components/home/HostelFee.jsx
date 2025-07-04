"use client";
import React, { useState } from "react";
import { Box, Typography, Link, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export const HostelTypeToggle = ({ selectedHostelType, setSelectedHostelType }) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 3,
                mb: 2,
                alignItems: "center",
                justifyContent: "center",
                pt: 2,
            }}
        >
            <Box
                onClick={() => setSelectedHostelType("outCampus")}
                sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    color: "#6513AC",
                    cursor: "pointer",
                    textDecoration: selectedHostelType === "outCampus" ? "underline" : "none",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px",
                    "&:hover": {
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "4px",
                    },
                }}
            >
                Out of Campus
            </Box>
            <Box
                onClick={() => setSelectedHostelType("inCampus")}
                sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    color: "#6513AC",
                    cursor: "pointer",
                    textDecoration: selectedHostelType === "inCampus" ? "underline" : "none",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px",
                    "&:hover": {
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "4px",
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
                                    backgroundColor: "rgba(186, 107, 255, 0.08)",
                                    borderCollapse: "separate",
                                    borderSpacing: 0,
                                    borderRadius: "22px",
                                }}
                            >
                                <TableHead>
                                    <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                                        <TableCell
                                            sx={{
                                                color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Room Type
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "white",
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
                                            }}
                                        >
                                            Hostel Fee per Semester
                                            <br />
                                            [Accomodation + Mess + Laundry Charges]
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Hostel Fee per Year
                                            <br />
                                            [Accomodation + Mess + Laundry Charges]
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                            }}
                                        >
                                            ₹2,24,000/-
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                color: '#1C1C1C',
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Security Deposite (Refundable)
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                collor: '667085'
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
                                            }}
                                        >
                                            Room Features
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Applicable for
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            NOTE
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
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
                            }}
                        >
                            Students need to pay 1 semester fee to book a bed
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            Hostel fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year.
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
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
                            }}
                        >
                            You can find more details about your space Hostel for Vedam Students here
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
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                            }}
                        >
                            Should you wish to book, please contact Vedam team at connect@vedam.org{" "}
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
                        </Typography>
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
                                    backgroundColor: "rgba(186, 107, 255, 0.08)",
                                    borderCollapse: "separate",
                                    borderSpacing: 0,
                                    borderRadius: "22px",
                                }}
                            >
                                <TableHead>
                                    <TableRow sx={{ background: "rgba(146, 62, 218, 1)" }}>
                                        <TableCell
                                            sx={{
                                                color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Room Type
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            4 Sharing Room
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "white",
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            3 Sharing Room
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "white",
                                                textAlign: "left",
                                                borderBottom: "1px solid rgba(186, 107, 255, 0.3)",
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
                                            }}
                                        >
                                            Accommodation Cost per Year
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹1,62,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹1,82,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Mess Charges per Month
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Laundry Charges per Year
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Security Deposit (Refundable)
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹10,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            ₹20,000/-
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            Room Features
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Attached Washroom, AC, WiFi
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Attached Washroom, AC, WiFi
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                            }}
                                        >
                                            Attached Washroom, AC, WiFi
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Applicable for
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Boys and Girls
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Boys and Girls
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
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
                                            }}
                                        >
                                            NOTE
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Electricity extra
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                                borderRight: "1px solid rgba(186, 107, 255, 0.3)",
                                            }}
                                        >
                                            Electricity extra
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: "left",
                                            }}
                                        >
                                            Electricity extra
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
                    <Box component="ol" sx={{ pl: 2, mt: 1, mb: 0, listStyleType: 'decimal' }}>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            Students need to pay accommodation cost for the entire year to book a bed. Mess and laundry charges will have to be paid at the time of moving in
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            There are very few beds left in ADYPU hostel for girls, which are getting allocated on a first cum first basis
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            There are no more beds left in the ADYPU hostel for boys
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            Hostel accommodation fee is non refundable. Students will be charged for the entire year, even if one plans to vacate mid-year
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            Fee are applicable for the academic year 2025 - 26 and may increase by 7 - 10% annually from the second year onwards due to inflation adjustment
                        </Typography>
                        <Typography
                            component="li"
                            variant="subtitle1"
                            sx={{
                                fontSize: { xs: 12, sm: 14 },
                                color: "#374151",
                                lineHeight: 1.6,
                            }}
                        >
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
                            to check availability and proceed accordingly
                        </Typography>
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