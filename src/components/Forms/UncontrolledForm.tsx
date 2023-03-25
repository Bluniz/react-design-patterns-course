import { createRef, FormEvent } from "react";

export const UncontrolledForm = () => {
  const nameInput = createRef<HTMLInputElement>();
  const ageInput = createRef<HTMLInputElement>();
  const hairColorInput = createRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("event", event);

    console.log(nameInput?.current?.value);
    console.log(ageInput?.current?.value);
    console.log(hairColorInput?.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
