import { useEffect, useState } from "react";

interface UseResourceProps {
  getResource: () => any;
}

export const useDataSource = <T>({ getResource }: UseResourceProps) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = getResource();
      setResource(response.data);
    })();
  }, [getResource]);

  return {
    resource,
  };
};
