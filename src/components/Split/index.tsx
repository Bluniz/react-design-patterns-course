import { Children, PropsWithChildren } from "react";
import { Container, Pane } from "./styled";
import { SplitProps } from "./types";

//! My component
export const Split = ({
  children,
  itemsWeight,
  direction = "row",
  gap = 0,
  ...rest
}: PropsWithChildren<SplitProps>) => {
  const childrenArray = Children.toArray(children);

  return (
    <Container direction={direction} gap={gap} {...rest}>
      {childrenArray.map((child, index) => {
        const weight = Array.isArray(itemsWeight)
          ? itemsWeight?.[index]
          : itemsWeight;

        return (
          <Pane weight={weight || 1} key={index}>
            {child}
          </Pane>
        );
      })}
    </Container>
  );
};
