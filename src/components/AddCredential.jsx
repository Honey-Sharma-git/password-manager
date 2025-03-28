import { useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/constant";
//React icons:
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiServerFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addCredential } from "../redux/slice/addCredentialSlice";
import { alert } from "../utils/alert";

export const AddCredential = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState({
    domain: "",
    userName: "",
    password: "",
  });

  function handleChange(e) {
    setCredential((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function postData() {
    try {
      const response = await axios.post(
        `${baseURL}/v1/createDomain`,
        credential,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      if (response.status === 200 && response.data.statusCode === 201) {
        dispatch(addCredential());
        alert("SUCCESS", "Domain data saved!");
      }
    } catch (error) {
      console.log("Error on /createDomain API", error);
      alert("ERROR", "Opps! some error occurred.");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    postData();
  }
  function resetFields() {
    setCredential({
      userName: "",
      password: "",
    });
  }
  return (
    <form
      className="flex flex-row gap-5 p-5 justify-center flex-wrap"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="userName">Username:</label>
        <div className="relative">
          <div className="absolute text-[var(--theme-primary-color)] text-lg top-1/2 -translate-y-1/2 pl-2">
            <FaUserCircle />
          </div>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="JhonDoe"
            value={credential.userName}
            onChange={handleChange}
            className="border p-1  px-8 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="password">Password:</label>
        <div className="relative">
          <div className="absolute text-[var(--theme-primary-color)] text-lg top-1/2 -translate-y-1/2 pl-2">
            <RiLockPasswordFill />
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="At least 6 characters long"
            value={credential.password}
            onChange={handleChange}
            className="border p-1  px-8 rounded-sm "
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="domain">Domain:</label>
        <div className="relative">
          <div className="absolute text-[var(--theme-primary-color)] text-lg top-1/2 -translate-y-1/2 pl-2">
            <RiServerFill />
          </div>

          <input
            type="text"
            name="domain"
            id="domain"
            placeholder="https://www.example.com"
            value={credential.userPassword}
            onChange={handleChange}
            className="border p-1  px-8 rounded-sm "
          />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col items-start gap-2 justify-end">
          <button
            type="submit"
            className="bg-[var(--theme-primary-color)] drop-shadow-lg text-white p-1 px-10 rounded-sm cursor-pointer hover:bg-[var(--theme-primary-hover-color)]"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col items-start gap-2 justify-end">
          <button
            onClick={() => {
              resetFields();
            }}
            type="reset"
            className="bg-[var(--theme-secondary-color)] drop-shadow-lg text-white p-1 px-10 rounded-sm cursor-pointer hover:bg-[var(--theme-secondary-hover-color)]"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};
