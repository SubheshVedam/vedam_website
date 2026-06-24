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
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { navLinks } from "@/constants/data";
import { TELEGRAM_COMMUNITY_URL } from "@/constants/links";
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

  const handleCampusMenuToggle = (event) => {
    setCampusMenuAnchor((currentAnchor) =>
      currentAnchor ? null : event.currentTarget
    );
  };

  const handleCampusMenuClose = () => {
    setCampusMenuAnchor(null);
  };

  React.useEffect(() => {
    const hasActiveCampusLink = navLinks.some((link) => isCampusLinkActive(link));
    setMobileCampusOpen(hasActiveCampusLink);
  }, [pathname]);

  // ── ONLY CHANGE: trigger at 600px instead of scrollY > 0 ──────────────────
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 600);
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
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: { xs: "auto", sm: isScrolled ? "76px" : "0px" },
        transition: "height 260ms ease, background-color 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
        position: { xs: "static", sm: "sticky" },
        top: { sm: "39px" },
        zIndex: { sm: 10990 },
        backgroundColor: { sm: isScrolled ? "0 1px 0 rgba(17, 24, 39, 0.08)" : "transparent" },
        boxShadow: { sm: isScrolled ? "0 1px 0 rgba(17, 24, 39, 0.08)" : "none" },
      }}
    >
      <Box
        sx={{
          minWidth: { md: "1024px" },
          width: "100%",
          maxWidth: { sm: isScrolled ? "100%" : "1200px" },
          position: { xs: "inherit", sm: "relative" },
          top: { sm: isScrolled ? 0 : "20px" },
          height: { xs: "auto", sm: isScrolled ? "76px" : "10px" },
          transition: "height 260ms ease, top 260ms ease, max-width 360ms ease",
        }}
      >
        <AppBar
          sx={{
            boxShadow: "none",
            width: "100%",
            borderRadius: { xs: 0, sm: isScrolled ? 0 : "15px" },
            borderBottom: isScrolled ? "none" : "1px solid #ccc",
            position: { xs: "static", sm: "absolute" },
            transition: "opacity 260ms ease, padding 260ms ease, border-radius 260ms ease, border-color 260ms ease, inset 260ms ease, background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease",

            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.70)"
              : "rgba(255, 255, 255, 0.70)",
            backdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
            WebkitBackdropFilter: isScrolled ? "blur(10px)" : "blur(10px)",
            borderBottom: isScrolled
              ? "1px solid rgba(255, 255, 255, 1)"
              : "1px solid #ccc",
            boxShadow: isScrolled
              ? "0px 4px 24px 0px rgba(0, 0, 0, 0.10)"
              : "none",
            opacity: { xs: 1, sm: isScrolled ? 1 : 1 },
            ...(isScrolled && { inset: { sm: 0 } }),
          }}
        >
          <Toolbar
            sx={{
              height: { xs: "40px", sm: isScrolled ? "76px" : "80px" },
              padding: "0 !important",
              boxSizing: "border-box",
              transition: "height 260ms ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                maxWidth: { sm: "1200px" },
                mx: "auto",
                justifyContent: "space-between",
                alignItems: "center",
                gap: { sm: "28px" },
                px: { xs: 0, sm: "44px" },
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
                  gap: "30px",
                  alignItems: "center",
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
                          onClick={handleCampusMenuToggle}
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
                          sx={{ zIndex: 12000 }}
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
                          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                          transformOrigin={{ vertical: "top", horizontal: "left" }}
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
                                    style={{ objectFit: "cover" }}
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
                          <Box
                            sx={{
                              display: "none",
                              "@media (min-width: 1024px)": { display: "block" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Inter",
                                fontSize: "0.5rem",
                                fontStyle: "italic",
                                fontWeight: 600,
                                lineHeight: "1.75rem",
                                background: "linear-gradient(90deg, #FF7829 0%, #7B2CBF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                                position: "absolute",
                                top: "-42%",
                                right: "13%",
                                zIndex: "4",
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

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
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
                      transition: "background-color 220ms ease, color 220ms ease",
                      backgroundColor: "#6C10BC",
                      paddingX: "20px",
                      paddingY: "10px",
                      borderRadius: "8px",
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

              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  alignItems: "center",
                  gap: "6px",
                  pr: "6px",
                }}
              >
                <Button
                  component="a"
                  href={TELEGRAM_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Vedam on Telegram"
                  startIcon={<TelegramIcon sx={{ fontSize: "18px" }} />}
                  sx={{
                    minWidth: "auto",
                    px: "9px",
                    py: "5px",
                    color: "#229ED9",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(34, 158, 217, 0.24)",
                    borderRadius: "8px",
                    boxShadow: "0 6px 16px rgba(17, 24, 39, 0.08)",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: 0,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    "& .MuiButton-startIcon": {
                      mr: "4px",
                      ml: 0,
                    },
                    "&:hover": {
                      bgcolor: "#F4FBFF",
                      borderColor: "rgba(34, 158, 217, 0.42)",
                    },
                  }}
                >
                  Join Telegram
                </Button>

                {/* Mobile Menu Button */}
                <IconButton
                  aria-label="Open navigation menu"
                  sx={{ p: "8px" }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>{/* end inner content wrapper */}
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
                          sx={{ color: "#1F1F1F", fontWeight: 700 }}
                          primary={admissionDisplayLabel}
                        />
                        <ArrowDropDownIcon
                          sx={{
                            color: "#1F1F1F",
                            transform: mobileCampusOpen ? "rotate(180deg)" : "rotate(0deg)",
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
                            sx={{ pl: 4, ...(isPathMatch(campus.path) && activeStyle) }}
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
                    sx={{ ...(isActive(link.path) && activeStyle) }}
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
                      primaryTypographyProps={{ lineHeight: 1.35 }}
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
