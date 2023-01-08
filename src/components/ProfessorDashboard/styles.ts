import { styled } from "../../configs/stitches.config";

export const Container = styled("div", {
  padding: "$md $xxl",

  table: {
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    fontSize: "16px",
  },

  td: {
    background: "$secondary",
    fontFamily: "$primary",
    fontWeight: "400",
    fontSize: "16px",
    padding: "13px 16px",
  },

  th: {
    background: "$terciary",
    fontFamily: "$primary",
    padding: "13px 16px",
    fontWeight: "500",
    fontSize: "16px",
  },

  "th:first-child": { borderRadius: "6px 0 0 0" },

  "th:last-child": { borderRadius: "0 6px 0 0" },

  ".aproved": {
    background: "$success",
  },
  ".failed": {
    background: "$warning",
    color: "$secondary",
  },
});

export const Title = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$xxs",

  "> h1": {
    margin: "0",
    fontSize: "22px",
    color: "$text_secondary",
  },

  ".input-line": {
    position: "relative",
    width: "320px",

    "> img": {
      position: "absolute",
      top: "25%",
      right: 10,
      zIndex: 10,
    },
  },
});

export const Input = styled("input", {
  width: "100%",
  height: "40px",
  border: "1px solid #D1D5DB",
  borderRadius: "4px",
  padding: "$nano $xxxs",
  fontSize: "14px",
  color: "$text-terciary",
  outline: "none",
});

export const SituationBox = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "113px",
  height: "32px",
  padding: "6px 24px",
  borderRadius: "$pill",
});

export const DateContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  "> p": {
    margin: "0",
  },

  "> span": {
    fontSize: "14px",
    color: "$text_terciary",
  },
});
