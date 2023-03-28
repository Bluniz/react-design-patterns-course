import { withEditableUser } from "../WithUser/widthEditableUser";
import { withEditableResource } from "../WithUser/withEditableResource";

export const UserInfoForm = withEditableResource(
  (props: any) => {
    const { name, age, hairColor } = props.person || {};

    return props.person ? (
      <>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => props.onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          value={age}
          onChange={(e) => props.onChangeUser({ age: Number(e.target.value) })}
        />
        <label>HairColor:</label>
        <input
          value={hairColor}
          onChange={(e) => props.onChangeUser({ hairColor: e.target.value })}
        />

        <button onClick={props.onResetUser}>Reset</button>
        <button onClick={props.onSaveUser}>SaveChanges</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "/users/123",
  "person"
);
