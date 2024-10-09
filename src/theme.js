import { createContext, useState, useMemo} from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens 
export const tokens = (mode) => ({
    ...(mode === "dark"
      ? {
          grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
          },
          primary: {
            100: "#cecece",
            200: "#9d9d9d",
            300: "#6d6b6c",
            400: "#3c3a3b",
            500: "#0b090a",
            600: "#090708",
            700: "#070506",
            800: "#040404",
            900: "#020202"       
          },
          greenAccent: {
            100: "#f1d1d1",
            200: "#e3a3a4",
            300: "#d67476",
            400: "#c84649",
            500: "#ba181b",
            600: "#951316",
            700: "#700e10",
            800: "#4a0a0b",
            900: "#250505"
          },
          redAccent: {
            100: "#f5f3f1",
            200: "#ebe8e3",
            300: "#e0dcd5",
            400: "#d6d1c7",
            500: "#ccc5b9",
            600: "#a39e94",
            700: "#7a766f",
            800: "#524f4a",
            900: "#292725"
          },
          blueAccent: {
            100: "#fbdfd4",
            200: "#f7bfa9",
            300: "#f39e7e",
            400: "#ef7e53",
            500: "#eb5e28",
            600: "#bc4b20",
            700: "#8d3818",
            800: "#5e2610",
            900: "#2f1308"
          },
        }
      : {
          grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
          },
          primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            //400: "#f2f0f0", 
            //400: "#9d9d9d",
            400: "#9d9d9d",
            500: "#141b2d",
            600: "#1F2A40",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
          },
          greenAccent: {
            100: "#250505",
            200: "#4a0a0b",
            300: "#700e10",
            400: "#951316",
            500: "#ba181b",
            600: "#c84649",
            700: "#d67476",
            800: "#e3a3a4",
            900: "#f1d1d1",
          },
          redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
          },
          blueAccent: {
            100: "#2f1308",
            200: "#5e2610",
            300: "#8d3818",
            400: "#bc4b20",
            500: "#eb5e28",
            600: "#ef7e53",
            700: "#f39e7e",
            800: "#f7bfa9",
            900: "#fbdfd4",
          },
        }),
  });

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };