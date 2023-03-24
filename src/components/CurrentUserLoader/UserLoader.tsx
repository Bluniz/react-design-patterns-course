import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { PersonListItemProps, PersonProps } from "../ListItems/types";

interface UserLoaderProps {
  children: ReactNode;
  userId: string;
}

export const UserLoader = ({ children, userId }: UserLoaderProps) => {
  const [user, setUser] = useState<PersonProps>();

  useEffect(() => {
    (async () => {
      const response = await axios.get<PersonProps>(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<PersonListItemProps>, {
            person: user,
          });
        }
      })}
    </>
  );
};
