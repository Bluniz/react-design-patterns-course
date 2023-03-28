import { ComponentType } from "react";

export const printProps = (Component: ComponentType) => {
  return (props: any) => {
    console.log(props);

    return <Component {...props} />;
  };
};
