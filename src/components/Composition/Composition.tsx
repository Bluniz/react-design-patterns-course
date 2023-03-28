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

export const DangerButton = (props: any) => {
  return <Button {...props} color="red" />;
};

export const BigSuccessButton = (props: any) => {
  return <Button {...props} size="large" color="green" />;
};
