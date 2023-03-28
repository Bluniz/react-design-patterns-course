import { useState, useEffect, ComponentType } from "react";
import axios from "axios";

export const withUser = (Component: ComponentType, userId: string) => {
  return (props: any) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} person={user} />;
  };
};
