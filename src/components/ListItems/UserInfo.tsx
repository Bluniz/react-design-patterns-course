import { PersonListItemProps } from "./types";

//! O componente pai deve decidir a estilização, não esse componente.
export const UserInfo = ({ person }: PersonListItemProps) => {
  return person ? (
    <>
      <h3>{person.name}</h3>
      <p>Age: {person.age} years</p>
      <p>Hair Color: {person.hairColor}</p>

      <h3>Hobbies:</h3>
      <ul>
        {person.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
