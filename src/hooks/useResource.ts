import { useEffect, useState } from "react";
import axios from "axios";

interface UseResourceProps {
  resourcePath: string;
}

export const useResource = <T>({ resourcePath }: UseResourceProps) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourcePath);
      setResource(response.data);
    })();
  }, [resourcePath]);

  return {
    resource,
  };
};
