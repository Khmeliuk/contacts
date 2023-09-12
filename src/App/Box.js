import {
  space,
  layout,
  color,
  flexbox,
  border,
  background,
} from "styled-system";
import styled from "@emotion/styled";

export const Box = styled("div")(
  {
    boxSizing: "border-box",
  },
  space,
  layout,
  color,
  flexbox,
  border,
  background
);
