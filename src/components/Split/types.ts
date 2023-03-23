export interface PaneProps {
  weight: number;
}

export interface ContainerProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  width?: number;
  maxWidth?: number;
  height?: number;
  maxHeight?: number;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
    | "center"
    | "space-aroung"
    | "space-evenly"
    | "space-between"
    | "flex-start"
    | "flex-end";
}

export interface SplitProps extends ContainerProps {
  itemsWeight?: number[] | number;
}
