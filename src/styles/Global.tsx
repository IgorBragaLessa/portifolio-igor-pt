import { ReactNode } from "react";
import { styled, globalCss, theme } from "@/styles/stitches.config";

interface GlobalStyleProps {
  children: ReactNode;
}

/* =======================
   GLOBAL STYLES
======================= */
export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$texts",
  },

  html: {
    scrollBehavior: "smooth",
  },

  body: {
    backgroundColor: "$grey0",
    color: "$grey4",
  },

  a: {
    textDecoration: "none",
  },
});

/* =======================
   LAYOUT COMPONENTS
======================= */

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

/* =======================
   APP WRAPPER
======================= */
const AppWrapper = styled("div", {
  minHeight: "100vh",
});

/* =======================
   PROVIDER VISUAL (SEM GLOBAL THEME COMPONENT)
======================= */
export const GlobalStyle = ({ children }: GlobalStyleProps) => {
  globalStyles();

  return (
    <AppWrapper className={theme}>
      {children}
    </AppWrapper>
  );
};