import { styled } from "../../configs/stitches.config";

export const Container = styled("div", {
  height: "100vh",
  padding: "$md 0",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
});

export const ProfileBox = styled("div", {
  background: "$terciary",
  width: "380px",
  height: "350px",
  borderRadius: "$xs",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  padding: "$sm",
  gap: "$xs",

  ".button__profile": {
    width: "100%",
  },

  "> p": {
    margin: "0",
  },
});
