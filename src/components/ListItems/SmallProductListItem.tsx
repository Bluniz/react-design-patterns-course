import { ProductListItemProps } from "./types";

export const SmallProductListItem = ({ product }: ProductListItemProps) => {
  const { name, price } = product;

  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
