import { ElementType } from "react";

interface RegularListProps {
  items: any[];
  resourceName: string;
  itemComponent: ElementType;
}

//! Passa o componente a ser renderizado por items
//! Passa a lista de items
//! Passa a "resourceName" que nada mais é a propriedade que deverá ser passada para o componente recebido para renderizar o item

export const RegularList = ({
  itemComponent: ItemComponent,
  items,
  resourceName,
}: RegularListProps) => {
  return (
    <>
      {items.map((item, index) => {
        return <ItemComponent key={index} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};
