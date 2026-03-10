import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, Button, Divider, Icon, IconButton } from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  Google,
  LinkedIn,
  SchoolOutlined,
  Star,
  StarBorder,
} from "@mui/icons-material";

export default function InstructorCard({
  imageUrl,
  name,
  logo,
  designation,
  info,
  linkedIn,
  college,
  isGoogle,
  facultyType,
}) {
  return (
    <Box
      role="img"
      className="glass-light glass-hover-lift"
      sx={{
        minHeight: "375px",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.32)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(243, 232, 255, 0.2) 100%)",
        boxShadow: "0 14px 30px rgba(36, 19, 72, 0.12)",
      }}
    >
      {/* Instructor Image at the top */}
      <Box
        sx={{
          width: "100%",
          height: 180,
          position: "relative",
          borderRadius: "18px",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </Box>
      <Box
        className="glass"
        sx={{
          border: "2px solid transparent",
          borderRadius: "24px",
          opacity: 1,
          background:
            "linear-gradient(transparent, transparent) padding-box, " +
            "linear-gradient(to right, #FB7F05, #6C10BC) border-box",
          boxShadow: "0 10px 24px rgba(36, 19, 72, 0.14)",
          backgroundClip: "padding-box, border-box", // Ensures transparency inside
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            borderRadius: "24px",
            // border: '1px solid #C200DB',
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(243, 232, 255, 0.3) 100%)",
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Typography
              component="div"
              variant="body1"
              sx={{
                fontFamily: "Inter",
                color: "#1E1E1E",
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: -0.48,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Inter",
                color: "#363636",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: -0.28,
              }}
            >
              {designation}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "120%",
                  fontStyle: "normal",
                  letterSpacing: "-0.28px",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <Image
                  src={logo}
                  alt="profile icon"
                  width={1200}
                  height={1200}
                  style={{
                    objectFit: "contain",
                    width: isGoogle ? "20px" : "26px",
                    height: isGoogle ? "20px" : "26px",
                  }}
                />
                {info}
              </Typography>
              {/* <span style={{ color: "#A4A4A4" }}>|</span> */}
              <Button
                sx={{
                  width: "20px",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "100px",
                  p: "4px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  // mx: 2,
                  boxShadow: "0px 8px 16px rgba(36, 19, 72, 0.14)",
                }}
                onClick={() =>
                  window.open(linkedIn, "_blank", "noopener,noreferrer")
                }
              >
                {" "}
                <Image
                  src={"/img/instructors/linkedIn.svg"}
                  alt="profile icon"
                  width={1204}
                  height={1204}
                  style={{
                    objectFit: "contain",
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
              </Button>
            </Box>
            {/* <Typography sx={{ fontSize: 14, lineHeight: '120%', fontStyle: 'normal', letterSpacing: "-0.28px", alignItems: 'center', display: 'flex', gap: 1 }}><SchoolOutlined /> {college}</Typography> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
