import { createStitches } from "@stitches/react";

export const { styled, globalCss, theme } = createStitches({
  theme: {
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

    fonts: {
      text: "Inter, sans-serif",
      title: "IBM Plex Sans, sans-serif",
    },

    radii: {
      1: "0.5rem",
    },
  },

  media: {
    mobile: "(max-width: 991px)",
    tablet: "(max-width: 1300px)",
  },
});