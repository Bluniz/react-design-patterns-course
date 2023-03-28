import { PersonProps } from "./types";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useUser } from "../../hooks/useUser";
import { useResource } from "../../hooks/useResource";
import { useDataSource } from "../../hooks/useDataSource";
import axios from "axios";
interface UserInfoProps {
  userId: string;
}

const serverResource = (resourceUrl: string) => async () => {
  const response = await axios.get(resourceUrl);
  return response;
};

//! O componente pai deve decidir a estilização, não esse componente.
export const UserInfo = ({ userId }: UserInfoProps) => {
  //const { currentUser: person } = useCurrentUser<PersonProps>(userId);
  //const { user: person } = useUser<PersonProps>(userId);
  // const { resource: person } = useResource<PersonProps>({
  //   resourcePath: `/users/${userId}`,
  // });

  const { resource: person } = useDataSource<PersonProps>({
    getResource: serverResource(`/users/${userId}`),
  });

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
