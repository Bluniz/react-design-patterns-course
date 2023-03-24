import { ProductInfoProps } from "./types";

export const SmallProductListItem = ({ product }: ProductInfoProps) => {
  const { name, price } = product || {};

  return product ? (
    <h3>
      {name} - {price}
    </h3>
  ) : (
    <p>Loading...</p>
  );
};
