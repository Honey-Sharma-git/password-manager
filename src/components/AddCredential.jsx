import { useDispatch } from "react-redux";
import { addCredential } from "../redux/slice/addCredentialSlice";
import { useState } from "react";

export const AddCredential = () => {
  const [credential, setCredential] = useState({
    userEmail: "",
    userPassword: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setCredential((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCredential(credential));
  }
  return (
    <form
      className="flex flex-row gap-5 p-5 justify-center "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          value={credential.userEmail}
          onChange={handleChange}
          className="border p-1 px-2 rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="userPassword">Password:</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          value={credential.userPassword}
          onChange={handleChange}
          className="border p-1 px-2 rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start gap-2 justify-end">
        <button
          type="submit"
          className="bg-[#6c63ff] text-white p-1 px-10 rounded-sm cursor-pointer hover:bg-[#4c45bb]"
        >
          Save
        </button>
      </div>
    </form>
  );
};
