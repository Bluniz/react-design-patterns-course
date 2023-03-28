import { ComponentType } from "react";

export const parttiallyApply = (
  Component: ComponentType,
  partialProps: any
) => {
  return (props: any) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }: any) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "8px",
        background: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton2 = parttiallyApply(Button, { color: "red" });
export const BigSuccessButton2 = parttiallyApply(Button, {
  color: "green",
  size: "large",
});
