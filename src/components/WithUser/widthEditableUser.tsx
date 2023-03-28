import { useState, useEffect, ComponentType } from "react";
import axios from "axios";
import { PersonProps } from "../ListItems/types";

export const withEditableUser = (Component: ComponentType, userId: string) => {
  return (props: any) => {
    const [originalUser, setOriginalUser] = useState<PersonProps | null>(null);
    const [user, setUser] = useState<PersonProps | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (changes: any) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, {
        user,
      });

      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        person={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
