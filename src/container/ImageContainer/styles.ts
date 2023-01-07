import { styled } from "../../configs/stitches.config";

export const Container = styled("div", {
  display: "flex",
});

export const ImgContainer = styled("div", {
  width: "50vw",
  height: "calc(100vh - 104px)",
  filter: "blur(5px)",
});

export const ChildContainer = styled("div", {
  width: "50vw",
  display: "flex",
  alignItems: "center",
  justifyContent: 'center',

  padding: "0 $huge",
});
