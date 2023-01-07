import { styled } from "../../configs/stitches.config";

export const Container = styled("button", {
  padding: "0 $xxxs",
  height: "48px",
  border: "none",
  borderRadius: "$xs",
  background: "$button_bg",
  color: "$secondary",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.4s ease",
  outline: "none",

  "&:hover": {
    opacity: 0.8,
  },
});
