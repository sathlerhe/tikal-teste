import { styled } from "../../configs/stitches.config";

export const Container = styled("div", {});

export const LoginContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$xs",

  "> h2": {
    fontSize: "$header_2",
    fontWeight: "$light",
  },

  ">div": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    gap: "$xxs",
  },

  ".login__button": {
    alignSelf: "center",
  },
});

export const InputContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$nano",

  ">span": {
    fontSize: "$header_6",
    fontWeight: "$light",
  },
});

export const Input = styled("input", {
  width: "100%",
  height: "45px",
  borderRadius: "$xs",
  border: "1px solid $text_terciary",
  padding: "$nano",
  outline: "none",
  fontSize: "$body_2",
});
