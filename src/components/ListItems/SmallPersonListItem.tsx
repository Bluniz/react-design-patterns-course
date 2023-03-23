import { PersonListItemProps } from "./types";

//! O componente pai deve decidir a estilização, não esse componente.
export const SmallPersonListItem = ({ person }: PersonListItemProps) => {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age}years
    </p>
  );
};
