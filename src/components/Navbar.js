"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "@/constants/data";

// Navigation Links Array

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100vw", // Ensure AppBar spans the full viewport width
          maxWidth: "100%", // Prevent overflow
          overflowX: "hidden", // Hide horizontal overflow
          paddingX: "1rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Toolbar
          sx={{
            height: { xs: "40px", sm: "80px" },
            justifyContent: "space-between",
            padding: 0,
            boxSizing: "border-box", // Include padding in width calculation
          }}
        >
          {/* Logo */}
          <Image
            src="/img/vedam_logo.webp"
            alt="Navbar Logo"
            width={88}
            height={34}
            style={{ objectFit: "contain", maxWidth: "100%" }}
            sx={{
              width: { xs: "51px", sm: "88px" },
              height: { xs: "20px", sm: "34px" },
            }}
          />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "32px",
              alignItems: "center",
            }}
          >
            {navLinks.slice(0, 4).map((link, index) => (
              <Link key={index} href={link.path} passHref>
                <Button
                  color="inherit"
                  sx={{
                    color: "#1F1F1F",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    fontFamily: "Inter, sans-serif",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Button
              color="inherit"
              sx={{
                color: "#6C10BC",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                backgroundColor: "rgba(108, 16, 188, 0.1)",
                paddingX: "20px",
                paddingY: "10px",
                borderRadius: "8px",
                fontFamily: "Inter, sans-serif",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              {"Login"}
            </Button>

            <Button
              color="inherit"
              sx={{
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                backgroundColor: "#6C10BC",
                paddingX: "20px",
                paddingY: "10px",
                borderRadius: "8px",
                fontFamily: "Inter, sans-serif",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              {"Register Now"}
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List sx={{ width: "250px" }}>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                href={link.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText
                  sx={{
                    color: "#1F1F1F",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                  primary={link.label}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}
