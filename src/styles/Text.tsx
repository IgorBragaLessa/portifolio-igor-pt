import { styled } from "@/styles/stitches.config";

const headingsDefaultConfig = {
  fontFamily: "$titles",
};

const bodyDefaultConfig = {
  fontFamily: "$texts",
};

export const Text = styled("p", {
  color: "$grey1",
  fontSize: "$text1",
  fontWeight: 400,

  variants: {
    type: {
      heading1: {
        fontSize: "$title1",
        lineHeight: "$lineHeights$title1",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },

      heading2: {
        fontSize: "$title2",
        lineHeight: "$lineHeights$title2",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },

      heading3: {
        fontSize: "$title3",
        lineHeight: "$lineHeights$title3",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },

      heading4: {
        fontSize: "$title4",
        lineHeight: "$lineHeights$title4",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },

      body1: {
        fontSize: "$text1",
        lineHeight: "$lineHeights$text1",
        ...bodyDefaultConfig,
      },

      body2: {
        fontSize: "$text2",
        lineHeight: "$lineHeights$text2",
        ...bodyDefaultConfig,
      },
    },

    color: {
      grey0: { color: "$grey0" },
      grey1: { color: "$grey1" },
      grey2: { color: "$grey2" },
      grey3: { color: "$grey3" },
      grey4: { color: "$grey4" },
      grey5: { color: "$grey5" },

      brand1: { color: "$brand1" },
      brand2: { color: "$brand2" },
    },
  },

  defaultVariants: {
    color: "grey1",
  },
});