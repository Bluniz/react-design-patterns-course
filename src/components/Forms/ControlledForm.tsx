import { useState, ChangeEvent } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [nameInputError, setNameInputError] = useState("");
  const [age, setAge] = useState<number>();
  const [hairColor, setHairColor] = useState("");

  //? Forma apresentada no curso
  //! Não concordo, uso de useEffect desnecessário
  // useEffect(() => {
  //   if (name.length < 2) {
  //     console.log("Name must be two or more characters");
  //   }
  // }, [name]);

  //! Melhor!
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 2)
      setNameInputError("Name must be two or more characters");
    else setNameInputError("");

    setName(event.target.value);
  };

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChangeName}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
