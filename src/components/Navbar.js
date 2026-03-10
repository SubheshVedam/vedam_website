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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "@/constants/data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAuthLink = (label) => {
    return label.includes("Login") || label.includes("Register");
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const activeStyle = {
    color: "#2A135B",
    backgroundColor: "rgba(255, 255, 255, 0.44)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0 8px 18px rgba(42, 19, 91, 0.2)",
  };

  return (
    <Container
      sx={{
        position: "sticky",
        top: { xs: "52px", sm: "56px" },
        zIndex: 10800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        py: { xs: 0, sm: 0.75 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1040px",
          width: "100%",
          position: "relative",
        }}
      >
        <AppBar
          className="glass-strong"
          sx={{
            boxShadow: "0 14px 32px rgba(42, 19, 91, 0.24)",
            background:
              "linear-gradient(120deg, rgba(255, 255, 255, 0.35) 6%, rgba(255, 255, 255, 0.18) 66%, rgba(254, 229, 205, 0.2) 100%)",
            width: "100%",
            paddingX: { xs: "12px", sm: "20px" },
            borderRadius: { xs: "0px", sm: "22px" },
            borderBottom: "1px solid rgba(255,255,255,0.28)",
            position: "relative",
          }}
        >
          <Toolbar
            sx={{
              height: { xs: "56px", sm: "80px" },
              justifyContent: "space-between",
              padding: "0 !important",
              boxSizing: "border-box",
              gap: { xs: "0.5rem", sm: "2rem" },
            }}
          >
            {/* Logo */}
            <Image
              src="/img/vedam_logo.webp"
              alt="Navbar Logo"
              width={88}
              height={34}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                cursor: "pointer",
                width: "clamp(72px, 16vw, 96px)",
                height: "auto",
              }}
              onClick={() => router.push("/home")}
            />

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: { sm: "22px", md: "30px", lg: "40px" },
                alignItems: "center",
              }}
            >
              {navLinks.slice(0, 4).map((link, index) => (
                <Link key={index} href={link.path} passHref>
                  <Button
                    color="inherit"
                    sx={{
                      color: "#1E1737",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "-2%",
                      textTransform: "none",
                      transition:
                        "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), color 240ms cubic-bezier(0.22, 1, 0.36, 1), background-color 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                      fontFamily: "Inter",
                      zIndex: 1,
                      borderRadius: "12px",
                      border: "1px solid transparent",
                      px: "12px",
                      "&:hover": {
                        ...activeStyle,
                        transform: "translateY(-2px)",
                      },
                      ...(isActive(link.path) && activeStyle),
                    }}
                  >
                    {link.label}
                    {link.img && (
                      <Box
                        sx={{
                          display: { xs: "none", lg: "block" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "0.58rem",
                            fontStyle: "italic",
                            fontWeight: 600,
                            lineHeight: "1.75rem",
                            background:
                              "linear-gradient(90deg, #FF7829 0%, #7B2CBF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                            position: "absolute",
                            top: "-38%",
                            right: "13%",
                            zIndex: 4,
                          }}
                        >
                          New
                        </Typography>
                        <Image
                          src={link.img}
                          alt=""
                          width={25}
                          height={35}
                          style={{
                            zIndex: 2,
                            position: "absolute",
                            right: -1,
                            top: "49%",
                            transform: "translateY(-50%)",
                          }}
                        />
                      </Box>
                    )}
                  </Button>
                </Link>
              ))}
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button
                  color="inherit"
                  className="glass"
                  sx={{
                    color: "#2A135B",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    transition:
                      "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), color 240ms cubic-bezier(0.22, 1, 0.36, 1), background-color 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                    backgroundColor: "rgba(255,255,255,0.22)",
                    paddingX: "18px",
                    paddingY: "10px",
                    borderRadius: "12px",
                    fontFamily: "Inter",
                    border: "1px solid rgba(255,255,255,0.34)",
                    "&:hover": {
                      ...activeStyle,
                      transform: "translateY(-2px)",
                    },
                    ...(isActive(navLinks[navLinks.length - 2].path) && {
                      ...activeStyle,
                      backgroundColor: "rgba(255,255,255,0.45)",
                    }),
                  }}
                  target="_blank"
                  href={navLinks[navLinks.length - 2].path}
                >
                  {navLinks[navLinks.length - 2].label}
                </Button>

                <Button
                  color="inherit"
                  className="liquid-cta"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    transition:
                      "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), filter 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                    paddingX: "20px",
                    paddingY: "10px",
                    borderRadius: "12px",
                    fontFamily: "Inter",
                    background:
                      "linear-gradient(124deg, #6C10BC 0%, #2F1B50 44%, #FB7F05 100%)",
                    "&:hover": {
                      color: "#fff",
                      filter: "brightness(1.05)",
                    },
                    ...(isActive(navLinks[navLinks.length - 1].path) && {
                      filter: "saturate(1.15)",
                    }),
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
              className="glass-icon-button"
              sx={{
                display: { xs: "inline-flex", sm: "none" },
                color: "#2A135B",
                p: "9px",
                borderRadius: "12px",
              }}
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          {/* Drawer for Mobile Navigation */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              zIndex: 11111,
              "& .MuiBackdrop-root": {
                backgroundColor: "rgba(19, 10, 42, 0.34)",
                backdropFilter: "blur(5px)",
              },
            }}
          >
            <List sx={{ width: "270px", px: 1, py: 2 }}>
              {navLinks.map((link, index) => (
                <ListItem
                  button="true"
                  key={index}
                  component={Link}
                  href={link.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: "12px",
                    mb: 0.8,
                    color: "#F7EEFF",
                    border: "1px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                    },
                    ...(isActive(link.path) && {
                      color: "#FFE7C7",
                      borderColor: "rgba(255,255,255,0.3)",
                      backgroundColor: "rgba(255,255,255,0.16)",
                    }),
                  }}
                >
                  <ListItemText
                    sx={{
                      color: "inherit",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "-2%",
                      textTransform: "none",
                      transition: "all 0.3s ease-in-out",
                      "& .MuiTypography-root": {
                        fontWeight: 600,
                      },
                    }}
                    primary={link.label}
                  />
                  {isAuthLink(link.label) && (
                    <ListItemIcon sx={{ minWidth: "24px", marginLeft: "8px" }}>
                      <ArrowForwardIcon fontSize="small" sx={{ color: "inherit" }} />
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
