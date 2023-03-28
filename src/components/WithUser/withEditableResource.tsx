import { useState, useEffect, ComponentType } from "react";
import axios from "axios";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (
  Component: ComponentType,
  resourcePath: string,
  resourceName: string
) => {
  return (props: any) => {
    const [originalData, setOriginalData] = useState<any | null>(null);
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes: any) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, {
        [resourceName]: data,
      });

      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
