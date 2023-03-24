import { ProductInfoProps } from "./types";

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, description, price, rate } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description: </h3>
      <p>{description}</p>
      <p>Average Rating: {rate}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
