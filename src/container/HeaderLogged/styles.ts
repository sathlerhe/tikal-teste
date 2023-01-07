import { styled } from "../../configs/stitches.config";

export const Container = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$xs $md",
  background: "$secondary",
});

export const NavContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$lg",
});

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$md",

  "> a": {
    margin: 0,
    color: "$text_primary",
    transition: "0.4s ease",

    "&:hover": {
      fontWeight: "700",
    },
  },
});
