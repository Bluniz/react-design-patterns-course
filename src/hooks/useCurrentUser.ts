import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrentUser = <T>() => {
  const [currentUser, setCurrentUser] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setCurrentUser(response.data);
    })();
  }, []);

  return {
    currentUser,
  };
};
