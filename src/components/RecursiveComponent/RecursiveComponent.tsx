const isObject = (value: any) => typeof value === "object" && value !== null;

export const RecursiveComponent = ({ data }: any) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
