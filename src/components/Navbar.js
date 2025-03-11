"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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

// Navigation Links Array
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Admission & Fees", path: "/about" },
  { label: "Life @ Vedam", path: "/services" },
  { label: "FAQs", path: "/contact" },
  { label: "Login", path: "/login" },
  { label: "Register Now", path: "/register" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar
        sx={{
          width: { xs: "320px", sm: "1280px" },
          height: { xs: "40px", sm: "80px" },
          borderBottom: "1px solid #ccc",
          justifyContent: "space-between",
          padding: { xs: "8px 20px", sm: "0px 120px" },
        }}>
        {/* Logo */}
        <Image
          src="/img/Navbar Logo.png"
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
          }}>
          {navLinks.map((link, index) => (
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
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}>
                {link.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              href={link.path}
              onClick={handleDrawerToggle}>
              <ListItemText
                sx={{
                  color: "#1F1F1F",
                  fontFamily: "var(--font-inter)",
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
  );
}
