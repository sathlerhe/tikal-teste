import { Link } from "react-router-dom";

import { styled } from "../../configs/stitches.config";

export const Container = styled("div", {});

export const LinksContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: '$xs',
});

export const LinkComponent = styled(Link, {
  fontSize: '$header_3',
  textDecoration: 'underline'
});
