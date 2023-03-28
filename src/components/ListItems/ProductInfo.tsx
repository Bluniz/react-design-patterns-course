import { ProductInfoProps, ProductProps } from "./types";
import { useResource } from "../../hooks/useResource";

interface ProductInfoProps2 {
  productId: string;
}

export const ProductInfo = ({ productId }: ProductInfoProps2) => {
  const { resource: product } = useResource<ProductProps>({
    resourcePath: `/products/${productId}`,
  });
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
