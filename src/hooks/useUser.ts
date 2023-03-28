import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = <T>(userId: string) => {
  const [user, setUser] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return {
    user,
  };
};
