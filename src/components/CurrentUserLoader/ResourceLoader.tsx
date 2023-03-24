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

interface ResourceLoaderProps {
  children: ReactNode;
  resourceUrl: string;
  resourceName: string;
}

//! A ideia é ter um componente genérico para o carregamento de dados!

export const ResourceLoader = ({
  children,
  resourceUrl,
  resourceName,
}: ResourceLoaderProps) => {
  const [resource, setResource] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<any>, {
            [resourceName]: resource,
          });
        }
      })}
    </>
  );
};
