'use client'
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ToggleButton = ({ selectedPartner, setSelectedPartner }) => {
    return (
        <Box display="flex" justifyContent="center" mb={3} px={{ xs: 2, sm: 0 }}>
            <Box
                sx={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: { xs: 3, sm: 4.4 },
                    padding: { xs: "0.4rem", sm: "0.5rem" },
                    display: "flex",
                    justifyContent: 'flex-start',
                    position: "relative",
                    width: "21rem",
                    maxWidth: "21rem",
                    height: { xs: "3.5rem", sm: "4.1rem" },
                    mx: "auto",
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.03)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid #E5E2E2",
                }}
            >
                {/* Sliding Highlight */}
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "0.4rem", sm: "0.485rem" },
                        left:
                            selectedPartner === "propelld"
                                ? { xs: "0.6rem", sm: "0.8rem" }
                                : { xs: "calc(50% + 0.2rem)", sm: "calc(50% + 0.3rem)" },
                        width: { xs: "calc(50% - 0.6rem)", sm: "calc(50% - 0.8rem)" },
                        height: { xs: "calc(100% - 0.8rem)", sm: "calc(100% - 1rem)" },
                        background: "#6513AC",
                        borderRadius: { xs: 2, sm: 2.7 },
                        transition: "left 0.4s ease",
                        zIndex: 1,
                    }}
                />
                {["propelld", "jodo"].map((type) => (
                    <Box
                        key={type}
                        onClick={() => setSelectedPartner(type)}
                        sx={{
                            flex: 1,
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: selectedPartner === type ? "#fff" : "#6513AC",
                            fontWeight: 600,
                            fontFamily: "Inter",
                            height: "100%",
                            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                            px: { xs: 1, sm: 0 },
                            textAlign: "center",
                            whiteSpace: { xs: "nowrap", sm: "normal" },
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                    >
                        {type === "propelld" ? "Propelld" : "Jodo Cred Plan"}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const FinancingTable = ({ data }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                width: "100%"
            }}
        >
            {data.map((row, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        borderBottom: index !== data.length - 1 ? "1px solid #E5E5E5" : "none",
                    }}
                >
                    <Box
                        sx={{
                            flex: { xs: "0 0 50%", md: 1 },
                            padding: { xs: "1rem 0.8rem", sm: "1.2rem 1.5rem" },
                            backgroundColor: index === 0 ? "rgba(0, 207, 229, 0.10)" : "#fff",
                            borderRight: "1px solid #E5E5E5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "flex-start", md: "center" }

                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: index === 0 ? 600 : 400,
                                fontSize: { xs: "0.8rem", sm: "0.95rem" },
                                color: "#1E1E1E",
                                lineHeight: 1.4,
                                textAlign: { xs: "left", md: "center" },
                                fontFamily: "Inter",
                            }}
                        >
                            {row.label}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: { xs: "0 0 50%", md: 1 },
                            padding: { xs: "1rem 0.8rem", sm: "1.2rem 1.5rem" },
                            backgroundColor: index === 0 ? "rgba(0, 207, 229, 0.10)" : "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "flex-start", md: "center" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: index === 0 ? 600 : 400,
                                fontSize: { xs: "0.8rem", sm: "0.95rem" },
                                color: "#333",
                                lineHeight: 1.4,
                                textAlign: { xs: "left", md: "center" },
                                fontFamily: "Inter",
                            }}
                        >
                            {row.value}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export const FinancingPartners = () => {
    const [selectedPartner, setSelectedPartner] = useState("propelld");

    const propelldData = [
        { label: "Loan Type", value: "Normal (Unsecured)" },
        { label: "Interest Rate (%)", value: "13.5%-14%" },
        { label: "Max Loan Amount", value: "Upto 100% of total fees" },
        {
            label: "Margin (College fee portion to be borne by the applicant)",
            value: "Nil",
        },
        { label: "Tenure", value: "10 years" },
        { label: "Processing Charges", value: "1% (incl GST)" },
        { label: "Tax benefits under section 80E", value: "Available" },
    ];

    const jodoData = [
        { label: "Loan Type", value: "Normal (Unsecured)" },
        { label: "Interest Rate (%)", value: "0%" },
        { label: "Max Loan Amount", value: "Upto 100% of total fees" },
        { label: "Tenure", value: "11 months" },
        { label: "Processing Charges", value: "1% (incl GST)" },
        { label: "Downpayment", value: "1st EMI" },
        { label: "Remaining EMIs", value: "10 EMI" },
    ];

    const currentData = selectedPartner === "propelld" ? propelldData : jodoData;

    return (

        <Box sx={{ width: "100%" }}>
            <Typography
                variant="h4"
                sx={{
                    background: "linear-gradient(135deg, #2B135C 0%, #6F17D1 25%, #8A18FF 45%, #8E17FF 50%, #922CCD 65%, #F97D03 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                    display: "inline-block",
                    mb: '20px',
                }}
            >
                Financing Partners
            </Typography>


            <ToggleButton
                selectedPartner={selectedPartner}
                setSelectedPartner={setSelectedPartner}
            />

            <FinancingTable data={currentData} />
        </Box>
    );
};

export default FinancingPartners;