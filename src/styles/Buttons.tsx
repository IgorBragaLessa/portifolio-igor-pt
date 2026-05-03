import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  height: "3rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey5",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "$text1",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  whiteSpace: "nowrap",
  transition: "0.2s ease",

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        fontWeight: "500",
        padding: "0",
        height: "auto",

        "&:hover": {
          opacity: 0.7,
        },
      },

      primary: {
        background: "$brand2",
        borderColor: "$brand2",
        color: "$grey5",

        "&:hover": {
          backgroundColor: "$brand1",
          borderColor: "$brand1",
        },

        "@mobile": {
          height: "2.5rem",
          borderRadius: "0.5rem",
        },
      },

      outline: {
        backgroundColor: "transparent",
        borderColor: "$grey4",
        color: "$grey5",

        "&:hover": {
          backgroundColor: "$grey4",
          color: "$grey1",
        },
      },

      icon: {
        backgroundColor: "$grey5",
        borderColor: "$grey5",
        padding: "0 1rem",

        "& svg": {
          fill: "$grey2",
        },

        "&:hover": {
          opacity: 0.8,
        },
      },

      circle: {
        backgroundColor: "gray5",
        borderColor: "$grey5",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        minWidth: "2.75rem",
        minHeight: "2.75rem",

        "&:hover": {
          backgroundColor: "$grey2",
        },

        "@mobile": {
          width: "5rem",
          height: "2.7rem",
          borderRadius: "0.5rem",
        },
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
    color: "grey0",
  },
});