import { globalCss, styled } from "@stitches/react";
import { createTheme } from "@stitches/react";

/* =========================
   THEME (Stitches)
========================= */
export const theme = createTheme({
  colors: {
    brand1: "#623CEA",
    brand2: "#311E75",

    grey1: "#121214",
    grey2: "#868E96",
    grey3: "#E9ECEF",
    grey4: "#F8F9FA",
    grey5: "#F8F9FA",

    whiteFixed: "#ffffff",
  },

  space: {
    1: "0.5rem",
    2: "1rem",
    3: "2rem",
    4: "3rem",
    5: "4rem",
  },

  sizes: {
    container: "75rem",
    containerTablet: "40rem",
  },

  radii: {
    1: "0.5rem",
    2: "0.25rem",
  },

  fonts: {
    text: "Inter, sans-serif",
    title: "IBM Plex Sans, sans-serif",
  },
});

/* =========================
   GLOBAL CSS
========================= */
export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$text",
  },

  body: {
    backgroundColor: "$grey1",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

/* =========================
   COMPONENTS BASE
========================= */
export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  width: "100%",
});