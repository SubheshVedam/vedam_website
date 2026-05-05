"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Collapse,
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { navLinks } from "@/constants/data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [campusMenuAnchor, setCampusMenuAnchor] = React.useState(null);
  const [mobileCampusOpen, setMobileCampusOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAuthLink = (label) => {
    return label.includes("Login") || label.includes("Register");
  };

  const isPathMatch = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/home";
    }
    if (path.startsWith("/admission")) {
      return pathname.startsWith("/admission");
    }
    return isPathMatch(path);
  };

  const isCampusLinkActive = (link) => {
    return link.children?.some((campus) => isPathMatch(campus.path)) ?? false;
  };

  const getAdmissionDisplayLabel = (link) => {
    if (!link.children?.length) {
      return link.label;
    }

    const activeCampus = link.children.find((campus) => isPathMatch(campus.path));

    return activeCampus?.label || link.label;
  };

  const handleCampusMenuOpen = (event) => {
    setCampusMenuAnchor(event.currentTarget);
  };

  const handleCampusMenuClose = () => {
    setCampusMenuAnchor(null);
  };

  React.useEffect(() => {
    const hasActiveCampusLink = navLinks.some((link) => isCampusLinkActive(link));

    setMobileCampusOpen(hasActiveCampusLink);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle = {
    background: "linear-gradient(90deg, #6C10BC 0%, #FB7F05 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Container
      maxWidth={isScrolled ? false : "lg"}
      disableGutters={isScrolled}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: { xs: "auto", sm: isScrolled ? "76px" : "0px" },
        transition: "height 260ms ease, background-color 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
        ...(isScrolled && {
          position: { xs: "static", sm: "sticky" },
          top: { sm: "44px" },
          zIndex: { sm: 10990 },
          backgroundColor: { sm: "#FFFFFF" },
          borderBottom: { sm: "2px solid #1B73E8" },
          boxShadow: { sm: "0 1px 0 rgba(17, 24, 39, 0.08)" },
        }),
      }}
    >
      <Box
        sx={{
          minWidth: { md: isScrolled ? 0 : "1024px" },
          width: "100%",
          position: { xs: "inherit", sm: "relative" },
          top: { sm: isScrolled ? 0 : "20px" },
          height: { xs: "auto", sm: isScrolled ? "76px" : "10px" },
          transition: "height 260ms ease, top 260ms ease, padding 260ms ease, width 260ms ease",
          ...(isScrolled && {
            width: { sm: "100%", md: "1024px", xl: "1280px" },
          }),
        }}
      >
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "#FFFFFF",
            width: "100%",
            paddingX: { xs: 0, sm: "20px" },
            borderRadius: { xs: 0, sm: isScrolled ? 0 : "15px" },
            opacity: { xs: 1, sm: isScrolled ? 1 : 0.7 },
            borderBottom: isScrolled ? "none" : "1px solid #ccc",
            position: { xs: "static", sm: "absolute" },
            transition: "opacity 260ms ease, padding 260ms ease, border-radius 260ms ease, border-color 260ms ease, inset 260ms ease",
            ...(isScrolled && { inset: { sm: 0 } }),
          }}
        >
          <Toolbar
            sx={{
              height: { xs: "40px", sm: isScrolled ? "76px" : "80px" },
              justifyContent: "space-between",
              padding: "0 !important",
              boxSizing: "border-box",
              gap: { sm: isScrolled ? "2.25rem" : "2rem" },
              transition: "height 260ms ease, gap 260ms ease",
            }}
          >
            {/* Logo */}
            <Link href="/" aria-label="Go to Vedam School of Technology home">
              <Image
                src="/img/vedam_logo.webp"
                alt="Vedam School of Technology logo"
                width={88}
                height={34}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  cursor: "pointer",
                  width: "88px",
                  height: "auto",
                }}
                sx={{
                  width: { xs: "51px", sm: "88px" },
                  height: { xs: "20px", sm: "34px" },
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: isScrolled ? "28px" : "30px",
                alignItems: "center",
                transition: "gap 260ms ease",
              }}
            >
              {navLinks.slice(0, 6).map((link, index) => {
                if (link.children?.length) {
                  const admissionDisplayLabel = getAdmissionDisplayLabel(link);

                  return (
                    <React.Fragment key={index}>
                      <Button
                        color="inherit"
                        id="admission-campus-menu-trigger"
                        onClick={handleCampusMenuOpen}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          color: "#1F1F1F",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "120%",
                          letterSpacing: "-5%",
                          textTransform: "none",
                          transition: "color 220ms ease",
                          fontFamily: "Inter",
                          zIndex: "1",
                          "&:hover": activeStyle,
                          ...(isCampusLinkActive(link) && activeStyle),
                        }}
                      >
                        {admissionDisplayLabel}
                      </Button>
                      <Menu
                        anchorEl={campusMenuAnchor}
                        open={Boolean(campusMenuAnchor)}
                        onClose={handleCampusMenuClose}
                        MenuListProps={{
                          "aria-labelledby": "admission-campus-menu-trigger",
                          sx: {
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "1fr",
                              sm: "repeat(2, minmax(220px, 1fr))",
                            },
                            gap: 1.25,
                            padding: "12px",
                            width: { xs: "280px", sm: "520px" },
                          },
                        }}
                        PaperProps={{
                          sx: {
                            mt: "8px",
                            borderRadius: "14px",
                            border: "1px solid rgba(17, 24, 39, 0.08)",
                            boxShadow: "0 14px 32px rgba(17, 24, 39, 0.14)",
                          },
                        }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {link.children.map((campus) => (
                          <MenuItem
                            key={campus.path}
                            component={Link}
                            href={campus.path}
                            onClick={handleCampusMenuClose}
                            selected={isPathMatch(campus.path)}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "10px",
                              minHeight: "auto",
                              borderRadius: "10px",
                              padding: "8px",
                              transition: "transform 180ms ease, background-color 180ms ease",
                              "&:hover": {
                                backgroundColor: "rgba(108, 16, 188, 0.08)",
                                transform: "translateY(-2px)",
                              },
                              "&.Mui-selected": {
                                backgroundColor: "rgba(108, 16, 188, 0.1)",
                              },
                              "&.Mui-selected:hover": {
                                backgroundColor: "rgba(108, 16, 188, 0.14)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                height: "106px",
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "8px",
                                backgroundColor: "rgba(17, 24, 39, 0.08)",
                              }}
                            >
                              {campus.image && (
                                <Image
                                  src={campus.image}
                                  alt={`${campus.label} campus`}
                                  fill
                                  sizes="(max-width: 600px) 260px, 240px"
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              )}
                            </Box>
                            <Typography
                              sx={{
                                fontFamily: "Inter",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "120%",
                                color: "#111827",
                              }}
                            >
                              {campus.label}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Inter",
                                fontSize: "13px",
                                fontWeight: 400,
                                lineHeight: "120%",
                                color: "rgba(17, 24, 39, 0.7)",
                              }}
                            >
                              {campus.collaborationUniversity || campus.location}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  );
                }

                return (
                  <Link key={index} href={link.path} passHref>
                    <Button
                      color="inherit"
                      sx={{
                        color: "#1F1F1F",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "120%",
                        letterSpacing: "-2%",
                        textTransform: "none",
                        transition: "color 220ms ease",
                        fontFamily: "Inter",
                        zIndex: "1",
                        "&:hover": activeStyle,
                        ...(isActive(link.path) && activeStyle),
                      }}
                    >
                      {link.label}
                      {link.img && (
                        // After
                        <Box
                          sx={{
                            display: "none",
                            "@media (min-width: 1024px)": {
                              display: "block",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Inter",
                              fontSize: "0.5rem",
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
                              top: "-42%",
                              right: "13%",
                              zIndex: " 4",
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
                              zIndex: "2",
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
                );
              })}
              <Box sx={{ display: "flex", gap: isScrolled ? "2rem" : "1rem", alignItems: "center", transition: "gap 260ms ease" }}>
                {/* Second-to-last link — plain style, no target="_blank" */}
                <Button
                  color="inherit"
                  sx={{
                    color: "#1F1F1F",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "color 220ms ease",
                    fontFamily: "Inter",
                    "&:hover": activeStyle,
                    ...(isActive(navLinks[navLinks.length - 2].path) && activeStyle),
                  }}
                  href={navLinks[navLinks.length - 2].path}
                  component={Link}
                >
                  {navLinks[navLinks.length - 2].label}
                </Button>

                {/* Last link — purple background + opens in new tab */}
                <Button
                  color="inherit"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "-2%",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "padding 260ms ease, border-radius 260ms ease, background-color 220ms ease, color 220ms ease",
                    backgroundColor: "#6C10BC",
                    paddingX: isScrolled ? "28px" : "20px",
                    paddingY: isScrolled ? "16px" : "10px",
                    borderRadius: isScrolled ? "10px" : "8px",
                    fontFamily: "Inter",
                    "&:hover": activeStyle,
                    ...(isActive(navLinks[navLinks.length - 1].path) && {
                      ...activeStyle,
                      backgroundColor: "transparent",
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
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          {/* Drawer for Mobile Navigation */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ zIndex: 11111 }}
          >
            <List sx={{ width: "250px" }}>
              {navLinks.map((link, index) => {
                if (link.children?.length) {
                  const admissionDisplayLabel = getAdmissionDisplayLabel(link);

                  return (
                    <React.Fragment key={`${link.label}-${index}`}>
                      <ListItem
                        button="true"
                        onClick={() => setMobileCampusOpen((prev) => !prev)}
                        sx={{
                          backgroundColor: "rgba(108, 16, 188, 0.08)",
                          cursor: "pointer",
                        }}
                      >
                        <ListItemText
                          sx={{
                            color: "#1F1F1F",
                            fontWeight: 700,
                          }}
                          primary={admissionDisplayLabel}
                        />
                        <ArrowDropDownIcon
                          sx={{
                            color: "#1F1F1F",
                            transform: mobileCampusOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 200ms ease",
                          }}
                        />
                      </ListItem>
                      <Collapse in={mobileCampusOpen} timeout="auto" unmountOnExit>
                        {link.children.map((campus) => (
                          <ListItem
                            key={campus.path}
                            button="true"
                            component={Link}
                            href={campus.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              pl: 4,
                              ...(isPathMatch(campus.path) && activeStyle),
                            }}
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
                                "&:hover": activeStyle,
                                ...(isPathMatch(campus.path) && activeStyle),
                              }}
                              primary={campus.label}
                            />
                          </ListItem>
                        ))}
                      </Collapse>
                    </React.Fragment>
                  );
                }

                return (
                  <ListItem
                    button="true"
                    key={index}
                    component={Link}
                    href={link.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      ...(isActive(link.path) && activeStyle),
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#1F1F1F",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "130%",
                        letterSpacing: "-2%",
                        textTransform: "none",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": activeStyle,
                        ...(isActive(link.path) && activeStyle),
                      }}
                      primaryTypographyProps={{
                        lineHeight: 1.35,
                      }}
                      primary={link.label}
                    />
                    {isAuthLink(link.label) && (
                      <ListItemIcon sx={{ minWidth: "24px", marginLeft: "8px" }}>
                        <ArrowForwardIcon fontSize="small" />
                      </ListItemIcon>
                    )}
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </Container>
  );
}
