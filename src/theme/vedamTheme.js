import { alpha, createTheme } from "@mui/material/styles";

const brand = {
  purple: "#6C10BC",
  purpleDark: "#2A135B",
  purpleDeep: "#2F1B50",
  orange: "#FB7F05",
  orangeAccent: "#FFA41A",
  cream: "#FEE5CD",
};

const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
const transition = `all 240ms ${easing}`;
const focusRing = `0 0 0 2px ${alpha(brand.orangeAccent, 0.72)}`;

const withBackdropFilter = (blur = "var(--glass-blur)") => ({
  backdropFilter: `saturate(195%) blur(${blur})`,
  WebkitBackdropFilter: `saturate(195%) blur(${blur})`,
  "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))":
    {
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      backgroundColor: alpha("#FFFFFF", 0.92),
    },
});

const primaryGradient = `linear-gradient(120deg, ${brand.purple} 8%, ${brand.purpleDeep} 46%, ${brand.orange} 100%)`;
const orangeGradient = `linear-gradient(120deg, ${brand.orange} 6%, ${brand.orangeAccent} 62%, #FFD095 100%)`;

const vedamTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.purple,
      dark: brand.purpleDark,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: brand.orange,
      dark: "#E26C00",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F4EEF9",
      paper: alpha("#FFFFFF", 0.22),
    },
    text: {
      primary: "#151025",
      secondary: "#3B3058",
    },
    warning: {
      main: brand.orangeAccent,
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 650,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          colorScheme: "light",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--glass-bg-strong)",
          border: "1px solid var(--glass-border-strong)",
          boxShadow: "0 10px 34px rgba(36, 19, 72, 0.18)",
          ...withBackdropFilter(),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid var(--glass-border)",
          backgroundColor: "var(--glass-bg)",
          boxShadow: "0 12px 30px rgba(33, 17, 69, 0.13)",
          ...withBackdropFilter(),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid var(--glass-border)",
          backgroundColor: "var(--glass-bg)",
          boxShadow: "0 14px 36px rgba(36, 19, 72, 0.14)",
          transition,
          ...withBackdropFilter(),
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 18px 42px rgba(36, 19, 72, 0.18)",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          transition,
          textTransform: "none",
          "&:hover": {
            transform: "translateY(-2px) scale(1.02)",
          },
          "&.Mui-focusVisible": {
            boxShadow: focusRing,
          },
          "&:focus-visible": {
            boxShadow: focusRing,
          },
        },
        containedPrimary: {
          background: primaryGradient,
          color: "#FFFFFF",
          border: "1px solid rgba(255,255,255,0.24)",
          boxShadow: "0 12px 28px rgba(61, 23, 114, 0.28)",
          "&:hover": {
            background: primaryGradient,
            boxShadow: "0 16px 30px rgba(61, 23, 114, 0.34)",
          },
        },
        containedSecondary: {
          background: orangeGradient,
          color: "#1D102D",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 12px 26px rgba(251, 127, 5, 0.26)",
          "&:hover": {
            background: orangeGradient,
            boxShadow: "0 14px 30px rgba(251, 127, 5, 0.3)",
          },
        },
        outlined: {
          borderColor: alpha(brand.purple, 0.34),
          color: brand.purpleDark,
          background: alpha("#FFFFFF", 0.25),
          ...withBackdropFilter("var(--glass-blur)"),
          "&:hover": {
            borderColor: alpha(brand.orangeAccent, 0.5),
            background: alpha("#FFFFFF", 0.36),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: "1px solid var(--glass-border)",
          backgroundColor: "var(--glass-bg-thin)",
          transition,
          ...withBackdropFilter("var(--glass-blur)"),
          "&:hover": {
            backgroundColor: "var(--glass-bg)",
            transform: "translateY(-2px)",
          },
          "&.Mui-focusVisible": {
            boxShadow: focusRing,
          },
          "&:focus-visible": {
            boxShadow: focusRing,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderLeft: "1px solid var(--glass-border-strong)",
          background:
            "linear-gradient(180deg, rgba(47, 27, 80, 0.95) 0%, rgba(42, 19, 91, 0.9) 100%)",
          color: "#F8F4FF",
          ...withBackdropFilter("var(--glass-blur-strong)"),
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 22,
          border: "1px solid var(--glass-border-strong)",
          backgroundColor: "var(--glass-bg-strong)",
          ...withBackdropFilter("var(--glass-blur-strong)"),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          color: "#1A1330",
          border: "1px solid var(--glass-border)",
          backgroundColor: "var(--glass-bg-thin)",
          ...withBackdropFilter("var(--glass-blur)"),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(brand.purple, 0.18),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(brand.orangeAccent, 0.4),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(brand.purple, 0.62),
            borderWidth: "1px",
          },
          "&.Mui-focused": {
            boxShadow: focusRing,
          },
        },
        input: {
          padding: "12px 14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: alpha("#2F1B50", 0.75),
          "&.Mui-focused": {
            color: brand.purple,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: "1.2em",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid var(--glass-border)",
          backgroundColor: "var(--glass-bg)",
          boxShadow: "0 10px 26px rgba(36, 19, 72, 0.12)",
          ...withBackdropFilter("var(--glass-blur)"),
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: alpha("#2F1B50", 0.16),
        },
        head: {
          backgroundColor: alpha(brand.cream, 0.86),
          color: "#2F1B50",
          fontWeight: 700,
        },
      },
    },
  },
});

export default vedamTheme;
