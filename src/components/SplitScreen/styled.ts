import styled from "styled-components";
import { PaneProps } from "./types";

export const Container = styled.div`
  display: flex;
`;

export const Pane = styled.div<PaneProps>`
  flex: ${({ weight }) => weight};
`;
