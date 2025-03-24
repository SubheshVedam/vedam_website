"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "@/constants/data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isAuthLink = (label) => {
    return label.includes("Login") || label.includes("Register");
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: { xs: "auto", sm: "0px" },
      }}
    >
      <Box
        sx={{
          height: "0px",
          maxWidth: "1040px",
          width: "100%",
          position: { xs: "inherit", sm: "relative" },
          top: "20px",
          height: { xs: "auto", sm: "10px" },
        }}
      >
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "#FFFFFF",
            width: "100%", // 80% width for desktop, 100% for mobile
            paddingX: { xs: 0, sm: "20px" },
            borderRadius: { xs: 0, sm: "15px" },
            opacity: { xs: 1, sm: 0.7 },
            borderBottom: "1px solid #ccc",
            position: { xs: "static", sm: "absolute" }, // Fixed only for desktop (sm and up)
          }}
        >
          <Toolbar
            sx={{
              height: { xs: "40px", sm: "80px" },
              justifyContent: "space-between",
              padding: "0 !important",
              boxSizing: "border-box",
              gap: "2rem",
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
              {navLinks.slice(0, 5).map((link, index) => (
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
                      fontFamily: "Inter",
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
              <Box sx={{ display: "flex", gap: "1rem" }}>
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
                    fontFamily: "Inter",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                  target="_blank"
                  href={navLinks[navLinks.length - 2].path}
                >
                  {navLinks[navLinks.length - 2].label}
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
                    fontFamily: "Inter",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                  target="_blank"
                  href={navLinks[navLinks.length - 1].path}
                >
                  {navLinks[navLinks.length - 1].label}
                </Button>
              </Box>
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
                  button="true"
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
                  {isAuthLink(link.label) && (
                    <ListItemIcon sx={{ minWidth: "24px", marginLeft: "8px" }}>
                      <ArrowForwardIcon fontSize="small" />
                    </ListItemIcon>
                  )}
                </ListItem>
              ))}
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </Container>
  );
}
