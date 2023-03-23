import { ProductListItemProps } from "./types";

export const LargeProductListItem = ({ product }: ProductListItemProps) => {
  const { name, description, price, rate } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description: </h3>
      <p>{description}</p>
      <p>Average Rating: {rate}</p>
    </>
  );
};
