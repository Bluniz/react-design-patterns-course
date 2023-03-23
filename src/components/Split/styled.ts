import styled, { css } from "styled-components";
import { PaneProps, ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>((props) => {
  const {
    direction,
    gap,
    wrap,
    width,
    height,
    maxHeight,
    maxWidth,
    alignItems,
    justifyContent,
  } = props;

  return css`
    display: flex;
    flex-direction: ${direction};
    gap: ${gap}px;

    border: 1px solid blue;

    width: ${width ? `${width}px` : "100%"};
    height: ${height ? `${height}px` : "100%"};

    ${gap &&
    css`
      flex-wrap: ${wrap};
    `}

    ${maxHeight &&
    css`
      max-height: ${maxHeight}px;
    `}

    ${maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}

    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
    
    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  `;
});
export const Pane = styled.div<PaneProps>`
  flex: ${({ weight }) => weight};

  border: 1px solid red;
`;
