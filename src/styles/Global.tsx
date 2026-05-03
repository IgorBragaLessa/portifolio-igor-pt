import { createTheme, globalCss, styled } from "@stitches/react";

/* ---------------- GLOBAL CSS ---------------- */

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  },

  html: {
    scrollBehavior: "smooth",
  },

  a: {
    textDecoration: "none",
  },
});

/* ---------------- STYLED COMPONENTS ---------------- */

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

/* ---------------- COLORS (compatibilidade com seu projeto) ---------------- */

export const colors = {
  brand1: { color: "$brand1" },
  brand2: { color: "$brand2" },
  brand3: { color: "$brand3" },
  brand5: { color: "$brand5" },
  brand7: { color: "$brand5" },

  grey1: { color: "$grey1" },
  grey2: { color: "$grey2" },
  grey3: { color: "$grey3" },
  grey4: { color: "$grey4" },
  grey5: { color: "$grey5" },
  grey6: { color: "$grey6" },
};

/* ---------------- THEME ---------------- */

export const theme = createTheme({
  colors: {
    brand1: "#623CEA",
    brand2: "#311E75",

    grey0: "#0A0A0B",
    grey1: "#121214",
    grey2: "#868E96",
    grey3: "#E9ECEF",
    grey4: "#F8F9FA",
    grey5: "#F8F9FA",

    socialInstagram: "#CF50AC",
    socialFacebook: "#506CCF",
    socialLinkedin: "#0E76A8",

    whiteFixed: "#ffffff",
  },

  sizes: {
    container: "75rem",
    containerTablet: "40rem",
  },

  space: {
    1: "0.5rem",
    2: "1rem",
    3: "2rem",
    4: "3rem",
    5: "4rem",
  },

  radii: {
    1: "0.5rem",
    2: "0.25rem",
  },
});