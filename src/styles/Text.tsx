import { styled } from "@/styles/stitches.config";

const headingsDefault = {
  fontFamily: "$title",
  fontWeight: 700,
};

const bodyDefault = {
  fontFamily: "$text",
};

export const Text = styled("p", {
  color: "$grey1",
  fontSize: "$text1",
  fontWeight: 400,

  variants: {
    type: {
      heading1: {
        fontSize: "$title1",
        lineHeight: "1.2",
        ...headingsDefault,

        "@mobile": {
          fontSize: "$title1Mobile",
        },
      },

      heading2: {
        fontSize: "$title2",
        lineHeight: "1.2",
        ...headingsDefault,
      },

      heading3: {
        fontSize: "$title3",
        lineHeight: "1.2",
        ...headingsDefault,
      },

      heading4: {
        fontSize: "$title4",
        lineHeight: "1.2",
        ...headingsDefault,
      },

      body1: {
        fontSize: "$text1",
        lineHeight: "1.6",
        ...bodyDefault,
      },

      body2: {
        fontSize: "$text2",
        lineHeight: "1.6",
        ...bodyDefault,
      },
    },

    color: {
      brand1: { color: "$brand1" },
      brand2: { color: "$brand2" },
      grey1: { color: "$grey1" },
      grey2: { color: "$grey2" },
      grey3: { color: "$grey3" },
      grey4: { color: "$grey4" },
      grey5: { color: "$grey5" },
    },
  },
});