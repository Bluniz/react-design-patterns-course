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

interface CurrentUserLoadProps {
  children: ReactNode;
}

export const CurrentUserLoader = ({ children }: CurrentUserLoadProps) => {
  const [user, setUser] = useState<PersonProps>();

  useEffect(() => {
    (async () => {
      const response = await axios.get<PersonProps>("/current-user");
      setUser(response.data);
    })();
  }, []);

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
