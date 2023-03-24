import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface DataSourceProps {
  children: ReactNode;
  getDataFunction: () => Promise<any> | any;
  resourceName: string;
}

//! A ideia é ter um componente genérico para o carregamento de dados!

export const DataSource = ({
  children,
  getDataFunction,
  resourceName,
}: DataSourceProps) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const response = await getDataFunction();
      setData(response);
    })();
  }, [getDataFunction]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<any>, {
            [resourceName]: data,
          });
        }
      })}
    </>
  );
};
