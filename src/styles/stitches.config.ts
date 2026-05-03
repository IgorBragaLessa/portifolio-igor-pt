import { createStitches } from "@stitches/react";

export const { styled, globalCss, theme } = createStitches({
  theme: {
    colors: {
      brand1: "#623CEA",
      brand2: "#311E75",

      grey0: "#0A0A0B",
      grey1: "#121214",
      grey2: "#868E96",
      grey3: "#E9ECEF",
      grey4: "#F8F9FA",
      grey5: "#FFFFFF",

      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

      whiteFixed: "#FFFFFF",
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
      section: "10rem",
      sectionMobile: "4rem",
    },

    fonts: {
      titles: '"IBM Plex Sans", sans-serif',
      texts: '"Inter", sans-serif',
    },

    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.5rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // mobile REAL (sem referência quebrada)
      title1Mobile: "1.75rem",
      title2Mobile: "1.5rem",
    },

    // 🔥 ESSENCIAL para corrigir desync visual
    lineHeights: {
      title1: "1.6",
      title2: "1.3",
      title3: "1.3",
      title4: "1.4",
      text1: "1.6",
      text2: "1.6",

      title1Mobile: "1.3",
      title2Mobile: "1.3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  },

  media: {
    mobile: "(max-width: 991px)",
    tablet: "(max-width: 1300px)",
  },

  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});