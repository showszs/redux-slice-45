import { useSelector, useDispatch } from "react-redux";
import { selectUsername } from "../redux/slices/userSlice";
import { FormEvent, useState, ChangeEvent } from "react";
import { setUsername } from "../redux/slices/userSlice";

const User = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const handleNameSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setUsername(newName));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>User: {username}</h2>
      <form onSubmit={handleNameSubmit}>
        <input type="text" value={newName} onChange={handleNameChange} />
        <button type="submit">Change Name</button>
      </form>
    </div>
  );
};

export default User;
